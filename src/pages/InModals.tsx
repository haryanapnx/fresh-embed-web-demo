import { Modal, ModalProps } from 'antd';
import { FC } from 'react';
import { IFrame } from '../components/IFrame';

interface InModalProps extends ModalProps{
  visible: boolean;
}
const InModals: FC<InModalProps> = ({...rest}) => {
  return (
    <>
      <Modal title="IFrame In Modal" {...rest}>
        <IFrame />
      </Modal>
    </>
  );
};

export default InModals;
