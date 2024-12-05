import { FC } from 'react';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import styles from './navbar.module.less';


const ThemeSelector: FC = () => {

    const { themeSelector } = styles;

    return (
        <div className={themeSelector}>
            <SunOutlined />
        </div>
    )
}

export default ThemeSelector;