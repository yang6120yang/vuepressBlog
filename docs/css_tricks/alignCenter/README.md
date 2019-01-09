---
sidebarDepth: 2
---
# 居中显示的技巧

## 1.Horizontally 水平居中

### 1.1 inline或inline-*元素水平居中

给需要居中的元素一个block父元素,需要居中子元素为 文本 或者 inline, inline-block, inline-table, inline-flex

核心代码：

```css
.center-children {
  text-align: center;
}
```

### 1.2block元素水平居中

父元素为block,子元素也为bolck,且子元素设置了宽度(没宽度子元素就继承父元素宽度,居中没有意义).
无论正在居中块级元素的宽度或父级的宽度如何，都会起作用。

方法:子元素margin: 0 auto;左右外边距设置为自动填充

核心代码：

```css
.center-me {
  margin: 0 auto;
}
```

### 1.3多个block元素水平居中

#### 1.3.1 多个block元素一行排列水平居中

· 方法一:利用inline-block,原理是将子元素转化为inline-block.再用text-align: center;
· 方法二:利用display: flex.注意:子元素高度会保持一致.看下方例子.
核心代码：

```css
.inline-block-center {
  text-align: center;
}
.inline-block-center div {
  display: inline-block;
  text-align: left;
}

.flex-center {
  display: flex;
  justify-content: center;
}
```

#### 1.3.2 多个block元素每行一个水平居中

因为每个block元素独占一行,所以方法仍然是margin: 0 auto;

```css
div {
    margin: 0 auto;
}
```

## 2.Vertically垂直居中

### 2.1 inline 或 inline-* 元素单行垂直居中

#### 2.1.1 方法一:上下使用相同的padding(推荐)

上下和左右使用相同的padding可以不用设置宽高,既可以在修改文本内容是自适应,又可以减少出现BUG的几率.
核心代码：

```css
.link {
  padding-top: 30px;
  padding-bottom: 30px;
}
```

#### 2.1.2 方法二:设置line-height与高度相同

核心代码：

```css
.center-text-trick {
  height: 100px;
  line-height: 100px;
  white-space: nowrap;
/*nowrap文本内的换行无效内容只能在一行显示*/
}
```

### 2.2 多行文本垂直居中

多行文本使用增加上下padding垂直居中的方法仍然有效且良好,不需设置宽高,推荐使用.
如果这样做不起作用，那么文本所在的元素可能是table或者table-cell元素，无论是真正的table还是后期自己添加的CSS.
两种情况使用其他方法的垂直居中:

#### 2.2.1:方法一:display: table;和vertical-align: middle

核心代码：

```css
.center-table {
  display: table;
  
}
.center-table p {
  display: table-cell;
  vertical-align: middle;
}
```

#### 2.2.2 使用flex布局多行文本居中

一个flex-child可以简单地在flex-parent的中心.
核心代码：

```css
.flex-center-vertically {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 400px;
}
```

### 2.3 block元素垂直居中

#### 2.3.1已知block元素高度

原理是绝对定位,top: 50%;然后 margin-top设置为负边距且值为他本身高度的一半.
核心代码：

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  height: 100px;
  margin-top: -50px; /* account for padding and border if not using box-sizing: border-box; */
}
```

> 注意:使用 position: absolute;绝对定位会使元素脱离文档流

### 2.3.2 block元素高度未知垂直居中

借助CSS3中的transform属性向Y轴反向偏移50%的方法实现垂直居中。但是部分浏览器存在兼容性的问题。
核心代码：

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

#### 2.3.3 使用flex布局block元素高度未知垂直居中

核心代码：

```css
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

## 3.Both Horizontally and Vertically水平垂直居中

### 3.1有固定宽高的元素

核心代码：
依旧是绝对定位+宽高一半的负边距

```css
.parent {
  position: relative;
}

.child {
  width: 300px;
  height: 100px;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;

  margin: -70px 0 0 -170px;
}
```

### 3.2 宽高不固定

利用2D变换，在水平和垂直两个方向都向反向平移宽高的一半，从而使元素水平垂直居中。

核心代码：

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 3.3 使用flex布局垂直水平居中

核心代码：

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 3.4 使用grid布局垂直水平居中

```css
body, html {
  height: 100%;
  display: grid;
}
span { /* thing to center */
  margin: auto;
}
```