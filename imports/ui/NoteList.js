import React from 'react';
import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

// component imports
import NoteListHeader from './NoteListHeader';

// api imports
import {Notes} from '../api/notes';

export const NoteList = (props) => {
  return(
    <div>
      NoteList {props.notes.length}
      <NoteListHeader />
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('notes');

  return {
      notes: Notes.find().fetch()
  }
}, NoteList);
