import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import InModals from '../../pages/InModals';
const { Header } = Layout;

const Headers: React.FC = (): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="in-pages">
            <Link to="/in-pages">In Pages</Link>
          </Menu.Item>
          <Menu.Item key="in-modals" onClick={showModal}>
            In Modals
          </Menu.Item>
        </Menu>
      </Header>
      <InModals visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} />
    </>
  )
}
export default Headers;