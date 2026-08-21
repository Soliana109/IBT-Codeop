try:
    number = float(input("Enter a number: "))
    result = 1000 / number
    print("Result:", result)

except ValueError:
    print("Enter a valid number.")

except ZeroDivisionError:
    print("You cannot divide by zero.")