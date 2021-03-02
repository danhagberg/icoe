/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrincipal = /* GraphQL */ `
  query GetPrincipal($id: ID!) {
    getPrincipal(id: $id) {
      id
      name
      contact_info {
        items {
          id
          name
          type
          contact
          verified
          contact_preference_order
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      cars {
        items {
          id
          name
          make
          model
          color
          year
          plate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      emergency_contacts {
        items {
          id
          name
          relationship
          notification_preference_order
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrincipals = /* GraphQL */ `
  query ListPrincipals(
    $filter: ModelPrincipalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrincipals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        contact_info {
          nextToken
        }
        cars {
          nextToken
        }
        emergency_contacts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAuto = /* GraphQL */ `
  query GetAuto($id: ID!) {
    getAuto(id: $id) {
      id
      name
      make
      model
      color
      year
      plate
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAutos = /* GraphQL */ `
  query ListAutos(
    $filter: ModelAutoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAutos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        make
        model
        color
        year
        plate
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      name
      type
      contact
      verified
      contact_preference_order
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        contact
        verified
        contact_preference_order
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getEmergencyContact = /* GraphQL */ `
  query GetEmergencyContact($id: ID!) {
    getEmergencyContact(id: $id) {
      id
      name
      relationship
      contacts {
        items {
          id
          name
          type
          contact
          verified
          contact_preference_order
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      notification_preference_order
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEmergencyContacts = /* GraphQL */ `
  query ListEmergencyContacts(
    $filter: ModelEmergencyContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmergencyContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        relationship
        contacts {
          nextToken
        }
        notification_preference_order
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
