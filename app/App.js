import React, { Component } from 'react';

console.error('appjs');

class App extends Component{
	render(){
		return (
			<div>
				<h1>我是react 组件</h1>
				<p>自动配置模版：html-webpack-plugin! </p>
				<p>清除模版：CleanWebpackPlugin </p>
				<p>服务器：webpack-dev-server </p>
				<p>服务器热更新：webpack-dev-server </p>
				<p>服务器热更新：webpack-dev-server2 </p>
				<p>css-loader </p>
				<p>style-loader</p>
				<p>style-loader</p>
			</div>
		);
	}
}

export default App;