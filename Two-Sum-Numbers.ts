export function twoNumberSum(array: number[], targetSum: number) {
    const numMap: Record<number, boolean> = {};
  
    for (let index = 0; index < array.length; index++) {
      const x:number = targetSum - array[index];
      
      if (numMap[x]) {
        return [array[index], x];
      }
  
      numMap[array[index]] = true;
    }
  
    return [];
  }
  

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
console.log(twoNumberSum([4, 6], 10))
console.log(twoNumberSum([4, 6, 1], 5))