import { FC, useState, useEffect } from 'react';
import { Menu, Layout } from 'antd';
import { Link, useLocation } from 'react-router';
import { 
    LineChartOutlined,
    FileTextOutlined,
    ContainerOutlined,
    PictureOutlined,
} from '@ant-design/icons';

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
        key: '/admin',
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
    const [isMenuFlod, setIsMenuFlod] = useState<boolean>(false);

    
    const [ curActiveKey, setCurActiveKey ] = useState('/');
    
    const location = useLocation();

    useEffect(()=>{
        setCurActiveKey(location.pathname);
    },[location])

    return (
        <Sider 
            trigger={null} 
            collapsible 
            collapsed={isMenuFlod}
            theme='light'
            className={siderWrapper}
        >
            <SideHeader />
            <Menu
                selectedKeys={[curActiveKey]} 
                items={items}
            />
            <SideFooter />
        </Sider>
    )
}

export default SiderComponent;