def update_quantity(stock, item, amount):
    if item in stock:
        stock[item] += amount
    else:
        print("Item not found.")

stock = {}

try:
    with open("stock.txt", "r") as file:
        for line in file:
            item, quantity = line.strip().split(",")
            stock[item] = int(quantity)

except FileNotFoundError:
    print("stock.txt was not found.")


update_quantity(stock, "Paracetamol", 5)
update_quantity(stock, "Amoxicillin", -2)
update_quantity(stock, "Ibuprofen", 3)



print("Low-stock items:")

for item, quantity in stock.items():
    if quantity < 10:
        print(item, ":", quantity)


with open("stock.txt", "w") as file:
    for item, quantity in stock.items():
        file.write(f"{item},{quantity}\n")

print("Stock updated and saved.")