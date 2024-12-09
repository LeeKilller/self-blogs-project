import type { LoadableComponent } from '@loadable/component'
import { type ReactNode, Suspense } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

/**
 * @description 路由懒加载
 * @param {Element} Component 需要访问的组件
 * @returns element
 */
const LazyLoad = (Component: LoadableComponent<any>): ReactNode => {
  return (
    <Suspense
      fallback={
        <Spin
          size='large'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width:'100%'
          }}
          indicator={<LoadingOutlined spin style={{fontSize:'50px'}}/>}
        />
      }
    >
      <Component />
    </Suspense>
  )
}

export default LazyLoad
