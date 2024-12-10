import { FC, useEffect } from 'react';

import { Layout, theme } from 'antd';

import { useMenuFlod } from '@/hooks';

import EditorComponent from '@/components/Editor';
import EditHeader from './EditHeader';

import styles from './editpage.module.less';

const { editPageWrapper } = styles;

const { Header, Content } = Layout;

const EditPage: FC = () => {
    const [_,setIsMenuFlod] = useMenuFlod();

    useEffect(()=>{
        setIsMenuFlod(true);
    },[]);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className={editPageWrapper}>
            <Header style={{ padding: 0, background: colorBgContainer }}>
                <EditHeader />
            </Header>
            <Content>
                <div className='light' style={{
                    width:'100%',
                    height:'100%'
                }}>
                    <EditorComponent />
                </div>
            </Content>
        </Layout>
    )
}

export default EditPage;