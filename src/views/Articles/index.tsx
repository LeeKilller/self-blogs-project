import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import { Layout, Tag, Space, Dropdown, Table, Button, theme, ConfigProvider } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';

import type { MenuItem } from '@/global/types';

import ArticlesHeader from './ArticlesHeader';

import styles from './articles.module.less';

import { articleData } from './data';

const {
    Header,
    Content
} = Layout;

const { articlesWrapper, contentWrapper } = styles;

interface DraftObj {
    index: number, // 相对于初始位置的索引
    id: number, // 草稿标识符，自增型key
    title: string,
    author: string,
    tags: string[],
    initialTime: string, // like 'December 17, 1995 03:24:00' 或是其它合规时间，请与我讨论，时间戳都行
    description: string
}

interface ArticleObj extends DraftObj {
    weight: number // 权重
}


const items: MenuItem[] = [
    {
        key: 'setInfo',
        label: '修改信息'
    }
]


const Articles: FC = () => {
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

    const columns: TableColumnsType<ArticleObj> = [
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
                    maxWidth: 300
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
                        {tags.map((tag, index) => index < 3 ? <Tag key={tag}>{tag}</Tag> : null)}
                        {tags.length > 3 ? <EllipsisOutlined /> : null}
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
            title: '权重',
            dataIndex: 'weight',
            key:'weight'
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
                        <a  style={{color:colorPrimary}}>回收</a>
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
        <Layout className={articlesWrapper}>
            <Header style={{ padding: 0, background: colorBgContainer }}>
                <ArticlesHeader />
            </Header>
            <Content>
                <div className={contentWrapper} style={{ backgroundColor: colorBgContainer }}>
                    <Space style={{ margin: 10 }}>
                        <ConfigProvider theme={{
                            components:{
                                Button:{
                                    defaultColor:'#edb13e',
                                    defaultBorderColor:'#edb13e',
                                    defaultHoverColor:'#f7d876',
                                    defaultHoverBorderColor:'#f7d876'
                                }
                            }
                        }}>
                            <Button type='default' disabled={!hasSelected} loading={loading}>批量回收</Button>
                        </ConfigProvider>
                        {hasSelected ? <span>选择{selectedRowKeys.length}项</span> : null}
                    </Space>
                    <Table<ArticleObj>
                        columns={columns}
                        dataSource={articleData.map(ele => ({ key: ele.id, ...ele }))}
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

export default Articles;