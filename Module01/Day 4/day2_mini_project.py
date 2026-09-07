# Creating class
class BankAccount:

    # Constructor
    def __init__(self, account_number, owner, balance=0):
        self.account_number = account_number
        self.owner = owner
        self.__balance = balance  # Private balance

    # Getter
    @property
    def balance(self):
        return self.__balance
    def deposit(self, amount):
        if amount <= 0:
            print("Amount must be greater than 0.")
        else:
            self.__balance += amount
            print("Deposit successful.")
    def withdraw(self, amount):
        if amount <= 0:
            print("Amount must be greater than 0.")
        elif amount > self.__balance:
            print("Insufficient funds.")
        else:
            self.__balance -= amount
            print("Withdrawal successful.")

    # Account information
    def account_info(self):
        print("Account Number:", self.account_number)
        print("Owner:", self.owner)
        print("Balance:", self.balance, "ETB")


# Dictionary
accounts = {}
while True:

    print("\n===== SOLI'S BANK =====")
    print("1. Create new account")
    print("2. Deposit")
    print("3. Withdraw")
    print("4. Check balance")
    print("5. View account info")
    print("6. Exit")

    choice = input("Choose an option: ")

    # 1. Create account
    if choice == "1":

        account_number = input("Enter account number: ")

        # Checking if account already exists
        if account_number in accounts:
            print("Account already exists.")
        else:
            owner = input("Enter account owner's name: ")

            # Creating account
            account = BankAccount(account_number, owner)

            # Storing account in dictionary
            accounts[account_number] = account

            print("Account created successfully.")

    # 2. Deposit
    elif choice == "2":

        account_number = input("Enter account number: ")

        if account_number in accounts:
            try:
                amount = float(input("Enter deposit amount: "))
                accounts[account_number].deposit(amount)

            except ValueError:
                print("Please enter a valid number.")
        else:
            print("Account not found.")

    # 3. Withdraw
    elif choice == "3":

        account_number = input("Enter account number: ")

        if account_number in accounts:
            try:
                amount = float(input("Enter withdrawal amount: "))
                accounts[account_number].withdraw(amount)

            except ValueError:
                print("Please enter a valid number.")
        else:
            print("Account not found.")

    # 4. Check balance
    elif choice == "4":

        account_number = input("Enter account number: ")

        if account_number in accounts:
            print("Balance:", accounts[account_number].balance, "ETB")
        else:
            print("Account not found.")

    # 5. View account information
    elif choice == "5":

        account_number = input("Enter account number: ")

        if account_number in accounts:
            accounts[account_number].account_info()
        else:
            print("Account not found.")

    # 6. Exit
    elif choice == "6":
        print("Thank you for using Addis Bank.")
        break

    # Invalid menu choice
    else:
        print("Invalid choice. Please select 1-6.")