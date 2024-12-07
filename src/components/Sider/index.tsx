import { FC } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router';
import { 
    LineChartOutlined,
    FileTextOutlined,
    ContainerOutlined,
    PictureOutlined
} from '@ant-design/icons';
import styles from './sider.module.less';



const Sider: FC = () => {
    const { Item } = Menu;
    const {
        siderWrapper
    } = styles;

    return (
        <aside className={siderWrapper}>
            <Menu>
                <Item>
                    <Link to='/admin/analyse'><LineChartOutlined />分析概览</Link>
                </Item>
                <Item>
                    <Link to='/admin/articles'><FileTextOutlined />文章管理</Link>
                </Item>
                <Item>
                    <Link to='/admin/darfts'><ContainerOutlined />草稿管理</Link>
                </Item>
                <Item>
                    <Link to='/admin/picture'><PictureOutlined />图片管理</Link>
                </Item>
            </Menu>
        </aside>
    )
}

export default Sider;