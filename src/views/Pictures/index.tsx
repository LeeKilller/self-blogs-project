import { FC } from 'react'

import { Layout, theme } from 'antd';

const {
    Header,
    Content
} = Layout;


const Pictures: FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}></Header>
            <Content>
                <div>Pictures</div>
            </Content>
        </Layout>
    )
}

export default Pictures;