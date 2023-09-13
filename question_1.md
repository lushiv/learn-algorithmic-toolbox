An algorithm takes 0.5 ms for input size 100. How large a problem can be solved in 1 min (assuming that low-order terms are negligi ble) if the running time is

a. linear.

b. O(N log m)

c. quadratic.

d. cubic. 

For each of the following program fragments,

a. give a Big-Oh analysis of the running time.

b. implement the code and run for several values of N.

c. compare your analysis with the actual running times.

// Fragment #1 

for( int i = 0; i < n; i++ ) 

   sum++ ;

// Fragment #2 

for( int i = 0; i < n; i += 2 ) 

   sum++ ;

// Fragment #3 

for( int i = 0; i < n; i++ ) 

   for( int j = 0; j < n; j++ ) 

      sum++ ;

// Fragment #4 

for( int i = 0; i < n; i++ ) 

   sum++; 

for( int j = 0; j < n; j++ ) 

   sum++;

// Fragment #5 

for( int i = 0; i < n; i++ ) 

   for( int j = 0; j < n * n; j++ ) 

      sum++ ; 

// Fragment #6 

for( int i = 0; i < n; i++ ) 

   for( int j = 0; j < i; j++) 

      sum++ ;

// Fragment #7 

for( int i = 0; i < n; i++ ) 

   for( int j = 0; j < n * n; j++)

      for(int k = 0; k < j; k++)

         sum++;

In a recent court case, a judge cited a city for contempt and ordered a fine of $2 for the first day. Each subsequent day, until the city fol lowed the judge's order, the fine was squared (i.e., the fine progressed as follows: $2, $4, $16, $256, $65,536, . . . ).

a. What would be the fine on day N?

b. How many days would it take for the fine to reach D dollars? (A Big-Oh answer will do.) 

Give an efficient algorithm to determine if an integer i exists such that A, = i in an array of increasing integers. What is the running time of your algorithm?

A prime number has no factors besides 1 and itself.

a. Write a program to determine whether a positive integer N is prime. In terms of N, what is the worst-case running time of your program?
