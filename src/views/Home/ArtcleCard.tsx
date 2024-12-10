import { Flex, Space, Tag } from 'antd';
import type { FC } from 'react';


interface DraftObj {
    index: number, // 相对于初始位置的索引
    id: number, // 草稿标识符，自增型key
    title: string,
    author: string,
    tags: string[],
    initialTime: string, // like 'December 17, 1995 03:24:00' 或是其它合规时间，请与我讨论，时间戳都行
    description: string
}

interface ArticleObj extends DraftObj {
    weight: number // 权重
    cover?: string
}

interface IProps {
    articleData:ArticleObj
}

const ArtcleCard: FC<IProps> = ({articleData}) => {
    const { title, tags ,initialTime, description } = articleData;


    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Flex justify='space-between' style={{marginTop:5}}>
                {initialTime}
                <Space size={0}>
                    {tags.map(tag=><Tag key={tag}>
                        {tag}
                    </Tag>)}
                </Space>
            </Flex>
        </div>
    )
}

export default ArtcleCard;