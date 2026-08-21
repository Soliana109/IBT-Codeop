print("TELEBIRR CUSTOMER REPORT")
print("-------------------------")

#List of customers
customers = [
  ("Abebe" , 1000),
  ("Kebede" , 800),
  ("Brook" , 600),
  ("Beza", 400),
  ("Afomiya", 200),
]

#Function of customer tier
def tier(balance):
    if balance >= 1000:
        return "Premium"
    elif balance >= 500:
        return "Standard"
    else:
        return "Basic"

#Counter
premium_count = 0
standard_count = 0
basic_count = 0

#Loop through customers
for name, balance in customers:
    customer_tier = tier(balance)
    print(f"Name:{name}")
    print(f"Balance:{balance}")
    print(f"Tier:{tier(balance)}")
    print(f"----------------")

#Summary for counter
if customer_tier == "Premium":
  premium_count += 1
elif customer_tier == "Standard":
 standard_count += 1
else:
   basic_count += 1

   print("Summary")
   print("=======")
   print(f"Premium:{premium_count}")
   print(f"Standard:{standard_count}")
   print(f"Basic:{basic_count}")
