DataForm.registerElement('Checkbox', function(attr) {
  name = attr.name;
  label = attr.label;
  value = !!attr.value;

  var html = '<label class="checkbox"><input type="checkbox"';
  if(value) html += 'checked';
  html += '>'+label+'</label>';
  return html;
}, function($el) {
  return $el.find('input').is(':checked');
}, function($el, val) {
  if(val) $el.find('input').attr('checked', 'checked');
  else $el.removeAttr('checked');
});