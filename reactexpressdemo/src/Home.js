import React from 'react';
import { Link } from 'react-router-dom';
import {Menu, Image } from 'semantic-ui-react';
require('./mystyle.css');

class Home extends React.Component{
    render(){
            return(
                <div>
                    {/* <Segment><div>This is Home!</div></Segment> */}
                    <Image className='img' rounded src={require('./img/a.jpg')}/>
                    <Menu>
                    <Menu.Item>
                        <Link to="/Page1/" style={{color:'black'}}>
                            <div>点击跳转到Page1</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/Page2/" style={{color:'black'}}>
                            <div>点击跳转到Page2</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/Page3/" style={{color:'black'}}>
                            <div>点击跳转到Page3</div>
                        </Link>
                    </Menu.Item>
                    </Menu>
                           
                           
                </div>
            );
        }
}

export default Home;
