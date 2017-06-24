var arr = [2,1,9,6,4,3]

function insertSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentData = arr[i];
    var preIndex = i - 1; // 从当前元素的前一个开始比较
    while (preIndex >= 0 && arr[preIndex] > currentData) {
      arr[preIndex + 1] = arr[preIndex]; // 互换位置，但是currentData已经存储，所以不用考虑arr[preIndex]的值
      preIndex--;
    }
    arr[preIndex + 1] = currentData;
  }
  return arr
}

console.log(insertSort(arr));