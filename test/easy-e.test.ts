import { Erric } from '../src/easy-e'
import {
  defaultErricMessageForHumans,
  defaultErricCode,
  defaultErricMetadata
} from '../src/constants'

jest.spyOn(global.console, 'log')
jest.spyOn(global.console, 'error')
jest.spyOn(global.console, 'warn')

describe('Erric', () => {
  describe('should be chill with no args in the constructor', () => {
    it('should exist after constructing with no params', () => {
      const e = new Erric()
      expect(e).toBeDefined()
    })

    it(`should have a public method 'alert'`, () => {
      const e = new Erric()
      expect(e.alert).toBeInstanceOf(Function)
    })

    it(`should have a public property called 'code' by default that describes itself`, () => {
      const e = new Erric()
      expect(e.code).toEqual(defaultErricCode)
    })

    it(`should have a public property called 'messageForHumans' by that describes itself`, () => {
      const e = new Erric()
      expect(e.messageForHumans).toEqual(defaultErricMessageForHumans)
    })

    it(`should have a public property called 'message' that is equal to 'messageForHumans'`, () => {
      const e = new Erric()
      expect(e.message).toEqual(defaultErricMessageForHumans)
    })

    it(`should have an accessor called 'message' that sets 'messageForHumans'`, () => {
      const e = new Erric(`easy-e/messageForHumans!=message`)
      e.message = 'easy-e/message==messageForHumans'
      expect(e.messageForHumans).toEqual(e.message)
    })

    it(`should have a public property called 'metadata' by default that describes itself`, () => {
      const e = new Erric()
      expect(e.metadata).toEqual(defaultErricMetadata)
    })

    it(`should have a public property called 'useColors' by default that is true`, () => {
      const e = new Erric()
      expect(e.useColors).toEqual(true)
    })

    it(`should have a public property called 'uglyMode' by default that is false`, () => {
      const e = new Erric()
      expect(e.uglyMode).toEqual(false)
    })
  })

  describe(`public method 'alert'`, () => {
    it(`should take an Alerter, and call it with public property 'messageForHumans'`, () => {
      const wrap = { alerter: msg => console.error(msg) } // an Alerter is a function that takes a string, and returns Void
      const e = new Erric('oven/smoke-test-passing', 'the oven is on fire!', {
        'temperature-celcius': `${6000}`
      })
      const alerter = jest.spyOn(wrap, 'alerter')
      e.alert(wrap.alerter)
      expect(alerter).toBeCalledWith(e.messageForHumans)
    })
  })

  describe(`should have setters that set`, () => {
    it(`should set public property 'code' when 'setCode' is called`, () => {
      const newECode = 'Erric/meta/error/wrong-error'
      const e = new Erric('error/everything/failing/perfectly')
      e.setCode(newECode)
      expect(e.code === newECode).toBe(true)
    })

    it(`should set public property 'messageForHumans' when 'setMessageForHumans' is called`, () => {
      const comfortingMessage = 'please do not be alarmed, the alarms are suppose to be alarming'
      const e = new Erric(
        'Erric/meta/error/graceful-fire',
        'the fire is hot, get your dog and get out'
      )
      e.setMessageForHumans(comfortingMessage)
      expect(e.messageForHumans === comfortingMessage).toBe(true)
    })

    it(`should have accessor 'message' that returns 'messageForHumans'`, () => {
      const comfortingMessage =
        'please do not be alarmed, the alarms are suppose to be alarming, especially morning ones'
      const e = new Erric(
        'Erric/meta/error/graceful-fire',
        'the fire is hot, get your dog and get out'
      )
      e.setMessageForHumans(comfortingMessage)
      expect(e.message === comfortingMessage).toBe(true)
    })

    it(`should set public property 'metadata' when 'setMetadata' is called`, () => {
      const cause = `¯\_(ツ)_/¯`
      const e = new Erric(
        'error/everything/failing/perfectly',
        'please avoid spontaneity, your battery is warm',
        { cause }
      )
      const telemetricData = `chromeTabCount > 500`
      e.setMetadata({ cause: telemetricData })
      expect(e.metadata).toEqual({ cause: telemetricData })
    })

    it(`should set public property 'useColors' when 'useColors' is called`, () => {
      const e = new Erric()
      e.setUseColors(false)
      expect(e.useColors).toBe(false)
    })

    it(`should set public property 'uglyMode' when 'setUglyMode' is called`, () => {
      const e = new Erric()
      e.setUglyMode(true)
      expect(e.uglyMode).toBe(true)
    })
  })

  describe(`method aliases should call their methods`, () => {
    const e = new Erric()
    it(`should call og method`, () => {
      e.err()
      expect(global.console.error).toBeCalledWith(e)
    })
  })

  describe(`convenience methods should set their respective properties properly`, () => {
    const e = new Erric()
    it(`should call 'error' method`, () => {
      e.err()
      expect(global.console.error).toBeCalledWith(e)
    })
  })

  describe(`should call console method when public method is invoked`, () => {
    it(`should call console.log when public method 'log' is invoked`, () => {
      const e = new Erric()
      e.log()
      expect(global.console.log).toBeCalledWith(e)
    })
    it(`should call console.log when public method 'err' is invoked`, () => {
      const e = new Erric()
      e.error()
      expect(global.console.error).toBeCalledWith(e)
    })
    it(`should call console.warn when public method 'warn' is invoked`, () => {
      const e = new Erric()
      e.warn()
      expect(global.console.error).toBeCalledWith(e)
    })
  })

  describe(`e.throw method`, () => {
    it(`should throw a beautiful template string when 'throw' method is called with no params`, () => {
      const e = new Erric('Erric/meta/temperature/too-cold', 'halt and catch fire')
      expect(() => {
        e.throw()
      }).toThrow(e.stringify())
    })

    it(`should throw JSON.stringify('this') if ugly mode is enabled`, () => {
      const e = new Erric('Erric/meta/temperature/too-cold', 'halt and catch fire')
      e.enableUglyMode()
      expect(() => {
        e.throw(true)
      }).toThrow(JSON.stringify(e))
    })
  })

  describe(`e.stringify method`, () => {
    it(`should rerturn JSON.stringify(this) if uglyMode is enabled`, () => {
      const e = new Erric('Erric/meta/temperature/too-cold', 'halt and catch fire')
      e.enableUglyMode()
      expect(() => {
        e.throw()
      }).toThrow(JSON.stringify(e))
    })

    it(`should return JSON.stringify(this) if ugly param is passed in`, () => {
      const e = new Erric('Erric/meta/temperature/too-cold', 'halt and catch fire')
      expect(() => {
        e.throw(true)
      }).toThrow(e.stringify(true))
    })

    it(`should return a string if useColors is disabled`, () => {
      const e = new Erric('Erric/meta/temperature/too-cold', 'halt and catch fire')
      e.disableColors()
      expect(typeof e.stringify()).toEqual('string')
    })
  })

  describe(`should set properties with constructor params`, () => {
    it(`should set code to arg 0`, () => {
      const eCode = 'Erric/meta/error/jk'
      const e = new Erric(eCode)
      expect(e.code).toEqual(eCode)
    })

    it(`should set message for humans to arg 1`, () => {
      const humanReadableMessage = 'there is an error, NOT'
      const e = new Erric('Erric/meta/error/jk/again', humanReadableMessage)
      expect(e.messageForHumans).toEqual(humanReadableMessage)
    })

    it(`should set metadata to arg 2`, () => {
      const arbitraryData = { input: 'arbitrary data' }
      const e = new Erric('Erric/meta/error/yea-right', 'preventing meta bugs', arbitraryData)
      expect(e.metadata).toEqual(arbitraryData)
    })

    it(`'setUseColors' method should set useColors`, () => {
      const e = new Erric('Erric/meta/error/yea-right', 'preventing meta bugs', {
        input: 'arbitrary data'
      })
      e.setUseColors(false)
      expect(e.useColors).toEqual(false)
    })

    it(`'setUglyMode' method should set uglyMode`, () => {
      const e = new Erric('Erric/meta/error/yea-right', 'preventing meta bugs', {
        input: 'arbitrary data'
      })
      e.setUglyMode(true)
      expect(e.uglyMode).toEqual(true)
    })
  })

  describe(`should flip state using convenience setters`, () => {
    it(`should set useColors to false when 'disableColors' method is called`, () => {
      const e = new Erric()
      e.disableColors()
      expect(e.useColors).toEqual(false)
    })
    it(`should set uglyMode to true when 'enableUglyMode' method is called`, () => {
      const e = new Erric()
      e.enableUglyMode()
      expect(e.uglyMode).toEqual(true)
    })
  })
})
