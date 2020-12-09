<template>
	<view>
		<!-- 画质 -->
		<uni-popup ref="modePop" type="bottom">
			<view class="flex flex-column bg-white">
				<view class="mode-item flex align-center justify-center"
				v-for="(item, i) in modeList" :key="i" :class="{'bg-main': item.value == config.mode}"
				@click="config.mode = item.value">
					<text class="font" :class="{'text-white': item.value == config.mode}">{{item.label}}</text>
				</view>
				<view class="border-block"></view>
				<view class="mode-item border-bottom flex align-center justify-center"
				@click="closePop('modePop')">
					<text class="font">取消</text>
				</view>
			</view>
		</uni-popup>
		<!-- 美颜 -->
		<uni-popup ref="beautyPop" type="bottom">
			<view class="bg-white">
				<view class="border-bottom flex align-center justify-center" style="height: 80rpx;">
					<text class="font">美颜</text>
				</view>
				<slider :value="config.beauty" show-value min="0" max="9" @change="beautyChange" />
				<view class="border-block"></view>
				<view class="mode-item border-bottom flex align-center justify-center"
				@click="closePop('beautyPop')">
					<text class="font">取消</text>
				</view>
			</view>
		</uni-popup>
		<!-- 美白 -->
		<uni-popup ref="whitenessPop" type="bottom">
			<view class="bg-white">
				<view class="border-bottom flex align-center justify-center" style="height: 80rpx;">
					<text class="font">美白</text>
				</view>
				<view class="p-2 px-4">
					<slider :value="config.whiteness" show-value min="0" max="9" @change="whitenessChange" />
				</view>
				<view class="border-block"></view>
				<view class="mode-item border-bottom flex align-center justify-center"
				@click="closePop('whitenessPop')">
					<text class="font">取消</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import live from '@/common/mixins/live.js';
	export default {
		mixins: [ live ],
		components: {
			uniPopup
		},
	}
</script>

<style>
</style>
