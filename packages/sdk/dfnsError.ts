export class DfnsError extends Error {
  constructor(public httpStatus: number, message: string, public context?: unknown) {
    super(message)
  }

  toString() {
    return JSON.stringify(
      {
        httpStatus: this.httpStatus,
        message: this.message,
        ...(this.context && <any>this.context),
      },
      null,
      2
    )
  }
}

export class PolicyPendingError extends DfnsError {
  static HTTP_ACCEPTED = 202

  constructor(context: unknown) {
    super(PolicyPendingError.HTTP_ACCEPTED, 'Operation triggered a policy pending approval', context)
  }
}
