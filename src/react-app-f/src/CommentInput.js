import React,{ Component } from 'react'
class CommentInput extends Component{ 
    constructor(props){
        super(props)
        this.state = {
            username:'',
            content:''
        }
    }
    componentDidMount(){
        const localName = localStorage.getItem('username')
        if(localName){
            // 用户名持久化,页面加载完成自动聚焦
            this.setState({
                username:localName
            })
            this.refs.textarea.focus()
            return
        }
        this.input.focus()
    }
    // 将评论更新到state中
    contentChange(e){
        this.setState({
            content:e.target.value
        })
    }
    // 将用户名更新到state中
    userChange(e){
        this.setState({
            username:e.target.value
        })
    }
    // 提交评论
    handleSubmit(){
        if(this.props.onSubmit){
            const {username,content} = this.state
            this.props.onSubmit({
                username:username,
                content:content,
                createtime:+new Date()
            })
        }
        this.setState({
            content:''
        })
    }
    // 保存用户名到本地
    _saveUserName(username){
        localStorage.setItem("username",username)
    }
    // 用户名失去焦点触发
    handleUserBlur(e){
        this._saveUserName(e.target.value)
    }
    render(){
        return (
            <div className="control-box clearfix">
                <div>
                    <label>用户名：</label><input 
                    value={this.state.username} 
                    type="text" placeholder="请输入用户名" 
                    onChange={this.userChange.bind(this)}
                    onBlur={this.handleUserBlur.bind(this)}
                    ref={(input)=>this.input = input}></input>
                </div>
                <div>
                    <label>评论内容：</label><textarea 
                    value={this.state.content}
                    onChange={this.contentChange.bind(this)}
                    ref="textarea"></textarea>
                </div>
                <button onClick={this.handleSubmit.bind(this)}>发布</button>
            </div>
        )
    }
}
export default CommentInput