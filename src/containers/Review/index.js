import {connect} from 'react-redux';

import Review from '../../components/Review';
import {addReview, removeReview, editReview} from '../../actions/reviewActions';

const mapDispatchToProps = dispatch => {
  return {
    userAddReview: (data) => dispatch(addReview(data)),
    userRemoveReview: (data) => dispatch(removeReview(data)),
    userEditReview: (data) => dispatch(editReview(data))
  };
};

const mapStateToProps = state => {
  return {
    reviewsData: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);