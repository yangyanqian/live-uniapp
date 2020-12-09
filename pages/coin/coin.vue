<template>
	<view class="border-top border-light-secondary">
		<view class="border-bottom p-2">
			<view class="flex flex-column align-center justify-center bg-main rounded" style="height: 220rpx;">
				<text class="font-sm text-white">当前金币</text>
				<text class="text-white font-weight-bold" style="font-size: 50rpx;">50</text>
			</view>
		</view>
		<view class="px-3">
			<view class="py-2"><text class="font text-light-muted">请选择充值金额</text></view>
			<view class="flex flex-wrap justify-between">
				<view class="border rounded mb-3"
				v-for="(item, i) in coinData" :key="i"
				:class="coinActive == i ? 'border-main' : ''"
				@click="chooseCoin(item, i)"
				>
					<view class="flex flex-column align-center justify-center" style="width: 200rpx;height: 130rpx;"
					v-if="item.price > 0">
						<view class="flex align-center">
							<text class="iconfont text-warning mr-1">&#xe633;</text>
							<text class="font-md font-weight-bold">{{item.coin}}</text>
						</view>
						<text class="font">￥{{item.price}}</text>
					</view>
					<view class="flex flex-column align-center justify-center" style="width: 200rpx;height: 130rpx;"
					v-else>
						<text class="font">自定义</text>
					</view>
				</view>
			</view>
		</view>
		<view class="position-fixed px-3 flex align-center border-top" style="left: 0; right: 0; bottom: 0; height: 100rpx;">
			<view class="flex-1">
				<text class="iconfont text-warning mr-1" >&#xe633;</text>
				<text class="font-md font-weight-bold">{{coinData[coinActive].price}}</text>
			</view>
			<view class="px-3 bg-main rounded font text-white" style="height: 72rpx; line-height: 72rpx;">去充值</view>
		</view>
		
		<uni-popup ref="popup" type="dialog">
		    <uni-popup-dialog mode="input" type="info" title="自定义充值" placeholder="请输入充值的金额" inputType="number" :duration="2000" :before-close="true" 
				@close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup  from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import uniPopupDialog from '@/components/uni-ui/uni-popup/uni-popup-dialog.vue';
	export default {
		components: {
			uniPopup,
			uniPopupDialog
		},
		data() {
			return {
				coinActive: 3,
				coinData: [
					{
						coin: 10,
						price: 10
					},
					{
						coin: 20,
						price: 20
					},
					{
						coin: 30,
						price: 30
					},
					{
						coin: 50,
						price: 50
					},
					{
						coin: 100,
						price: 100
					},
					{
						coin: "自定义",
						price: 0
					},
				]
			}
		},
		methods: {
			chooseCoin(item, i){
				this.coinActive = i
				if(i == 5) {
					this.$refs.popup.open();
				}
			},
			//关闭弹框
			close(){
				this.$refs.popup.close();
			},
			//自定义金额确定
			confirm(done, val){
					console.log(val);
					if(!val) return uni.showToast({
						title: "请输入要充值的金额"
					})
					this.coinData[this.coinActive].price = val;
					done();
			}
		}
	}
</script>

<style>

</style>
