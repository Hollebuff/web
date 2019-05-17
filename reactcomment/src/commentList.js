/*
 * @Author: summer.yang 
 * @Date: 2019-05-16 22:49:48 
 * @Last Modified by: email: 763651741@qq.com
 * @Last Modified time: 2019-05-17 21:02:06
 */

import React, { Component } from 'react';
import Comment from './comment';

export default class commentList extends Component {
    static defaultProps = {
        comments:[]
    }
    
    render() {
        return (
            <div className='comment-list'>
                {this.props.comments.map((vule, i) =>{
                    return(
                        <Comment 
                        comment ={vule} key={i}
                        /> 
                    )
                })}
            </div>
        );
    }
}