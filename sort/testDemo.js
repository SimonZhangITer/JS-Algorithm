// 1. 在未排序序列中找到最小（大）元素
// 2. 存放到排序序列的起始位置
// 3. 从剩余未排序元素中继续寻找最小（大）元素
// 4. 然后放到已排序序列的末尾
// 5. 以此类推，直到所有元素排序完毕

var arr = [
  2,
  1,
  9,
  6,
  4,
  3
]

// 每找出一个最小元素，将此元素添加进临时数组, 并在原数组中删除此元素，继续遍历，直到原数组的长度为0
function selectionSort(arr) {
  let temp = [], // 存放最小的元素，每次push进去
    len = arr.length
  while (temp.length < len) {
    let min = Math.min(...arr) // 当前数组的最小元素
    temp.push(min)
    arr.splice(arr.indexOf(min), 1) // 移除最小元素
  }
  return temp
}

// 插入排序
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
