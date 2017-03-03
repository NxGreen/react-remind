# react-remind

## 下载 

    git clone git@github.com:NxGreen/react-remind.git
    
    cd react-remid

    npm install

## 运行

    npm run dev (开发模式)

    直接打开 index.html 就可以看到效果

## 说明
    

    1. 本项目是一个简单的 react + es6 + webpack 入门练习demo
    
    2. 如果觉得不错的话，您可以点右上角 "Star" 支持一下 谢谢！ ^_^
    
    3. 我也是参考的 大神的一个 todos的项目 [传送门](https://github.com/NxGreen/react-remind/issues)改成一个 类似 苹果手机上的提醒事项 例子。
    


    


## 菜鸟总结+疑惑

1. 首先说明一下：可能一下表述和观点有问题，还请大神们给予正确的解答和答复。欢迎大家[Issues](https://github.com/NxGreen/react-remind/issues) 中提问，或者加我Q：545337574

2. 标签必须要闭合。不然会报错，这个很容易忽略。
    比如
    `<input type="text" >`
    这样会报错，必须添加闭合标签 改写成 
    `<input type="text" />`

3. spread操作符 必须加载 react组件上，不能添加在元素上。
    错误示例
    `<ul  {...props} ></ul>`
    正确示例
    `<RemindHeader {...props} />`

4. 给元素添加自定义属性建议添加 "data-" 前缀，不然会有报错。
    错误示例  
    `<li index={ props.index }></li>`
    正确示例 
    `<li data-index={ props.index} ></li>`

5. 总觉得用react 写事件有点繁琐。做一个子组件的事件，需要传递到父组件来改变状态。


6. react 组件中，子元素如何获取父元素的 属性。例如

    <li key={index} className={isShowAll} style={doneStyle} >
        <input className="inp " type="checkbox" checked={item.isDone}     onChange={this.handleChange.bind(this)} data-index={index} />
    </li>
    我如何在触发input 的时候，直接获取 li上的 {index}值，而不需要 给 input添加自定义属性 data-index。

7. 好吧，先到这了。


