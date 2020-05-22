import React from "react";
// , { useCallback, useState }

// import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <div className="story__header">
          <div className="user">
            <div className="user__thumb">
              <img src="" alt=""/>
            </div>

            <div className="user__name"></div>
          </div>  
        </div>

        <div className="story__progress"></div>
        <div className="story__progress__elapsed"></div>  
        <div className="story__close"></div>
        <div className="story__video__wrapper"></div>
        <div className="video-player"></div>
      </div>
    </section>
  );
};

export default Story;
