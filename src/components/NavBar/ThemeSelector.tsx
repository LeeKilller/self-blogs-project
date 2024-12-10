import { FC } from 'react';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useTheme } from '@/hooks';
import { ThemeTypes } from '@/global/enums';
import styles from './navbar.module.less';

const { themeSelector } = styles;

const { Light } = ThemeTypes;

const ThemeSelector: FC = () => {
    const { curTheme, switchCurTheme } = useTheme();

    return (
        <Tooltip title={curTheme === Light?"亮色":"暗色"} placement='bottom'>
            <div 
                className={themeSelector}
                onClick={()=>switchCurTheme()}
            >
                {curTheme === Light?<SunOutlined />:<MoonOutlined />}
            </div>
        </Tooltip>
    )
}

export default ThemeSelector;