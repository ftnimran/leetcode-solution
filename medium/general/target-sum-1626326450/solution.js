class Solution {
  /**
    * @param number n
    * @param number[] arr
    * @param number target

    * @returns number
    */
  totalWays(arr, target) {
    let memo = new Map();

    function dfs(index, sum) {
      let key = index + "," + sum;

      if (memo.has(key)) return memo.get(key);

      if (index === arr.length) {
        return sum === target ? 1 : 0;
      }

      let add = dfs(index + 1, sum + arr[index]);
      let subtract = dfs(index + 1, sum - arr[index]);

      let result = add + subtract;
      memo.set(key, result);

      return result;
    }

    return dfs(0, 0);
  }
}
