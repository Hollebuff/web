/*
 * @Author: summer.yang 
 * @Date: 2019-05-16 22:47:47 
 * @Last Modified by: email: 763651741@qq.com
 * @Last Modified time: 2019-05-17 23:02:06
 */

import React ,{ Component } from 'react';
import PropTypes from 'prop-types'  // 当前react版本为16.8.6 

export default class Comment extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired
    }
    constructor(){
        super()
        this.state = {'timeString':''}
    }
    componentWillMount(){
        this._updataTimeString()
    }
    _updataTimeString(){
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            timeString : duration > 60 
            ? '${Math.round(duration / 60)} 分前' 
            : '${Math.round(Math.max(duration, 1))} 秒前'
        })
    }

    render(){
        return(
            <div className='comment clearfix'>
                <span className='comment-username'>{this.props.comment.username}：</span>
                <div className='comment-wrap'>
                    <span className='comment-content'>{this.props.comment.content}</span>
                    <span className='comment-time'>{this.state.timeString}</span>
                </div>
            </div>
        )
    }
}