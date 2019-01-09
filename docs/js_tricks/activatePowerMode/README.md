### 输入烟火抖动特效

```html
<input type="text" placeholder="test"><input type="button" value="dianji"> <br/>
<textarea name="" id="" cols="30" rows="10"></textarea><br/>
<script src="./activate-power-mode.js"></script>
<script>
    POWERMODE.colorful = true;  // 冒光特效 
    POWERMODE.shake = false;    // 抖动特效 
    document.body.addEventListener('input', POWERMODE); // 为所有 input 标签都加上特效 
</script>
```
<<< ./tpl/activate-power-mode.js
