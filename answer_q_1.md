# 1. Algorithm Running Time
a:  If the algorithm runs in linear time, it means it has a time complexity of O(N). Given that it takes 0.5 ms for input size 100, you can calculate the time for 1 minute (60,000 ms) and find the largest problem size N using the proportion
```
0.5 ms / 100 = x ms / N
Solving for x:
x = (0.5 ms / 100) * N = 0.005 ms * N
Now, to find the largest N for 1 minute:
0.005 ms * N = 60,000 ms
N = 60,000 ms / 0.005 ms = 12,000,000```
```
b: b. O(N log N): To solve this, you need to know the constant factor in the O(N log N) notation. Assuming it takes 0.5 ms for N = 100:
```
K = 0.5 ms / (100 * log(100))

Now, for 1 minute:

K * N * log(N) = 60,000 ms

(0.5 ms / (100 * log(100))) * N * log(N) = 60,000 ms 
```

c:  Quadratic: If the algorithm is quadratic, it has a time complexity of O(N^2). Similarly, find the largest N using the proportion:
```
0.5 ms / 100^2 = x ms / N^2

x = (0.5 ms / 100^2) * N^2

0.5 ms * N^2 = 60,000 ms

N^2 = 60,000 ms / 0.5 ms = 120,000

N = sqrt(120,000) ≈ 346.41 
```

d: Cubic: If the algorithm is cubic, it has a time complexity of O(N^3). Similarly, find the largest N using the proportion:
```
0.5 ms / 100^3 = x ms / N^3

x = (0.5 ms / 100^3) * N^3

0.5 ms * N^3 = 60,000 ms

N^3 = 60,000 ms / 0.5 ms = 120,000

N = cbrt(120,000) ≈ 47.29
```


# 2     Program Fragments:
    Fragment #1: O(N)
    Fragment #2: O(N/2) → O(N)
    Fragment #3: O(N^2)
    Fragment #4: O(N) + O(N) → O(N)
    Fragment #5: O(N) * O(N^2) → O(N^3)
    Fragment #6: O(N) * O(N) → O(N^2)
    Fragment #7: O(N) * O(N^2) * O(N^2) → O(N^5)

# 3     Judge's Fine:
a. The fine on day N is 2^(N-1) dollars.

b. It will take log2(D) days for the fine to reach D dollars since each day, the fine is squared.


# 4     Existence of Integer in an Array:
- To efficiently determine if an integer i exists in an array of increasing integers, you can use binary search. The time complexity of binary search is O(log N), where N is the size of the array.

#     Prime Number Check:

```
def is_prime(N):
    if N <= 1:
        return False
    if N <= 3:
        return True
    if N % 2 == 0 or N % 3 == 0:
        return False
    i = 5
    while i * i <= N:
        if N % i == 0 or N % (i + 2) == 0:
            return False
        i += 6
    return True

N = int(input("Enter a positive integer: "))
if is_prime(N):
    print(N, "is a prime number")
else:
    print(N, "is not a prime number")
```

