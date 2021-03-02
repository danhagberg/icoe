/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPrincipal = /* GraphQL */ `
  mutation CreatePrincipal(
    $input: CreatePrincipalInput!
    $condition: ModelPrincipalConditionInput
  ) {
    createPrincipal(input: $input, condition: $condition) {
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
export const updatePrincipal = /* GraphQL */ `
  mutation UpdatePrincipal(
    $input: UpdatePrincipalInput!
    $condition: ModelPrincipalConditionInput
  ) {
    updatePrincipal(input: $input, condition: $condition) {
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
export const deletePrincipal = /* GraphQL */ `
  mutation DeletePrincipal(
    $input: DeletePrincipalInput!
    $condition: ModelPrincipalConditionInput
  ) {
    deletePrincipal(input: $input, condition: $condition) {
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
export const createAuto = /* GraphQL */ `
  mutation CreateAuto(
    $input: CreateAutoInput!
    $condition: ModelAutoConditionInput
  ) {
    createAuto(input: $input, condition: $condition) {
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
export const updateAuto = /* GraphQL */ `
  mutation UpdateAuto(
    $input: UpdateAutoInput!
    $condition: ModelAutoConditionInput
  ) {
    updateAuto(input: $input, condition: $condition) {
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
export const deleteAuto = /* GraphQL */ `
  mutation DeleteAuto(
    $input: DeleteAutoInput!
    $condition: ModelAutoConditionInput
  ) {
    deleteAuto(input: $input, condition: $condition) {
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
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
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
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
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
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
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
export const createEmergencyContact = /* GraphQL */ `
  mutation CreateEmergencyContact(
    $input: CreateEmergencyContactInput!
    $condition: ModelEmergencyContactConditionInput
  ) {
    createEmergencyContact(input: $input, condition: $condition) {
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
export const updateEmergencyContact = /* GraphQL */ `
  mutation UpdateEmergencyContact(
    $input: UpdateEmergencyContactInput!
    $condition: ModelEmergencyContactConditionInput
  ) {
    updateEmergencyContact(input: $input, condition: $condition) {
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
export const deleteEmergencyContact = /* GraphQL */ `
  mutation DeleteEmergencyContact(
    $input: DeleteEmergencyContactInput!
    $condition: ModelEmergencyContactConditionInput
  ) {
    deleteEmergencyContact(input: $input, condition: $condition) {
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
