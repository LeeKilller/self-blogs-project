import type { FC } from 'react';

import { Card, Flex } from 'antd';

import header from '@/assets/header.jpg';

const SiderInfoCard: FC = () => {

    return (
        <Card>
            <Flex vertical justify='center' align='center'>
                <img 
                    src={header} 
                    style={{
                        width:'80%',
                        borderRadius:'50%'
                    }}
                />
                <h3 
                    style={{
                        textAlign:'center',
                        marginTop:10
                    }}
                >
                    Si
                </h3>
                <p>Stay Hungry, <br />stay foolish.</p>
            </Flex>

        </Card>
    )
}

export default SiderInfoCard;