import React from 'react';

const YoutubeItem = (props) => {
    return (
        <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      {/* <div > */}

      {/* </div> */}
      <div className="youtube-footer">
        <img src={props.imgAuthor} alt="" className="youtube-avatar" />
        <div className="youtube-infor">
          <h3 className="youtube-title">{props.title || "Learning React"}</h3>
          <h4 className="youtube-authors">{props.author || "No author"}</h4>
        </div>
      </div>
    </div>
    );
};

export default YoutubeItem;