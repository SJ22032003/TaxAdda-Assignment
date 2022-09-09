import { Store } from 'react-notifications-component';

const errorMessage = (
  title = 'error',
  message = 'error occur',
  type = 'danger',
  duration = '2000',
) => {
  Store.addNotification({
    title,
    message,
    type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration,
      onScreen: true
    }
  });
};
export default errorMessage;
