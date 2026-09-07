from abc import ABC, abstractmethod
# BANK CONFIGURATION - Singleton
class BankConfig:
    _instance = None
    def __new__(cls):
        # Create only one BankConfig object
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            # Bank settings
            cls._instance.interest_rate = 0.05
            cls._instance.overdraft_limit = 500
            cls._instance.transaction_limit = 3000
        return cls._instance
# NOTIFICATION
class Notifier(ABC):
    @abstractmethod
    def notify(self, message):
        pass
class ConsoleNotifier(Notifier):
    def notify(self, message):
        print("[Notification]", message)
# ACCOUNT STORAGE
class Repository(ABC):
    @abstractmethod
    def save(self, account):
        pass
class MemoryRepository(Repository):
    def save(self, account):
        print(
            f"[Saved] Account {account.account_number} | "
            f"Balance: {account.balance:.2f} ETB"
        )
# INTEREST INTERFACE
class InterestBearing(ABC):
    @abstractmethod
    def calculate_interest(self):
        pass
# OBSERVER CLASSES
class Observer(ABC):
    @abstractmethod
    def update(self, account, amount):
        pass
class SMSAlert(Observer):
    def update(self, account, amount):
        print(
            f"[SMS] Large withdrawal: {amount:.2f} ETB "
            f"from account {account.account_number}"
        )
class AuditLog(Observer):
    def update(self, account, amount):
        print(
            f"[Audit] Withdrawal of {amount:.2f} ETB "
            f"recorded for {account.owner}"
        )
# ACCOUNT - ABSTRACT PARENT CLASS
class Account(ABC):
    def __init__(
        self,
        account_number,
        owner,
        balance,
        repository,
        notifier
    ):
        self.account_number = account_number
        self.owner = owner
        self.balance = balance
        # Dependencies are provided from outside
        self.repository = repository
        self.notifier = notifier
        # List of observers
        self.observers = []
    # Add an observer
    def add_observer(self, observer):
        self.observers.append(observer)
    # Deposit money
    def deposit(self, amount):
        if amount <= 0:
            print("Deposit must be greater than zero.")
            return False
        self.balance += amount
        self.repository.save(self)
        self.notifier.notify(
            f"{self.owner} deposited {amount:.2f} ETB"
        )
        return True
    # Withdraw money
    def withdraw(self, amount):
        if amount <= 0:
            print("Withdrawal must be greater than zero.")
            return False
        if not self.can_withdraw(amount):
            print("Insufficient funds.")
            return False
        self.balance -= amount
        self.repository.save(self)
        self.notifier.notify(
            f"{self.owner} withdrew {amount:.2f} ETB"
        )
        # Check for a large transaction
        limit = BankConfig().transaction_limit
        if amount > limit:
            for observer in self.observers:
                observer.update(self, amount)
        return True
    # Normal account withdrawal rule
    def can_withdraw(self, amount):
        return amount <= self.balance
    # Display account information
    @abstractmethod
    def statement(self):
        pass
# SAVINGS ACCOUNT
class SavingsAccount(Account, InterestBearing):
    def __init__(
        self,
        account_number,
        owner,
        balance,
        repository,
        notifier,
        interest_rate=None
    ):
        super().__init__(
            account_number,
            owner,
            balance,
            repository,
            notifier
        )
        if interest_rate is None:
            self.interest_rate = BankConfig().interest_rate
        else:
            self.interest_rate = interest_rate
    # Calculate interest
    def calculate_interest(self):
        return self.balance * self.interest_rate
    # Add interest to balance
    def apply_interest(self):
        interest = self.calculate_interest()
        self.deposit(interest)
        print(f"Interest added: {interest:.2f} ETB")
    # Savings account information
    def statement(self):
        print(
            f"[Savings] Account: {self.account_number} | "
            f"Owner: {self.owner} | "
            f"Balance: {self.balance:.2f} ETB | "
            f"Interest: {self.interest_rate * 100:.0f}%"
        )
