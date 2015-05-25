var glToDtype = require('./')
var test = require('tape')
var gl = require('gl-constants')

test('turns a gl type into a dtype string', function (t) {
  t.equal(glToDtype(gl.FLOAT), 'float32')
  t.equal(glToDtype(gl.UNSIGNED_BYTE), 'uint8')
  t.equal(glToDtype(gl.UNSIGNED_SHORT), 'uint16')
  t.equal(glToDtype(gl.UNSIGNED_INT), 'uint32')
  t.equal(glToDtype(gl.BYTE), 'int8')
  t.equal(glToDtype(gl.SHORT), 'int16')
  t.equal(glToDtype(gl.INT), 'int32')
  t.equal(glToDtype(gl.TEXTURE_2D), null, 'invalid types')

  t.equal(glToDtype(gl.UNSIGNED_SHORT_4_4_4_4), 'uint16', 'short pixel types')
  t.equal(glToDtype(gl.UNSIGNED_SHORT_5_5_5_1), 'uint16', 'short pixel types')
  t.equal(glToDtype(gl.UNSIGNED_SHORT_5_6_5), 'uint16', 'short pixel types')
  t.end()
})
