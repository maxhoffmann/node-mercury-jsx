describe('node-jsx', function() {
  it('should work', function() {
    var h = require('mercury').h
    require('./index').install()

    var expected = h('h1', 'Test')
    var actual = require('./test-module')

    expect(actual).toEqual(expected)
  })
})
