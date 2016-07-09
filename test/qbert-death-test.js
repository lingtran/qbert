var assert = require('chai').assert;
var Qbert = require('../lib/qbert');

describe('Qbert death', function(){
  var nullPosition = null;

  context('when position is null', function(){
    var player = new Qbert({});
    player.move(nullPosition);

    it('returns player to original position', function(){
      assert.equal(player.position, 0);
    })
  });

  context('when position is null and number of lives is not zero', function(){
    var params = {
      lives: 2
    };
    var player = new Qbert(params);

    player.move(nullPosition);

    it('returns player to original position', function(){
      assert.equal(player.position, 0);
    });
  });
});
