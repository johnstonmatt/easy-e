export interface Alerter {
  (messageForHumans: string): void
}

export default class Erric {
  public code: string
  public messageForHumans: string
  public meta?: object
  public alerter: Alerter

  constructor(
    code: string = 'erric/error-construction/no-error-code-provided',
    messageForHumans: string = 'no message for humans set',
    meta?: object
  ) {
    this.code = code
    this.messageForHumans = messageForHumans
    if (meta) {
      this.meta = meta
    }

    this.alerter = msg => {
      console.log(
        'call setAlerter(to assign a function that takes a message, and shows it to users'
      )
    }
  }

  public setAlerter(alerter: Alerter) {
    this.alerter = alerter
  }

  public hacf() {
    throw this
  }

  public throw() {
    throw this
  }

  public alert() {
    this.alerter(this.messageForHumans)
  }

  public loud() {
    console.error(this)
  }

  public setCode(str: string) {
    this.code = str
  }

  public setMessageForHumans(str: string) {
    this.messageForHumans = str
  }

  public setMeta(metadata: object) {
    this.meta = metadata
  }
}
