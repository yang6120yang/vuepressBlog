---
sidebarDepth: 2
---
# 数组方法汇总

## Javascript原生方法

注意:js数组每一项可以保存任何类型的数据，比如第一个元素是字符串，第二个元素是数字，第三个元素是对象

### 创建数组

tips: 建议使用数组字面量方式【简单】

```javascript
var colors = newArray()
var colors = newArray('red','blue')
var colors = [];
var colors = ['red','blue'];
```

### 检测数组

对于一个网页或一个全局作用域，可以通过如下方法

```javascript
if(arr instanceofArray){
    //对数组执行某些操作
}
```

网页中包含多个框架，通过如下ES5方法检测

```javascript
if(Array.isArray(arr)){
    //对数组执行某些操作
}
```

### 转换方法

arr.valueOf()

```javascript
var colors = ['red','blue','green']
colors.valueOf() //['red','blue','green']
```

arr.toString()

```javascript
var colors = ['red','blue','green']
colors.toString() //"red,blue,green"
```

tips: arr.toString() 与 arr.join()输出相同，不过join里可以输入其它链接符

### push、pop、unshift、shift

arr.push(item)

接受任意数量的参数，添加到数组末尾，返回新数组的长度

```javascript
var colors = ['red']colors.push('blue','green'); //3
```

arr.pop()

删除数组最后一项，返回删除的项

```javascript
var colors = ['blue','green']colors.pop() //green
```

arr.unshift()

接受任意数量的参数，添加到数组头部，返回新数组的长度

```javascript
var colors = ['red']colors.unshift('green') //2
```

arr.shift()

删除数组第一项，返回删除的项

```javascript
var colors = ['blue','green']colors.shift() //blue
```

### reverse、sort、concat、slice

arr.reverse()

反转数组的顺序，并返回重新排序之后的数组， 原数组会被改变

```javascript
var arr1 = [1,2,3,'red','blue']arr1.reverse() //["blue", "red", 3, 2, 1]
```

arr.sort()

如果不传参数，默认情况下数组内的元素会被转换为字符串进行比较，因此一般不推荐直接使用默认的arr.sort()进行排序。

返回值为排序后的新数组。原数组会被改变

注意：sort里接收一个比较参数

```javascript
var b = [1,2,3]
//升序b.sort((a,b)=>a-b) //[1, 2, 3]
//降序b.sort((a,b)=>b-a) //[3, 2, 1]
```

