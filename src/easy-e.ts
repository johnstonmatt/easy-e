interface Alerter {
  (messageForHumans: string): void
}
const defaultErrorCode = 'erric/error-construction/no-error-code-provided'
export default class Erric {
  constructor(
    public code: string = defaultErrorCode,
    public messageForHumans: string = defaultErrorCode,
    public metadata?: object
  ) {}

  // wraps throw statement https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
  public throw() {
    throw this.exception
  }

  // calls param @alerter with
  public alert(alerter: Alerter) {
    alerter(this.messageForHumans)
  }

  // console commands
  public log() {
    console.log(this)
  }

  public err() {
    console.error(this)
  }

  // alias for err method ^
  public error() {
    this.err()
  }

  public warn() {
    console.warn(this)
  }

  // getter for Error
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
  get exception() {
    return new Error(this.code)
  }

  // identifier
  public setCode(str: string) {
    this.code = str
  }

  public setMessageForHumans(str: string) {
    this.messageForHumans = str
  }

  public setMetadata(metadata: object) {
    this.metadata = metadata
  }
}
