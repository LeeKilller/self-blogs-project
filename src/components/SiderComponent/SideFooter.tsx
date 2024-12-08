import { FC } from 'react';
import { useTheme } from '@/hooks';
import { ThemeTypes } from '@/global/enums';
import { Menu } from 'antd';
import { MenuItem } from '@/global/types';

import { 
    HomeOutlined,
    SunOutlined,
    MoonOutlined,
    LogoutOutlined
} from '@ant-design/icons';

import styles from './sider.module.less';

const { sideFooter } = styles;

const { Light } = ThemeTypes;


const SideFooter: FC = () => {
    const { curTheme } = useTheme();

    const items: MenuItem[] = [
        {
            key:'home',
            label:'主页',
            icon:<HomeOutlined />
        },
        {
            key:'theme',
            label:curTheme === Light?'亮色模式':'暗色模式',
            icon:curTheme === Light?<SunOutlined />:<MoonOutlined />
        },
        {
            key:'logout',
            label:'登出',
            icon:<LogoutOutlined />
        }
    ]
    

    return <Menu style={{border: 'none'}} className={sideFooter} items={items}  selectable={false}/>
    
}

export default SideFooter;