import { FC } from 'react';
import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router';
import LoginBtn from './LoginBtn';
import ThemeSelector from './ThemeSelector';
import SearchBtn from './SearchBtn';

import header from '@/assets/header.jpg';
import styles from './navbar.module.less';

const NavBar: FC = () => {
    const [ curActiveKey, setCurActiveKey ] = useState('home');
    
    const { Item } = Menu;
    const { navBarWrapper, menu} = styles;
    
    const handleLinkClick: MenuProps['onClick'] = (e) => {
        setCurActiveKey(e.key);
    } 

    return (
        <nav className={navBarWrapper}>
            <hr />
            <img src={header} />
            <Menu 
                theme='light'
                mode="horizontal" 
                selectedKeys={[curActiveKey]} 
                onClick={handleLinkClick}
                className={menu}
            >
                <Item key={'home'}>
                    <Link to="/">首页</Link>
                </Item>
                <Item key={'tags'}>
                    <Link to="/tags">标签</Link>
                </Item>
                <Item key={'timeline'}>
                    <Link to="/timeline">时间线</Link>
                </Item>
                <Item key={'about'}>
                    <Link to="/about">关于</Link>
                </Item>
            </Menu>
            <SearchBtn />
            <ThemeSelector />
            <LoginBtn />
        </nav>
    )
}

export default NavBar;