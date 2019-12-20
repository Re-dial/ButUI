export default [																// 所有组件列表
	require('./container').default,												// 栅格布局容器
	require('./grid').default,
	require('./page').default,
	require('./sandwich').default,												// 三明治布局容器
	require('./redraw').default,												// 容器监听组件
];

// (function(Vue) {
// 	// if (install.installed) return												// 判断是否安装，安装过就不继续往下执行
// 	// install.installed = true
	
// 	components.map(component => {												// 遍历注册所有组件
// 		// Vue.component(component.name, component);
// 		component.install(Vue);
// 	});
// })(window.Vue)

