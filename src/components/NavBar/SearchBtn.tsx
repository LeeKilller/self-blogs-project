import { FC } from 'react';
import { useState } from 'react';
import { Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './navbar.module.less';


const SearchBtn: FC = () => {
    const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

    const { searchBtn } = styles;

    return (
        <>
            <div className={searchBtn} onClick={() => setSearchModalOpen(true)}>
                <div></div>
                <SearchOutlined />
            </div>
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