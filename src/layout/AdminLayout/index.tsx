import { FC } from 'react';
import { Outlet } from 'react-router';
import Sider from '@/components/Sider';
import styles from './adminlayout.module.less';


const {
    adminLayoutWrapper
} = styles;

const AdminLayout: FC = () => {
    

    return (
        <div className={adminLayoutWrapper}>
            <Sider />
            <Outlet />
        </div>
    )
}


export default AdminLayout;


