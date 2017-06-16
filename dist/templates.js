function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(r,e){if(1===arguments.length){for(var t=r[0],a=1;a<r.length;a++)t=pug_merge(t,r[a]);return t}for(var g in e)if("class"===g){var l=r[g]||[];r[g]=(Array.isArray(l)?l:[l]).concat(e[g]||[])}else if("style"===g){var l=pug_style(r[g]),n=pug_style(e[g]);r[g]=l+n}else r[g]=e[g];return r}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+="",";"!==r[r.length-1]?r+";":r}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (footer, header, questions, undefines) {;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"wrapper\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui header\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Findex.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = header.title) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Findex.pug";
pug_html = pug_html + "\u003Ch4 class=\"ui header grey\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = header.description) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
var keys = {};
function attrs(id) {
  if (keys[id] === undefines) keys[id] = 0;
  var id = id + '-' + keys[id]++;

  // FOR TEST
  // console.log(keys);

  return {
    "id": id,
    "name": id
  };
}

;pug_debug_line = 16;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_mixins["textInput"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 17;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui input fluid size large\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "text"}, attrs("textInput") ]), false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 21;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_mixins["textArea"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 22;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui textarea\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctextarea" + (pug_attrs(pug_merge([{"rows": "5"}, attrs("textArea") ]), false)) + "\u003E\u003C\u002Ftextarea\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 26;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_mixins["dropdown"] = pug_interp = function(vals){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 27;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cselect" + (pug_attrs( attrs("dropDown") , false)) + "\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
// iterate vals
;(function(){
  var $$obj = vals;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var itm = $$obj[pug_index0];
;pug_debug_line = 29;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", itm.split(' ').join('_').toLowerCase(), true, false)) + "\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = itm) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var itm = $$obj[pug_index0];
;pug_debug_line = 29;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", itm.split(' ').join('_').toLowerCase(), true, false)) + "\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = itm) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E";
};
;pug_debug_line = 33;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_mixins["bool"] = pug_interp = function(falseText, trueText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 34;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"bool\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = falseText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui toggle checkbox\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "checkbox"}, attrs("bool") ]), false)) + "\u002F\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = trueText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 42;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_mixins["checkboxes"] = pug_interp = function(vals){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 43;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"checkboxes\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
var attr = attrs("checkbox")
;pug_debug_line = 45;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
// iterate vals
;(function(){
  var $$obj = vals;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var chbx = $$obj[pug_index1];
;pug_debug_line = 46;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui checkbox\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "checkbox"}, attr ]), false)) + "\u002F\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = chbx) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var chbx = $$obj[pug_index1];
;pug_debug_line = 46;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui checkbox\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "checkbox"}, attr ]), false)) + "\u002F\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = chbx) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 52;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_mixins["radios"] = pug_interp = function(vals){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 53;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"radios\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
var attr = attrs("radio");
;pug_debug_line = 55;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
// iterate vals
;(function(){
  var $$obj = vals;
  if ('number' == typeof $$obj.length) {
      for (var idx = 0, $$l = $$obj.length; idx < $$l; idx++) {
        var radio = $$obj[idx];
;pug_debug_line = 56;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui radio checkbox\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "radio","checked": pug_escape(idx===0 ? true : null)}, attr ]), false)) + "\u002F\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = radio) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var idx in $$obj) {
      $$l++;
      var radio = $$obj[idx];
