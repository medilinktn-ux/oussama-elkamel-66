import React, { useState } from 'react';

interface DialogProps {
  title: string;
  content: React.ReactNode;
  actions: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Dialog = ({ title, content, actions, isOpen, onClose }: DialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-container" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
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
