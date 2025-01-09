import { useSelector } from 'react-redux';
import { AppRouter } from './routers';
import './styles/global.css';
import { Modal } from 'shared/modal';
import { selectModalProps } from 'shared/model';

const App = () => {
  const modalProps = useSelector(selectModalProps);

  return (
    <>
    <AppRouter />
    <Modal {...modalProps} />
    </>
  );
};

export default App;
