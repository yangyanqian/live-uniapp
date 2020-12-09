<template>
	<scroll-view class="chat-list" scroll-y scroll-with-animation :scroll-into-view="scrollIntoView" show-scrollbar="false">
		<view class="chat-item mt-2 flex" v-for="(item, i) in danmu" :key="i"  :id="'danmu'+item.id">
			<text class="font" style="color: #d72f40;">{{item.name}}：</text>
			<text class="font text-white">{{item.content}}</text>
		</view>
	</scroll-view>
</template>

<script> 
	export default {
		data(){
			return {
				scrollIntoView: "",
				danmu: []
			}
		},
		mounted() {
			/* let id = 1;
			setInterval(() => {
				this.danmu.push({
					id,
					name: "帅哥",
					content: "你好呀"
				})
				this.toBottom();
				id++;
			}, 1000); */
		},
		methods: {
			send(danmu){
				this.danmu.push(danmu);
				this.toBottom();
			},
			toBottom(){
				setTimeout(() => {
					let len = this.danmu.length;
					if(len > 0 && this.danmu[len - 1]){
						this.scrollIntoView = "danmu" + this.danmu[len - 1].id;
					}
				}, 300)
			}
		}
	}
</script>

<style>
	/* 弹幕聊天列表 */
	.chat-list {
		position: fixed;
		bottom: 120rpx;
		height: 380rpx;
		width: 520rpx;
		padding: 10rpx;
	}

	.chat-item {
		padding: 20rpx;
		border-radius: 6rpx;
		background-color: rgba(255, 255, 255, 0.2);
	}
</style>
