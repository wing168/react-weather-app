import React from 'react';

import './loading.styles.css';

import Loader from 'react-loader-spinner';

const Loading = () => (
    <div className="Loader">
        <div className="loader-center">
          <Loader type="Oval" color="#fff" />
        </div>
      </div>
);

export default Loading;