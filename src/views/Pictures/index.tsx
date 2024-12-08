import { FC, useState, useEffect, useRef } from 'react'

import {
    Layout,
    Image,
    Pagination,
    theme
} from 'antd';

import PictureHeader from './PictureHeader';

import styles from './pictures.module.less';

const {
    Header,
    Content
} = Layout;

const {
    picturesWrapper,
    contentWrapper
} = styles;

import { imgList } from './data';

const Pictures: FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [curPage, setCurPage] = useState<number>(1);

    const contentRef = useRef<HTMLDivElement | null>(null);
    const [imgWidth, setImgWidth] = useState<number>(240);
    useEffect(() => {
        setImgWidth(contentRef.current!.clientWidth / 5);

        const resizeHandler = () => {
            setImgWidth(contentRef.current!.clientWidth / 5);
        }


        window.addEventListener("resize", resizeHandler);


        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    }, [])

    return (
        <Layout className={picturesWrapper}>
            <Header style={{ padding: 0, background: colorBgContainer }}>
                <PictureHeader />
            </Header>
            <Content style={{ padding: 10 }}>
                <div ref={contentRef} className={contentWrapper}>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        {imgList.map(({ url }, index) => (index < 15 ? <Image key={index} width={imgWidth} src={url} /> : null))}
                    </Image.PreviewGroup>
                </div>
                <Pagination
                    style={{marginTop:40}}
                    align='center'
                    current={curPage}
                    pageSize={5}
                    total={500}
                    showSizeChanger={false}
                    onChange={(page) => setCurPage(page)}
                />
            </Content>
        </Layout>
    )
}

export default Pictures;