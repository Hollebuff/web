/*
 * @Author: summer.yang 
 * @Date: 2019-05-17 21:56:53 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-05-18 14:16:02
 */
import React, { Component } from 'react';
import CommentInput from './commentInput';
import CommentList from './commentList';
import './index.css';

export default class CommentApp extends Component{
    constructor(){
        super()
        this.state= {
            comments : []
        }
    }
    componentWillMount(){
        this._loadComents()
    }
    
    _loadComents(){
        let comments = localStorage.getItem('comments')
        if(comments){
            comments = JSON.parse(comments)
            this.setState({
                comments
            })
        }
    }
    handleDeleteComment(index){
        console.log(index)
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({
            comments
        })
        this._saveComment(comments)
    }

    _saveComment(comments){
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    handleSubmitCommet(comment){
        if(!comment) return
        if(!comment.username) return alert("请输入用户名");
        if(!comment.content) return alert("内容");
        if(comment){
            const comments = this.state.comments;
            comments.push(comment);
            this.setState({
                comments
            })
            this._saveComment(comments)
        }
    }
    
    render(){
        return(
            <div className='wrap'>
                <CommentInput onSubmit = {this.handleSubmitCommet.bind(this)}/>
                <CommentList comments = {this.state.comments}
                onDeleteComment = {this.handleDeleteComment.bind(this)}
                />
            </div>
        )
    }
}

