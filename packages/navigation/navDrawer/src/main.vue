<template>
<div :style="{width: open ? size : bar?'50px':'0px',order: '-1000'}" 
	:class="'modal-'+modal" class="but-drawer-container">

	<!-- 偏移组件 -->
	<transition name="drawer-container">
		<div v-if="open" @click="close" :class="'modal-background-'+modal"
			class="but-drawer-content"/>
	</transition>
	<transition name="drawer">
		<div v-if="open&&!bar" :style="{width: size}" class="but-drawer" >
			<!-- 菜单选项 -->
			<div class="but-drawer-item">
				<slot/>
			</div>
			<!-- 常驻选项 -->
			<div class="but-drawer-menu">
				<slot name="menu"/>
			</div>
		</div>
	</transition>

	<!-- 导航条状态 -->
	<div v-if="bar" :style="{width: !open?'50px':size}" class="but-drawer" >
		<!-- 菜单选项 -->
		<div class="but-drawer-item">
			<slot/>
		</div>
		<!-- 常驻选项 -->
		<div class="but-drawer-menu">
			<slot name="menu"/>
		</div>
	</div>
</div>
</template>

<script>
import PropValidator from '../../../core/utils/propValidator'
export default {
	name: 'ButNavDrawer',
	props: {
		width: {
			type: [String, Number],
			default: '300px'
		},
		open: {
			type: Boolean,
			default: false
		},
		bar: {
			type: Boolean,
			default: true
		},
		modal: {
			type: String,
			default: 'sm',
			...PropValidator('modal', ["none", "open", "sm", "md", "lg"])
		}
	},
	data() {
		return {
			container: this.open
		};
	},
	computed: {
		size() {
			return (typeof this.width == 'string') ? this.width : `${this.width}px`;		// 判断是否带后缀,如果是纯数字则带上单位px
		},
		// Hide() {
		// 	return 
		// }
	},
	methods: {
		close() {
			this.$emit("close");
		},
		containerOpen() {
			this.container = this.open;
		}
	},
	provide(){
		return {
			opens: this.open
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';
.but-drawer-container {
	box-sizing: border-box;
	flex-shrink: 0;
	position: relative;

	transition: .2s ease;

	.but-drawer-content {
		height: 100%;
		z-index: @zindex-navbar;
		background-color: var(--modal-background);
		position: absolute;
		top: 0;
		left: 0;
	}

	.but-drawer {
		height: 100%;
		background-color: var(--background);
		z-index: @zindex-navbar;
		position: absolute;
		pointer-events: auto;
		transition: .2s ease-in;
		top: 0;
		left: 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		.but-drawer-item {
			width: 100%;

			overflow: hidden;

			display: flex;
			align-items: center;
			flex-direction: column;
		}

		.but-drawer-menu {
			width: 100%;
			overflow: hidden;

			display: flex;
			align-items: center;
			flex-direction: column;
		}
	}
}


// 基于媒体查询的模态组件
.modal-open {
	.modal;
}
.modal-background-open {
	.modal-background;
}
@media (max-width: @screen-sm) {										/*当宽度大于768px时触发*/
	.modal-sm {
		.modal;
	}
	.modal-background-sm {
		.modal-background;
	}
}
@media (max-width: @screen-md) {										/*当宽度大于992px时触发*/
	.modal-md {
		.modal;
	}
	.modal-background-md {
		.modal-background;
	}
}
@media (max-width: @screen-lg) {										/*当宽度大于1200px时触发*/
	.modal-lg {
		.modal;
	}
	.modal-background-lg {
		.modal-background;
	}
}

.modal {
	width: 100% !important;
	height: 100%;
	position: absolute !important;
	z-index: @zindex-modal-background;
	pointer-events: none;
}
.modal-background {
	width: 100% !important;
	height: 100%;
	position: absolute;
	pointer-events: auto;
	z-index: @zindex-modal-background;
}

// 背景动画
.drawer-container-enter-active, .drawer-container-leave-active {
	transition: .2s ease-in;
}
.drawer-container-enter, .drawer-container-leave-to {
	opacity: 0;
}

// 左侧动画
.drawer-enter-active {
	transition: .16s ease-out;
}
.drawer-leave-active {
	transition: .2s ease-in;
}
.drawer-enter, .drawer-leave-to {
	transform: translateX(-100%);
}

// 左侧动画
.bar-enter-active {
	transition: .16s ease-out;
}
.bar-leave-active {
	transition: .2s ease-in;
}
.bar-enter, .bar-leave-to {
	// transform: translateX(-100%);
	width: 50px;
}
</style>