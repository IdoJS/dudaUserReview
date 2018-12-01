import React from 'react';

const StaticReview = (props) => {
  return <div className="ui card">
    <div className="static-review-item">
      <img width='30' height='30' srcSet={`${props.avatar}`}></img>
      <div className="static-review-item-fields">
        <div>{props.uName}</div>
        <div>{props.rText}</div>
      </div>
      <div className="static-review-item-actions">
      <span className="ui label" onClick={() => {
        props.reviewDelete(props.rId);
      }}>
      <i className="trash alternate icon"></i>
      </span>

        <span className="ui label" onClick={() => {
          props.reviewEdit(props.rId);
        }}>
      <i className="pencil alternate icon"></i>
      </span>
      </div>
    </div>
  </div>
};

export default StaticReview;