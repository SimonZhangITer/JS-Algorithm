var arr = [2,1,9,6,4,3]

// 选择排序
function selectionSort(arr) {
  let temp = []
  let len = arr.length
  while (temp.length < len) {
    let min = 1000000000
    let index = 0
    arr.forEach( (a, i) => {
      if (a < min){
        min = a
        index = i
      }
    });
    temp.push(min)
    arr.splice(index, 1)
  }
  return temp
}

console.log(sort(arr));
