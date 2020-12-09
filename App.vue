<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			
			//监听导航中间凸起按钮的点击事件
			uni.onTabBarMidButtonTap(() => {
				uni.navigateTo({
					url:"../create-live/create-live"
				})
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("/common/free.css");
	@import url("/common/common.css");
	/* #ifndef APP-PLUS-NVUE */
	@import url("/common/icon.css");
	/* #endif */
</style>
