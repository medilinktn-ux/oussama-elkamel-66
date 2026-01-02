import React, { useState, useEffect } from 'react';

interface DialogProps {
  title: string;
  content: React.ReactNode;
  actions: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Dialog = ({ title, content, actions, isOpen, onClose }: DialogProps) => {
  if (!isOpen) return null;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="dialog-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="dialog-container" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose} aria-label="Close dialog">×</button>
        </div>
        <div className="dialog-content">
          {content}
        </div>
        <div className="dialog-actions">
          {actions}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
