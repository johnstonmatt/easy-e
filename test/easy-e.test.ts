import Erric from '../src/easy-e'
describe('Erric', () => {
  describe('should be chill with no args in the constructor', () => {
    it('should exist after constructing with no params', () => {
      const defaultError = new Erric()
      expect(defaultError).toBeDefined()
    })

    it(`should have a public method 'alert'`, () => {
      const defaultError = new Erric()
      expect(defaultError.alert).toBeInstanceOf(Function)
    })

    it(`should have a public property called 'code' by default, that describes itself`, () => {
      const defaultError = new Erric()
      expect(defaultError.code).toEqual(expect.stringContaining('code'))
    })
  })

  describe(`public method 'alert' should take an Alerter, and call it with public property 'messageForHumans'`, () => {
    const error = new Erric(
      'no-error/alerter-satisfies-interface',
      'alerter alerting, no cause for alarm'
    )
    error.alert(msg => {
      console.log(msg)
    })
  })

  describe(`should have setters that set`, () => {
    it(`should set public property 'code' when 'setCode' is called`, () => {
      const errOG = 'error/wrong-error'
      const error = new Erric('error/everything/failing/perfectly')
      error.setCode(errOG)
      expect(error.code === errOG).toBe(true)
    })
    it(`should set public property 'messageForHuman' when 'setMessageForHuman' is called`, () => {
      const comfortingMessage = 'please do not be alarmed, the alarms are suppose to be alarming'
      const error = new Erric('error/graceful-fire', 'the fire is hot, get your dog and get out')
      error.setMessageForHumans(comfortingMessage)
      expect(error.messageForHumans === comfortingMessage).toBe(true)
    })
    it(`should set public property meta when 'setMeta' is called`, () => {
      const cause = `error/ ¯\_(ツ)_/¯`
      const error = new Erric(
        'error/everything/failing/perfectly',
        'please avoid spontanety, your battery is warm',
        { cause }
      )
      const telemetricData = `chromeTabCount > 500`
      error.setMeta({ cause: telemetricData })
      expect(error.meta).toEqual({ cause: telemetricData })
    })
  })

  describe(`should haltAndCatchfire`, () => {
    it(`should throw when 'hacf' method is called`, () => {
      const error = new Erric('tempurature/too-cold')
      expect(error.hacf).toThrow()
    })
  })

  describe(`should throw`, () => {
    it(`should throw when 'throw' method is called`, () => {
      const error = new Erric('tempurature/too-cold')
      expect(error.throw).toThrow()
    })
  })

  describe(`should set properties with constructor params`, () => {
    it(`should set code to arg0`, () => {
      const error = new Erric('error/jk')
      expect(error.code).toEqual('error/jk')
    })

    it(`should set message for humans to arg1`, () => {
      const humanReadableMessage = 'there is an error, NOT'
      const error = new Erric('error/jk/again', humanReadableMessage)
      expect(error.messageForHumans).toEqual(humanReadableMessage)
    })

    it(`should set meta arg2`, () => {
      const arbitraryData = { input: 'arbitrary data' }
      const error = new Erric('error/yea-right', 'preventing meta bugs', arbitraryData)
      expect(error.meta).toEqual(arbitraryData)
    })
  })
})
