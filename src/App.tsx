import { FC } from 'react';
import router from '@/route';
import { RouterProvider } from 'react-router/dom';
import { ConfigProvider } from 'antd';
import { themMap } from './global/congfig';
import { useTheme } from './hooks';

const App: FC = () => {
    const { curTheme } = useTheme();


    return (

        <ConfigProvider
            theme={themMap[curTheme]}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    )

}

export default App;