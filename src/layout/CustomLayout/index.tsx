import { FC } from 'react';
import { Outlet } from 'react-router';
import { Layout, theme } from 'antd';
import NavBar from '@/components/NavBar';
import SiderInfoCard from '@/components/SiderInfoCard';

const { Header, Content, Sider } = Layout;

const CustomLayout: FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ 
                padding: 0, 
                background: colorBgContainer ,
                position: 'sticky',
                top:0,
                zIndex:9
                }}
            >
                <NavBar />
            </Header>
            <Layout style={{padding:'10px 10%', minHeight:'calc(100vh - 74px)'}}>
                <Content style={{marginRight:208}}>
                    <Outlet />
                </Content>
                <Sider 
                    style={{
                        marginLeft:10,
                        position:'fixed',
                        top:74,
                        right:'10%',
                        backgroundColor:'transparent'
                    }}
                >
                    <SiderInfoCard />
                </Sider>
            </Layout>
        </Layout>
    )
}

export default CustomLayout;