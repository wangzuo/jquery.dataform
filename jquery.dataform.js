;(function($, window) {


function DataForm(attrs, onChange) {
  this.attrs = attrs || [];
  this.build();
  this.onChange = onChange;
}

DataForm.registerElement = function(name, render, get, set) {
  DataForm[name] = {
    render: render,
    get: get,
    set: set
  };
};

var proto = DataForm.prototype;

proto.build = function() {
  var els = this.attrs.map(function(attr) {
    return '<div class="j-dataform-el" data-type="'+attr.type+
      '" data-name="'+attr.name+'">'+this.renderElement(attr)+'</div>';
  }.bind(this)).join('');

  this.html = '<form class="j-dataform">'+els+'</form>';
  this.$el = $(this.html);
  this.$el.data('dataform', this);
};

proto.renderElement = function(attr) {
  if(!DataForm[attr.type]) throw attr.type + ' not registered';
  return DataForm[attr.type].render.call(this, attr);
};

proto.getData = function() {
  var obj = {};
  this.$el.find('.j-dataform-el').each(function() {
    var $this = $(this);
    var val = getElementValue($this);
    obj[$this.data('name')] = val;
  });

  return obj;
};

proto.setData = function(obj) {
  obj = obj || {};
  this.$el.find('.j-dataform-el').each(function() {
    var $this = $(this);
    var name = $this.data("name");
    if(typeof obj[name] !== 'undefined')
      setElementValue($this, obj[name]);
  });
};

function getElementValue($el) {
  var type = $el.data('type');
  return DataForm[type].get($el);
}

function setElementValue($el, val) {
  var type = $el.data('type');
  return DataForm[type].set($el, val);
}

$('body').on('change', '.j-dataform-el', function(e) {
  var $this = $(this);
  var $f = $this.parents('.j-dataform');
  var df = $f.data('dataform');
  if(df.onChange)
    df.onChange.bind(df)($this.data('name'), getElementValue($this));
});

window.DataForm = DataForm;


}) ($, window);
