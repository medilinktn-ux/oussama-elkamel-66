import { useState } from 'react';

const useToast = () => {
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
  };

  const hideToast = () => {
    setToast(null);
  };

  return { toast, showToast, hideToast };;
}

export default useToast;