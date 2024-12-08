import { FC } from 'react';
import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router';

import type { MenuItem } from '@/global/types';
import LoginBtn from './LoginBtn';
import ThemeSelector from './ThemeSelector';
import SearchBtn from './SearchBtn';

import header from '@/assets/header.svg';
import styles from './navbar.module.less';


const items: MenuItem[] = [
    {
        label:<Link to="/">首页</Link>,
        key:'/'
    },
    {
        label:<Link to="/tags">标签</Link>,
        key:'/tags'
    },
    {
        label:<Link to="/timeline">时间线</Link>,
        key:'/timeline'
    },
    {
        label:<Link to="/about">关于</Link>,
        key:'/about'
    }
]

const { navBarWrapper, menu} = styles;

const NavBar: FC = () => {
    const [ curActiveKey, setCurActiveKey ] = useState('/');
    
    const location = useLocation();

    useEffect(()=>{
        setCurActiveKey(location.pathname);
    },[location])
    

    return (
        <nav className={navBarWrapper}>
            <hr />
            <img src={header} />
            <Menu 
                theme='light'
                mode="horizontal" 
                selectedKeys={[curActiveKey]} 
                className={menu}
                items={items}
            />
            <SearchBtn />
            <ThemeSelector />
            <LoginBtn />
        </nav>
    )
}

export default NavBar;