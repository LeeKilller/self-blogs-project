import { FC } from 'react';
import { Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router';

import type { MenuItem } from '@/global/types';

const {
    Header,
    Content
} = Layout;

const items: MenuItem[] = [
    {
        key:'overview',
        label:<Link to="/admin/analyse" >访问总览</Link>
    }
];

const Analyse: FC = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    

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
                />
            </Header>
            <Content>
                <Outlet />
            </Content>
        </Layout>
    )
}

export default Analyse;