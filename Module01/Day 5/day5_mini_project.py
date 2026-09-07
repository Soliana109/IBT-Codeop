class BankAccount:

    # Createing account
    def __init__(self, account_number, owner, balance=0):
        self.account_number = account_number
        self.owner = owner
        self.__balance = balance  # Private balance

    # Get the account balance
    @property
    def balance(self):
        return self.__balance

    # Add money to the account
    def deposit(self, amount):
        if amount <= 0:
            print("Please enter a positive deposit amount.")
            return False

        self.__balance += amount
        print(f"Deposit: {amount:.2f} ETB")
        print(f"New balance: {self.__balance:.2f} ETB")
        return True

    # Take money out of the account
    def withdraw(self, amount):
        if amount <= 0:
            print("Please enter a positive withdrawal amount.")
            return False

        if amount > self.__balance:
            print("Not enough money in the account.")
            return False

        self.__balance -= amount
        print(f"Withdrawal: {amount:.2f} ETB")
        print(f"New balance: {self.__balance:.2f} ETB")
        return True

    # Display account details
    def info(self):
        return (
            f"Account: {self.account_number} | "
            f"Owner: {self.owner} | "
            f"Balance: {self.balance:.2f} ETB | "
            f"Type: {self.__class__.__name__}"
        )


# Savings account inherits from BankAccount
class SavingsAccount(BankAccount):

    def __init__(self, account_number, owner, balance=0, interest_rate=0.05):
        super().__init__(account_number, owner, balance)
        self.interest_rate = interest_rate

    # Add interest to the savings account
    def apply_interest(self):
        interest = self.balance * self.interest_rate
        self.deposit(interest)

        print(f"Interest added: {interest:.2f} ETB")


# Store all accounts in a dictionary
accounts = {}

# Starting account number
next_account_number = 1000


# Create a new account
def create_account():
    global next_account_number

    owner = input("Enter owner's name: ").strip()

    try:
        balance = float(input("Enter starting balance: "))

        if balance < 0:
            print("Balance cannot be negative.")
            return

    except ValueError:
        print("Please enter a valid amount.")
        return

    # Ask if the customer wants a savings account
    savings = input("Create a savings account? (y/n): ").strip().lower()

    account_number = str(next_account_number)
    next_account_number += 1

    if savings == "y":
        account = SavingsAccount(account_number, owner, balance)
    else:
        account = BankAccount(account_number, owner, balance)

    # Save the account in the dictionary
    accounts[account_number] = account

    print(f"Account created successfully!")
    print(f"Your account number is: {account_number}")


# Find an account
def find_account():
    number = input("Enter account number: ").strip()

    if number in accounts:
        return accounts[number]

    print("Account not found.")
    return None


# Deposit money
def make_deposit():
    account = find_account()

    if account is None:
        return

    try:
        amount = float(input("Enter amount to deposit: "))
        account.deposit(amount)

    except ValueError:
        print("Invalid amount.")


# Withdraw money
def make_withdrawal():
    account = find_account()

    if account is None:
        return

    try:
        amount = float(input("Enter amount to withdraw: "))
        account.withdraw(amount)

    except ValueError:
        print("Invalid amount.")


# Check the balance
def show_balance():
    account = find_account()

    if account is None:
        return

    print(f"Current balance: {account.balance:.2f} ETB")


# Show account information
def show_info():
    account = find_account()

    if account is None:
        return

    print(account.info())


# Display the menu
def menu():
    print("\n===== ADDIS BANK =====")
    print("1. Create Account")
    print("2. Deposit")
    print("3. Withdraw")
    print("4. Check Balance")
    print("5. Account Information")
    print("6. Exit")


# Run the banking program
def run_bank():
    while True:

        menu()

        choice = input("Enter your choice: ").strip()

        if choice == "1":
            create_account()

        elif choice == "2":
            make_deposit()

        elif choice == "3":
            make_withdrawal()

        elif choice == "4":
            show_balance()

        elif choice == "5":
            show_info()

        elif choice == "6":
            print("Thank you for using Addis Bank!")
            break

        else:
            print("Invalid choice. Please select 1-6.")


# Start the program
if __name__ == "__main__":
    run_bank()