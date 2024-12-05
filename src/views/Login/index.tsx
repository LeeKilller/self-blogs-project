import { FC } from 'react';
import { Button, Form, Input, ConfigProvider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './login.module.less';
import logo from '@/assets/header.jpg';
import ParticlesBg from 'particles-bg';
import { themMap } from '@/global/congfig';
import { useNavigate } from 'react-router';


const Login: FC = () => {
    const navigate = useNavigate();

    const { Item } = Form;
    const {
        loginWrapper,
        loginBox,
        loginHeader,
        loginForm,
        loginButton
    } = styles

    const handleLogin = () => {
        
    }

    return (
        <div className={loginWrapper}>
            <ParticlesBg type='cobweb' color='#00b96b' bg={true} />
            <div className={loginBox}>
                <header className={loginHeader}>
                    <div>
                        <img src={logo} />
                        <h2>Si Blogs</h2>
                    </div>
                    <h3>Si Blogs 管理后台</h3>
                </header>
                <ConfigProvider theme={themMap['light']}>
                    <Form className={loginForm}>
                        <Item>
                            <Input prefix={<UserOutlined />} placeholder='用户名' size='large' />
                        </Item>
                        <Item>
                            <Input.Password prefix={<LockOutlined />} placeholder='密码' size='large' />
                        </Item>
                        <Item>
                            <Button htmlType='button' type='primary' className={loginButton} size='large' >
                                登录
                            </Button>
                        </Item>
                    </Form>
                </ConfigProvider>
            </div>
        </div>
    )
}


export default Login;

