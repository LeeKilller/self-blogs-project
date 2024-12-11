import { FC, useState, useEffect } from 'react';
import { Menu, Layout } from 'antd';
import { Link, useLocation } from 'react-router';
import {
    LineChartOutlined,
    FileTextOutlined,
    ContainerOutlined,
    PictureOutlined,
    MenuFoldOutlined, 
    MenuUnfoldOutlined,
} from '@ant-design/icons';

import { useMenuFlod } from '@/hooks';
import { useTheme } from '@/hooks';
import { ThemeTypes } from '@/global/enums';

const { Light } = ThemeTypes;

import SideHeader from './SideHeader';
import SideFooter from './SideFooter';

import { MenuItem } from '@/global/types';

import styles from './sider.module.less';

const { Sider } = Layout;
const {
    siderWrapper
} = styles;

const items: MenuItem[] = [
    {
        key: '/admin/analyse',
        icon: <LineChartOutlined />,
        label: <Link to='/admin'>分析概览</Link>
    },
    {
        key: '/admin/articles',
        icon: <FileTextOutlined />,
        label: <Link to='/admin/articles'>文章管理</Link>
    },
    {
        key: '/admin/darfts',
        icon: <ContainerOutlined />,
        label: <Link to='/admin/darfts'>草稿管理</Link>
    },
    {
        key: '/admin/picture',
        icon: <PictureOutlined />,
        label: <Link to='/admin/picture'>图片管理</Link>
    }
]


const SiderComponent: FC = () => {
    const [isMenuFlod, setIsMenuFlod] = useMenuFlod();

    const [curActiveKey, setCurActiveKey] = useState('/');

    const { curTheme } = useTheme();

    const location = useLocation();

    useEffect(() => {
        setCurActiveKey(location.pathname);
    }, [location])

    return (
        <Sider
            trigger={
                <div onClick={()=>setIsMenuFlod(!isMenuFlod)}>
                    {isMenuFlod ? <MenuUnfoldOutlined/>:<MenuFoldOutlined/>}
                </div>}
            collapsible
            collapsed={isMenuFlod}
            theme='light'
            breakpoint='lg'
            onBreakpoint={(borken)=>borken?setIsMenuFlod(true):setIsMenuFlod(false)}
        >
            <div
                className={siderWrapper}
                style={curTheme === Light?undefined:{boxShadow:'rgba(13, 13, 13, 0.65) 0 0 5px 1px'}}
            >
                <SideHeader isMenuFold={isMenuFlod} />
                <Menu
                    selectedKeys={[curActiveKey]}
                    items={items}
                    style={{border: 'none'}}
                />
                <SideFooter />
            </div>
        </Sider>
    )
}

export default SiderComponent;