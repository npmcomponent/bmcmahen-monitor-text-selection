var Emitter = require('component-emitter');
var selected = require('yields-on-select');
var deselected = require('bmcmahen-on-deselect');

module.exports = function(el){
  var emitter = new Emitter();
  var unbindSelect, unbindDeselect, isBound;

  unbindSelect = selected(el, function(e){
    emitter.emit('selected', e, el);
    if (isBound) return;
    isBound = true;
    unbindDeselect = deselected(el, function(e){
      emitter.emit('deselected', e, el);
      unbindDeselect();
      isBound = false;
    });
  });

  emitter.unbind = function(){
    if (unbindSelect) unbindSelect();
    if (unbindDeselect) unbindDeselect();
  }

  return emitter;
};


