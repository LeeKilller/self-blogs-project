import { FC } from 'react';
import { Outlet } from 'react-router';
import { Layout, theme } from 'antd';

import { SiderComponent } from '@/components';
import styles from './adminlayout.module.less';


const {
    adminLayoutWrapper
} = styles;

const AdminLayout: FC = () => {
    

    return (
        <Layout className={adminLayoutWrapper}>
            <SiderComponent />
            <Outlet />
        </Layout>
    )
}


export default AdminLayout;


