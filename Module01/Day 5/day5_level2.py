#Question 4
# Creating class
class Account:

    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def statement(self):
        print("Owner:", self.owner)
        print("Balance:", self.balance)


# SavingsAccount inherits from Account
class SavingsAccount(Account):

    def __init__(self, owner, balance, interest_rate):
        super().__init__(owner, balance)
        self.interest_rate = interest_rate

    # Overriding statement()
    def statement(self):
        print("Owner:", self.owner)
        print("Balance:", self.balance)
        print("Interest rate:", self.interest_rate, "%")
# CurrentAccount inherits from Account
class CurrentAccount(Account):

    def __init__(self, owner, balance, overdraft_limit):
        super().__init__(owner, balance)
        self.overdraft_limit = overdraft_limit

    # Overriding statement()
    def statement(self):
        print("Owner:", self.owner)
        print("Balance:", self.balance)
        print("Overdraft limit:", self.overdraft_limit)
# Creating objects
account1 = Account("Soliana", 1000)
account2 = SavingsAccount("Abebe", 2000, 5)
account3 = CurrentAccount("Kebede", 1500, 1000)
# Call statement()
account1.statement()
print()
account2.statement()
print()
account3.statement()

#Question 5
# Creating class
class Account:

    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def statement(self):
        print("Account:", self.owner)
        print("Balance:", self.balance)


# SavingsAccount
class SavingsAccount(Account):

    def statement(self):
        print("Savings Account:", self.owner)
        print("Balance:", self.balance)


# CurrentAccount
class CurrentAccount(Account):

    def statement(self):
        print("Current Account:", self.owner)
        print("Balance:", self.balance)

# Create three different account objects
account1 = Account("Soliana", 1000)
account2 = SavingsAccount("Abebe", 2000)
account3 = CurrentAccount("Kebede", 3000)

accounts = [account1, account2, account3]

# Polymorphism:
for account in accounts:
    account.statement()
    # Deposit 100 into each account
    account.deposit(100)
    print("New balance:", account.balance)
    print()

#Question 6
#Importing abstract class tools
from abc import ABC, abstractmethod
class Account(ABC):
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
    # Method
    @abstractmethod
    def calculate_interest(self):
        pass

# SavingsAccount
class SavingsAccount(Account):

    def __init__(self, owner, balance, interest_rate):
        super().__init__(owner, balance)
        self.interest_rate = interest_rate
    # Implement the abstract method
    def calculate_interest(self):
        return self.balance * self.interest_rate / 100
# CurrentAccount
class CurrentAccount(Account):

    def calculate_interest(self):
        # Current accounts have no interest
        return 0
# Creating accounts
savings = SavingsAccount("Soliana", 1000, 5)
current = CurrentAccount("Sara", 2000)
# Calculating interest
print("Savings interest:", savings.calculate_interest())
print("Current interest:", current.calculate_interest())