;pug_debug_line = 56;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui radio checkbox\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "radio","checked": pug_escape(idx===0 ? true : null)}, attr ]), false)) + "\u002F\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = radio) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 63;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_mixins["range"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 64;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ranges\"\u003E";
;pug_debug_line = 65;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui range\" id=\"range1\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 66;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "text","id": "input1"}, attrs("range") ]), false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 70;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_mixins["multiRadio"] = pug_interp = function(vals, scale){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 71;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctable class=\"ui definition fixed table\"\u003E";
;pug_debug_line = 72;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cthead\u003E";
;pug_debug_line = 73;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 74;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cth\u003E\u003C\u002Fth\u003E";
;pug_debug_line = 75;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
// iterate scale
;(function(){
  var $$obj = scale;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var itm = $$obj[pug_index3];
;pug_debug_line = 76;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 76;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = itm) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var itm = $$obj[pug_index3];
;pug_debug_line = 76;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 76;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = itm) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E";
;pug_debug_line = 77;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 78;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
// iterate vals
;(function(){
  var $$obj = vals;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var itm = $$obj[pug_index4];
;pug_debug_line = 79;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
var attr = attrs("multiRadio")
;pug_debug_line = 80;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 81;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 81;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = itm) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 82;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
// iterate scale
;(function(){
  var $$obj = scale;
  if ('number' == typeof $$obj.length) {
      for (var idx = 0, $$l = $$obj.length; idx < $$l; idx++) {
        var itm = $$obj[idx];
;pug_debug_line = 83;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 84;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui radio checkbox\"\u003E";
;pug_debug_line = 85;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "radio","checked": pug_escape(idx===0 ? true : null)}, attr ]), false)) + "\u002F\u003E";
;pug_debug_line = 87;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var idx in $$obj) {
      $$l++;
      var itm = $$obj[idx];
;pug_debug_line = 83;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 84;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui radio checkbox\"\u003E";
;pug_debug_line = 85;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "radio","checked": pug_escape(idx===0 ? true : null)}, attr ]), false)) + "\u002F\u003E";
;pug_debug_line = 87;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var itm = $$obj[pug_index4];
;pug_debug_line = 79;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
var attr = attrs("multiRadio")
;pug_debug_line = 80;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 81;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 81;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = itm) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 82;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
// iterate scale
;(function(){
  var $$obj = scale;
  if ('number' == typeof $$obj.length) {
      for (var idx = 0, $$l = $$obj.length; idx < $$l; idx++) {
        var itm = $$obj[idx];
;pug_debug_line = 83;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 84;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui radio checkbox\"\u003E";
;pug_debug_line = 85;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "radio","checked": pug_escape(idx===0 ? true : null)}, attr ]), false)) + "\u002F\u003E";
;pug_debug_line = 87;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var idx in $$obj) {
      $$l++;
      var itm = $$obj[idx];
;pug_debug_line = 83;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 84;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui radio checkbox\"\u003E";
;pug_debug_line = 85;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "radio","checked": pug_escape(idx===0 ? true : null)}, attr ]), false)) + "\u002F\u003E";
;pug_debug_line = 87;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";
};
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cdiv class=\"questions ui form\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cform method=\"GET\" action=\"\u002Fsend\" id=\"form\" enctype=\"application\u002Fjson\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
// iterate questions
;(function(){
  var $$obj = questions;
  if ('number' == typeof $$obj.length) {
      for (var idx = 0, $$l = $$obj.length; idx < $$l; idx++) {
        var q = $$obj[idx];
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cdiv class=\"single-question\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cdiv class=\"label\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "Pytanie ";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx + 1) ? "" : pug_interp));
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + ": ";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = q.label) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
switch (q.type){
case "input":
;pug_debug_line = 11;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["textInput"]();
  break;
case "textarea":
;pug_debug_line = 12;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["textArea"]();
  break;
case "dropdown":
;pug_debug_line = 13;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["dropdown"](q.values);
  break;
case "bool":
;pug_debug_line = 14;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["bool"](q.values[0], q.values[1]);
  break;
case "checkbox":
;pug_debug_line = 15;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["checkboxes"](q.values);
  break;
case "radio":
;pug_debug_line = 16;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["radios"](q.values);
  break;
case "range":
;pug_debug_line = 17;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["range"]();
  break;
case "multi-radio":
;pug_debug_line = 18;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["multiRadio"](q.values, q.opts.scale);
  break;
default:
;pug_debug_line = 19;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\"Zły typ\"\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var idx in $$obj) {
      $$l++;
      var q = $$obj[idx];
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cdiv class=\"single-question\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cdiv class=\"label\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "Pytanie ";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx + 1) ? "" : pug_interp));
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + ": ";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = q.label) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
switch (q.type){
case "input":
;pug_debug_line = 11;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["textInput"]();
  break;
case "textarea":
;pug_debug_line = 12;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["textArea"]();
  break;
case "dropdown":
;pug_debug_line = 13;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["dropdown"](q.values);
  break;
case "bool":
;pug_debug_line = 14;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["bool"](q.values[0], q.values[1]);
  break;
case "checkbox":
;pug_debug_line = 15;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["checkboxes"](q.values);
  break;
case "radio":
;pug_debug_line = 16;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["radios"](q.values);
  break;
case "range":
;pug_debug_line = 17;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["range"]();
  break;
case "multi-radio":
;pug_debug_line = 18;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_mixins["multiRadio"](q.values, q.opts.scale);
  break;
default:
;pug_debug_line = 19;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\"Zły typ\"\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Ffooter.pug";
pug_html = pug_html + "\u003Cfooter\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Ffooter.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Ffooter.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = footer.finalText) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Ffooter.pug";
pug_html = pug_html + "\u003Cbutton class=\"ui button green size huge fluid\" type=\"submit\" form=\"form\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Fpartials\u002Ffooter.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = footer.buttonText) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003C\u002Ffooter\u003E\u003C\u002Fdiv\u003E";}.call(this,"footer" in locals_for_with?locals_for_with.footer:typeof footer!=="undefined"?footer:undefined,"header" in locals_for_with?locals_for_with.header:typeof header!=="undefined"?header:undefined,"questions" in locals_for_with?locals_for_with.questions:typeof questions!=="undefined"?questions:undefined,"undefines" in locals_for_with?locals_for_with.undefines:typeof undefines!=="undefined"?undefines:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}