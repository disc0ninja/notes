import React from 'react';
import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import {Notes} from '../api/notes';

export const NoteListHeader = (props) => {
  return (
    <button onClick={() => props.meteorCall('notes.insert')}>Create Note</button>
  );
};

NoteListHeader.propTypes = {
  meteorCall: PropTypes.func.isRequired
}

export default createContainer(() => {
  return {meteorCall: Meteor.call};
}, NoteListHeader);
