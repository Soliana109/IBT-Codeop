#Question 7
# Import abstract class tools
from abc import ABC, abstractmethod
# Parent abstract class
class Account(ABC):

    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance

    # Getter 
    @property
    def balance(self):
        return self.__balance

    # Deposit and withdraw money
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print("Deposit successful.")
        else:
            print("Amount must be positive.")
    def withdraw(self, amount):
        if amount > 0 and amount <= self.__balance:
            self.__balance -= amount
            print("Withdrawal successful.")
        else:
            print("Withdrawal not allowed.")
    @abstractmethod
    def calculate_interest(self):
        pass

# SavingsAccount child class
class SavingsAccount(Account):

    def __init__(self, owner, balance, interest_rate):
        super().__init__(owner, balance)

        self.interest_rate = interest_rate
    # Calculating savings interest
    def calculate_interest(self):
        return self.balance * self.interest_rate / 100

# CurrentAccount child class
class CurrentAccount(Account):

    def __init__(self, owner, balance, overdraft_limit):
        super().__init__(owner, balance)
        self.overdraft_limit = overdraft_limit

    # Overriding withdraw to overdraft
    def withdraw(self, amount):

        if amount <= self.balance + self.overdraft_limit:
            print("Withdrawal allowed")
        else:
            print("Overdraft limit exceeded")
    def calculate_interest(self):
        return 0

# Creating a SavingsAccount
savings = SavingsAccount("Soliana", 5000, 5)

# Deposit money
savings.deposit(1000)
print("Savings balance:", savings.balance)
# Calculating interest
print("Interest:", savings.calculate_interest())
# Creating a CurrentAccount
current = CurrentAccount("Abebe", 3000, 1000)
print("Current balance:", current.balance)
print("Interest:", current.calculate_interest())