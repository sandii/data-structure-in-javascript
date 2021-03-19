/*
* author: chenzhi <chenzhibupt@qq.com>
* date: Mar 19, 2021
*
* quick sort
* nlogn ~ n^2
* 
* set a pivot
* put smaller ones to the left & bigger ones to the right
* then sort smaller ones & bigger ones
*/

import { init, swap } from '../utils/arr';

const quickSort = (
  arr: number[],
  l: number,
  r: number,
): void => {
  if (l >= r) return;
  const pivot = arr[l]; // set first one as pivot
  let writer = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] >= pivot) continue;
    writer++;
    swap(arr, writer, i); // put smaller one to the left
  }
  swap(arr, l, writer); // put pivot in the middle

  quickSort(arr, l, writer - 1);
  quickSort(arr, writer + 1, r);
};

const arr = init();
console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);
