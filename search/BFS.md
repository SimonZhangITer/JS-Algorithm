# 广度优先搜索

广度优先搜索（BFS）是一种图形搜索方法。简单的说，BFS是从根节点开始，沿着树的宽度遍历树的节点，如果所有节点均被访问，则算法终止。

## 算法图示

![BFS](http://opnxqffe4.bkt.clouddn.com/14991495774323.jpg)

## 算法思想
 
从上图可以看出广度优先搜索是按层次一层一层的来遍历搜索的。首先需要一个临时的数组来存储子类，在遍历过程中，
如果遇到子类（children），则将子类push到临时数组中，重复这样的操作直到没有子类为止。

打个比方，用广度优先搜索一个公司的人员，那就是首先列出总裁、董事长1、董事长2...这样一层一层的往下遍历，当同级别的员工遍历完成才会继续遍历下一级别的员工

## 代码示例

这里我们用一个数组对象来模拟层级关系
```javascript
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

<!-- 输出结果
[ '1',
  '2',
  '3',
  '1-1',
  '1-2',
  '3-1',
  '1-2-1',
  '3-1-1',
  '3-1-2',
  '3-1-2-1' ]
-->
```