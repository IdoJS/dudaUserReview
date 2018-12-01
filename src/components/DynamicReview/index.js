import React from 'react';
import {constants} from "../../utils/constants";

class DynamicReview extends React.PureComponent {

  state = {
    uName: this.props.uName || '',
    rText: this.props.rText || ''
  }

  constructor(props) {
    super(props);

    this.updateListByType = this.updateListByType.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  updateListByType(ev) {
    this.props.setReview({
      ...this.state,
      type: this.props.type,
      rId: this.props.rId || 0
    })
  }

  onChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  render() {
    return <div className="ui fluid card">
      <div className="dynamic-review-fields">
        <input className="review-input-name"
               type="text" name='uName'
               onChange={this.onChange}
               placeholder={`${this.props.type === constants.NEW ? 'Your name' : ''}`} value={this.state.uName}/>
        <textarea className="review-input-text"
               type="text"
               name='rText'
               onChange={this.onChange}
               placeholder={`${this.props.type === constants.NEW ? 'Your comment' : ''}`} value={this.state.rText}/>

      </div>
      <div>
        <button className="ui medium blue button right floated"
                onClick={this.updateListByType}>{this.props.type === constants.NEW ? constants.ADD : constants.SAVE}</button>

      </div>
    </div>
  }


};

export default DynamicReview;