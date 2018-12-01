import React from 'react';

import DynamicReview from '../DynamicReview';
import StaticReview from '../StaticReview';
import {getCounter, setCounter} from "../../utils/storage";
import {constants} from "../../utils/constants";
import {getImgAsync} from "../../api";

class Review extends React.Component {

  state = {
    editMode: false,
    rId: 0
  }

  constructor(props) {
    super(props);

    this.reviewDelete = this.reviewDelete.bind(this);
    this.reviewEdit = this.reviewEdit.bind(this);
    this.setReview = this.setReview.bind(this);

    this.counter = getCounter();

  }

  reviewDelete(rId) {
    this.props.userRemoveReview({rId});
    this.setState({
      editMode: false
    });
  }

  reviewEdit(rId) {
    this.setState({
      editMode: true,
      rId
    })
  }

  setReview({type, uName, rText, rId}) {
    this.setState({
      editMode: false
    });

    if (type === constants.NEW) {
      this.counter++;
      setCounter(this.counter);
      getImgAsync().then(avatar => {
        this.props.userAddReview({avatar: avatar, uName, rText, rId: this.counter});
      });
    } else {
      this.props.userEditReview({uName, rText, rId});
    }
  }


  render() {
    const {reviewsData} = this.props;

    const items = reviewsData.reviews.map((review, key) => {
      if (this.state.editMode && review.rId === this.state.rId) {
        //todo show as edit/new
        return <DynamicReview key={key} {...review} type={constants.EDIT} setReview={this.setReview}/>
      } else {
        return <StaticReview key={key} {...review} reviewDelete={this.reviewDelete} reviewEdit={this.reviewEdit}/>
      }
    });

    return <div className="ui form">
      <h2 className="ui header">User Reviews</h2>
      {items}
      {!this.state.editMode ? <DynamicReview type={constants.NEW} setReview={this.setReview}/> : null}
    </div>
  }

}

export default Review;