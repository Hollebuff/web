import React from 'react';
import {Segment, Input, Button} from 'semantic-ui-react';

class View extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:"",
            password:"",
        }
    this.userChange = this.userChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.submit = this.submit.bind(this);
    this.getContent = this.getContent.bind(this);
    }

    userChange(e){
        this.setState({
            user:e.target.value
        })
    }
    passwordChange(e){
        this.setState({password:e.target.value})
    }
    submit(){
        this.getContent();
    }

    getContent(){  //api请求函数
        let text = {user:this.state.user,password:this.state.password} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        fetch(`http://127.0.0.1:8081/login`,{   //Fetch方法
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        }).then(res => res.json()).then(
            data => {
                if(data.success) window.alert('验证成功，欢迎登录');
                else window.alert('验证失败，用户名或密码错误')
            }
        )
    }

    render(){
        return(
            <div style={{margin:'10px'}}>
                <Segment style = {{textAlign:'center'}}>
                    <h2>请登录</h2>
                    <Input
                    id="user" 
                    placeholder ='用户名' 
                    style={{'marginBottom':"10px"}}
                    onChange={this.userChange}
                    />
                    <br/>
                    <Input
                    id="password" 
                    type='password' 
                    placeholder ='密码' 
                    style={{'marginBottom':"10px"}}
                    onChange={this.passwordChange}
                    />
                    <br/>
                    <Button
                    primary 
                    content='登录' 
                    style={{'marginBotto': '10px'}}
                    onClick={this.submit}
                    />
                    <Button
                    content='重置' 
                    style={{'marginLeft':'20px'}}
                    />
                </Segment>
            </div>
        )
    }
}

export default View;
