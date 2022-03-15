/**
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
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    // write your code here
}

module.exports = max;
