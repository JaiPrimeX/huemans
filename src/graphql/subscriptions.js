/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRatings = /* GraphQL */ `
  subscription OnCreateRatings($filter: ModelSubscriptionRatingsFilterInput) {
    onCreateRatings(filter: $filter) {
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
export const onUpdateRatings = /* GraphQL */ `
  subscription OnUpdateRatings($filter: ModelSubscriptionRatingsFilterInput) {
    onUpdateRatings(filter: $filter) {
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
export const onDeleteRatings = /* GraphQL */ `
  subscription OnDeleteRatings($filter: ModelSubscriptionRatingsFilterInput) {
    onDeleteRatings(filter: $filter) {
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
export const onCreateBusinesses = /* GraphQL */ `
  subscription OnCreateBusinesses(
    $filter: ModelSubscriptionBusinessesFilterInput
  ) {
    onCreateBusinesses(filter: $filter) {
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
export const onUpdateBusinesses = /* GraphQL */ `
  subscription OnUpdateBusinesses(
    $filter: ModelSubscriptionBusinessesFilterInput
  ) {
    onUpdateBusinesses(filter: $filter) {
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
export const onDeleteBusinesses = /* GraphQL */ `
  subscription OnDeleteBusinesses(
    $filter: ModelSubscriptionBusinessesFilterInput
  ) {
    onDeleteBusinesses(filter: $filter) {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
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
export const onCreateLogos = /* GraphQL */ `
  subscription OnCreateLogos($filter: ModelSubscriptionLogosFilterInput) {
    onCreateLogos(filter: $filter) {
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
export const onUpdateLogos = /* GraphQL */ `
  subscription OnUpdateLogos($filter: ModelSubscriptionLogosFilterInput) {
    onUpdateLogos(filter: $filter) {
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
export const onDeleteLogos = /* GraphQL */ `
  subscription OnDeleteLogos($filter: ModelSubscriptionLogosFilterInput) {
    onDeleteLogos(filter: $filter) {
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
export const onCreateRatingsUsers = /* GraphQL */ `
  subscription OnCreateRatingsUsers(
    $filter: ModelSubscriptionRatingsUsersFilterInput
  ) {
    onCreateRatingsUsers(filter: $filter) {
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
export const onUpdateRatingsUsers = /* GraphQL */ `
  subscription OnUpdateRatingsUsers(
    $filter: ModelSubscriptionRatingsUsersFilterInput
  ) {
    onUpdateRatingsUsers(filter: $filter) {
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
export const onDeleteRatingsUsers = /* GraphQL */ `
  subscription OnDeleteRatingsUsers(
    $filter: ModelSubscriptionRatingsUsersFilterInput
  ) {
    onDeleteRatingsUsers(filter: $filter) {
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
export const onCreateUsersBusinesses = /* GraphQL */ `
  subscription OnCreateUsersBusinesses(
    $filter: ModelSubscriptionUsersBusinessesFilterInput
  ) {
    onCreateUsersBusinesses(filter: $filter) {
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
export const onUpdateUsersBusinesses = /* GraphQL */ `
  subscription OnUpdateUsersBusinesses(
    $filter: ModelSubscriptionUsersBusinessesFilterInput
  ) {
    onUpdateUsersBusinesses(filter: $filter) {
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
export const onDeleteUsersBusinesses = /* GraphQL */ `
  subscription OnDeleteUsersBusinesses(
    $filter: ModelSubscriptionUsersBusinessesFilterInput
  ) {
    onDeleteUsersBusinesses(filter: $filter) {
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
