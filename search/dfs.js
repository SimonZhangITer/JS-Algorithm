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

function DFS(tree, nodes = []) {
  for (key in tree) {
    let value = tree[key]
    if (typeof value === 'number') nodes.push(value)
    else DFS(value, nodes)
  }
  return nodes
}

console.log(DFS(tree));