import heapq
from collections import deque

# 1. TREE - Bank Branches
class TreeNode:
    def __init__(self, name):
        self.name = name
        self.children = []
root = TreeNode("Head Office")

def add_branch(parent, name):
    # O(n): find the parent
    if parent.name == name:
        return parent

    for child in parent.children:
        result = add_branch(child, name)
        if result:
            return result

    return None

def show_tree(node, level=0):
    print("  " * level + node.name)

    # O(n): visit every branch
    for child in node.children:
        show_tree(child, level + 1)

# 2. GRAPH - Customer Transfers
graph = {}
def add_connection(a, b):
    # O(1): add a connection
    graph.setdefault(a, []).append(b)
    graph.setdefault(b, []).append(a)


def bfs(start):
    # O(V + E): visits customers and connections
    if start not in graph:
        print("Customer not found.")
        return

    visited = set()
    queue = deque([start])

    while queue:
        customer = queue.popleft()

        if customer not in visited:
            print(customer)
            visited.add(customer)

            for friend in graph[customer]:
                if friend not in visited:
                    queue.append(friend)

# 3. HEAP - Urgent Transactions
urgent = []

def add_urgent(priority, message):
    # O(log n): add to heap
    heapq.heappush(urgent, (priority, message))

def process_transaction():
    # O(log n): remove highest priority
    if urgent:
        print("Processing:", heapq.heappop(urgent))
    else:
        print("No urgent transactions.")

# 4. BST - Customer Accounts

class BSTNode:
    def __init__(self, account):
        self.account = account
        self.left = None
        self.right = None


def insert(root, account):
    # O(log n) average
    if root is None:
        return BSTNode(account)

    if account < root.account:
        root.left = insert(root.left, account)
    else:
        root.right = insert(root.right, account)

    return root


def search(root, account):
    # O(log n) average
    if root is None:
        return False

    if root.account == account:
        return True

    if account < root.account:
        return search(root.left, account)

    return search(root.right, account)

# Sample customer accounts
bst = None
for account in [1005, 1002, 1010, 1001, 1007]:
    bst = insert(bst, account)

# 5. MENU

while True:
    print("\n=== ADDIS BANK NETWORK SYSTEM ===")
    print("1. Add new branch / employee")
    print("2. Add money transfer connection")
    print("3. Show connected customers")
    print("4. Add urgent transaction")
    print("5. Process highest priority")
    print("6. Search customer account")
    print("7. Show bank tree")
    print("8. Exit")

    choice = input("Choose: ")

    if choice == "1":
        parent_name = input("Add under: ")
        new_name = input("New branch/employee name: ")

        parent = add_branch(root, parent_name)

        if parent:
            parent.children.append(TreeNode(new_name))
            print("Added successfully.")
        else:
            print("Parent not found.")

    elif choice == "2":
        a = input("Customer 1: ")
        b = input("Customer 2: ")

        add_connection(a, b)
        print("Transfer connection added.")

    elif choice == "3":
        start = input("Start customer: ")

        print("Connected customers:")
        bfs(start)

    elif choice == "4":
        priority = int(input("Priority (1 = most urgent): "))
        message = input("Transaction/Alert: ")

        add_urgent(priority, message)
        print("Transaction added.")

    elif choice == "5":
        process_transaction()

    elif choice == "6":
        account = int(input("Account number: "))

        if search(bst, account):
            print("Account exists.")
        else:
            print("Account not found.")

    elif choice == "7":
        print("\nBank Hierarchy:")
        show_tree(root)

    elif choice == "8":
        print("Goodbye!")
        break

    else:
        print("Invalid choice.")