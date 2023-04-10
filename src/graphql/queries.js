/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRatings = /* GraphQL */ `
  query GetRatings($id: ID!) {
    getRatings(id: $id) {
      id
      Rating
      Review
      businessesID
      BusinessReviews {
        id
        Name
        Address {
          Street
          City
          State
          PostalCode
        }
        Category
        Reviews {
          nextToken
          startedAt
        }
        Phone
        Hours
        BusinessImage
        Owner {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          Owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userss {
          nextToken
          startedAt
        }
        usersID
        Web
        Lat
        Lng
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserReviews {
        items {
          id
          ratingsId
          usersId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      usersID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Rating
        Review
        businessesID
        BusinessReviews {
          id
          Name
          Category
          Phone
          Hours
          BusinessImage
          usersID
          Web
          Lat
          Lng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserReviews {
          nextToken
          startedAt
        }
        usersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRatings = /* GraphQL */ `
  query SyncRatings(
    $filter: ModelRatingsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRatings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Rating
        Review
        businessesID
        BusinessReviews {
          id
          Name
          Category
          Phone
          Hours
          BusinessImage
          usersID
          Web
          Lat
          Lng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserReviews {
          nextToken
          startedAt
        }
        usersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBusinesses = /* GraphQL */ `
  query GetBusinesses($id: ID!) {
    getBusinesses(id: $id) {
      id
      Name
      Address {
        Street
        City
        State
        PostalCode
      }
      Category
      Reviews {
        items {
          id
          Rating
          Review
          businessesID
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Phone
      Hours
      BusinessImage
      Owner {
        id
        UserName
        FirstName
        LastName
        Email
        Phone
        Birthday
        ProfileImage
        OwnedBusinesses {
          nextToken
          startedAt
        }
        ratingss {
          nextToken
          startedAt
        }
        UserRatings {
          nextToken
          startedAt
        }
        Favorites {
          nextToken
          startedAt
        }
        Owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userss {
        items {
          id
          businessesId
          usersId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      usersID
      Web
      Lat
      Lng
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Address {
          Street
          City
          State
          PostalCode
        }
        Category
        Reviews {
          nextToken
          startedAt
        }
        Phone
        Hours
        BusinessImage
        Owner {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          Owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userss {
          nextToken
          startedAt
        }
        usersID
        Web
        Lat
        Lng
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBusinesses = /* GraphQL */ `
  query SyncBusinesses(
    $filter: ModelBusinessesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBusinesses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Name
        Address {
          Street
          City
          State
          PostalCode
        }
        Category
        Reviews {
          nextToken
          startedAt
        }
        Phone
        Hours
        BusinessImage
        Owner {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          Owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userss {
          nextToken
          startedAt
        }
        usersID
        Web
        Lat
        Lng
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      UserName
      FirstName
      LastName
      Email
      Phone
      Birthday
      ProfileImage
      OwnedBusinesses {
        items {
          id
          Name
          Category
          Phone
          Hours
          BusinessImage
          usersID
          Web
          Lat
          Lng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ratingss {
        items {
          id
          ratingsId
          usersId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      UserRatings {
        items {
          id
          Rating
          Review
          businessesID
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Favorites {
        items {
          id
          businessesId
          usersId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserName
        FirstName
        LastName
        Email
        Phone
        Birthday
        ProfileImage
        OwnedBusinesses {
          nextToken
          startedAt
        }
        ratingss {
          nextToken
          startedAt
        }
        UserRatings {
          nextToken
          startedAt
        }
        Favorites {
          nextToken
          startedAt
        }
        Owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        UserName
        FirstName
        LastName
        Email
        Phone
        Birthday
        ProfileImage
        OwnedBusinesses {
          nextToken
          startedAt
        }
        ratingss {
          nextToken
          startedAt
        }
        UserRatings {
          nextToken
          startedAt
        }
        Favorites {
          nextToken
          startedAt
        }
        Owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLogos = /* GraphQL */ `
  query GetLogos($id: ID!) {
    getLogos(id: $id) {
      id
      BigLogo
      SmallLogo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLogos = /* GraphQL */ `
  query ListLogos(
    $filter: ModelLogosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        BigLogo
        SmallLogo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLogos = /* GraphQL */ `
  query SyncLogos(
    $filter: ModelLogosFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLogos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        BigLogo
        SmallLogo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRatingsUsers = /* GraphQL */ `
  query GetRatingsUsers($id: ID!) {
    getRatingsUsers(id: $id) {
      id
      ratingsId
      usersId
      ratings {
        id
        Rating
        Review
        businessesID
        BusinessReviews {
          id
          Name
          Category
          Phone
          Hours
          BusinessImage
          usersID
          Web
          Lat
          Lng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserReviews {
          nextToken
          startedAt
        }
        usersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      users {
        id
        UserName
        FirstName
        LastName
        Email
        Phone
        Birthday
        ProfileImage
        OwnedBusinesses {
          nextToken
          startedAt
        }
        ratingss {
          nextToken
          startedAt
        }
        UserRatings {
          nextToken
          startedAt
        }
        Favorites {
          nextToken
          startedAt
        }
        Owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRatingsUsers = /* GraphQL */ `
  query ListRatingsUsers(
    $filter: ModelRatingsUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatingsUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ratingsId
        usersId
        ratings {
          id
          Rating
          Review
          businessesID
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          Owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRatingsUsers = /* GraphQL */ `
  query SyncRatingsUsers(
    $filter: ModelRatingsUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRatingsUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ratingsId
        usersId
        ratings {
          id
          Rating
          Review
          businessesID
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          Owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUsersBusinesses = /* GraphQL */ `
  query GetUsersBusinesses($id: ID!) {
    getUsersBusinesses(id: $id) {
      id
      businessesId
      usersId
      businesses {
        id
        Name
        Address {
          Street
          City
          State
          PostalCode
        }
        Category
        Reviews {
          nextToken
          startedAt
        }
        Phone
        Hours
        BusinessImage
        Owner {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          Owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userss {
          nextToken
          startedAt
        }
        usersID
        Web
        Lat
        Lng
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      users {
        id
        UserName
        FirstName
        LastName
        Email
        Phone
        Birthday
        ProfileImage
        OwnedBusinesses {
          nextToken
          startedAt
        }
        ratingss {
          nextToken
          startedAt
        }
        UserRatings {
          nextToken
          startedAt
        }
        Favorites {
          nextToken
          startedAt
        }
        Owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsersBusinesses = /* GraphQL */ `
  query ListUsersBusinesses(
    $filter: ModelUsersBusinessesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        businessesId
        usersId
        businesses {
          id
          Name
          Category
          Phone
          Hours
          BusinessImage
          usersID
          Web
          Lat
          Lng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          Owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsersBusinesses = /* GraphQL */ `
  query SyncUsersBusinesses(
    $filter: ModelUsersBusinessesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsersBusinesses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        businessesId
        usersId
        businesses {
          id
          Name
          Category
          Phone
          Hours
          BusinessImage
          usersID
          Web
          Lat
          Lng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          Owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const ratingsByBusinessesID = /* GraphQL */ `
  query RatingsByBusinessesID(
    $businessesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingsByBusinessesID(
      businessesID: $businessesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Rating
        Review
        businessesID
        BusinessReviews {
          id
          Name
          Category
          Phone
          Hours
          BusinessImage
          usersID
          Web
          Lat
          Lng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserReviews {
          nextToken
          startedAt
        }
        usersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const ratingsByUsersID = /* GraphQL */ `
  query RatingsByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingsByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Rating
        Review
        businessesID
        BusinessReviews {
          id
          Name
          Category
          Phone
          Hours
          BusinessImage
          usersID
          Web
          Lat
          Lng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserReviews {
          nextToken
          startedAt
        }
        usersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const businessesByUsersID = /* GraphQL */ `
  query BusinessesByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    businessesByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Name
        Address {
          Street
          City
          State
          PostalCode
        }
        Category
        Reviews {
          nextToken
          startedAt
        }
        Phone
        Hours
        BusinessImage
        Owner {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          Owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userss {
          nextToken
          startedAt
        }
        usersID
        Web
        Lat
        Lng
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const ratingsUsersByRatingsId = /* GraphQL */ `
  query RatingsUsersByRatingsId(
    $ratingsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRatingsUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingsUsersByRatingsId(
      ratingsId: $ratingsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ratingsId
        usersId
        ratings {
          id
          Rating
          Review
          businessesID
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          Owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const ratingsUsersByUsersId = /* GraphQL */ `
  query RatingsUsersByUsersId(
    $usersId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRatingsUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingsUsersByUsersId(
      usersId: $usersId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ratingsId
        usersId
        ratings {
          id
          Rating
          Review
          businessesID
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          Owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const usersBusinessesByBusinessesId = /* GraphQL */ `
  query UsersBusinessesByBusinessesId(
    $businessesId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUsersBusinessesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersBusinessesByBusinessesId(
      businessesId: $businessesId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        businessesId
        usersId
        businesses {
          id
          Name
          Category
          Phone
          Hours
          BusinessImage
          usersID
          Web
          Lat
          Lng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          Owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const usersBusinessesByUsersId = /* GraphQL */ `
  query UsersBusinessesByUsersId(
    $usersId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUsersBusinessesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersBusinessesByUsersId(
      usersId: $usersId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        businessesId
        usersId
        businesses {
          id
          Name
          Category
          Phone
          Hours
          BusinessImage
          usersID
          Web
          Lat
          Lng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          Owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
