import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from '@/route'
import { RouterProvider } from 'react-router/dom'
import { ConfigProvider } from 'antd'
import { ThemTypes } from './global/enums'
import { themMap } from './global/congfig'
import '@/design/index.less'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={themMap[ThemTypes.Light]}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>,
)
