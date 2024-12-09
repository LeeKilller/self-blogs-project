import { FC } from 'react';

import { type ImageProps, type MenuProps, Image, Space, Dropdown, message } from 'antd';

import {
    LoadingOutlined,
    EyeOutlined,
    EllipsisOutlined
} from '@ant-design/icons';

import type { MenuItem } from '@/global/types';

import styles from './pictures.module.less';

const { imgPlaceHoldder, imgMask, imgEllipsis } = styles;

const items: MenuItem[] = [
    {
        key: 'copylink',
        label: '复制链接'
    },
    {
        key: 'copymdlink',
        label: '复制Markdown链接'
    },
    {
        type: 'divider'
    },
    {
        key: 'download',
        label: '下载'
    },
    {
        key: 'delete',
        label: '删除'
    },
    {
        type: 'divider'
    },
    {
        key: 'info',
        label: '信息'
    }
];

const clickMenu: MenuProps['onClick'] = ({ key, domEvent }) => {
    message.info(`Click on item ${key}`);
    domEvent.preventDefault();
    domEvent.stopPropagation();
};


interface ImgObj {
    key: string, // md5码
    name: string, // 图片名称
    index: number, // 图片索引
    url: string, // 图片链接，可通过该链接直接获取图片
    type: 'png' | 'jpg' | 'webp' | 'gif',// 图片类型
    size: number, // 图片大小，单位默认
}

interface IProps extends ImageProps {
    data: ImgObj
}

const MaskComponent: FC = () => {
    return (
        <div>
            <Dropdown className={imgEllipsis} menu={{ items, onClick:clickMenu }} placement="bottomRight">
                <EllipsisOutlined />
            </Dropdown>
            <Space>
                <EyeOutlined />
                预览
            </Space>
        </div>
    )
}

const ImageItem: FC<IProps> = ({ data: { url } }) => {

    return (
        <>
            <Image
                style={{
                    height: '100%',
                    objectFit: 'contain',
                }}
                src={url}
                placeholder={<div
                    className={imgPlaceHoldder}
                >
                    <LoadingOutlined />
                </div>}
                preview={{
                    mask: <MaskComponent />,
                    maskClassName: imgMask,
                    visible:true
                }}
            />
        </>
    )
}


export default ImageItem;