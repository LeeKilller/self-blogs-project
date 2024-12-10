import { FC } from 'react';
import type { MenuItem } from '@/global/types';
import { Menu } from 'antd';

import { articleData } from './data';

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
}

const genToMenuItems = (articleList: ArticleObj[]):MenuItem[] =>  {
    // 假设已按时间排好序
    const yearMap = {} as Record<string,any>;

    for(let i = 0; i < articleList.length; i++) {
        const ele = articleList[i];
        const time = new Date(ele.initialTime);
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
        const date = time.getDate();
        if(!yearMap[`${year}`]) {
            yearMap[`${year}`] = {
                key:`${year}`,
                icon:<h1>{year}</h1>,
                children:[]
            }
        }

        yearMap[`${year}`].children.push({
            key:ele.id,
            icon:<span>{`${month}-${date}`}</span>,
            label:ele.title
        })

    }

    const res:MenuItem[] = [];

    Object.keys(yearMap).forEach(key =>{
        yearMap[key].label = `${yearMap[key].children.length}篇`;
        res.push(yearMap[key]);
    })

    return res;
}

const items = genToMenuItems(articleData);

const TimeLine:FC = () => {

    return (
        <div>
            <Menu 
                items={items}
                mode="inline"
                selectable={false}
                defaultOpenKeys={items.map((ele)=>ele!.key) as string[]}
            />
        </div>
    )
}

export default TimeLine;