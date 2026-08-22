#Question 7
# Create class
class BankAccount:

    # Constructor
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.__balance = balance

    # Getter 
    @property
    def balance(self):
        return self.__balance

    # Setter 
    @balance.setter
    def balance(self, amount):

        # Condition
        if amount >= 0:
            self.__balance = amount
        else:
            print("Balance cannot be negative.")

    # Deposit money
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited {amount} ETB.")
        else:
            print("Deposit must be positive.")

    # Withdraw money
    def withdraw(self, amount):
        if amount <= 0:
            print("Withdrawal must be positive.")

        elif amount > self.__balance:
            print("Insufficient funds.")

        else:
            self.__balance -= amount
            print(f"Withdrew {amount} ETB.")

    # Transfer money to another account
    def transfer(self, to_account, amount):

        # Check if there is enough money
        if amount > self.__balance:
            print("Insufficient funds for transfer.")

        elif amount <= 0:
            print("Transfer amount must be positive.")

        else:
            self.__balance -= amount
            to_account.__balance += amount
            print(f"Transferred {amount} ETB to {to_account.owner}.")


# Create two bank accounts
account1 = BankAccount("Soliana", 2000)
account2 = BankAccount("Sara", 1000)
account1.deposit(500)
account1.withdraw(200)
account1.transfer(account2, 300)

# Display balances
print("Soliana's balance:", account1.balance)
print("Alemayehu's balance:", account2.balance)

#Question 8
# Create class
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.available = True


# Create class
class Library:
    def __init__(self):
        self.books = []
    # Add book
    def add_book(self, book):
        self.books.append(book)
        print("Book added")
    # Borrow book 
    def borrow_book(self, title):
        for book in self.books:
            if book.title == title:
                if book.available:
                    book.available = False
                    print("Book borrowed")
                else:
                    print("Book is not available")

    # Return book 
    def return_book(self, title):
        for book in self.books:
            if book.title == title:
                book.available = True
                print("Book returned.")


# Create a book
book1 = Book("Full Stach", "IBT")

# Create library
library = Library()

# Add book
library.add_book(book1)
library.borrow_book("Full Stack")

# Return the book
library.return_book("Full Stach")

#Question 9
# Create the Car class
class Car:

    # Constructor
    def __init__(self, speed=0, fuel=100):
        # Private attributes
        self.__speed = speed
        self.__fuel = fuel

    # Getter for speed
    @property
    def speed(self):
        return self.__speed

    # Getter for fuel
    @property
    def fuel(self):
        return self.__fuel

    # Increase car's speed
    def accelerate(self, amount):
        if amount > 0:
            self.__speed += amount
            print(f"Car accelerated to {self.__speed} km/h.")
        else:
            print("Acceleration must be positive.")

    # Decrease car's speed
    def brake(self, amount):
        if amount > 0:
            self.__speed -= amount
            if self.__speed < 0:
                self.__speed = 0

            print(f"Car slowed to {self.__speed} km/h.")
        else:
            print("Brake amount must be positive.")

    # Add fuel to the car
    def refuel(self, amount):
        if amount > 0:
            self.__fuel += amount

            # Fuel cannot exceed 100
            if self.__fuel > 100:
                self.__fuel = 100

            print(f"Fuel level: {self.__fuel}%")
        else:
            print("Refuel amount must be positive.")


# Create object
car1 = Car(20, 50)

# Display initial values
print("Speed:", car1.speed, "km/h")
print("Fuel:", car1.fuel, "%")
car1.accelerate(30)
car1.brake(10)
car1.refuel(40)

# Display final values
print("Final speed:", car1.speed, "km/h")
print("Final fuel:", car1.fuel, "%")