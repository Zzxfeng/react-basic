import React,{ Component } from 'react'
class Comment extends Component{
    constructor(){
        super()
        this.state = {
            timeString:''
        }
    }
    componentDidMount(){
        this._updateTimeSring()
        this.timer = setInterval(()=>{
            this._updateTimeSring()
        },10000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    _updateTimeSring(){
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createtime) / 1000
        this.setState({
        timeString: duration > 60
            ? `${Math.round(duration / 60)} 分钟前`
            : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }
    handleDeleteComment(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index)
        }
    }
    render(){
        return (
            <div className="box"> 
                <span className="user">{this.props.comment.username}</span>
                <span className="comment">：{this.props.comment.content}</span>
                <span className="del" onClick={this.handleDeleteComment.bind(this)}>删除</span>
                <span className="time">{this.state.timeString}</span>
            </div>
        )
    }
} 
export default Comment