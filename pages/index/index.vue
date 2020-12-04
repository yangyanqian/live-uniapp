<template>
	<view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="width: 100vw; height: 250rpx;">
			<swiper-item>
				<image src="../../static/banner/1.jpg" mode="" style="width: 100vw; height: 250rpx;"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/banner/2.jpg" mode="" style="width: 100vw; height: 250rpx;"></image>
			</swiper-item>
		</swiper>
		<!-- 列表 -->
		<view class="flex flex-wrap">
			<view class="list-item" v-for="i in 10" :key="i" @click="openLive()">
				<image src="../../static/1.jpg" mode="center"></image>
				<view class="sign position-absolute" style="top:10rpx;left:10rpx;">
					<text class="iconfont iconbizhongguanli text-warning" style="font-size: 20px;"></text>
					<text class="font-sm text-white ml-2">0</text>
				</view>
				<view class="sign position-absolute" style="top:10rpx;right:10rpx;">
					<text class="font-sm text-white">人气：0</text>
				</view>
				<view class="position-absolute flex" style="left: 10rpx;right: 10rpx; bottom: 10rpx;">
					<text class="font text-white flex-1 text-ellipsis" style="margin-right: 5rpx;">直播11111111111111111111111111</text>
					<view class="sign ml-auto">
						<text class="sign-circle mr-1 red"></text>
						<text class="font-sm text-white">已结束</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {
			openLive(){
				uni.navigateTo({
					url: "../live/live"
				})
			}
		}
	}
</script>

<style>
	.list-item {
		width: 368rpx;
		height: 365rpx;
		padding: 5rpx;
		/* border-radius: 5rpx; */
		position: relative;
	}

	.list-item image {
		width: 100%;
		height: 365rpx;
		border-radius: 10rpx;
	}

	.sign {
		height: 45rpx;
		display: inline-block;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5rpx 20rpx;
		border-radius: 50rpx;
		background-color: rgba(0, 0, 0, 0.2);
		/* position: absolute; */
	}
	.sign-circle {
		display: inline-block;
		width: 25rpx;
		height: 25rpx;
		border-radius: 50%;
	}
	.sign-circle.red {
		background-color: #DC3446;
	}
	.sign-circle.green {
		background-color: #27A844;
	}
</style>
