import { FC } from 'react'
import { Layout } from 'antd';
import Headers from '../Header';

const { Content, Footer } = Layout;

const Layouts: FC = ({ children }): JSX.Element => {
  return (
    <Layout className="layout">
      <Headers />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Fresh ©2021</Footer>
    </Layout>
  )
};

export default Layouts;