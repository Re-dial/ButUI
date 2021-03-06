# 栅格布局
栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局容器中。
+ &lt;but-row&gt;: 行级容器,用于容纳column项目创建布局系统
+ &lt;but-col&gt;: 列成员,用于划分每格栅格组件

## 基础布局
```vue
<template>
<but-row :gutter="10">
	<but-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></but-col>
	<but-col :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></but-col>
	<but-col :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></but-col>
	<but-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></but-col>
</but-row>
</template>
<script>
export default {
	data() {
		return {
			col: {
				xs: 1,
				md: 2
			},
		};
	}
};
</script>
<style>
.but-row {
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
}
.but-col {
	border-radius: 4px;
}
.bg-purple-dark {
	background: #99a9bf;
}
.bg-purple {
	background: #d3dce6;
}
.bg-purple-light {
	background: #e5e9f2;
}
.grid-content {
	border-radius: 4px;
	min-height: 36px;
}
.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}
</style>
```



### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type | 类型 | String| — | — |

### 隐藏断点类
| 类名      | 说明    |
|---------- |-------- |
| hidden-xs | 在超小屏幕下隐藏 |
| hidden-ms | 在小屏幕下隐藏 |
| hidden-md | 在中等屏幕屏幕下隐藏 |
| hidden-lg | 在大屏幕下隐藏 |
| hidden-xl | 在超大屏幕下隐藏 |