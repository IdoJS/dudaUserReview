import React from 'react';

const StaticReview = (props) => {
  return <div className="ui fluid card">
    <div className="static-review-item">
      <img className="review-avatar" srcSet={`${props.avatar}`}></img>
      <div className="static-review-item-fields">
        <div className="review-name">{props.uName}</div>
        <div className="review-text">{props.rText}</div>
      </div>
      <div className="static-review-item-actions">
        <i className="trash alternate icon" onClick={() => {
          props.reviewDelete(props.rId);
        }}/>

        <i className="pencil alternate icon" onClick={() => {
          props.reviewEdit(props.rId);
        }}/>
      </div>
    </div>
  </div>
};

export default StaticReview;