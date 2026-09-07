#Question 4
# Create class
class Student:

    # Constructor
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
        self.grades = []

    # Add grade 
    def add_grade(self, grade):
        self.grades.append(grade)

    # Calculate average 
    def average_grade(self):
        if len(self.grades) == 0:
            return 0

        return sum(self.grades) / len(self.grades)


# Create object
student1 = Student("Soliana", "CS001")
student1.add_grade(85)
student1.add_grade(90)
student1.add_grade(78)
student1.add_grade(95)

# Display average
print("Student:", student1.name)
print("Average grade:", student1.average_grade())

#Question 5
# Create class
class Product:

    # Constructor
    def __init__(self, name, price, stock):
        self.name = name
        self.price = price
        self.stock = stock

    # Sell a product
    def sell(self, quantity):

        # Check stock
        if quantity <= self.stock:
            self.stock -= quantity
            print(f"Sold {quantity} {self.name}.")
        else:
            print("Not enough stock.")

    # Add products to stock
    def restock(self, quantity):
        self.stock += quantity
        print(f"Restocked {quantity} {self.name}.")


# Create a product
product1 = Product("Car", 50000, 10)
# Sell 
product1.sell(3)
product1.sell(20)
product1.restock(5)

# Display current stock
print("Current stock:", product1.stock)

#Question 6
# Create class
class Account:

    # Constructor
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance
    @property
    def balance(self):
        return self.__balance

    # Deposit money
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited {amount} ETB.")
        else:
            print("Deposit amount must be positive.")

    # Withdraw money
    def withdraw(self, amount):
        # Check that the amount is positive
        if amount <= 0:
            print("Withdrawal amount must be positive.")

        # Check if there is enough money
        elif amount > self.__balance:
            print("Insufficient funds.")

        else:
            self.__balance -= amount
            print(f"Withdrew {amount} ETB.")


# Create account
account1 = Account("Soliana", 1000)
account1.deposit(500)
account1.withdraw(300)

# Display balance
print("Balance:", account1.balance, "ETB")