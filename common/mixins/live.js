export default {
	data(){
		return {
			windowHeight: 0,
			statusBarHeight: 0,
			context: null,
			config: {
				mode: "SD", //推流视频模式，可取值：SD（标清）, HD（高清）, FHD（超清）。
				muted: true, //是否静音
				beauty: 0, //美颜程度 0-9
				whiteness: 0, //美白程度 0-9
				devicePosition: "front", //前置或后置，值为front, back
			},
			popType: "mode",
			popTitle: "画质",
			modeList: [
				{label: "标清", value: "SD", "selected": true},
				{label: "高清", value: "HD", "selected": false},
				{label: "超清", value: "FHD", "selected": false},
			],
			//操作条
			operationBar: [
				{
					label: "翻转",
					value: "devicePosition",
					icon: "\ue605",
					event: 'switchCamera'
				},
				{
					label: "画质",
					value: "mode",
					icon: "\ue60c",
					event: 'openPop'
				},
				{
					label: "美颜",
					value: "beauty",
					icon: "\ue632",
					event: 'openPop'
				},
				{
					label: "美白",
					value: "whiteness",
					icon: "\ue631",
					event: 'openPop'
				},
			]
		}
	},
	onLoad(e) {
		let res = uni.getSystemInfoSync();
		this.windowHeight = res.windowHeight;
		this.statusBarHeight = res.statusBarHeight;
		
		// console.log(e);
		// 直播配置
		if(e.config) this.config = JSON.parse(e.config);
	},
	methods: {
		handelEvent(item){
			this[item.event](item.value, item.label);
		},
		//回退
		goBack(delta=1){
			uni.navigateBack({
				delta: delta
			})
		},
		//切换镜头
		switchCamera() {
			this.context.switchCamera({
				success: (a) => {
					this.config.devicePosition = this.config.devicePosition == "back" ? "front" : "back";
				}
			});
		},
		//打开弹出层
		openPop(popType, popTitle){
			this.popType = popType;
			this.popTitle = popTitle;
			this.$refs.livePop.open();
		},
		//关闭弹出层
		closePop(){
			this.$refs.livePop.close();
		},
		//操作美颜程度
		beautyChange(e){
			// console.log(e);
			this.config.beauty = e.detail.value;
		},
		//操作美白程度
		whitenessChange(e){
			// console.log(e);
			this.config.whiteness = e.detail.value;
		},
		//状态变化事件
		statechange(e) {
			console.log(e);
		},
		//网络状态通知
		netstatus(e) {
			console.log(e);
		},
		//其他错误事件
		error(e) {
			console.log(e);
		},
	}
}