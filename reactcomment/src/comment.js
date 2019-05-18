/*
 * @Author: summer.yang 
 * @Date: 2019-05-16 22:47:47 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-05-18 14:53:55
 */

import React ,{ Component } from 'react';
import PropTypes from 'prop-types'  // 当前react版本为16.8.6  // 检查值

export default class Comment extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }
    constructor(){
        super()
        this.state = {'timeString':''}
    }
    handleDeleteComment(event){
        if(this.props.onDeleteComment)
        this.props.onDeleteComment(this.props.index)
    }

    componentWillMount(){
        this._updataTimeString()
        this._timer = setInterval(
            this._updataTimeString.bind(this),5000
        )
    }
    componentWillUnmount(){
        clearInterval(this._timer)
    }

    _updataTimeString(){
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            timeString : duration > 60 
            ? `${Math.round(duration / 60)} 分钟前`
            : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }
    _getProcessedContent(content){
        return content
            .replace('/&/g', '&amp;')
            .replace('/</g', '&lt;')
            .replace('/>/g', '&gt;')
            .replace('/"/g', '&quot;')
            .replace("/'/g", '&#039;')
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    render(){
        const { comment } = this.props
        return(
            <div className='comment clearfix'>
                <div className='comment-username'>{comment.username}：</div>
                <div className='comment-content'
                dangerouslySetInnerHTML={{
                    __html:this._getProcessedContent(comment.content)
                }}>
                </div>

                <div className='comment-time-delete'>
                    <span className='comment-time'>{this.state.timeString}</span>
                    <button className='comment-delete'
                    onClick={this.handleDeleteComment.bind(this)}>
                    删除
                    </button>
                </div>                
            </div>
        )
    }
}