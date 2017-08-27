import React from 'react';
import {Meteor} from 'meteor/meteor';

// Component Imports
import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';

export default() => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
        <NoteList/>
      </div>
    </div>
  )
}
