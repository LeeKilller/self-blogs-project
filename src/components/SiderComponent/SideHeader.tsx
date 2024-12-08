import { FC } from 'react';
import header from '@/assets/header.svg';
import styles from './sider.module.less';

const {
    sideHeader
} = styles

interface IProps {
    isMenuFold:boolean
}


const SideHeader: FC<IProps> = ({isMenuFold}) => {

    return (
        <header className={sideHeader}>
            <img src={header} />
            {isMenuFold || <h2>Si Blogs</h2>}
        </header>
    )
}

export default SideHeader;