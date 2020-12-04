<template>
	<view class="footer flex align-center justify-between">
		<view class="px-2">
			<view class="btn say flex align-center">
				<text class="text-white font">说点什么...</text>
			</view>
		</view>
		<view class="flex align-center">
			<view class="btn mr-2">
				<text class="iconfont text-white font">金币<!-- &#xe607; --></text>
			</view>
			<view class="btn mr-2 bg-warning">
				<text class="iconfont text-white font">礼物<!-- &#xe607; --></text>
			</view>
			<view class="btn mr-2">
				<text class="iconfont text-white font">分享<!-- &#xe607; --></text>
			</view>
			<view class="btn mr-2">
				<text class="iconfont text-white font">关闭<!-- &#xe607; --></text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	/* 底部操作条 */
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 120rpx;
		background-color: rgba(0, 0, 0, 0.2);
	}

	.btn{
		width: 80rpx;
		height: 80rpx;
		border-radius: 100rpx;
		align-items: center;
		justify-content: center;
		background-color: rgba(255, 255, 255, 0.3);
	}
	.say {
		width: 200rpx;
	}
</style>
