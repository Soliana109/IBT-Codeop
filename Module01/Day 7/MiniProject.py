# Customer database:
customers = {
    "1001": {"name": "Sara", "balance": 5000},
    "1002": {"name": "Dawit", "balance": 7500},
    "1003": {"name": "Hana", "balance": 3000}
}
# Stack: last transaction is the first one undone (LIFO).
transaction_history = []
def make_transaction():
    account = input("Account number: ")
    # Dictionary lookup: O(1) average
    if account not in customers:
        print("Customer not found.")
        return
    amount = float(input("Transaction amount: "))
    # Update balance: O(1)
    customers[account]["balance"] += amount
    # Stack push: O(1)
    transaction_history.append((account, amount))
    print("Transaction completed.")
def undo_transaction():
    # Stack pop: O(1)
    if not transaction_history:
        print("No transaction to undo.")
        return
    account, amount = transaction_history.pop()
    # Reverse transaction: O(1)
    customers[account]["balance"] -= amount
    print("Last transaction undone.")
def search_customer():
    account = input("Account number: ")
    # Dictionary search: O(1) average
    customer = customers.get(account)
    if customer:
        print("Name:", customer["name"])
        print("Balance:", customer["balance"])
    else:
        print("Customer not found.")
# Main menu
while True:
    print("\n=== Addis Bank Customer Service ===")
    print("1. Make a transaction")
    print("2. Undo last transaction")
    print("3. Search customer")
    print("4. Exit")
    choice = input("Choose an option: ")
    if choice == "1":
        make_transaction()
    elif choice == "2":
        undo_transaction()
    elif choice == "3":
        search_customer()
    elif choice == "4":
        print("Thank you for using Addis Bank.")
        break
    else:
        print("Invalid choice.")
