'''
Maximum Pairwise Product Problem
Find the maximum product of two distinct numbers in a sequence of non-negative integers.
Input: A sequence of non-negative
integers.
Output: The maximum value that
can be obtained by multiplying
two different elements from the sequence.
5 6 2 7 4
5 30 10 35 20
6 30 12 42 24
2 10 12 14 8
7 35 42 14 28
4 20 24 8 28
Given a sequence of non-negative integers a1
,...,an, compute
max
1≤i,j≤n
ai
· aj
.
Note that i and j should be different, though it may be the case that ai = aj
.
Input format. The first line contains an integer n. The next line contains
n non-negative integers a1
,...,an (separated by spaces).
Output format. The maximum pairwise product.
Constraints. 2 ≤ n ≤ 2 · 105
; 0 ≤ a1
,...,an ≤ 2 · 105
.
Sample 1.
Input:
3
1 2 3
Output:
6
'''


def max_pairwise_product(numbers):
    n = len(numbers)
    max_product = 0
    for first in range(n):
        for second in range(first + 1, n):
            max_product = max(max_product,
                numbers[first] * numbers[second])

    return max_product


if __name__ == '__main__':
    input_n = int(input())
    input_numbers = [int(x) for x in input().split()]
    print(max_pairwise_product(input_numbers))
