!function(t,a){function e(t,a){this.attrs=t||[],this.build(),this.onChange=a}function n(t){var a=t.data("type");return e[a].get(t)}function r(t,a){var n=t.data("type");return e[n].set(t,a)}e.registerElement=function(t,a,n,r){e[t]={render:a,get:n,set:r}};var i=e.prototype;i.build=function(){var a=this.attrs.map(function(t){return'<div class="j-dataform-el" data-type="'+t.type+'" data-name="'+t.name+'">'+this.renderElement(t)+"</div>"}.bind(this)).join("");this.html='<form class="j-dataform">'+a+"</form>",this.$el=t(this.html),this.$el.data("dataform",this)},i.renderElement=function(t){if(!e[t.type])throw t.type+" not registered";return e[t.type].render.call(this,t)},i.getData=function(){var a={};return this.$el.find(".j-dataform-el").each(function(){var e=t(this),r=n(e);a[e.data("name")]=r}),a},i.setData=function(a){a=a||{},this.$el.find(".j-dataform-el").each(function(){var e=t(this),n=e.data("name");"undefined"!=typeof a[n]&&r(e,a[n])})},t("body").on("change",".j-dataform-el",function(a){var e=t(this),r=e.parents(".j-dataform"),i=r.data("dataform");i.onChange&&i.onChange.bind(i)(e.data("name"),n(e))}),a.DataForm=e}($,window);