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
const bubbleSort2 = (arr: number[]): void => {
  let sorted: boolean = false;
  for (let i = 0; i < arr.length; i++) {
    if (sorted === true) break;
    sorted = true;
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] >= arr[j - 1]) continue;
      swap(arr, j, j - 1);
      sorted = false;
    }
  }
};
const arr = init();
console.log(arr);
bubbleSort(arr);
console.log(arr);

const arr2 = init();
console.log(arr2);
bubbleSort2(arr2);
console.log(arr2);
