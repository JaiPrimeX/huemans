// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Categories = {
  "BRUNCH": "BRUNCH",
  "SANDWICHES": "SANDWICHES",
  "CAFE": "CAFE",
  "SWEETS": "SWEETS"
};

const { Ratings, Businesses, Users, Todo, Note, Logos, RatingsUsers, UsersBusinesses, Addresses } = initSchema(schema);

export {
  Ratings,
  Businesses,
  Users,
  Todo,
  Note,
  Logos,
  RatingsUsers,
  UsersBusinesses,
  Categories,
  Addresses
};