import { FC, useState } from 'react'
import { useNavigate } from 'react-router';
import { Layout, Space, Table, Tag, Button, Dropdown, theme } from 'antd';
import type { TableColumnsType } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import type { MenuItem } from '@/global/types';

import DraftsHeader from './DraftsHeader';

import { draftData } from './data';

import styles from './drafts.module.less';

const { draftsWrapper, contentWrapper } = styles;

const {
    Header,
    Content
} = Layout;


interface DraftObj {
    index: number, // 相对于初始位置的索引
    id: number, // 草稿标识符，自增型key
    title: string,
    author: string,
    tags: string[],
    initialTime: string, // like 'December 17, 1995 03:24:00'
    description: string
}

const items: MenuItem[] = [
    {
        key: 'setInfo',
        label: '修改信息'
    },
    {
        key: 'delte',
        label: '删除'
    },
]

const Drafts: FC = () => {
    const {
        token: { colorBgContainer, colorPrimary },
    } = theme.useToken();
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const columns: TableColumnsType<DraftObj> = [
        {
            title: "ID",
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: "标题",
            dataIndex: 'title',
            key: 'title',
            render: (_, { title }) => (<div
                style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth:300
                }}
            >{title}</div>)
        },
        {
            title: "作者",
            dataIndex: 'author',
            key: 'author'
        },
        {
            title: "Tags",
            dataIndex: 'tags',
            key: 'tags',
            render: (_, { tags }) => {

                return (
                    <>
                        {tags.map((tag,index) => index < 3?<Tag key={tag}>{tag}</Tag>:null)}
                        {tags.length > 3? <EllipsisOutlined />:null}
                    </>
                )
            }
        },
        {
            title: '创建时间',
            dataIndex: 'initialTime',
            key: 'initialTime'
        },
        {
            title: '操作',
            key: 'action',
            render: () => {


                const handleEdit = () => {
                    navigate('/admin/edit');
                }

                return (
                    <Space>
                        <a onClick={handleEdit}  style={{color:colorPrimary}}>编辑</a>
                        <a  style={{color:colorPrimary}}>发布</a>
                        <Dropdown menu={{ items }} placement="bottom">
                            <a  style={{color:colorPrimary}}><EllipsisOutlined /></a>
                        </Dropdown>
                    </Space>
                )
            }
        }
    ]

    const hasSelected = selectedRowKeys.length > 0;

    return (
        <Layout className={draftsWrapper}>
            <Header style={{ padding: 0, background: colorBgContainer }}>
                <DraftsHeader />
            </Header>
            <Content>
                <div className={contentWrapper} style={{ backgroundColor: colorBgContainer }}>
                    <Space style={{ margin: 10 }}>
                        <Button type='primary' disabled={!hasSelected} loading={loading}>批量发布</Button>
                        <Button type='default' disabled={!hasSelected} loading={loading} danger>批量删除</Button>
                        {hasSelected ? <span>选择{selectedRowKeys.length}项</span> : null}
                    </Space>
                    <Table<DraftObj>
                        columns={columns}
                        dataSource={draftData.map(ele => ({ key: ele.id, ...ele }))}
                        rowSelection={{
                            type: 'checkbox',
                            selectedRowKeys,
                            onChange: onSelectChange
                        }}
                        pagination={{
                            position: ['bottomCenter'],
                            total: 500,
                            pageSize: 10,
                            showSizeChanger: false
                        }}
                    />
                </div>
            </Content>
        </Layout>
    )
}

export default Drafts;