import type { FC } from 'react';
import { Space, Button, Tag, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import type { MenuItem } from '@/global/types';

import styles from './editpage.module.less';

const { editHeader } = styles;

const items: MenuItem[] = [
    {
        key: 'setinfo',
        label: '修改信息'
    },
    {
        key: 'post',
        label: '发布草稿'
    },
    {
        key: 'delete',
        label: '删除草稿'
    }
]

const EditHeader: FC = () => {

    return (
        <div className={editHeader}>
            <h2>
                题目
                <Tag color='cyan' style={{transform:'translateY(-1px)'}}>
                    草稿
                </Tag>
            </h2>
            <Space size={1} align='baseline'>
                <Tag>
                    标签1
                </Tag>
                <Tag>
                    标签2
                </Tag>
            </Space>
            <Space style={{ marginLeft: 'auto' }}>
                <Button type='primary'>
                    保存(Ctrl + S)
                </Button>
                <Button>
                    返回
                </Button>
                <Dropdown menu={{ items }}>
                    <Button>
                        <Space>
                            操作
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
            </Space>
        </div>
    )
}


export default EditHeader;