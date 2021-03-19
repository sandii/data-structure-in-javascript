/*
* author: chenzhi <chenzhibupt@qq.com>
* date: Mar 19, 2021
*
* bubble sort
* n^2
* 
*/

import { init, swap } from '../utils/arr';

const bubbleSort = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] >= arr[j - 1]) continue;
      swap(arr, j, j - 1);
    }
  }
};
const arr = init();
console.log(arr);
bubbleSort(arr);
console.log(arr);
