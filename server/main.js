import {Meteor} from 'meteor/meteor';
import {WebApp} from 'meteor/webapp';

// API imports
import '../imports/api/users';
import '../imports/api/notes';

// Configuration Imports
import '../imports/startup/simple-schema-configuration';

Meteor.startup(() => {});
