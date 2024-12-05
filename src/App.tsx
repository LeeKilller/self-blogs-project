import { FC } from 'react';
import router from '@/route'
import { RouterProvider } from 'react-router/dom'
import { ConfigProvider } from 'antd'
import { ThemeTypes } from './global/enums'
import { themMap } from './global/congfig'

const App: FC = () => {

    return (

        <ConfigProvider
            theme={themMap[ThemeTypes.Light]}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    )

}

export default App;