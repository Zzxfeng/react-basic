/*
 * @Description:
 * @Version: 2.0
 * @Autor: Alex
 * @Date: 2020-03-10 09:26:52
 * @LastEditors: Alex
 * @LastEditTime: 2020-06-04 15:50:11
 */

import React, { Component, Fragment } from "react"
import ListItem from './ListItem'
class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValueStr: "",
			TodoList: []
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	render() {
		return (
			<Fragment>
				<label htmlFor="input">请输入内容</label>
				<input 
				id="input" 
				type="text" 
				value={this.state.inputValueStr} 
				placeholder="请输入todo" 
				onChange={this.handleInputChange}>
				</input>
				<button onClick={this.handleSubmit}>提交</button>
				<ul 
				className="list-item"
				ref={(ul)=>{this.ul = ul}}>
					{this.state.TodoList.map((item, index) => {
						return (
							<ListItem 
							key={index}
							content={{ __html: item }} 
							index={index}
							handleItemDel={this.handleItemDel.bind(this,index)}>
							</ListItem>
						)
					})}
				</ul>
			</Fragment>
		);
	}
	handleInputChange(e) {
		this.setState({
			inputValueStr: e.target.value
		});
	}
	handleSubmit() {
		if (this.state.inputValueStr === "") return;
		this.setState({
			TodoList: [...this.state.TodoList, this.state.inputValueStr],
			inputValueStr: ""
		},()=>{
			console.log('当数据更新后执行...')
			console.log(this.ul)
		});
	}
	handleItemDel(index){
		let list = this.state.TodoList;
		list.splice(index, 1);
		this.setState({
			TodoList: list
		});
	}
	
}
export default TodoList;
