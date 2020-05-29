/*
 * @Description:
 * @Version: 2.0
 * @Autor: Alex
 * @Date: 2020-03-05 11:44:33
 * @LastEditors: Alex
 * @LastEditTime: 2020-05-28 14:59:40
 */

import React, { Component } from "react";
import TodoList from "./todolist/TodoList";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import "./index.css";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: []
		};
	}
	componentDidMount() {
		const comments = localStorage.getItem("comments");
		if (comments) {
			this.setState({
				comments: JSON.parse(comments)
			});
		}
	}
	handleSubmitCon(comment) {
		if (!comment) return alert("出错了，请检查代码！");
		if (!comment.username) return alert("用户名不能为空！");
		if (!comment.content) return alert("评论不能为空！");
		this.state.comments.push(comment);
		localStorage.setItem("comments", JSON.stringify(this.state.comments));
		this.setState({
			//注意一定要setState才能更新视图
			comments: this.state.comments
		});
	}
	// 删除
	handleDeleteComment(index) {
		const comments = this.state.comments;
		comments.splice(index, 1);
		this.setState({
			comments
		});
		localStorage.setItem("comments", JSON.stringify(comments));
	}
	render() {
		return (
			<div className="container">
				<TodoList></TodoList>
				<CommentInput onSubmit={this.handleSubmitCon.bind(this)} />
				<CommentList onDeleteComment={this.handleDeleteComment.bind(this)} comments={this.state.comments} />
			</div>
		);
	}
}
export default App;
