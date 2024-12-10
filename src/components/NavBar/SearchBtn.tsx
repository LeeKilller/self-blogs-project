import { FC } from 'react';
import { useState } from 'react';
import { Modal, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './navbar.module.less';


const SearchBtn: FC = () => {
    const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

    const { searchBtn } = styles;

    return (
        <>
            <Tooltip title="搜索" placement='bottom'>
                <div className={searchBtn} onClick={() => setSearchModalOpen(true)}>
                    <div></div>
                    <SearchOutlined />
                </div>
            </Tooltip>
            <Modal
                open={searchModalOpen}
                onCancel={() => setSearchModalOpen(false)}
                footer={() => null}
            >

            </Modal>
        </>
    )
}

export default SearchBtn;