import { FC } from 'react';
import { 
    Upload,
    Button 
} from 'antd';

import styles from './pictures.module.less';

const { pictureHeader } = styles;


const PictureHeader: FC = () => {

    return (
        <div className={pictureHeader}>
            <h2>图片管理</h2>
            <Button type='primary'>上传图片</Button>
        </div>
    )
}


export default PictureHeader;