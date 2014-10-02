jquery.dataform
===============

Build & update html form with data.

### Usage
``` javascript

/* elements/input.js */
DataForm.registerElement('input', function(attr) { // render method, return html string
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

// add form to dom
$wrap.append(f.$el);

// get dataform instance
f = $wrap.find('form').data('dataform');

var res = f.getData();
f.setData({test: 'hello world'});


```
