# input
一个基本input组件

```vue
<template>
	<but-input v-model="data"/>
</template>
<script>
export default {
	data() {
		return {
			data: '???'
		};
	},
	methods: {
		dark() {
			this.$color = 'light';
		}
	}
};
</script>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value | 预定义的值 | Number| — | — |