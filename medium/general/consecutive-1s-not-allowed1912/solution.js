/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
    countStrings(n) {
        if (n === 1) return 2;
        if (n === 2) return 3;

        let a = 2; 
        let b = 3; 

        for (let i = 3; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }

        return b;
    }
}
