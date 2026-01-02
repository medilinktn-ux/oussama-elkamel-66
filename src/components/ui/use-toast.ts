import React, { useState, useEffect } from 'react';

interface Toast {
  message: string;
  type: 'success' | 'error' | 'warning';
}

const useToast = () => {
  const [toast, setToast] = useState<Toast | null>(null);
  const [duration, setDuration] = useState(3000);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [toast, duration]);

  const showToast = (message: string, type: 'success' | 'error' | 'warning', duration?: number) => {
    setToast({ message, type });
    if (duration) {
      setDuration(duration);
    }
  };

  return { toast, setToast: showToast };
};

export default useToast;