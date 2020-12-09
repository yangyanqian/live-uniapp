<template>
	<!-- app端支持，nvue组件 -->
	<list class="gift-list" :show-scrollbar="false" :bounce="false">
		<cell class="gift-list-item pt-2 flex align-center" 
		insert-animation="default" delete-animation="default" 
		v-for="(item, i) in gifts" :key="i"
		:ref="'item'+i">
			<view class="gift-info flex align-center">
				<view class="img-border mr-1">
					<image :src="item.avatar || defaultAvatar" class="user-img"></image>
				</view>
				<view class="flex-1 flex flex-column">
					<text class="font text-white">{{item.username}}</text>
					<text class="font-sm text-white">送{{gift_name}}</text>
				</view>
				<view class="img-border">
					<image :src="item.gift_image" mode="aspectFill" style="width:65rpx;height:65rpx;"></image>
				</view>
			</view>
			<view class="gift-num ml-3"><text class="text-warning">x {{item.gift_num}}</text></view>
		</cell>
	</list>
</template>

<script>
	const dom = weex.requireModule("dom");
	export default {
		data(){
			return {
				defaultAvatar: "/static/default.jpg",
				gifts: [],
				tim: null,
			}
		},
		created(){
		},
		watch: {
			gifts(newValue, oldValue) {
				if(this.gifts.length == 6) clearInterval(this.tim);
			}
		},
		methods: {
			send(gift){
				console.log(gift);
				this.gifts.push(gift)
				this.toBottom();
				this.autoHide();
			},
			//礼物列表过长时，最后一个礼物显示在底部
			toBottom(){
				this.$nextTick(() => {
					let i = this.gifts.length - 1;
					let ele = this.$refs['item' + i];
					if(ele) dom.scrollToElement(ele[0], {});
				})
			},
			//自动消失
			autoHide(){
				setInterval(() => {
					this.gifts.splice(0, 1);
				}, 5000)
			}
		}
	}
</script>

<style>
	/* 礼物列表 */
	.gift-list {
		width: 450rpx;
		height: 480rpx; 
	}
	.gift-info {
		width: 300rpx;
		height: 85rpx;
		border-radius: 100rpx;
		background-image: linear-gradient(to right, #BCABB1, #65AAF0);
		/* background-image: linear-gradient(to right, #91AAD2, #67AAF0); */
	}
	.gift-num {
		margin-right: -50rpx;
	}
	
</style>
