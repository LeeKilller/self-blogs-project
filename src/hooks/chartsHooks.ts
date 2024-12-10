import type { EChartsOption } from 'echarts';
import { useRef, useEffect } from 'react';
import { useDebounceFn } from 'ahooks'

import echarts from '@/utils/echart';

const useECharts = (
    options: EChartsOption,
    loading: boolean = true,
    theme: 'light' | 'dark' | 'default' = 'default'
) => {
    const chartRef = useRef<HTMLDivElement>(null);
    let chartInstance: echarts.ECharts | null = null;

    // 在组件挂载/卸载时初始化/清除EChart
    useEffect(() => {
        initCharts();

        // console.log('enter useechart');
        return () => {
            disposeCharts();
        }
    }, [])

    // 在数据请求完成或option改变时，清除上一个EChart，并挂载新的EChart
    useEffect(() => {
        if (loading) return;
        setOptions(options);

        return () => {
            disposeCharts();
        }
    }, [loading, options])



    const { run: resizeFn } = useDebounceFn(
        () => {
            chartInstance?.resize();
        },
        { wait: 200 }
    )

    const initCharts = (t = theme) => {
        const el = chartRef?.current;
        if (!el) {
            // console.log('fail to get ref');
            return;
        }

        // console.log('sucess to get ref');
        
        chartInstance = echarts.init(el, t);

        if(chartInstance) {
            // console.log('success init');
        }

        window.addEventListener('resize', resizeFn);
    }

    const setOptions = (options: EChartsOption) => {
        if (!chartInstance) {
            initCharts();

            if (!chartInstance) {
                // console.log('fail to set options');
                return;
            }
        }

        chartInstance?.clear();

        // console.log('useEchart options',options);

        chartInstance?.setOption(options);
    }

    const disposeCharts = () => {
        if (!chartInstance) return;
        window.removeEventListener('resize', resizeFn);
        chartInstance.dispose();
        chartInstance = null;
    }

    const getInstance = (): echarts.ECharts | null => {
        if (!chartInstance) {
            initCharts();
        }
        return chartInstance;
    }


    return { chartRef, getInstance }
}


export default useECharts;