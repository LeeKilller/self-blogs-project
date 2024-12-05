import { FC } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import styles from './navbar.module.less';


const LoginBtn: FC = () => {

    const { loginBtn } = styles;

    const handleClick = () => {
        window.open("/login", "_blank", "noreferrer");
        //navigate('/login');
    }

    return (
        <div 
            className={loginBtn}
            onClick={handleClick}
        >
            <SettingOutlined />
        </div>
    )
}


export default LoginBtn;