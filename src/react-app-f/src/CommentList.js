import React,{ Component } from 'react'
import Comment from './Comment'
class CommentList extends Component{
    // static defaultProps = {//defaultProps 防止父组件 comments 不传入的情况
    //     comments:[]
    // }
    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }
    render(){
        return (
            <div className="comment-box">
                {this.props.comments.map((value,index)=><Comment 
                onDeleteComment={this.handleDeleteComment.bind(this)} 
                key={index} 
                index={index} 
                comment={value}/>)}
            </div>
        )
    }
}
export default CommentList