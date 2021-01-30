import React from 'react';
import propTypes from 'prop-types';
import css from 'classnames';

import styles from './app.module.css';

const App = ({ message }) => {
  return (
    <div
      className={css({
        [styles.bg]: true,
      })}
    >
      <h1>{message}</h1>
    </div>
  );
};

App.propTypes = {
  message: propTypes.string,
};

App.defaultProps = {
  message: 'Skeleton',
};

export default App;
