/*
* author: chenzhi <chenzhibupt@qq.com>
* date: Mar 19, 2021
*
* swap sort
* 
*/

import { init, swap } from '../utils/arr';

const arr = init();
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) continue;
    swap(arr, i, j);
  }
}
console.log(arr);
