/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
class Solution {
    countWays(n, k) {
        if (n === 1) return k;

        let same = k;          
        let diff = k * (k - 1); 

        for (let i = 3; i <= n; i++) {
            let newSame = diff;
            let newDiff = (same + diff) * (k - 1);

            same = newSame;
            diff = newDiff;
        }

        return same + diff;
    }
}
