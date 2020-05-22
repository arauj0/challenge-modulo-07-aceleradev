import React from "react";
// , { useState }

// import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  return (
    <>
      <section className="stories" data-testid="stories">
        <div className="container">
          <button className="user__thumb user__thumb--hasNew">
            <div className="user__thumb__wrapper">
              <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="perfil pantera"/>
            </div>
          </button>

          <button className="user__thumb">
            <div className="user__thumb__wrapper">
              <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="perfil pantera"/>
            </div>
          </button>

          <button className="user__thumb">
            <div className="user__thumb__wrapper">
              <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="perfil pantera"/>
            </div>
          </button>
        </div>
      </section>

      {/* {showStory && (
        <Story />
        )} */}
    </>
  );
};

export default Stories;
