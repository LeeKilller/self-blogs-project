import type { EChartsOption } from 'echarts';
import type { FC } from 'react';
import { useMemo } from 'react';
import { Card, theme } from 'antd';
import { useECharts } from '@/hooks';

interface IProps {
    height: number,
    data: number[],
    length: number,
    label: string,
    loading: boolean
}

const TrendChartComponenet: FC<IProps> = ({length, data, height, label, loading }) => {
    const {
        token: { colorPrimary },
    } = theme.useToken();

    const dateList = useMemo(()=>{
        const now = Date.now();
        const res: string[] = [];
        for(let i = 0; i < 30; i++) {
            const curDate = new Date(now - i*24*3600*1000);
            res.push(`${curDate.getFullYear()}-${curDate.getMonth()+1}-${curDate.getDate()}`)
        }

        return res.reverse();
    },[]);

    const lineOptions: EChartsOption = useMemo(()=>{
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        width: 1,
                        color: colorPrimary
                    }
                }
            },
            grid: {
                left: 0,
                right: '1%',
                top: '2%',
                bottom: 0,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: dateList.slice(-length),
                axisTick: {
                    alignWithLabel: true
                }
            },
            yAxis: {
                type: 'value',
                max: value => {
                    return Math.ceil(value.max / 100) * 100 + 300
                }
            },
            label: {
                show: false,
                fontSize: 14,
                color: colorPrimary,
                position: 'top',
                formatter: `${label}`
            },
            series: [
                {
                    type: 'line',
                    name: `${label}`,
                    color: [colorPrimary],
                    data: data.reverse().slice(-length),
                    areaStyle: {
                        opacity:0.2
                    }
                }
            ]
        }
    
    },[length,data])
    
    const { chartRef } = useECharts(lineOptions, loading)

    return (
        <div style={{width:'100%'}} >
            <h3 style={{marginBottom:20}}>
                {label}趋势图
            </h3>
            <div
                ref={chartRef}
                style={{
                    width: '100%',
                    height: height + 'px'
                }}
            />
        </div>
    )
}

export default TrendChartComponenet;