import Erric from '../src/easy-e'
import { Alerter } from '../src/easy-e'
const any = expect.any

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
    it(`should have an 'alerter' by default`, () => {
      const defaultErric = new Erric()
      expect(defaultErric.alerter).toBeDefined()
    })
    it(`should have an 'alerter' by default`, () => {
      const defaultErric = new Erric()
      expect(defaultErric.alerter).toBeInstanceOf(Function)
    })
    it(`should have a public property called 'code' by default`, () => {
      const defaultErric = new Erric()
      expect(defaultErric.code).toEqual(expect.stringContaining('code'))
    })
  })

  describe(`should invoke alert with defined msg for human`, () => {
    it(`should invoke alert with public property 'messageForHuman'`, () => {
      const defaultErric = new Erric('error-code/null', 'beep boop')
      const alerter = function(msg) {
        console.log(msg)
      }
      defaultErric.setAlerter(alerter)
      expect(defaultErric.alerter).toEqual(alerter)
    })

    describe(`should have setters that set`, () => {
      it(`should set code when 'setCode' is called`, () => {
        const erric = new Erric('error/everything/failing/perfectly')
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
})
