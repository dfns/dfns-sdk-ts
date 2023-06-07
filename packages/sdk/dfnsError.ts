export class DfnsError extends Error {
  constructor(public httpStatus: number, message: string, public context?: unknown) {
    super(message)
  }
}
