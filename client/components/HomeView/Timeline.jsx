import React from 'react';

const Timeline = ({ data }) => (
    <div className="row timeline">
      I will be the TimeLine.
      {data}
    </div>
);

Timeline.propTypes = {
  data: React.PropTypes.bool,
};

export default Timeline;
