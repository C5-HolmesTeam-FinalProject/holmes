import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Button.scss';

const ActionButton = ({ mode, text, onClick, to }) => {
  return (
    <Link
      to={to}
      className={mode === 'dark' ? 'button dark' : mode === 'darkred' ? 'button darkred' : 'button'}
      onClick={onClick}
    >
      {text}

    </Link>
  );
};

export default ActionButton;
