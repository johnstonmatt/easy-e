import colors from 'colors/safe'
import { defaultErricMessageForHumans, defaultErricCode, defaultErricMetadata } from './constants'

// aims to catch errors, sometimes throw them, but never create them

interface Alerter {
  (messageForHumans: string): void
}

export default class Erric {
  constructor(
    public code: string = defaultErricCode,
    public messageForHumans: string = defaultErricMessageForHumans,
    public metadata: any = defaultErricMetadata,
    public useColors: boolean = true,
    public uglyMode: boolean = false
  ) {}

  // wraps throw statement https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
  public throw(ugly?: boolean) {
    if (ugly) throw this.stringify(true)
    throw this.stringify()
  }

  // calls param @alerter with
  public alert(alerter: Alerter) {
    alerter(this.messageForHumans)
  }

  // console commands
  public log() {
    console.log(this)
  }

  public error() {
    console.error(this)
  }

  public warn() {
    console.warn(this)
  }

  // alias for error method ^
  public err() {
    this.error()
  }

  public stringify(ugly?: boolean): string {
    if (ugly || this.uglyMode) {
      return JSON.stringify(this)
    }

    const prettyLength: number = 10
    let metadataString: string = JSON.stringify(this.metadata, null, prettyLength).slice(0, -1)
    metadataString = `${metadataString + ' '.repeat(prettyLength - 4)}}`
    const codeKey = 'code:'
    const messageForHumansKey = 'messageForHumans:'
    const metadataKey = 'metadata:'

    if (this.useColors) {
      return `
        ${colors.yellow(codeKey)} 
          ${this.code}
        ${colors.green(messageForHumansKey)}
          ${this.messageForHumans}
        ${colors.blue(metadataKey)} ${metadataString}
      `
    } else {
      return `
      ${codeKey} 
        ${this.code}
      ${messageForHumansKey}
        ${this.messageForHumans}
      ${metadataKey} ${metadataString}
    `
    }
  }

  // setters
  public setCode(str: string) {
    this.code = str
  }

  public setMessageForHumans(str: string) {
    this.messageForHumans = str
  }

  public setMetadata(metadata: object) {
    this.metadata = metadata
  }

  public setUseColors(useColors: boolean) {
    this.useColors = useColors
  }

  public setUglyMode(uglyMode: boolean) {
    this.uglyMode = uglyMode
  }

  // convenience setters

  public enableUglyMode() {
    this.uglyMode = true
  }

  public disableColors() {
    this.useColors = false
  }
}
