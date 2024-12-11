import { FC } from 'react';
import headerDark from '@/assets/headerDark.svg';
import header from '@/assets/header.svg';
import styles from './sider.module.less';
import { useTheme } from '@/hooks';
import { ThemeTypes } from '@/global/enums';
const { Light } = ThemeTypes;

const {
    sideHeader
} = styles

interface IProps {
    isMenuFold:boolean
}


const SideHeader: FC<IProps> = ({isMenuFold}) => {
    const { curTheme } = useTheme();

    return (
        <header className={sideHeader}>
            <img src={curTheme === Light?header:headerDark} />
            {isMenuFold || <h2 style={curTheme === Light?undefined:{color:'#dcdcdc'}}>Si Blogs</h2>}
        </header>
    )
}

export default SideHeader;