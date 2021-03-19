/*
* author: chenzhi <chenzhibupt@qq.com>
* date: Mar 19, 2021
*
* swap sort
* 
* put smallest one to the left
*/

import { init, swap } from '../utils/arr';

const swapSort = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) continue;
      swap(arr, i, j);
    }
  }
};
const arr = init();
console.log(arr);
swapSort(arr);
console.log(arr);
