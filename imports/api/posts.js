import {Mongo} from 'meteor/mongo';
// Mongo is the named export from meteor/mongo


// to create a collection we use the new constructor function
export const Posts = new Mongo.Collection('posts');
                                // posts will be the name of the collection
