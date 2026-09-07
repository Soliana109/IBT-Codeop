
#Question 1
def factorial(n):
    # 1 stops the counting
    if n == 1:
        return 1
    return n * factorial(n - 1)

# Normal loop version
def factorial_loop(n):
    result = 1
   
    for i in range(1, n + 1):
        result *= i
    return result
print("1. Factorial:", factorial(5))
print("   Loop:", factorial_loop(5))

#Question 2
def sum_list(numbers): 
    if not numbers:
        return 0
    return numbers[0] + sum_list(numbers[1:])
print("\n2. List Sum:", sum_list([1, 2, 3, 4, 5]))


#Question 3
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1 
print("\n3. Linear Search:", linear_search([10, 20, 30, 40], 30))

# Question 4
def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1


print("\n4. Binary Search:", binary_search([10, 20, 30, 40, 50], 40))

#Question 5
def bubble_sort(arr):
    n = len(arr)

    for i in range(n - 1):
        for j in range(n - 1 - i):
            # Swap if they are in the wrong order
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
        print("Pass", i + 1, ":", arr)


numbers = [5, 3, 8, 1, 2]

print("\n5. Bubble Sort:")
bubble_sort(numbers)