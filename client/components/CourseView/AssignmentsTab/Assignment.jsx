import React, { Component, PropTypes } from 'react';
import actions from '../../../actions/index.js';
import { connect } from 'react-redux';

class Assignment extends Component {
  // when a single student is clicked
  // get the current student and display their info
  render() {
    return (
      <div className="row">
        <button
          type="button"
          className="btn btn-secondary back"
          onClick={ () => this.props.handleBackButton() }
        >
          Back
        </button>
        {this.props.displayedAssignment.name}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { displayedAssignment: state.displayedAssignment }
);

// go back to all students when back is pressed
const mapDispatchToProps = (dispatch) => (
  {
    handleBackButton: () => {
      dispatch(actions.switchTabs('Assignments'));
    },
  }
);

Assignment.propTypes = {
  displayedAssignment: PropTypes.object,
  handleBackButton: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Assignment);
