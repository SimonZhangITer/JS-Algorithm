# 选择排序

选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度

## 算法思想

1. 在未排序序列中找到最小（大）元素
2. 存放到排序序列的起始位置
3. 从剩余未排序元素中继续寻找最小（大）元素
4. 然后放到已排序序列的末尾
5. 以此类推，直到所有元素排序完毕

## 代码实现

```javascript
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
```