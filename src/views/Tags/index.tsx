import { FC } from 'react';

import { Card, Button } from 'antd';

import { tags } from './data';

const Tags:FC = () => {

    return (
        <Card title="标签">
            <div>
                {tags.map((tag,index) => <Button type='text' key={index}>{tag}</Button>)}
            </div>
        </Card>
    )
}

export default Tags;