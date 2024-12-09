import { FC, useState } from 'react';
import {
    Input,
    Button
} from 'antd';

import styles from './drafts.module.less';

const { draftsHeader } = styles;


const DraftsHeader: FC = () => {
    const [searchLoading, setSearchLoading] = useState<boolean>(false);

    return (
        <div className={draftsHeader}>
            <h2>草稿管理</h2>
            <Input.Search
                style={{ width: 300 }}
                enterButton={"查询"}
                placeholder='输入标题'
                loading={searchLoading}
            />
            <Button type='primary' style={{marginLeft:20}}>新建草稿</Button>
        </div>
    )
}

export default DraftsHeader;