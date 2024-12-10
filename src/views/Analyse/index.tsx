import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router';

import type { MenuItem } from '@/global/types';

const {
    Header,
    Content
} = Layout;

const items: MenuItem[] = [
    {
        key:'/admin/analyse',
        label:<Link to="/admin/analyse" >访问总览</Link>
    }
];

const Analyse: FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    
    const [ curActiveKey, setCurActiveKey ] = useState('/');
    
    const { pathname } = useLocation();

    useEffect(()=>{
        setCurActiveKey(pathname);
    },[pathname])

    return (
        <Layout>
            <Header style={{ padding: 0, background: colorBgContainer, height:48 }}>
                <Menu 
                    items={items} 
                    mode='horizontal' 
                    style={{
                        height:48,
                        fontSize:16,
                        lineHeight:'48px'
                    }}
                    selectedKeys={[curActiveKey]} 
                />
            </Header>
            <Content>
                <Outlet />
            </Content>
        </Layout>
    )
}

export default Analyse;