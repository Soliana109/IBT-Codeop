#Question 1
# Account only handles account-related operations
class Account:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            return True
        print("Insufficient funds.")
        return False
# Handles saving account information
class AccountRepository:
    def save(self, account):
        print(f"Saving {account.owner}'s account.")
# Handles notifications
class Notifier:
    def send(self, message):
        print("Notification:", message)
# Dependency Injection
repository = AccountRepository()
notifier = Notifier()
account = Account("Soliana", 5000)
account.deposit(1000)
if account.withdraw(2000):
    repository.save(account)
    notifier.send("Withdrawal successful.")

#Question 2
# Base Account class
class Account:
    def __init__(self, owner, number, balance):
        self.owner = owner
        self.number = number
        self.balance = balance


# Savings account
class SavingsAccount(Account):
    pass


# Current account
class CurrentAccount(Account):
    pass


# Fixed deposit account
class FixedDepositAccount(Account):
    pass


# Factory class
class AccountFactory:

    @staticmethod
    def create(kind, owner, number, balance):

        if kind == "savings":
            return SavingsAccount(owner, number, balance)

        elif kind == "current":
            return CurrentAccount(owner, number, balance)

        elif kind == "fixed":
            return FixedDepositAccount(owner, number, balance)

        else:
            print("Unknown account type.")
            return None


# Create accounts using the factory
account1 = AccountFactory.create(
    "savings", "Soliana", "1001", 5000
)

account2 = AccountFactory.create(
    "current", "Sara", "1002", 3000
)

print(account1.owner)
print(account2.owner)

#Question 3
# Observer 1
class SMSAlert:

    def update(self, account, amount):
        print(f"SMS: Large withdrawal of {amount} ETB.")


# Observer 2
class AuditLog:

    def update(self, account, amount):
        print(f"Audit: {account.owner} withdrew {amount} ETB.")


# Account class
class Account:

    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance
        self.observers = []

    # Add an observer
    def add_observer(self, observer):
        self.observers.append(observer)

    # Withdraw money
    def withdraw(self, amount):

        if amount <= self.balance:
            self.balance -= amount

            # Notify observers for large withdrawals
            if amount > 3000:
                for observer in self.observers:
                    observer.update(self, amount)

        else:
            print("Insufficient funds.")


# Create account
account = Account("Soliana", 10000)

# Create observers
sms = SMSAlert()
audit = AuditLog()

# Add observers
account.add_observer(sms)
account.add_observer(audit)

# Large withdrawal
account.withdraw(4000)

#Question 4
# Small interface for accounts that earn interest
class InterestBearing:

    def calculate_interest(self):
        pass


# Normal account
class Account:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance


# SavingsAccount uses the interest interface
class SavingsAccount(Account, InterestBearing):

    def calculate_interest(self):
        return self.balance * 0.05


# CurrentAccount does NOT need interest
class CurrentAccount(Account):
    pass


# Test
savings = SavingsAccount("Soliana", 5000)

print("Interest:", savings.calculate_interest())