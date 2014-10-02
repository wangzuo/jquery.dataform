DataForm.registerElement('Select', function(attr) {
  name = attr.name;
  label = attr.label;
  collection = attr.collection;
  value = attr.value || '';

  var html = '<label>' + label + '</label>';
  html += '<select name="'+name+'">';

  html += '<option value=""/>';

  collection.forEach(function(val) {
    var option = '<option value="'+val+'"';
    if(val === value) {
      option += ' selected ';
    }
    option += ('>'+val);
    option += '</option>'

    html += option;
  });

  html += '</select>';

  return html;
}, function($el) {
  return $el.find('select').val();
}, function($el, val) { // todo: $select.val() ?
  $el.find('select').find('option').each(function() {
    var $this = $(this);
    if($this.attr('value') === val) $this.attr('selected', '');
    else $this.removeAttr('selected');
  });
});