import { FC } from 'react';
import { Outlet } from 'react-router';
import Sider from '@/components/Sider';

const AdminLayout: FC = () => {

    return (
        <>
            <Sider />
            <Outlet />
        </>
    )
}


export default AdminLayout;


