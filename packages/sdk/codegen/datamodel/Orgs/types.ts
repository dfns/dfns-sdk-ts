import {
  Countries,
  Email,
  EntityId,
  IdentityIssuer,
  IsoDate,
  IsoDatetime,
} from '../Foundations'

/**
 * `Org` encapsulates information about a Dfns’s customer .
 */
export type Org = {
  /**
   * Unique organisation identifier.
   */
  id: EntityId

  /**
   * Full legal name of the organisation, including suffixes such as LLC, Limited, etc.
   */
  legalName: string

  /**
   * Trading name by which company is known. For example "Panasonic" instead of "Panasonic Holdings Corporation".
   */
  tradingName?: string

  /**
   * Country where organisation is head quartered, and default jurisdiction if applies.
   */
  country: Countries

  /**
   * Date when organisation was incorporated.
   */
  dateOfIncorporation: IsoDate

  /**
   * Date when organisation was onboarded in Dfns.
   */
  dateOnboarded: IsoDatetime

  /**
   * Status of the organisation. Indicates whether organisation is currently operational. See `OrgStatus` for details.
   */
  status: OrgStatus

  /**
   * List of employee users that are onboarded within organisation
   */
  employees: OrgEmployee[]

  /**
   * List of groups available within organisation, to which users (i.e. employees) can belong to.
   */
  groups?: EmployeeGroup[]
}

/**
 * `OrgEmployee` is a type of `User` that has access to Dfns API. `OrgEmployee` always maps to a given Natural Person (i.e. human). There are other users such as service accounts, that can be mapped to servers and other technical entities.
 */
export type OrgEmployee = {
  /**
   * Unique employee identifier.
   */
  id: EntityId

  /**
   * Status of the employee. Identifies if given user can perform any actions or not. See `OrgEmployeeStatus` for more details.
   */
  status: OrgEmployeeStatus

  /**
   * Indicates organisation to which employee belongs to.
   */
  orgId: string

  /**
   * Employee's username. Usually it is an email.
   */
  username: string

  /**
   * Employee email.
   */
  email: Email

  /**
   * Identity issuer (eg Auth0). Empty if it's the default one (Dfns one). The issuer will be filled for non-Dfns issuers.
   */
  issuer: IdentityIssuer

  /**
   * Date when employee was created.
   */
  dateCreated: IsoDatetime

  /**
   * Date when employee record was last updated.
   */
  dateUpdated: IsoDatetime

  /**
   * Employee's full legal name.
   */
  fullName: string

  /**
   * Employee's date of birth.
   */
  dateOfBirth?: IsoDate

  /**
   * List of groups to which employee belongs to.
   */
  groups?: EmployeeGroup[]
}

/**
 * Used to group `OrgEmployees` by various criteria. Such as jurisdiction, department, access rights.
 */
export type EmployeeGroup = {
  /**
   * Name of the `Group`
   */
  name: string
}

/**
 * Operation Payload used to create new `OrgEmployee` record.
 */
export type CreateOrgEmployeePayload = {
  /**
   * Employee’s username.
   */
  username: string

  /**
   * Employee’s email.
   */
  email: Email

  /**
   * Identity issuer (eg Auth0). Empty if it's the default one (Dfns one). The issuer will be filled for non-Dfns issuers.
   */
  issuer?: string

  /**
   * Employee's full legal name.
   */
  fullName: string

  /**
   * Employee's date of birth.
   */
  dateOfBirth?: IsoDate
}

// FIXME: Missing documentation for OrgApiKey
export type OrgApiKey = {
  // FIXME: Missing documentation for apiKeyId
  apiKeyId: EntityId

  // FIXME: Missing documentation for orgId
  orgId: EntityId
}

// FIXME: Missing documentation for CreateEmployee
export type CreateEmployee = {
  /**
   * Employee’s username.
   */
  username: string

  /**
   * Employee’s email.
   */
  email: Email

  /**
   * Identity issuer (eg Auth0). Empty if it's the default one (Dfns one). The issuer will be filled for non-Dfns issuers.
   */
  issuer?: string

  /**
   * Employee's full legal name.
   */
  fullName: string

  /**
   * Employee's date of birth.
   */
  dateOfBirth?: IsoDate

  // FIXME: Missing documentation for authVersionToUse
  authVersionToUse?: AuthSystemVersion
}

// FIXME: Missing documentation for UpdateEmployee
export type UpdateEmployee = {
  /**
   * Employee's full legal name.
   *
   */
  fullName?: string

  /**
   * Employee's date of birth.
   */
  dateOfBirth?: IsoDate

  /**
   * Status of the employee. Identifies if given user can perform any actions or not. See `OrgEmployeeStatus` for more details.
   */
  status?: OrgEmployeeStatus
}

// FIXME: Missing documentation for UpdateOrg
export type UpdateOrg = {
  /**
   * Full legal name of the organisation, including suffixes such as LLC, Limited, etc.
   */
  legalName?: string

  /**
   * Trading name by which company is known. For example "Panasonic" instead of "Panasonic Holdings Corporation".
   */
  tradingName?: string

  /**
   * Date when organisation was incorporated.
   */
  dateOfIncorporation?: IsoDate

  /**
   * Country where organisation is head quartered, and default jurisdiction if applies.
   */
  country?: Countries

  /**
   * Date when organisation was onboarded in Dfns.
   */
  dateOnboarded?: IsoDate
}

// FIXME: Missing documentation for CreateOrg
export type CreateOrg = {
  /**
   * Full legal name of the organisation, including suffixes such as LLC, Limited, etc.
   */
  legalName: string

  /**
   * Trading name by which company is known. For example "Panasonic" instead of "Panasonic Holdings Corporation".
   */
  tradingName: string

  /**
   * Date when organisation was incorporated.
   */
  dateOfIncorporation: IsoDate

  /**
   * Country where organisation is head quartered, and default jurisdiction if applies.
   */
  country: Countries

  /**
   * Date when organisation was onboarded in Dfns.
   */
  dateOnboarded?: IsoDate

  /**
   * List of `CreateOrgEmpoyeePayload` for the organisations. These employees will be created for this org.
   */
  employees?: CreateOrgEmployeePayload[]

  // FIXME: Missing documentation for authVersionToUse
  authVersionToUse?: AuthSystemVersion

  /**
   * Indicates signing cluster identifier.
   */
  clusterId?: string
}

/**
 * Indicates customer’s status within a lifecycle.
 */
export enum OrgStatus {
  //Customer is archived and no longer functional. Customer will have to go through re-onboarding to be enabled again.
  Archived = 'Archived',
  //Customer is disabled. Usually temporary action, in case something goes wrong.
  Disabled = 'Disabled',
  //Customer is enabled and operational.
  Enabled = 'Enabled',
  //Customer is being created at the moment.
  Creating = 'Creating',
  //Customer is approved to be created and initialized.
  Approved = 'Approved',
}

// FIXME: Missing documentation for OrgEmployeeStatus
export enum OrgEmployeeStatus {
  //OrgEmployee is enabled and active.
  Enabled = 'Enabled',
  //OrgEmployee is temporary disabled.
  Disabled = 'Disabled',
  //OrgEmployee is deleted, and archived for audit purposes.
  Archived = 'Archived',
}

// FIXME: Missing documentation for AuthSystemVersion
export enum AuthSystemVersion {
  // FIXME: Missing documentation for AuthV1
  AuthV1 = 'AuthV1',
  // FIXME: Missing documentation for AuthV2
  AuthV2 = 'AuthV2',
  // FIXME: Missing documentation for All
  All = 'All',
}
