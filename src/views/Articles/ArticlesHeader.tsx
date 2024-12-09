import { FC, useState } from 'react';
import {
    DatePicker,
    Select,
    Input,
    Button,
    Space
} from 'antd';

import styles from './articles.module.less';

const { articlesHeader } = styles;


const ArticlesHeader: FC = () => {
    const [searchLoading, setSearchLoading] = useState<boolean>(false);

    return (
        <div className={articlesHeader}>
            <h2>文章管理</h2>
            <Space size={40}>
                <Input
                    style={{ width: 300 }}
                    placeholder='输入标题'
                />
                <Select
                    style={{ width: 300 }}
                    placeholder='选择或搜索Tag'
                />
                <DatePicker.RangePicker
                    style={{ width: 330 }}
                    showTime
                    placeholder={['选择创建时段', '至今']}
                    allowEmpty={[false, true]}
                />
                <Button type='primary'>查询</Button>
            </Space>
        </div>
    )
}

export default ArticlesHeader;