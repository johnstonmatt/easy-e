interface Alerter {
  (messageForHumans: string): void
}

export default class Erric {
  public code: string
  public messageForHumans: string
  public meta: object
  public alerter: Alerter

  constructor(code: string, messageForHumans: string, meta: object) {
    this.code = code
    this.messageForHumans = messageForHumans
    this.meta = meta
    this.alerter = messageForHumans => {
      console.log(
        'call setAlerter(to assign a function that takes a message, and shows it to users'
      )
    }
  }

  public alert() {
    this.alerter(this.messageForHumans)
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
