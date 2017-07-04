// 深度优先搜索
const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

const arr = [1, [2, 3],
  [4, [5, 6, [7, 8, 9]]], 10
]

const obj = [{
  value: '1',
  children: [{
    value: '1-1'
  }, {
    value: '1-2',
    children: [{
      value: '1-2-1'
    }]
  }]
}, {
  value: '2'
}, {
  value: '3',
  children: [{
    value: '3-1',
    children: [{
      value: '3-1-1'
    }, {
      value: '3-1-2',
      children: [{
        value: '3-1-2-1'
      }]
    }]
  }]
}]

// 深度优先搜索
function DFS(tree, nodes = []) {
  for (key in tree) {
    let value = tree[key]
    if (typeof value === 'string') nodes.push(value) // 这里对应的业务逻辑是string,根据实际情况判断
    else DFS(value, nodes)
  }
  return nodes
}

// 广度优先搜索
function BFS(tree, nodes = []) {
  let arr = []
  tree.forEach((data, i) => {
    nodes.push(data.value)
    if (data.children) arr.push(...data.children) // 将数组拆分成元素Push进新数组
    if (i === tree.length - 1) {  // 当前数组遍历完毕
      if (!arr.length) return nodes // 如果没有子类，则跳出循环
      BFS(arr, nodes) // 循环递归
    }
  })
  return nodes
}

console.log(BFS(obj));