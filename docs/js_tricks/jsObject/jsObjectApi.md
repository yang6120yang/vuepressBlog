# Object对象相关

## 理解对象

```javascript
ECMAScript中的对象就是一组 **数据** 和 **功能** 的集合；
对象的创建：new操作符后跟要创建的数据类型的名称，创建Object实例并为其添加属性和方法，就是创建自定义对象；
Object的每个实例都拥有的属性和方法
（1）constructor:保存着用于创建当前对象实例的函数；
（2）hasOwnProperty(propertyName):检查指定的属性是否存在于当前对象实例；
（4）isPrototypeOf(Object):检查指定的对象是不是当前对象的原型；(难点)
（5）propertyIsEnumerable(propertyName):检查指定属性是否能用for-in枚举；
（6）toLocaleString():返回对象的字符串表示；
（7）toString():返回对象的字符串表示；
（8）valueOf():返回对象的字符串，数值或布尔值表示，通常与toString（）返回值相同； 
```

## 创建对象

### 1.创建Object实例，为它添加属性和方法

```javascript
var obj=new Object();
obj.name='amy';
obj.age=23;
obj.sayName=function(){
    console.log(this.name);
}
```

### 2.对象字面量的方法，为它添加属性和方法

```javascript
var obj={
    name:'amy',
    age:23,
    sayName:function(){
        console.log(this.name);
    }
}
```

## 属性类型

```javascript
两种属性：数据属性和访问器属性
数据属性有四个描述其行为的特性：
（1）Configurable:能否通过delete删除属性，默认为true;
（2）Enumerable:能否通过for-in循环返回属性，默认为true;
（3）Writable:能否改写属性的值，默认为true;
（4）Value:这个属性的值;
要修改属性的默认行为，必须使用Object.defineProperty()方法
    Object.defineProperty(obj,'name',{
        configurable:false,
        value:'jin'
    })
访问器属性不包含数据值，包含一对getter和setter函数，访问器属性有4个特性：
（1）Configurable:能否通过delete删除属性，默认为true;
（2）Enumerable:能否通过for-in循环返回属性，默认为true;
（3）Get:在读取属性时调用的函数，默认为undefined;
（4）Set:在写入属性时调用的函数,默认为undefined;
    var book={
        _year:2004,
        edition:1
    };
    Object.defineProperty(book,'year',{
        get:function(){
            return this._year;
        },
        set:function(newvalue){
            if(newvalue>2004){
                this._year=newvalue;
                this.edition+=newvalue-2004;
            }
        }
    });
    book.year=2005;
    alert(book.edition);    //2
    访问器属性的常见方法就是设置一个属性的值会导致其他属性值发生变化
```

## 创建对象

### 1.工厂模式

```javascript
用函数封装，以特定的接口创建对象
function CreatePerson(name,age){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.sayName=function(){
        console.log(this.name);
    }
    return o;
}
var amy=CreatePerson('amy',23);
amy.sayName();  //amy
console.log(amy instanceof CreatePerson);   //false
缺点：不知道对象实例属于哪个类型；
```

### 2.构造函数：创建特定类型的对象

```javascript
function Person(name,age){
    this.name=name;
    this.age=age;
    this.sayName=function(){
        console.log(this.name);
    }
}
var person1=new Person('amy',23);
var person2=new Person('amy',24);
与工厂模式的区别：
（1）没有显示的创建对象；
（2）直接将属性和方法赋给了this对象；
（3）没有return 返回新对象；
new操作符做了四件事情：
（1）创建一个新对象；
（2）将this指向新对象；
（3）为新对象添加属性和方法；
（4）返回这个新对象；
优点：确定了实例对象的类型
    console.log(person1 instanceof Person);   //true
    console.log(person2 instanceof Person);   //true
缺点：每个方法都要在每个对象上重新创建一遍
```

### 3.原型模式

```javascript
使用原型对象的好处：可以让所有实例共享它的属性和方法
Person.prototype.sayName=function(){
    console.log(this.name);
}
console.log(person1.sayName==person2.sayName);  //true
理解原型对象
原型对象都有一个constructor属性指向构造函数；
console.log(person1.__proto__==Person.prototype);//true [[prototype]]
console.log(Person.prototype.constructor==Person);//true
问题：引用类型值（比如数组，对象实例会修改原型）
```

### 4.组合使用原型模式和构造函数

```javascript
构造函数用于定义实例的属性，原型模式定义方法好共享的属性；
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype={
    costructor:Person,
    sayName:function(){
        console.log(this.name);
    }
}
```

## 继承

### 1.原型链继承

```javascript
SubType.prototype=new SuperType();
问题：引用类型值
```

### 2.借用构造函数

```javascript
function SubType=function(){
    SuperType.call(this);
}
```

### 3.组合继承

```javascript
原型链实现对原型属性和方法的继承，构造函数对实例属性的继承；
```