import React, { useState, useEffect } from 'react';

const useToast = () => {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return { toast, setToast };
};

export default useToast;