import React from 'react';
import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
// api imports
import {Notes} from '../api/notes';
// component imports
import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';

export const NoteList = (props) => {
  return (
    <div>
      <NoteListHeader/>
      {props.notes.map((note) => {
        return <NoteListItem key={note._id} note={note} />
      })}
      {props.notes.length === 0 ?  <NoteListEmptyItem/> : undefined}
      NoteList {props.notes.length}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('notes');

  return {notes: Notes.find().fetch()}
}, NoteList);
