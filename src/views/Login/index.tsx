import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './login.module.less';
import logo from '@/assets/header.jpg'


const Login: FC = () => {

    const { Item } = Form;
    const {
        loginWrapper,
        loginBox,
        loginHeader,
        loginForm,
        loginButton
    } = styles

    return (
        <div className={loginWrapper}>
            <div className={loginBox}>
                <header className={loginHeader}>
                    <div>
                        <img src={logo} />
                        <h2>Si Blogs</h2>
                    </div>
                    <h3>Si Blogs 管理后台登入</h3>
                </header>
                <Form className={loginForm}>
                    <Item>
                        <Input prefix={<UserOutlined />} placeholder='用户名' size='large' />
                    </Item>
                    <Item>
                        <Input.Password prefix={<LockOutlined />} placeholder='密码'  size='large' />
                    </Item>
                    <Item>
                        <Button htmlType='button' type='primary' className={loginButton}  size='large' >
                            登录
                        </Button>
                    </Item>
                </Form>
            </div>
        </div>
    )
}


export default Login;

