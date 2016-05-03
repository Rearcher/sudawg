/**
 * Author: rahul(github.com/rearcher)
 * Date: Tue May 3, 2016
 * version: 1.0
 * Usage: logout gateway
 */

const request = require('request');

const url = 'http://a.suda.edu.cn/index.php/index/logout';

request.post(url, (err, response, body) => {
	console.log(JSON.parse(body));
});
