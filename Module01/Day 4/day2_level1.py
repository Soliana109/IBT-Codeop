#Question 1
# Creating Person class
class Person:

 # Constructor
  def __init__(self, name, age):
        self.name = name
        self.age = age
    # Method
  def introduce(self):
        print(f"Hello, my name is {self.name}.")
# Creating a two Person objects
person1 = Person("Soliana", 22)
person2 = Person("Alemayehu", 21)
# Call method 
person1.introduce()
person2.introduce()

#Question 2
# Create class
class Rectangle:

    # Constructor
    def __init__(self, length, width):
        self.length = length
        self.width = width
    def area(self):
        return self.length * self.width
    def perimeter(self):
        return 2 * (self.length + self.width)
# Create two objects
rectangle1 = Rectangle(5, 10)
rectangle2 = Rectangle(15, 20)

# Display area and perimeter of rectangle 1 and 2
print("Rectangle 1 area:", rectangle1.area())
print("Rectangle 1 perimeter:", rectangle1.perimeter())
print("Rectangle 2 area:", rectangle2.area())
print("Rectangle 2 perimeter:", rectangle2.perimeter())

#Question 3
# Create class
class Account:

    # Constructor
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    # Add money to account
    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited {amount} ETB")

    # Remove money from account
    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print(f"Withdrew {amount} ETB")
        else:
            print("Insufficient balance")

# Create object
account1 = Account("Soliana", 1000)
account1.deposit(500)
account1.withdraw(300)
# Display 
print("Final balance:", account1.balance, "ETB")