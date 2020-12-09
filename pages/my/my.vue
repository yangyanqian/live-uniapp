<template>
	<view>
		<view class="px-4 flex align-center" style="height: 180rpx">
			<view class="flex-1 flex align-center" style="height: 106rpx;">
				<image src="../../static/1.jpg" mode="" style="width: 106rpx;height: 106rpx;"
				class="rounded-circle mr-2"></image>
				<view>
					<text class="font font-weight-bold">测试2</text>
					<br>
					<text class="font-sm text-secondary">暂无描述</text>
				</view>
			</view>
			<view class="border border-main flex align-center justify-center rounded" 
			style="width: 150rpx; height: 65rpx;">
				<text class="font text-main">编辑资料</text>
			</view>
		</view>
		<view class="border-block"></view>
		<view class="px-2">
			<view class="my-list-item flex align-center">
				<view class="flex-1">
					<text class="iconfont iconbizhongguanli"></text>
					<text class="font ml-2">我的金币</text>
				</view>
				<view class="">
					<text class="font">50币</text>
					<text class="font text-main ml-2">充值</text>
				</view>
			</view>
			<view class="my-list-item flex align-center">
				<view class="flex-1">
					<text class="iconfont iconzhengzaizhibo"></text>
					<text class="font ml-2">我的直播</text>
				</view>
				<view class="">
					<text class="font mr-1">0</text>
					<uni-icons type="arrowright" color="rgb(143, 143, 148)"></uni-icons>
				</view>
			</view>
			<view class="my-list-item flex align-center">
				<view class="flex-1">
					<text class="iconfont iconzhengzaizhibo"></text>
					<text class="font ml-2">我的关注</text>
				</view>
				<view class="">
					<text class="font mr-1">0</text>
					<uni-icons type="arrowright" color="rgb(143, 143, 148)"></uni-icons>
				</view>
			</view>
			<view class="my-list-item flex align-center">
				<view class="flex-1">
					<text class="iconfont iconbizhongguanli"></text>
					<text class="font ml-2">历史记录</text>
				</view>
				<view class="">
					<uni-icons type="arrowright" color="rgb(143, 143, 148)"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-ui/uni-icons/uni-icons.vue';
	export default {
		components: {
			uniIcons
		},
		data(){
			return {
				
			} 
		}
	}
</script>

<style>
	.border-block {
		height: 16rpx;
		background-color: #F5F5F3;
	}
	.my-list-item {
		height: 90rpx;
	}
</style>