# CURRENT ACCOUNT
class CurrentAccount(Account):
    def __init__(
        self,
        account_number,
        owner,
        balance,
        repository,
        notifier,
        overdraft_limit=None
    ):

        super().__init__(
            account_number,
            owner,
            balance,
            repository,
            notifier
        )
        # Use default overdraft limit
        if overdraft_limit is None:
            self.overdraft_limit = BankConfig().overdraft_limit
        else:
            self.overdraft_limit = overdraft_limit
    # Allow the customer to use overdraft
    def can_withdraw(self, amount):
        return amount <= self.balance + self.overdraft_limit
    # Current account information
    def statement(self):
        print(
            f"[Current] Account: {self.account_number} | "
            f"Owner: {self.owner} | "
            f"Balance: {self.balance:.2f} ETB | "
            f"Overdraft: {self.overdraft_limit:.2f} ETB"
        )
# ACCOUNT FACTORY
class AccountFactory:
    @staticmethod
    def create(
        account_type,
        owner,
        account_number,
        balance,
        repository,
        notifier
    ):
        account_type = account_type.lower()
        if account_type == "savings":
            account = SavingsAccount(
                account_number,
                owner,
                balance,
                repository,
                notifier
            )
        elif account_type == "current":
            account = CurrentAccount(
                account_number,
                owner,
                balance,
                repository,
                notifier
            )
        else:
            raise ValueError("Invalid account type.")
        # Add observers automatically
        account.add_observer(SMSAlert())
        account.add_observer(AuditLog())
        return account
# BANK SYSTEM
repository = MemoryRepository()
notifier = ConsoleNotifier()
# Dictionary stores account objects
accounts = {}
# First account number
next_account_number = 5000
# CREATE ACCOUNT
def create_account(account_type):
    global next_account_number
    owner = input("Enter customer name: ").strip()
    try:
        balance = float(
            input("Enter starting balance: ")
        )
        if balance < 0:
            print("Balance cannot be negative.")
            return
    except ValueError:
        print("Please enter a valid amount.")
        return
    account_number = str(next_account_number)
    next_account_number += 1
    try:
        new_account = AccountFactory.create(
            account_type,
            owner,
            account_number,
            balance,
            repository,
            notifier
        )
    except ValueError as error:
        print(error)
        return
    accounts[account_number] = new_account
    print(
        f"{account_type.capitalize()} account created."
    )
    print(
        f"Account number: {account_number}"
    )
# FIND ACCOUNT
def find_account():
    number = input("Enter account number: ").strip()
    account = accounts.get(number)
    if account is None:
        print("Account does not exist.")
    return account
# DEPOSIT
def deposit_money():
    account = find_account()
    if account is None:
        return
    try:
        amount = float(
            input("Enter deposit amount: ")
        )
        account.deposit(amount)
    except ValueError:
       print("Invalid amount.")
# WITHDRAW
def withdraw_money():
    account = find_account()
    if account is None:
        return
    try:
        amount = float(
            input("Enter withdrawal amount: ")
        )
        account.withdraw(amount)
    except ValueError:
        print("Invalid amount.")
# SHOW ONE ACCOUNT
def show_statement():
    account = find_account()
    if account is not None:
        account.statement()
# APPLY INTEREST
def apply_interest():
    found = False
    for account in accounts.values():
        if isinstance(account, InterestBearing):
            account.apply_interest()
            found = True
    if not found:
        print("No savings accounts found.")
# SHOW ALL ACCOUNTS
def show_all_accounts():
    if not accounts:
        print("No accounts available.")
        return
    print("\n===== ALL ACCOUNTS =====")
    # Polymorphism:
    # Each account uses its own statement() method.
    for account in accounts.values():
        account.statement()
# MENU
def show_menu():
    print("\n===== ADDIS BANK =====")
    print("1. Create Savings Account")
    print("2. Create Current Account")
    print("3. Deposit")
    print("4. Withdraw")
    print("5. Show Statement")
    print("6. Apply Interest")
    print("7. Show All Accounts")
    print("8. Exit")
# RUN PROGRAM
def run_program():
    while True:
        show_menu()
        choice = input("Select an option: ").strip()
        if choice == "1":
            create_account("savings")
        elif choice == "2":
            create_account("current")
        elif choice == "3":
            deposit_money()
        elif choice == "4":
            withdraw_money()
        elif choice == "5":
            show_statement()
        elif choice == "6":
            apply_interest()
        elif choice == "7":
            show_all_accounts()
        elif choice == "8":
            print("Thank you for using Addis Bank!")
            break
        else:
            print("Invalid choice. Please select 1-8.")
# Start the program
if __name__ == "__main__":
    run_program()