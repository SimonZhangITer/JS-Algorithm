# 插入排序

插入排序（英语：Insertion Sort）是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入

## 算法思想

1. 从第一个元素开始，该元素可以认为已经被排序
2. 取出下一个元素，在已经排序的元素序列中从后向前扫描
3. 如果该元素（已排序）大于新元素，将该元素移到下一位置
4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
5. 将新元素插入到该位置后
6. 重复步骤2~5

## 动图演示

![](./gif/insertionSort.gif)

## 代码实现

```javascript
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
```