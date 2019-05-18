/*
 * @Author: summer.yang 
 * @Date: 2019-05-16 22:49:48 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-05-18 14:55:54
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Comment from './comment';

export default class commentList extends Component {
    static propTypes={
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func,
    }    
    static defaultProps = {
        comments:[]
    }

    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }
    
    render() {
        return (
            <div className='comment-list'>
                {this.props.comments.map((value, i) =>{
                    return(
                        <Comment 
                        comment={value} 
                        key = {i}
                        index={i}
                        onDeleteComment={this.handleDeleteComment.bind(this)}
                        /> 
                    )
                })}
            </div>
        );
    }
}