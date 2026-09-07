import time
from collections import deque
#Question 9
# Search test
numbers = list(range(100000))
number_dict = {n: True for n in numbers}
target = 99999

start = time.time()
target in numbers
list_time = time.time() - start

start = time.time()
target in number_dict
dict_time = time.time() - start

print("List search:", list_time)
print("Dictionary search:", dict_time)

# Insert test
start = time.time()
my_list = []
for i in range(10000):
    my_list.insert(0, i)
list_insert_time = time.time() - start

start = time.time()
my_deque = deque()
for i in range(10000):
    my_deque.appendleft(i)
deque_insert_time = time.time() - start

print("List insert:", list_insert_time)
print("Deque insert:", deque_insert_time)

#Question 10
# Username lookup -> Set: O(1) average
# Customer support -> Queue: O(1) enqueue/dequeue
# Undo feature -> Stack: O(1) push/pop
# Student ID lookup -> Dictionary: O(1) average lookup

#Question 11
# Python list
def remove_middle_list(items):
    middle = len(items) // 2
    items.pop(middle)
    return items
# Node
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
# Linked list
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
    def remove_middle(self):
        # Find size
        count = 0
        current = self.head
        while current:
            count += 1
            current = current.next
        # Find middle
        middle = count // 2
        if middle == 0:
            self.head = None
            return
        current = self.head
        # Reach previous node
        for _ in range(middle - 1):
            current = current.next
        # Skip middle
        current.next = current.next.next
# List example
data = [10, 20, 30, 40, 50]
print("List:", remove_middle_list(data))
# Linked list example
linked = LinkedList()
for value in [10, 20, 30, 40, 50]:
    linked.append(value)
linked.remove_middle()
# Trade-offs:
# List: O(n) removal because elements shift after deletion.
# Linked list: O(n) to find the middle, but O(1) to remove it.
# List uses less memory; linked lists require extra node references.