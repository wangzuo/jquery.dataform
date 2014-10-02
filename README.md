jquery.dataform
===============

Build & update html form with data.

### Usage
``` javascript

/* elements/input.js */
DataForm.registerElement('input', function(attr) { // render method, returh html string
  name = attr.name;
  label = attr.label;
  value = attr.value || '';
  return '<label>'+label+'</label><input name="'+name+'" type="text" value="'+value+'">';
}, function($el) { // get method
  return $el.find('input').val();
}, function($el, val) { // set method
  $el.find('input').val(val);
});

var f = new DataForm([
  { type: 'Input', name: 'test', label: 'test' }
], function(name, value) { // onchange callback
  console.log(name, 'change to', value);
});

var res = f.getData();
f.setData({test: 'hello world'});

```
