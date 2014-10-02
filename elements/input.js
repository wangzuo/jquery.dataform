DataForm.registerElement('input', function(attr) {
  name = attr.name;
  label = attr.label;
  value = attr.value || '';
  return '<label>'+label+'</label><input name="'+name+'" type="text" value="'+value+'">';
}, function($el) {
  return $el.find('input').val();
}, function($el, val) {
  $el.find('input').val(val);
});