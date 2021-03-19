export const init = (
  len: number = 20,
): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    const n = Math.round(Math.random() * 100);
    arr.push(n);
  }
  return arr;
};
export const swap = <T> (
  arr: T[],
  i: number,
  j: number,
): void => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
