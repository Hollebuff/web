/*
 * @Author: summer.yang 
 * @Date: 2019-05-17 21:56:44 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-05-18 14:51:29
 */
import React, { Component } from  'react';

export default class CommentInput extends Component{
    constructor(){
        super()
        this.state = {
            username:'',
            content:''
        }
    }
    handleUsernameChage(event){
        this.setState({
            username: event.target.value
        })
    }

    handlecontentChage(event){
        this.setState({
            content:event.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: + new Date()
            })

            // const{username, content} = this.state  // 结构赋值
            // this.props.onSubmit({username, content})
        }
        this.setState({
            content:''
        })
    }
    componentWillMount(){
        this._loadUserName()
    }

    _loadUserName(){
        const username = localStorage.getItem('username');
        if(username){
            this.setState({
                username
            })
        }
        return username
    }

    componentDidMount(){
        const name = this._loadUserName()
        if(name){
            this.textarea.focus()
        }
        else{
            this.input.focus()
        }
    }

    handleUserNameBlur(event){
        this._saveUserName(event.target.value)

    }
    _saveUserName(username){
        localStorage.setItem('username', username)
    }

    render(){
        return(
            <div className = 'comment-input clearfix'>
                <div className = 'comment-field clearfix'>
                    <label  className = 'comment-field-name'>用户名：</label>
                    <div className='comment-feild-input'>
                        <input
                        ref = {(input) => this.input = input}
                        onBlur={this.handleUserNameBlur.bind(this)}

                          value={this.state.username}
                          onChange={this.handleUsernameChage.bind(this)}
                        />
                    </div>
                </div>

                <div className='comment-field clearfix'>
                    <label  className = 'comment-field-name'>评论内容：</label>
                    <div className='comment-feild-input'>
                        <textarea rows='10' 
                        ref={(textarea) => this.textarea = textarea}
                         value={this.state.content} 
                         onChange={this.handlecontentChage.bind(this)}/>
                    </div>
                </div>

                <div className='comment-feild-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                    发布
                    </button>
                </div>

            </div>
        )
    }
}

