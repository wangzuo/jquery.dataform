!function(t,a){function e(t,a){this.attrs=t||[],this.build(),this.onChange=a}function n(t){var a=t.data("type");return e[a].get(t)}function i(t,a){var n=t.data("type");return e[n].set(t,a)}e.registerElement=function(t,a,n,i){e[t]={render:a,get:n,set:i}};var r=e.prototype;r.build=function(){var a=this.attrs.map(function(t){return'<div class="j-dataform-el" data-type="'+t.type+'" data-name="'+t.name+'">'+this.renderElement(t)+"</div>"}.bind(this)).join("");this.html='<form class="j-dataform">'+a+"</div>",this.$el=t(this.html),this.$el.data("dataform",this)},r.renderElement=function(t){if(!e[t.type])throw t.type+" not registered";return e[t.type].render.call(this,t)},r.getData=function(){var a={};return this.$el.find(".j-dataform-el").each(function(){var e=t(this),i=n(e);a[e.data("name")]=i}),a},r.setData=function(a){a=a||{},this.$el.find(".j-dataform-el").each(function(){var e=t(this),n=e.data("name");"undefined"!=typeof a[n]&&i(e,a[n])})},t("body").on("change",".j-dataform-el",function(){var a=t(this),e=a.parents(".j-dataform"),i=e.data("dataform");i.onChange&&i.onChange.bind(i)(a.data("name"),n(a))}),a.DataForm=e}($,window);