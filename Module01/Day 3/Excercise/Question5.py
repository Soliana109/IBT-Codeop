# Write names
with open("names.txt", "w") as file:
    file.write("Soliana\n")
    file.write("Sara\n")
    file.write("Hana\n")

# Read names
with open("names.txt", "r") as file:
    for name in file:
        print(name.strip())