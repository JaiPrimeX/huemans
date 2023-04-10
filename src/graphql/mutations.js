/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRatings = /* GraphQL */ `
  mutation CreateRatings(
    $input: CreateRatingsInput!
    $condition: ModelRatingsConditionInput
  ) {
    createRatings(input: $input, condition: $condition) {
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
export const updateRatings = /* GraphQL */ `
  mutation UpdateRatings(
    $input: UpdateRatingsInput!
    $condition: ModelRatingsConditionInput
  ) {
    updateRatings(input: $input, condition: $condition) {
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
export const deleteRatings = /* GraphQL */ `
  mutation DeleteRatings(
    $input: DeleteRatingsInput!
    $condition: ModelRatingsConditionInput
  ) {
    deleteRatings(input: $input, condition: $condition) {
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
export const createBusinesses = /* GraphQL */ `
  mutation CreateBusinesses(
    $input: CreateBusinessesInput!
    $condition: ModelBusinessesConditionInput
  ) {
    createBusinesses(input: $input, condition: $condition) {
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
export const updateBusinesses = /* GraphQL */ `
  mutation UpdateBusinesses(
    $input: UpdateBusinessesInput!
    $condition: ModelBusinessesConditionInput
  ) {
    updateBusinesses(input: $input, condition: $condition) {
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
export const deleteBusinesses = /* GraphQL */ `
  mutation DeleteBusinesses(
    $input: DeleteBusinessesInput!
    $condition: ModelBusinessesConditionInput
  ) {
    deleteBusinesses(input: $input, condition: $condition) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createLogos = /* GraphQL */ `
  mutation CreateLogos(
    $input: CreateLogosInput!
    $condition: ModelLogosConditionInput
  ) {
    createLogos(input: $input, condition: $condition) {
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
export const updateLogos = /* GraphQL */ `
  mutation UpdateLogos(
    $input: UpdateLogosInput!
    $condition: ModelLogosConditionInput
  ) {
    updateLogos(input: $input, condition: $condition) {
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
export const deleteLogos = /* GraphQL */ `
  mutation DeleteLogos(
    $input: DeleteLogosInput!
    $condition: ModelLogosConditionInput
  ) {
    deleteLogos(input: $input, condition: $condition) {
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
export const createRatingsUsers = /* GraphQL */ `
  mutation CreateRatingsUsers(
    $input: CreateRatingsUsersInput!
    $condition: ModelRatingsUsersConditionInput
  ) {
    createRatingsUsers(input: $input, condition: $condition) {
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
export const updateRatingsUsers = /* GraphQL */ `
  mutation UpdateRatingsUsers(
    $input: UpdateRatingsUsersInput!
    $condition: ModelRatingsUsersConditionInput
  ) {
    updateRatingsUsers(input: $input, condition: $condition) {
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
export const deleteRatingsUsers = /* GraphQL */ `
  mutation DeleteRatingsUsers(
    $input: DeleteRatingsUsersInput!
    $condition: ModelRatingsUsersConditionInput
  ) {
    deleteRatingsUsers(input: $input, condition: $condition) {
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
export const createUsersBusinesses = /* GraphQL */ `
  mutation CreateUsersBusinesses(
    $input: CreateUsersBusinessesInput!
    $condition: ModelUsersBusinessesConditionInput
  ) {
    createUsersBusinesses(input: $input, condition: $condition) {
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
export const updateUsersBusinesses = /* GraphQL */ `
  mutation UpdateUsersBusinesses(
    $input: UpdateUsersBusinessesInput!
    $condition: ModelUsersBusinessesConditionInput
  ) {
    updateUsersBusinesses(input: $input, condition: $condition) {
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
export const deleteUsersBusinesses = /* GraphQL */ `
  mutation DeleteUsersBusinesses(
    $input: DeleteUsersBusinessesInput!
    $condition: ModelUsersBusinessesConditionInput
  ) {
    deleteUsersBusinesses(input: $input, condition: $condition) {
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
