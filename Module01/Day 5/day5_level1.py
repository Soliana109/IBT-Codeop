#Question 1
# Creating class
class Vehicle:

    # Constructor
    def __init__(self, name, model, year):
        self.name = name
        self.model = model
        self.year = year

    # Vehicle information
    def info(self):
        print(self.name, self.model, self.year)


# Car inherits from Vehicle
class Car(Vehicle):

    def __init__(self, name, model, year, doors):
        super().__init__(name, model, year)
        self.doors = doors

    # Unique method for Car
    def show_doors(self):
        print("Number of doors:", self.doors)


# Motorcycle inherits from Vehicle
class Motorcycle(Vehicle):

    def __init__(self, name, model, year, engine_size):
        super().__init__(name, model, year)
        self.engine_size = engine_size

    # Unique method for Motorcycle
    def show_engine(self):
        print("Engine size:", self.engine_size, "cc")


# Creating objects
car1 = Car("Toyota", "Corolla", 2022, 4)
motorcycle1 = Motorcycle("Honda", "civic", 2023, 600)

# Using inherited method
car1.info()
motorcycle1.info()

# Using unique methods
car1.show_doors()
motorcycle1.show_engine()

#Question 2
#Creating class
class Account:

    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    # Deposit and withdraw money
    def deposit(self, amount):
        self.balance += amount
    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
        else:
            print("Insufficient funds.")


# SavingsAccount inherits from Account
class SavingsAccount(Account):

    def __init__(self, owner, balance, interest_rate):
        super().__init__(owner, balance)
        self.interest_rate = interest_rate

    # Adding interest
    def add_interest(self):
        interest = self.balance * self.interest_rate / 100
        self.balance += interest

        print("Interest added:", interest)


# Creating a savings account
account1 = SavingsAccount("Soliana", 1000, 5)
# Add interest
account1.add_interest()
print("Balance:", account1.balance)

#Question 3
#Creating class
class Account:

    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    # Deposit and withdraw money
    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
        else:
            print("Insufficient funds.")
# CurrentAccount inherits from Account
class CurrentAccount(Account):
    def __init__(self, owner, balance, overdraft_limit):
        super().__init__(owner, balance)
        self.overdraft_limit = overdraft_limit

    # Overriding the withdraw method
    def withdraw(self, amount):

        # Allow the balance to go below zero
        if amount <= self.balance + self.overdraft_limit:
            self.balance -= amount
            print("Withdrawal successful.")
        else:
            print("Overdraft limit exceeded.")
# Creating a current account
account1 = CurrentAccount("Soliana", 500, 1000)
# Withdraw more than the balance
account1.withdraw(1000)
print("Balance:", account1.balance)