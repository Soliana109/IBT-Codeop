transactions = [
    {"amount": 5000, "date": "2026-08-20", "type": "Deposit"},
    {"amount": 1200, "date": "2026-08-21", "type": "Withdrawal"},
    {"amount": 3000, "date": "2026-08-22", "type": "Deposit"},
    {"amount": 500, "date": "2026-08-19", "type": "Withdrawal"}
]

# 1. Recursion: calculate balance
def total_balance(data, index=0):
    # Stop when we reach the end
    if index == len(data):
        return 0

    amount = data[index]["amount"]

    if data[index]["type"] == "Withdrawal":
        amount = -amount

    return amount + total_balance(data, index + 1)


# 2. Sort by amount
def sort_by_amount(data):
    # Small numbers go first
    for i in range(len(data)):
        for j in range(len(data) - 1 - i):
            if data[j]["amount"] > data[j + 1]["amount"]:
                data[j], data[j + 1] = data[j + 1], data[j]

    return data


# 3. Linear Search
def linear_search(data, target):
    # Check every transaction
    for transaction in data:
        if transaction["amount"] == target:
            return transaction

    return None


# 4. Binary Search
def binary_search(data, target):
    left = 0
    right = len(data) - 1

    while left <= right:
        middle = (left + right) // 2

        if data[middle]["amount"] == target:
            return data[middle]

        elif data[middle]["amount"] < target:
            left = middle + 1

        else:
            right = middle - 1

    return None


# 5. Recursive report
def transactions_above(data, amount, index=0):
    # Stop at the end
    if index == len(data):
        return []

    result = []

    if data[index]["amount"] > amount:
        result.append(data[index])

    return result + transactions_above(data, amount, index + 1)

# Program
print("=== Addis Bank Transaction Analyzer ===")

print("\nTransactions:")
for t in transactions:
    print(t)

# Calculate balance
print("\nTotal Balance:", total_balance(transactions), "ETB")

# Linear search
print("\nLinear Search for 1200 ETB:")
print(linear_search(transactions, 1200))

# Sort transactions
sorted_transactions = sort_by_amount(transactions.copy())

print("\nSorted by Amount:")
for t in sorted_transactions:
    print(t)

# Binary search
print("\nBinary Search for 3000 ETB:")
print(binary_search(sorted_transactions, 3000))

# Recursive report
print("\nTransactions Above 2000 ETB:")
for t in transactions_above(transactions, 2000):
    print(t)