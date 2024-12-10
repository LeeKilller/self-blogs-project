import { FC, useState } from 'react';
import { Card, Select } from 'antd';

import { TrendChartComponenet } from '@/components';

import styles from './overview.module.less';

const { overViewWrapper, basicCard } = styles;

const { Grid } = Card;

import { siteAnalytics } from './data';

const OverView: FC = () => {
    const [ showCount, setShowCount ] = useState(7);


    return (
        <div className={overViewWrapper}>
            <Card title="数据统计">
                <Grid className={basicCard} hoverable={false}>
                    总访问量
                    <h3>{siteAnalytics.totalVisits}</h3>
                    <p>今日新增：<b>{siteAnalytics.visitTrend[0]}</b></p>
                </Grid>
                <Grid className={basicCard} hoverable={false}>
                    总访客量
                    <h3>{siteAnalytics.totalVisitors}</h3>
                    <p>今日新增：<b>{siteAnalytics.visitorTrend[0]}</b></p>
                </Grid>
                <Grid className={basicCard} hoverable={false}>
                    30天访问峰值
                    <h3>{siteAnalytics.peakVisitsIn30Days.count}</h3>
                    <p>出现在第<b>{siteAnalytics.peakVisitsIn30Days.day}</b>天</p>
                </Grid>
                <Grid className={basicCard} hoverable={false}>
                    30天平均访问量
                    <h3>{siteAnalytics.averageVisitsIn30Days}</h3>
                </Grid>
            </Card>
            <Card
                title="访问趋势图"
                extra={
                    <Select
                        options={[
                            { value: 3, label: '近3天' },
                            { value: 5, label: '近5天' },
                            { value: 7, label: '近7天' },
                            { value: 10, label: '近10天' },
                            { value: 15, label: '近15天' },
                            { value: 30, label: '近30天' },
                        ]}
                        defaultValue={7}
                        onChange={(value)=>setShowCount(value)}
                    />
                }
            >
                <Grid hoverable={false} style={{ width: '50%' }}>
                    <TrendChartComponenet
                        height={240}
                        length={showCount}
                        data={siteAnalytics.visitorTrend}
                        label='访客数'
                        loading={false}
                    />
                </Grid>
                <Grid hoverable={false} style={{ width: '50%' }}>
                    <TrendChartComponenet
                        height={240}
                        length={showCount}
                        data={siteAnalytics.visitTrend}
                        label='访问数'
                        loading={false}
                    />
                </Grid>
                <Grid hoverable={false} style={{ width: '50%' }}>
                    <TrendChartComponenet
                        height={240}
                        length={showCount}
                        data={siteAnalytics.totalVisitorTrend}
                        label='访客总数'
                        loading={false}
                    />
                </Grid>
                <Grid hoverable={false} style={{ width: '50%' }}>
                    <TrendChartComponenet
                        height={240}
                        length={showCount}
                        data={siteAnalytics.totalVisitTrend}
                        label='访问总数'
                        loading={false}
                    />
                </Grid>
            </Card>
        </div>
    )
}

export default OverView;