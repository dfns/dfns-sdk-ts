import { DfnsError } from '../Foundations'
export class ApiKeyActionNotAllowed extends DfnsError {
  name: string = 'ApiKeyActionNotAllowed'
  // FIXME: Missing documentation for httpStatus
  httpStatus: number = 403

  // FIXME: Missing documentation for errorName
  errorName: string = 'Forbidden'
}
