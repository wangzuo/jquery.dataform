var Accounts = [
  { name: 'test #1', avatar: 'avatar link #1'},
  { name: 'test #2', avatar: 'avatar link #2'},
  { name: 'test #3', avatar: 'avatar link #3'},
];

DataForm.registerElement('Accounts', function(attr) {
  return DataForm.Select.render({
    name: attr.name || 'account',
    value: '',
    label: 'Account' || attr.label,
    collection: Accounts.map(function(a) { return a.name; })
  });
}, function($el) {
  var val = DataForm.Select.get($el);
  var res = Accounts.filter(function(a) {
    return a.name === val;
  });
  if(res.length) return res[0];
  return null;
}, function($el, account) {
  DataForm.Select.set($el, account.name);
});