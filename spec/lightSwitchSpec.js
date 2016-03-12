var lightSwitch = require('../lightSwitch')

describe('lightSwitch', function() {
  describe('when given 0 switches', function() {
    it('returns 0', function() {
      expect(lightSwitch(0, [])).toBe(0)
    })
  })
})
