import { FC } from 'react';
import { Button, Form, Input, ConfigProvider, theme } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './login.module.less';
import logo from '@/assets/header.jpg';
import ParticlesBg from 'particles-bg';
import { themMap } from '@/global/congfig';
import { useTheme } from '@/hooks';
import { ThemeTypes } from '@/global/enums';
import { useNavigate } from 'react-router';

const { Light } = ThemeTypes;

const { Item } = Form;
const {
    loginWrapper,
    loginBox,
    loginHeader,
    loginForm,
    loginButton
} = styles


const Login: FC = () => {
    const navigate = useNavigate();
    const { token: { colorPrimary } } = theme.useToken();
    const { curTheme } = useTheme();

    const handleLogin = () => {
        navigate('/admin');
    }

    return (
        <div className={`${loginWrapper} ${curTheme}`}>
            <ParticlesBg type='cobweb' color={colorPrimary} bg={true} />
            <div
                className={loginBox}
                style={
                    curTheme === Light ? undefined :
                        {
                            backgroundColor: 'rgba(41, 43, 43,.6)',
                            boxShadow: '0 0 5px 2px #292b2b'
                        }
                }
            >
                <header className={loginHeader}>
                    <div>
                        <img src={logo} />
                        <h2 style={curTheme === Light ? undefined : { color: '#dcdcdc' }}>Si Blogs</h2>
                    </div>
                    <h3>Si Blogs 管理后台</h3>
                </header>
                <ConfigProvider
                    theme={{
                        token: {
                            ...themMap[curTheme].token,
                        },
                        algorithm: curTheme === Light ? theme.defaultAlgorithm : theme.darkAlgorithm,
                    }}
                >
                    <Form className={loginForm}>
                        <Item
                            name="username"
                            rules={[{
                                required: true,
                                message: "Please input.",
                            }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder='用户名' size='large' />
                        </Item>
                        <Item
                            name="password"
                            rules={[{
                                required: true,
                                message: "Please input.",
                            }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder='密码' size='large' />
                        </Item>
                        <Item>
                            <Button onClick={handleLogin} htmlType='button' type='primary' className={loginButton} size='large' >
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

