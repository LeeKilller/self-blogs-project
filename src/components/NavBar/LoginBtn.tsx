import { FC } from 'react';
import { Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import styles from './navbar.module.less';


const LoginBtn: FC = () => {

    const { loginBtn } = styles;

    const handleClick = () => {
        window.open("/login", "_blank", "noreferrer");
        //navigate('/login');
    }

    return (
        <Tooltip placement='bottomRight' title="管理登录">
            <div
                className={loginBtn}
                onClick={handleClick}
            >
                <UserOutlined />
            </div>
        </Tooltip>
    )
}


export default LoginBtn;