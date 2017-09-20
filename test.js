


for (var i = 1; i <= 10; i++) { 
  var doc = document.createElement('button'); 
  doc.innerHTML = i;

  //错误写法
  doc.onclick = function () {
    console.log(i);
  }

  //方法一
  // doc.onclick = function() {
  //     console.log(this.toString());
  // }.bind(i);

  //方法二
  // doc.onclick = function (x) {
  //   return function () {
  //     console.log(x);
  //   }
  // }(i);

  //方法三
  // doc.onclick = function() {
  //   var x= i;
  //   return function () {
  //     console.log(x);
  //   }
  // }()

  //方法四 arguments.callee指向匿名函数自身，此方法系统消耗最小
  // (doc.onclick = function() {
  //   console.log(arguments.callee.x);
  // }).x = i;

  //方法五
  // doc.dataset.value = i;
  // doc.onclick = function(){
  //   console.log(this.dataset.value);
  // };
  document.body.appendChild(doc);
}
