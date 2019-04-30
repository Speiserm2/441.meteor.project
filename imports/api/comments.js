import {Mongo} from 'meteor/mongo';
// Mongo is the named export from meteor/mongo


// to create a collection we use the new constructor function
export const Comments = new Mongo.Collection('comments');
                                // posts will be the name of the collection
