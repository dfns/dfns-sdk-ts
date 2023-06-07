import { DfnsError } from '../Foundations'
export class PolicyApprovalNotAllowedError extends DfnsError {
  name: string = 'PolicyApprovalNotAllowedError'
  // FIXME: Missing documentation for serviceName
  serviceName: string

  // FIXME: Missing documentation for message
  message: string

  // FIXME: Missing documentation for causes
  causes?: string[]

  // FIXME: Missing documentation for shouldTriggerInvestigaton
  shouldTriggerInvestigaton: boolean

  // FIXME: Missing documentation for isDfnsError
  isDfnsError: boolean = true

  // FIXME: Missing documentation for httpStatus
  httpStatus: number = 403

  // FIXME: Missing documentation for errorName
  errorName: string = 'Policy Approval Not Allowed'
}
