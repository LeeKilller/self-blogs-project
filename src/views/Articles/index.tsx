import { FC } from 'react'

import { Layout, theme } from 'antd';

import ArticlesHeader from './ArticlesHeader';

import styles from './articles.module.less';

import { articleData } from './data';

const {
    Header,
    Content
} = Layout;

const { articlesWrapper } = styles;

const Articles: FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <Layout className={articlesWrapper}>
            <Header style={{ padding: 0, background: colorBgContainer }}>
                <ArticlesHeader />
            </Header>
            <Content>
                <div>Article</div>
            </Content>
        </Layout>
    )
}

export default Articles;