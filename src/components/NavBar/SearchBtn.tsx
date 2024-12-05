import { FC } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import styles from './navbar.module.less';


const SearchBtn: FC = () => {

    const { searchBtn } = styles;

    return (
        <div className={searchBtn}>
            <div></div>
            <SearchOutlined />
        </div>
    )
}

export default SearchBtn;