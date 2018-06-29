
/**
 * Created by tudou on 2018/6/28.
 */
const download = require('download-git-repo');
// download('gitlab:mygitlab.com:flipxfx/download-git-repo-fixture#my-branch', 'test/tmp', function (err) {
download('', 'test/tmp', function (err) {
	console.log(err ? 'Error' : 'Success')
})