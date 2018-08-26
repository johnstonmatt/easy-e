import Erric from '../src/easy-e'
describe('Erric', () => {
  describe('should be chill with no args in the constructor', () => {
    it('should exist after constructing with no params', () => {
      const defaultErric = new Erric()
      expect(defaultErric).toBeDefined()
    })

    it(`should have a public method 'alert'`, () => {
      const defaultErric = new Erric()
      expect(defaultErric.alert).toBeInstanceOf(Function)
    })

    it(`should have a public property called 'code' by default`, () => {
      const defaultErric = new Erric()
      expect(defaultErric.code).toEqual(expect.stringContaining('code'))
    })
  })

  describe(`should have setters that set`, () => {
    it(`should set public property 'code' when 'setCode' is called`, () => {
      const errOG = 'error/wrong-error'
      const erric = new Erric('error/everything/failing/perfectly')
      erric.setCode(errOG)
      expect(erric.code === errOG).toBe(true)
    })
    it(`should set public property 'messageForHuman' when 'setMessageForHuman' is called`, () => {
      const comfortingMessage = 'please do not be alarmed, the alarms are suppose to be alarming'
      const erric = new Erric('error/graceful-fire', 'the fire is hot, get your dog and get out')
      erric.setMessageForHumans(comfortingMessage)
      expect(erric.messageForHumans === comfortingMessage).toBe(true)
    })
    it(`should set public property meta when 'setMeta' is called`, () => {
      const cause = `error/ ¯\_(ツ)_/¯`
      const erric = new Erric(
        'error/everything/failing/perfectly',
        'please avoid spontanety, your battery is warm',
        { cause }
      )
      const telemetricData = `chromeTabCount > 500`
      erric.setMeta({ cause: telemetricData })
      expect(erric.meta).toEqual({ cause: telemetricData })
    })
  })

  describe(`should haltAndCatchfire`, () => {
    it(`should throw when 'hacf' method is called`, () => {
      const erric = new Erric('tempurature/too-cold')
      expect(erric.hacf).toThrow()
    })
  })

  describe(`should set an alerter if it satisfies 'Alerter' interface`, () => {
    it(`should throw if alerter does not satisfy interface`, () => {
      const erric = new Erric('error/alerter/not-an-alerter')
      expect(erric.setAlerter(mockInvalidAlerter)).toThrow()
    })
  })

  describe(`should throw`, () => {
    it(`should throw when 'throw' method is called`, () => {
      const erric = new Erric('tempurature/too-cold')
      expect(erric.throw).toThrow()
    })
  })

  describe(`should set properties with constructor params`, () => {
    it(`should set code to arg0`, () => {
      const erric = new Erric('error/jk')
      expect(erric.code).toEqual('error/jk')
    })

    it(`should set message for humans to arg1`, () => {
      const humanReadableMessage = 'there is an error, NOT'
      const erric = new Erric('error/jk/again', humanReadableMessage)
      expect(erric.messageForHumans).toEqual(humanReadableMessage)
    })

    it(`should set meta arg2`, () => {
      const arbitraryData = { input: 'arbitrary data' }
      const erric = new Erric('error/yea-right', 'preventing meta bugs', arbitraryData)
      expect(erric.meta).toEqual(arbitraryData)
    })
  })
})
