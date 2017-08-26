import React from 'react';
import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { mount } from 'enzyme';

import NoteListItem from './NoteListItem';

if (Meteor.isClient) {
  describe('NoteListItem', function () {
    it('should render title and timestamp', function () {
      const title = 'Test Title';
      const updatedAt = 1503780230094;
      const wrapper = mount( <NoteListItem note={{title, updatedAt}} />);

      expect(wrapper.find('h5').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('8/26/17');
    });

    it('should set default title if no title set', function () {
      const wrapper = mount(<NoteListItem note={{}} />);
      expect(wrapper.find('h5').text()).toBe('Untitled note');
    });

  });
};
