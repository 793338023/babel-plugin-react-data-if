## 使用

```
npm i babel-plugin-react-data-if
```

在 babel 的配置`plugins`最前面添加`react-data-if`

```
"plugins": [
      "react-data-if"
    ]
```

然后可以在 react 内使用`data-if`去做显示隐藏的效果，类似`v-if`

```jsx
<div data-if={props.number % 2}>{props.number}</div>
```
