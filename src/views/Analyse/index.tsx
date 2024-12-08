import { FC } from 'react';
import { Layout, theme } from 'antd';

const {
    Header,
    Content
} = Layout;


const Analyse: FC = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    

    return (
        <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}></Header>
            <Content>
                <div>Analyse</div>
            </Content>
        </Layout>
    )
}

export default Analyse;