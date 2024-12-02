export default {
	componentDidMount(){
		this.getReleaseVersionlist();
		this.getReleaselist();
	},
	releaseMangerList: [],
	releaseVersionList: [],
	getReleaselist () {
		version_manger_list.run().then(it => {
			if (it.statusCode == 800) {
				this.releaseMangerList = it.returnObj?.result
			}else{
				throw new Error(it.message);
			}
		}).catch(e=>{
			showAlert(e.message)
		})
	},
	getReleaseVersionlist () {
		release_version_list.run().then(it => {
			if (it.statusCode == 800) {
				this.releaseVersionList = it.returnObj?.result
			}else{
				throw new Error(it.message);
			}
		}).catch(e=>{
			showAlert(e.message)
		})
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}