/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePrincipal = /* GraphQL */ `
  subscription OnCreatePrincipal($owner: String!) {
    onCreatePrincipal(owner: $owner) {
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
export const onUpdatePrincipal = /* GraphQL */ `
  subscription OnUpdatePrincipal($owner: String!) {
    onUpdatePrincipal(owner: $owner) {
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
export const onDeletePrincipal = /* GraphQL */ `
  subscription OnDeletePrincipal($owner: String!) {
    onDeletePrincipal(owner: $owner) {
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
export const onCreateAuto = /* GraphQL */ `
  subscription OnCreateAuto($owner: String!) {
    onCreateAuto(owner: $owner) {
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
export const onUpdateAuto = /* GraphQL */ `
  subscription OnUpdateAuto($owner: String!) {
    onUpdateAuto(owner: $owner) {
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
export const onDeleteAuto = /* GraphQL */ `
  subscription OnDeleteAuto($owner: String!) {
    onDeleteAuto(owner: $owner) {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact($owner: String!) {
    onCreateContact(owner: $owner) {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact($owner: String!) {
    onUpdateContact(owner: $owner) {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact($owner: String!) {
    onDeleteContact(owner: $owner) {
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
export const onCreateEmergencyContact = /* GraphQL */ `
  subscription OnCreateEmergencyContact($owner: String!) {
    onCreateEmergencyContact(owner: $owner) {
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
export const onUpdateEmergencyContact = /* GraphQL */ `
  subscription OnUpdateEmergencyContact($owner: String!) {
    onUpdateEmergencyContact(owner: $owner) {
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
export const onDeleteEmergencyContact = /* GraphQL */ `
  subscription OnDeleteEmergencyContact($owner: String!) {
    onDeleteEmergencyContact(owner: $owner) {
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
