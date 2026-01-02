import React, { useState, useEffect } from 'react';

function useToast() {
  const [toast, setToast] = useState(false);

  useEffect(() => {
    // some effect
  }, []);

  return toast;
}

export default useToast;