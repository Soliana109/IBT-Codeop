# Question 6
def reverse_string(text):
    # One letter is already reversed
    if len(text) <= 1:
        return text
    return reverse_string(text[1:]) + text[0]

print("6a. Reverse:", reverse_string("hello"))

# Count a target in a list
def count_target(numbers, target):
    # Nothing left to check
    if not numbers:
        return 0
    # Count 1 if the first item matches
    found = 1 if numbers[0] == target else 0
    return found + count_target(numbers[1:], target)
print("6b. Count:", count_target([2, 3, 2, 4, 2], 2))

#Question 7

def selection_sort(arr):
    swaps = 0
    comparisons = 0

    for i in range(len(arr)):
        min_index = i

        for j in range(i + 1, len(arr)):
            comparisons += 1

            if arr[j] < arr[min_index]:
                min_index = j

        if min_index != i:
            arr[i], arr[min_index] = arr[min_index], arr[i]
            swaps += 1

    return swaps, comparisons

def insertion_sort(arr):
    swaps = 0
    comparisons = 0

    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        while j >= 0:
            comparisons += 1

            if arr[j] > key:
                arr[j + 1] = arr[j]
                swaps += 1
                j -= 1
            else:
                break

        arr[j + 1] = key

    return swaps, comparisons
numbers = [5, 3, 8, 1, 2]

a = numbers.copy()
b = numbers.copy()

s_swaps, s_comparisons = selection_sort(a)
i_swaps, i_comparisons = insertion_sort(b)

print("\n7. Selection Sort:", a)
print("Swaps:", s_swaps, "Comparisons:", s_comparisons)

print("Insertion Sort:", b)
print("Swaps:", i_swaps, "Comparisons:", i_comparisons)


#Question 8

def two_sum(arr, target):
    left = 0
    right = len(arr) - 1

    while left < right:
        total = arr[left] + arr[right]

        if total == target:
            return arr[left], arr[right]

        # Sum is too small, move left up
        elif total < target:
            left += 1

        # Sum is too big, move right down
        else:
            right -= 1

    return None


print("\n8. Two Numbers:", two_sum([1, 2, 3, 4, 6, 8], 10))
