import { FC } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router';



const Sider: FC = () => {
    const { Item } = Menu;

    return (
        <aside>
            <Menu>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </Menu>
        </aside>
    )
}

export default Sider;