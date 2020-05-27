import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [selectedStory, setSelectedStory] = useState({});
  const [selectedUser, setSelectedUser] = useState({});

  const handleStory = (story, user) => {
    setSelectedStory(story);
    setSelectedUser(user);
    setShowStory(!showStory);
  }

  return (
    <>
      <section className="stories" data-testid="stories">
        <div className="container">
        {stories?.map((story, index) => {
            const user = getUserHandler(story.userId);

            return (
              user && (
                <button
                  key={story.id}
                  onClick={() => handleStory(story, user)}
                  className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}
                >
                  <div className="user__thumb__wrapper">
                    <img src={user?.avatar} alt={user?.name} />
                  </div>
                </button>
              )
            )
          })}
        </div>
      </section>

      {showStory && (
        <Story 
          story={selectedStory}
          user={selectedUser}
          handleClose={() => setShowStory(!showStory)}
        />
      )}
    </>
  );
};

export default Stories;