[sort扩展(非数字类型排序，对象里的某个key值排序)](https://segmentfault.com/a/1190000000410506)

```javascript
// 例一
var arr = [
    {name:'zopp',age:0},
    {name:'gpp',age:18},
    {name:'yjj',age:8}
];

function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}
console.log(arr.sort(compare('age')))

// 例二
sortBy: function(attr,rev){
    //第二个参数没有传递 默认升序排列
    if(rev ==  undefined){
        rev = 1;
    }else{
        rev = (rev) ? 1 : -1;
    }
    return function(a,b){
        a = a[attr];
        b = b[attr];
        if(a < b){
            return rev * -1;
        }
        if(a > b){
            return rev * 1;
        }
        return 0;
    }
}
newArray.sort(sortBy('number',false)) // 使用
```

arr.concat()

没有传递参数，那么只是复制当前数组并返回副本，原数组不变；

传递一个元素（数组）或多个元素（数组）,会将其合并到arr中，返回新数组，原数组不变

```javascript
var colors = ['red','blue','green']colors.concat('gray',['a','green'])  //["red", "blue", "green", "gray", "a", "green"]console.log(colors) // ["red", "blue", "green"]
```

tips: js数组复制

arr.concat()    //原生 [...arr]   //ES6Array.from(arr) //ES6$.extend(arr) //JQ

arr.slice

剪切数组，返回剪切之后的数组，元素不会改变

1、传入一个参数，表示起始位置，结束位置为最末尾

```javascript
var colors = ['red','blue','green']
colors.slice(2) //['green']
```

2、传入2个参数，表示起始位置与结束位置，但不包括结束位置所在的元素

```javascript
var colors = ['red','blue','green']
colors.slice(1,2) //['blue']
```

splice()

删除：arr.splice(index, num)

传入两个参数，第一个为位置（ 数组下标），第二个为删除的项数，可以删除任意项，返回删除元素组成的数组，原数组变了

```javascript
var colors = ['red','blue','green']
colors.splice(1,1) //['blue']
```

插入：arr.splice(index,0,item)

传入3个参数， [起始位置（ 数组下标） | 要删除的项数 为0 | 要插入的元素]， 最终返回删除掉的元素组成的数组，因为这里删除项数为0，因此会返回空数组

```javascript
var colors = ['red','blue','green']colors.splice(1,0,'gray')
//[]console.log(colors) // ['red','gray','blue','green']
```

替换：arr.splice(index, num, item)

传入3个参数，[起始位置 | 要删除的项数 | 要插入的任意项数]， 最终返回删除掉的元素组成的数组

```javascript
var colors = ["red", "gray", "blue", "green"]colors.splice(2,2,'yellow')
// ["blue", "green"]console.log(colors); //["red", "gray", "yellow"]
```

tips:这个方法会因为参数的不同而实现不同的功能

### 查找元素

arr.indexOf()

验证数组中是否含有某个元素，返回第一个匹配到的元素在数组中所在的位置，如果没有，则返回 -1

```javascript
var colors =  ["red", "gray", "yellow"]colors.indexOf('gray') // 1colors.indexOf('mm') //-1
```

arr.lastIndexOf()

验证数组中是否含有某个元素，不过是从数组尾部开始查找，返回第一个匹配到的元素所在的位置，如果没有，则返回-1

```javascript
var colors =  ["red", "gray", "yellow","gray"]colors.indexOf('gray') // 3colors.lastIndexOf('mm') //-1
```

### 迭代方法

ES5定义了5个迭代方法，每个方法接收2个参数----》[要在每一项上运行的函数 | 运行该函数的作用域对象（可选）]

运行的函数包括3个参数 ---》 [数组项的值 | 该项在数组中的位置 | 数组对象本身]

arr.every()

检查数组中的项是否满足某个条件，传入的函数对每一项都返回true,则返回true

```javascript
var nums = [1,2,3,4,5,4,3,2,1]
nums.every((item, index, arr)=> item >2 ) //false
```

arr.some()

检查数组中的项是否满足某个条件，只要传入的函数对数组中某一项返回true,则返回true

```javascript
var nums = [1,2,3,4,5,4,3,2,1]
nums.some((item, index, arr)=> item >2 ) //true
```

arr.filter()

对数组中的每一项运行给定函数，返回该函数会返回true的项组成的新数组

```javascript
//返回nums中所有值大于2的数组
var nums = [1,2,3,4,5,4,3,2,1]
nums.filter((item, index, arr)=> item >2 ) //[3, 4, 5, 4, 3]
```

arr.map()

对数组中的每一项运行给定函数，返回每次函数调用的结果组成的新数组

```javascript
//返回nums中每一项乘以2的数组
var nums = [1,2,3,4,5,4,3,2,1]
nums.map((item, index, arr)=> item * 2 ) // [2, 4, 6, 8, 10, 8, 6, 4, 2]
```

arr.forEach()

对数组中的每一项运行给定函数，这个方法没有返回值

```javascript
//返回nums中每一项乘以2的数组
var nums = [1,2,3,4,5,4,3,2,1]
nums.forEach((item, index, arr)=> item * 2 ) // undefined
```

tips： map、forEach里不可以使用continue、break ,每一项都会执行，如果遍历中要用到continue或break提升效率，则可以使用for()循环 或 for...of..循环

### 归并操作

每个方法接收两个参数[在每一项上调用的函数 | 作为归并基础的初始值（可选）],都会迭代数组每一项，返回一个最终的值

函数接收4个参数[前一个值 | 当前值 | 项的索引 | 数组对象本身]

arr.reduce()

从左开始

```javascript
//求数组所有元素之和
var nums = [1,2,3,4,5]
nums.reduce((prev,cur,index,arr)=>prev+cur) //15
```

arr.reduceRight()

从右开始

```javascript
//求数组所有元素之和
var nums = [1,2,3,4,5]
nums.reduceRight((prev,cur,index,arr)=>prev+cur) //15
```

## ES6数组方法扩展

### 1、求一个数组中最大元素

由于js不提供求数组最大元素的函数，所以只能套用Math.max函数将数组转为一个参数序列，然后求最大值；有了扩展运算符以后就可以直接使用了Math.max了

```javascript
//ES5的写法
Math.max.apply(null,[1,3,6]) ///6
//ES6的写法
Math.max(...[1,3,6]) //6
```

### 2、通过push函数将一个数组添加到另一个数组的尾部

ES5的写法中，push的参数不可以是数组，所以只好通过apply方法变通使用push方法；有了扩展运算符，可以直接将数组传入push方法中

```javascript
//ES5的写法
var arr1 = [1,2]var arr2 = [4,5]
Array.prototype.push.apply(arr1,arr2) //返回新数组长度，arr1改变
//ES6的写法
var arr1 = [1,2]var arr2 = [4,5]
arr1.push(...arr2) //返回新数组长度，arr1改变
```

### 3、合并数组

```javascript
//ES5写法
var arr = [4,5][1,2].concat(arr) //[1, 2, 4, 5]
//ES6写法
var arr = [4,5][1,2,...arr]
```

### 4、Array.from()妙用

```javascript
//数组去重
functioncombine(){
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组
    returnArray.from(newSet(arr));
}
var m = [1, 2, 2], n = [2,3,3];
console.log(combine(m,n)); // [1, 2, 3]
//遍历Nodelist对象
let ps = document.querySelectorAll('p')Array.from(ps).forEach(function(p){
    console.log(p)
})
//将字符串转化为数组
Array.from('hello') //["h", "e", "l", "l", "o"]
```

### 5、Array.of()

替代Array() 或 new Array(),并且不存在参数不同而导致的重载

```javascript
Array.of(2,3,5)
//[2,3,5]Array.of(2)
//[2]Array.of(2).length //1
```

### 6、arr.copyWithin()

将当前数组内部制定位置的成员复制到其他位置，返回当前新数组，原数组改变

接收三个参数[从该位置开始替换 | 从该位置开始读取数据 | 到该位置停止读取数据]

```javascript
//将4,5移动到前两位
[1,2,3,4,5].copyWithin(0,3) //[4,5,3,4,5]
```

### 7、arr.find() arr.findIndex()

找出第一个符合条件的数组成员，它参数是一个函数，每一个成员执行这个函数，找到返回true,没找到返回undefined

函数的参数[当前值 | 当前的位置 | 原数组]

```javascript
[1,4,9,10,15].find((item, index, arr)=>{    return item > 9;}) //10
[1,4,9,10,15].findIndex((item, index, arr)=>{    return item > 10;}) //4
```

### 8、arr.fill()

用给定的值填充一个数组

```javascript
['a','b','c'].fill(7) //[7,7,7]
['a','b','c'].fill(7,1,2) //['a',7,'c']
```

### 9、arr.includes()

数组是否包含某个值，返回true 或 false

```javascript
[1,2,3].includes(2) //true
```

### 10、for...of

遍历数组元素

```javascript
for(let item of colors){
    console.log(item) // red,gray,yellow
}
```

tips:里面可以使用break continue提升效率

## Jquery方法

### $.each(arr, fn)

遍历数组或者对象，fn有2个参数，分别为， 比原生的for in 更加健壮

[ 数组的索引或者对象的key值 | 索引或者key值对应的value值 ]

```javascript
var arr = [1, 2, 3];$.each(arr, function(key, value) {
    // do something
});
```

tips:跳过一次循环 return | return true 终止循环 return false

### $.grep(arr, fn)

过滤方法，功能类同原生中的arr.filter(fn)。此处fn的参数如下

[ value: 对象/数组的值 | key值或者序列 ]

```javascript
var arr = [ 1, 3, 6, 4 ];$.grep(arr, function(val, key) {
    return val >= 3;
});
// > [3, 6, 4]
// arr : [ 1, 3, 6, 4 ] 不会改变
```

### $.map(arr, fn)

对每项进行处理，返回处理结果组成的数组，此处fn的参数如下

[ value: 对象/数组的值 | key值或者序列 ]

```javascript
var arr = [1, 2, 5, 3];
$.map(arr, function(val, key) {
    return val * 10;
})
// > [10, 30, 30, 20, 10]
// 原数组不受影响
```

### $.inArray(item, array)

检测某一个元素item是否存在与数组之中，返回其所在的位置，如果不在，则返回-1

```javascript
$.inArray(3, [1, 2, 3]);// > 2
```

### $.merge(arr1, arr2)

合并数组，会改变第一个参数的数组为合并之后的数组，返回合并之后的数组

```javascript
var arr = [1, 3, 4];var arr2 = [4, 3, 1];
$.merge(arr, arr2);
// > [1, 3, 4, 4, 3, 1]
// 为了防止第一个数组被改变，可以使用下面的方式来写
$.merge($.merge([], arr), arr2);
```

### $.unique(arr)

过滤DOM数组中重复的元素

### $.makeArray(obj)

将类数组对象转换为数组

### $(elem).toArray()

将jQuery对象集合恢复成DOM数组

## 封装的常用方法

- 数组去重

```javascript
function noRepeat(arr) {
    return [...new Set(arr)]
}
```

- 查找数组最大

```javascript
function arrayMax(arr) {
    return Math.max(...arr)
}
```

- 查找数组最小

```javascript
function arrayMin(arr) {
    return Math.min(...arr)
}
```

- 返回已size为长度的数组分割的原数组

```javascript
function chunk(arr, size = 1) {
    return Array.from({
        length: Math.cel(arr.length / size)
    }, (v, i) => arr.slice(i * size, i * size + size))
}
```

- 检查数组中某元素出现的次数

```javascript
function countOccurrences(arr, value) {
    return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0)
}
```

- 扁平化数组(默认depth全部展开)

```javascript
function flatten(arr, depth = -1) {
    if (depth === -1) {
        return [].concat(...arr.map(v => Array.isArray(v) ? this.flatten(v) : v))
    }
    if (depth === 1) {
        return arr.reduce((a, v) => a.concat(v), []);
    }
    return arr.reduce((a, v) => a.concat(Array.isArray(v) ? this.flatten(v, depth - 1) : v), [])
}
```

- 对比两个数组并且返回其中不同的元素

```javascript
function diffrence(arrA, arrB) {
    return arrA.filter(v => !arrB.includes(v))
}
```

- 返回两个数组中相同的元素

```javascript
function intersection(arrA,arrB) {
    return arrB,filter(v => arrA.includes(v))
}
```

- 从右删除n个元素

```javascript
function dropRight(arr, n = 0) {
    return n < arr.length ? arr.slice(0, arr.length - n) : []
}
```

- 截取第一个符合条件的元素及其以后的元素

```javascript
function dropElements(arr, fn) {
    while (arr.length && !fn(arr[0])) arr = arr.slice(1)
    return arr
}
```

- 返回数组中下标间隔nth的元素

```javascript
function everyNth(arr, nth) {
    return arr.filter((v, i) => i % nth === nth - 1)
}
```

- 返回数组中第n个元素（支持复数）

```javascript
function nthElement(arr, n = 0) {
    return (n >= 0 ? arr.slice(n, n + 1) : arr.slice(n))[0]
}
```

- 返回数组头元素

```javascript
function arrHead(arr) {
    return arr[0]
}
```

- 返回数组末尾元素

```javascript
function arrLast(arr) {
    return arr[arr.length -1]
}
```

- 数组乱排

```javascript
function shuffle(arr) {
    let array = arr
    let index = array.length

    while (index) {
        index -= 1
        let randomInedx = Math.floor(Math.random() * index)
        let middleware = array[index]
        array[index] = array[randomInedx]
        array[randomInedx] = middleware
    }

    return array
}
```