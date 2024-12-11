import { FC } from 'react';
import router from '@/route';
import { RouterProvider } from 'react-router/dom';
import { ConfigProvider, theme } from 'antd';
import { themMap } from './global/congfig';
import { useTheme } from './hooks';
import { ThemeTypes } from './global/enums';

const { Light } = ThemeTypes;

const App: FC = () => {
    const { curTheme } = useTheme();


    return (
        <ConfigProvider
            theme={{
                token:{
                    ...themMap[curTheme].token,
                },
                algorithm: curTheme === Light ? theme.defaultAlgorithm :theme.darkAlgorithm,
            }}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    )

}

export default App;