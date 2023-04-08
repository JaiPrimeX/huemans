import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Categories {
  BRUNCH = "BRUNCH",
  SANDWICHES = "SANDWICHES",
  CAFE = "CAFE",
  SWEETS = "SWEETS"
}

type EagerAddresses = {
  readonly Street?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly PostalCode?: number | null;
}

type LazyAddresses = {
  readonly Street?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly PostalCode?: number | null;
}

export declare type Addresses = LazyLoading extends LazyLoadingDisabled ? EagerAddresses : LazyAddresses

export declare const Addresses: (new (init: ModelInit<Addresses>) => Addresses)

type EagerRatings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ratings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Rating?: number | null;
  readonly Review?: string | null;
  readonly businessesID: string;
  readonly BusinessReviews?: Businesses | null;
  readonly UserReviews?: (RatingsUsers | null)[] | null;
  readonly usersID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRatings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ratings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Rating?: number | null;
  readonly Review?: string | null;
  readonly businessesID: string;
  readonly BusinessReviews: AsyncItem<Businesses | undefined>;
  readonly UserReviews: AsyncCollection<RatingsUsers>;
  readonly usersID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ratings = LazyLoading extends LazyLoadingDisabled ? EagerRatings : LazyRatings

export declare const Ratings: (new (init: ModelInit<Ratings>) => Ratings) & {
  copyOf(source: Ratings, mutator: (draft: MutableModel<Ratings>) => MutableModel<Ratings> | void): Ratings;
}

type EagerBusinesses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Businesses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: Addresses | null;
  readonly Category?: string | null;
  readonly Reviews?: (Ratings | null)[] | null;
  readonly Phone?: string | null;
  readonly Hours?: string | null;
  readonly BusinessImage?: string | null;
  readonly Owner?: Users | null;
  readonly Website?: string | null;
  readonly userss?: (UsersBusinesses | null)[] | null;
  readonly usersID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusinesses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Businesses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: Addresses | null;
  readonly Category?: string | null;
  readonly Reviews: AsyncCollection<Ratings>;
  readonly Phone?: string | null;
  readonly Hours?: string | null;
  readonly BusinessImage?: string | null;
  readonly Owner: AsyncItem<Users | undefined>;
  readonly Website?: string | null;
  readonly userss: AsyncCollection<UsersBusinesses>;
  readonly usersID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Businesses = LazyLoading extends LazyLoadingDisabled ? EagerBusinesses : LazyBusinesses

export declare const Businesses: (new (init: ModelInit<Businesses>) => Businesses) & {
  copyOf(source: Businesses, mutator: (draft: MutableModel<Businesses>) => MutableModel<Businesses> | void): Businesses;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserName?: string | null;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly Birthday?: string | null;
  readonly ProfileImage?: string | null;
  readonly OwnedBusinesses?: (Businesses | null)[] | null;
  readonly ratingss?: (RatingsUsers | null)[] | null;
  readonly UserRatings?: (Ratings | null)[] | null;
  readonly Favorites?: (UsersBusinesses | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserName?: string | null;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly Birthday?: string | null;
  readonly ProfileImage?: string | null;
  readonly OwnedBusinesses: AsyncCollection<Businesses>;
  readonly ratingss: AsyncCollection<RatingsUsers>;
  readonly UserRatings: AsyncCollection<Ratings>;
  readonly Favorites: AsyncCollection<UsersBusinesses>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Note = LazyLoading extends LazyLoadingDisabled ? EagerNote : LazyNote

export declare const Note: (new (init: ModelInit<Note>) => Note) & {
  copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}

type EagerLogos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Logos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BigLogo?: string | null;
  readonly SmallLogo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLogos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Logos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BigLogo?: string | null;
  readonly SmallLogo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Logos = LazyLoading extends LazyLoadingDisabled ? EagerLogos : LazyLogos

export declare const Logos: (new (init: ModelInit<Logos>) => Logos) & {
  copyOf(source: Logos, mutator: (draft: MutableModel<Logos>) => MutableModel<Logos> | void): Logos;
}

type EagerRatingsUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RatingsUsers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ratingsId?: string | null;
  readonly usersId?: string | null;
  readonly ratings: Ratings;
  readonly users: Users;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRatingsUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RatingsUsers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ratingsId?: string | null;
  readonly usersId?: string | null;
  readonly ratings: AsyncItem<Ratings>;
  readonly users: AsyncItem<Users>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RatingsUsers = LazyLoading extends LazyLoadingDisabled ? EagerRatingsUsers : LazyRatingsUsers

export declare const RatingsUsers: (new (init: ModelInit<RatingsUsers>) => RatingsUsers) & {
  copyOf(source: RatingsUsers, mutator: (draft: MutableModel<RatingsUsers>) => MutableModel<RatingsUsers> | void): RatingsUsers;
}

type EagerUsersBusinesses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersBusinesses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly businessesId?: string | null;
  readonly usersId?: string | null;
  readonly businesses: Businesses;
  readonly users: Users;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersBusinesses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersBusinesses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly businessesId?: string | null;
  readonly usersId?: string | null;
  readonly businesses: AsyncItem<Businesses>;
  readonly users: AsyncItem<Users>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersBusinesses = LazyLoading extends LazyLoadingDisabled ? EagerUsersBusinesses : LazyUsersBusinesses

export declare const UsersBusinesses: (new (init: ModelInit<UsersBusinesses>) => UsersBusinesses) & {
  copyOf(source: UsersBusinesses, mutator: (draft: MutableModel<UsersBusinesses>) => MutableModel<UsersBusinesses> | void): UsersBusinesses;
}