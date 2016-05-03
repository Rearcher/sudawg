/**
 * Author: rahul(github.com/rearcher)
 * Date: Tue May 3, 2016
 * version: 1.0
 * Usage: login gateway with student number and password
 */

const request = require('request');
const base64 = require('./base64');

if (process.argv.length < 4) {
	console.log("You need to Input two arguments:");
	console.log("1. your student number;");
	console.log("2. your password.");
	console.log("example: node login.js 1321323323 123456");
	return;
}

var params = {
	username: process.argv[2],
	password: base64.encode(process.argv[3]),
  	enablemacauth: '0',
}

var options = {
  	url: 'http://a.suda.edu.cn/index.php/index/login',
  	form: params,
};

request.post(options, (err, response, body) => {
  	console.log(JSON.parse(body));
});
