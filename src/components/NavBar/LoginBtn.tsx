import { FC } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import styles from './navbar.module.less';


const LoginBtn: FC = () => {
    const navigate = useNavigate();

    const { LoginBtn } = styles;

    const handleClick = () => {
        navigate('/login');
    }

    return (
        <div 
            className={LoginBtn}
            onClick={handleClick}
        >
            <SettingOutlined />
        </div>
    )
}


export default LoginBtn;