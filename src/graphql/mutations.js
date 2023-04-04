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
