# Question 1
# Common operations and their time complexities:
# List index access: O(1)
# We can directly access an item using its position.
# Searching inside a list: O(n)
# Python may need to check every item before finding the value.
# Inserting at index 0: O(n)
# Existing items need to move one position to the right.
# Dictionary lookup: O(1) average
# A dictionary uses hashing to find a value quickly.
print("Exercise 1 - Big-O:")
print("List index access       : O(1)")
print("List search using 'in'  : O(n)")
print("Insert at beginning     : O(n)")
print("Dictionary key lookup   : O(1) average)")
print("=" * 55)

#Question 2
# For a very large input, the following is the order
# from the most efficient to the least efficient:
# O(1) < O(log n) < O(n) < O(n^2)
complexity_order = [
    "O(1)",
    "O(log n)",
    "O(n)",
    "O(n^2)"
]
print("Exercise 2 - Complexity Ranking:")
for position, complexity in enumerate(complexity_order, start=1):
    print(position, ":", complexity)
print("Fastest -> Slowest")
print("=" * 55)

#Question 3
learners = [
    "Soliana",
    "Beza",
    "Afomiya",
    "Yared",
    "Tsion",
    "Nuhamin",
    "Tigist",
    "Nahom",
    "Abebe",
    "Michael"
]
print("Exercise 3 - List Operations")
# Access an item using its index
print("First learner:", learners[0])
print("Sixth learner:", learners[5])
# Add a new learner to the end
learners.append("Saron")
print("After adding at the end:")
print(learners)
# Insert another learner at the beginning
learners.insert(0, "Yonatan")
print("After inserting at position 0:")
print(learners)
print("=" * 55)

#Question 4
grades = {
    "Soliana": "A",
    "Beza": "B",
    "Afomiya": "A+",
    "Yared": "B+",
    "Tsion": "A-"
}
print("Exercise 4 - Dictionary Operations")
# Add a new student
grades["Nuhamin"] = "B+"
print("Added Nuhamin:", grades)

# Change an existing student's grade
grades["Tigist"] = "A-"
print("Tigist's updated grade:", grades["Tigist"])

# Check whether a student is in the dictionary
search_name = "Tsnat"

if search_name in grades:
    print(
        search_name,
        "was found. Grade:",
        grades[search_name]
    )
else:
    print(search_name, "was not found.")

print("Final student grades:")
print(grades)