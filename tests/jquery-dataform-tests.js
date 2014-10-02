test('Basic test with input element', function(assert) {
  var $test = $('#test');
  var attrs = [
    { type: 'input', name: 'test', label: 'test' }
  ];

  var obj = {}
  var f = new DataForm(attrs, function(name, value) {
    obj[name] = value;
  });

  assert.deepEqual(f.html, '<form class="j-dataform"><div class="j-dataform-el" data-type="input" data-name="test"><label>test</label><input name="test" type="text" value=""></div></div>', 'render() correct');
  assert.deepEqual(f.getData().test, '', 'getData() correct');

  var str = 'hello world';
  f.setData({test: str});
  assert.deepEqual(f.getData().test, str, 'setData() correct');
  assert.deepEqual(f.$el.find('input').val(), str, 'setData() form input updated');

  $test.html(f.$el);
  var str1 = 'hello world #2';
  f.$el.find('input').val(str1).trigger('change');
  assert.deepEqual(obj.test, str1, 'onChange called');
});

test('Integer element', function(assert) {
  var attrs = [
    { type: 'Integer', name: 'test', label: 'test' }
  ];

  var f = new DataForm(attrs);
  assert.deepEqual(f.getData().test, 0, 'getData');

  var i = 10;
  f.setData({test: i});
  assert.deepEqual(f.getData().test, i, 'setData');
  assert.deepEqual(f.$el.find('input').val(), i+'', 'setData input');
});

test('Checkbox element', function(assert) {
  var f = new DataForm([
    { type: 'Checkbox', name: 'test', label: 'test' }
  ]);

  assert.deepEqual(f.getData().test, false, 'setData');
  assert.deepEqual(f.$el.find('input').is(':checked'), false, 'getData input');
  f.setData({test: true});
  assert.deepEqual(f.getData().test, true, 'getData');
  assert.deepEqual(f.$el.find('input').is(':checked'), true, 'getData input');
});

test('Select element', function(assert) {
  var f = new DataForm([
    { type: 'Select', name: 'test', label: 'test',
      collection: ['#1', '#2', '#3'] }
  ]);
  $('#select').html(f.$el);

  assert.deepEqual(f.getData().test, '');

  f.setData({test: '#1'});
  assert.deepEqual(f.getData().test, '#1', 'getData');
  assert.deepEqual(f.$el.find('select').val(), '#1', 'getData input');
});

test('Accounts element', function(assert) {
  var f = new DataForm([{ type: 'Accounts', name: 'test', label: 'test' }]);
  $('#account').html(f.$el);

  var name = 'test #2';
  f.$el.find('select').val(name);
  assert.deepEqual(f.getData().test.name, name, 'getData');

  f.setData({test: {name: 'test #3', avatar: 'avatar #3'}});
  assert.deepEqual(f.$el.find('select').val(), 'test #3');
});