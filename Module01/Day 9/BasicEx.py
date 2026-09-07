# 1. Tree Basics

class TreeNode:
    def __init__(self, name):
        self.name = name
        self.children = []


# Make the bank tree
head = TreeNode("Head Office")

bole = TreeNode("Bole Branch")
teller = TreeNode("Teller")
loan = TreeNode("Loan Officer")

bole.children = [teller, loan]
piassa = TreeNode("Piassa Branch")

head.children = [bole, piassa]


def print_tree(node, space=0):
    print("  " * space + node.name)

    # Print all children
    for child in node.children:
        print_tree(child, space + 1)
print("1. Bank Hierarchy:")
print_tree(head)

# 2. Binary Search Tree

class BST:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root is None:
            self.root = TreeNode(value)
            return

        self._insert(self.root, value)

    def _insert(self, node, value):
        if value < node.name:
            if not node.children:
                node.children.append(TreeNode(value))
            else:
                self._insert(node.children[0], value)
        else:
            if len(node.children) < 2:
                node.children.append(TreeNode(value))
            else:
                self._insert(node.children[1], value)

    def search(self, value):
        node = self.root

        while node:
            if node.name == value:
                return True
            if value < node.name:
                node = node.children[0] if node.children else None
            else:
                node = node.children[1] if len(node.children) > 1 else None
        return False
bst = BST()
for value in [50, 30, 70, 20, 40, 60]:
    bst.insert(value)
print("\n2. BST:")
print("40 exists:", bst.search(40))
print("100 exists:", bst.search(100))

# 3. Graph Basics
graph = {
    "Soliana": ["Beza", "Nuhamin"],
    "Beza": ["Soliana", "Afomiya"],
    "Afomiya": ["Beza"],
    "Nuhamin": ["Soliana"]
}
print("\n3. Customer Graph:")
# Show who can transfer money to whom
for customer in graph:
    print(customer, "->", graph[customer])


# 4. Heap Basics
import heapq
transactions = []
# Smaller number = higher priority
heapq.heappush(transactions, (1, "Fraud Alert"))
heapq.heappush(transactions, (2, "Big Loan"))
heapq.heappush(transactions, (3, "Small Deposit"))
print("\n4. Urgent Transaction:")
# Take the most urgent one
print(heapq.heappop(transactions))