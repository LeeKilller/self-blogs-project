import { FC } from 'react';

import { Card } from 'antd';

import { articleData } from './data';
import ArtcleCard from './ArtcleCard';

const { Grid } = Card;

const Home:FC = () => {

    return (
        <Card>
            {articleData.map(ele => 
                <Grid 
                    key={ele.id}
                    style={{width:'100%'}}
                >
                    <ArtcleCard articleData={ele} />
                </Grid>
            )}
        </Card>
    )
}

export default Home;