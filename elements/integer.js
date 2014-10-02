DataForm.registerElement('Integer', function(attr) {
  return DataForm.input.render(attr);
}, function($el) {
  var val = DataForm.input.get($el);
  if(!val) return 0;
  return parseInt(val, 10);
}, function($el, val) {
  DataForm.input.set($el, val);
});