
#Question 5
# Finds the largest number in a list. Time Complexity: O(n)
def find_max(numbers):
    maximum = numbers[0]
    for number in numbers:
        if number > maximum:
            maximum = number
    return maximum
numbers = [12, 5, 27, 8, 19]
print("Maximum:", find_max(numbers))
# Two nested loops. Time Complexity: O(n²)
def nested_loops(n):
    for i in range(n):
        for j in range(n):
            print(i, j)
nested_loops(3)

#Question 6
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
class LinkedList:
    def __init__(self):
        self.head = None  
    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    def print_list(self):
        current = self.head
        while current:
            print(current.value, end=" -> ")
            current = current.next
        print("None")
linked_list = LinkedList()
linked_list.append(10)
linked_list.append(20)
linked_list.append(30)
print("Linked List:")
linked_list.print_list()

#Question 7
class Stack:
    def __init__(self):
        self.items = []
    def push(self, value):
        self.items.append(value)  
    def pop(self):
        if self.items:
            return self.items.pop() 
        return None
    def peek(self):
        if self.items:
            return self.items[-1] 
            return None
def reverse_string(text):
    stack = Stack()
    for character in text:
        stack.push(character)
    reversed_text = ""
    while stack.peek() is not None:
        reversed_text += stack.pop()
    return reversed_text
print("Reversed:", reverse_string("Addis Ababa"))

#Question 8
class Queue:
    def __init__(self):
        self.customers = []
    def enqueue(self, customer):
        self.customers.append(customer)
    def dequeue(self):
        if self.customers:
            return self.customers.pop(0)
        return None
bank_queue = Queue()
bank_queue.enqueue("Customer 1")
bank_queue.enqueue("Customer 2")
bank_queue.enqueue("Customer 3")
print("Bank Queue:")

#(FIFO).
while bank_queue.customers:
    print("Serving:", bank_queue.dequeue())