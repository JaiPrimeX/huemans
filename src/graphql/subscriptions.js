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
        BusinessImage
        Hours
        Owner {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          createdAt
          updatedAt
        }
        Reviews {
          nextToken
        }
        usersID
        createdAt
        updatedAt
      }
      UserReviews {
        items {
          id
          ratingsId
          usersId
          createdAt
          updatedAt
        }
        nextToken
      }
      usersID
      createdAt
      updatedAt
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
        BusinessImage
        Hours
        Owner {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          createdAt
          updatedAt
        }
        Reviews {
          nextToken
        }
        usersID
        createdAt
        updatedAt
      }
      UserReviews {
        items {
          id
          ratingsId
          usersId
          createdAt
          updatedAt
        }
        nextToken
      }
      usersID
      createdAt
      updatedAt
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
        BusinessImage
        Hours
        Owner {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          createdAt
          updatedAt
        }
        Reviews {
          nextToken
        }
        usersID
        createdAt
        updatedAt
      }
      UserReviews {
        items {
          id
          ratingsId
          usersId
          createdAt
          updatedAt
        }
        nextToken
      }
      usersID
      createdAt
      updatedAt
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
      BusinessImage
      Hours
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
        }
        ratingss {
          nextToken
        }
        UserRatings {
          nextToken
        }
        createdAt
        updatedAt
      }
      Reviews {
        items {
          id
          Rating
          Review
          businessesID
          usersID
          createdAt
          updatedAt
        }
        nextToken
      }
      usersID
      createdAt
      updatedAt
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
      BusinessImage
      Hours
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
        }
        ratingss {
          nextToken
        }
        UserRatings {
          nextToken
        }
        createdAt
        updatedAt
      }
      Reviews {
        items {
          id
          Rating
          Review
          businessesID
          usersID
          createdAt
          updatedAt
        }
        nextToken
      }
      usersID
      createdAt
      updatedAt
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
      BusinessImage
      Hours
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
        }
        ratingss {
          nextToken
        }
        UserRatings {
          nextToken
        }
        createdAt
        updatedAt
      }
      Reviews {
        items {
          id
          Rating
          Review
          businessesID
          usersID
          createdAt
          updatedAt
        }
        nextToken
      }
      usersID
      createdAt
      updatedAt
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
          BusinessImage
          Hours
          usersID
          createdAt
          updatedAt
        }
        nextToken
      }
      ratingss {
        items {
          id
          ratingsId
          usersId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
          BusinessImage
          Hours
          usersID
          createdAt
          updatedAt
        }
        nextToken
      }
      ratingss {
        items {
          id
          ratingsId
          usersId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
          BusinessImage
          Hours
          usersID
          createdAt
          updatedAt
        }
        nextToken
      }
      ratingss {
        items {
          id
          ratingsId
          usersId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
          BusinessImage
          Hours
          usersID
          createdAt
          updatedAt
        }
        UserReviews {
          nextToken
        }
        usersID
        createdAt
        updatedAt
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
        }
        ratingss {
          nextToken
        }
        UserRatings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
          BusinessImage
          Hours
          usersID
          createdAt
          updatedAt
        }
        UserReviews {
          nextToken
        }
        usersID
        createdAt
        updatedAt
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
        }
        ratingss {
          nextToken
        }
        UserRatings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
          BusinessImage
          Hours
          usersID
          createdAt
          updatedAt
        }
        UserReviews {
          nextToken
        }
        usersID
        createdAt
        updatedAt
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
        }
        ratingss {
          nextToken
        }
        UserRatings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
