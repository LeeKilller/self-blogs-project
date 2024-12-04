import { FC } from 'react';
import { Button, Result } from 'antd';
import { useNavigate, useLoaderData } from 'react-router';

const PageException: FC = () => {
  const navigate = useNavigate();
  const { status } = useLoaderData() as { status:'404'|'403'|'500' };
  const subTitleMap = {
    '403':'对不起，您没有权限访问此页面。',
    '404':'对不起，您访问的页面不存在。',
    '500':'对不起，服务器发生错误。'
  }

  return (
    <Result
      status={status}
      title={status}
      subTitle={subTitleMap[status]}
      extra={
        <Button type="primary" onClick={()=>navigate('/')}>返回首页</Button>
      }
    />
  )
}


export default PageException;