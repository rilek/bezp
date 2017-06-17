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
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+="",";"!==r[r.length-1]?r+";":r}function fn(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (Set, footer, header, pool, questions) {;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fmain.pug";
pug_html = pug_html + "\u003Cdiv class=\"wrapper\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fmain.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui header\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fmain.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fmain.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = header.title) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fmain.pug";
pug_html = pug_html + "\u003Ch4 class=\"ui header grey\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fmain.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = header.description) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
function attrs(prefix, i, n, x) {
  var isMultiRadio = prefix === "multi-radio";
  var y = !isMultiRadio ? i  : i + '-' + x ;
  var id = prefix + '-' + y;

  if(isMultiRadio && pool[i]["inputID"] === undefined)
    pool[i]["inputID"] = new Set();

  if(!isMultiRadio)
    pool[i]["inputID"] = id;
  else {
    pool[i]["inputID"].add(id);
  }

  return {
    "id": n !== undefined  ? id + '-' + n : id,
    "name": id
  };
}

;pug_debug_line = 22;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_mixins["textInput"] = pug_interp = function(i){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 23;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui input fluid size large\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "text","required": true}, attrs("text-input", i) ]), false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 27;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_mixins["textArea"] = pug_interp = function(i){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 28;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui textarea\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctextarea" + (pug_attrs(pug_merge([{"rows": "5","required": true}, attrs("textarea", i) ]), false)) + "\u003E\u003C\u002Ftextarea\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 32;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_mixins["dropdown"] = pug_interp = function(vals, i){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 33;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cselect" + (pug_attrs( attrs("dropdown", i) , false)) + "\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
// iterate vals
;(function(){
  var $$obj = vals;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var itm = $$obj[pug_index0];
;pug_debug_line = 35;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", itm, true, false)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = itm) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var itm = $$obj[pug_index0];
;pug_debug_line = 35;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", itm, true, false)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = itm) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E";
};
;pug_debug_line = 39;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_mixins["bool"] = pug_interp = function(falseText, trueText, i){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 40;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
var attr = attrs("bool", i);
;pug_debug_line = 41;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"bool\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = falseText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui toggle checkbox\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "checkbox"}, attr ]), false)) + "\u002F\u003E";
;pug_debug_line = 45;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", attr.id, true, false)) + "\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = trueText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 49;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_mixins["checkbox"] = pug_interp = function(vals, i){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 50;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"checkboxes\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
// iterate vals
;(function(){
  var $$obj = vals;
  if ('number' == typeof $$obj.length) {
      for (var idx = 0, $$l = $$obj.length; idx < $$l; idx++) {
        var chbx = $$obj[idx];
;pug_debug_line = 52;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
var attr = attrs("checkbox", i, idx);
;pug_debug_line = 53;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui checkbox\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "checkbox","value": pug_escape(chbx)}, attr ]), false)) + "\u002F\u003E";
;pug_debug_line = 56;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", attr.id, true, false)) + "\u003E";
;pug_debug_line = 56;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = chbx) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var idx in $$obj) {
      $$l++;
      var chbx = $$obj[idx];
;pug_debug_line = 52;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
var attr = attrs("checkbox", i, idx);
;pug_debug_line = 53;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui checkbox\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "checkbox","value": pug_escape(chbx)}, attr ]), false)) + "\u002F\u003E";
;pug_debug_line = 56;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", attr.id, true, false)) + "\u003E";
;pug_debug_line = 56;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = chbx) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 59;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_mixins["radio"] = pug_interp = function(vals, i){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 60;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"radios\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
// iterate vals
;(function(){
  var $$obj = vals;
  if ('number' == typeof $$obj.length) {
      for (var idx = 0, $$l = $$obj.length; idx < $$l; idx++) {
        var radio = $$obj[idx];
;pug_debug_line = 62;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
var attr = attrs("radio", i,idx);
;pug_debug_line = 63;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui radio checkbox\"\u003E";
;pug_debug_line = 65;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "radio","value": pug_escape(radio),"checked": pug_escape(idx===0 ? true : null)}, attr ]), false)) + "\u002F\u003E";
;pug_debug_line = 68;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", attr.id, true, false)) + "\u003E";
;pug_debug_line = 68;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = radio) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var idx in $$obj) {
      $$l++;
      var radio = $$obj[idx];
;pug_debug_line = 62;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
var attr = attrs("radio", i,idx);
;pug_debug_line = 63;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui radio checkbox\"\u003E";
;pug_debug_line = 65;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "radio","value": pug_escape(radio),"checked": pug_escape(idx===0 ? true : null)}, attr ]), false)) + "\u002F\u003E";
;pug_debug_line = 68;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", attr.id, true, false)) + "\u003E";
;pug_debug_line = 68;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = radio) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 71;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_mixins["range"] = pug_interp = function(i){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 72;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ranges\"\u003E";
;pug_debug_line = 73;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui range\"\u003E";
;pug_debug_line = 74;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "range","min": 0,"max": 10}, attrs("range", i) ]), false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 75;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"range-value\"\u003E";
;pug_debug_line = 76;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui input\"\u003E";
;pug_debug_line = 77;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (" type=\"text\""+pug_attr("id", "range-" + i + "-val", true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 80;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_mixins["multiRadio"] = pug_interp = function(vals, scale, i){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 81;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctable class=\"ui definition fixed table\"\u003E";
;pug_debug_line = 82;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cthead\u003E";
;pug_debug_line = 83;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 84;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cth\u003E\u003C\u002Fth\u003E";
;pug_debug_line = 85;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
// iterate scale
;(function(){
  var $$obj = scale;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var itm = $$obj[pug_index3];
;pug_debug_line = 86;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 86;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = itm) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var itm = $$obj[pug_index3];
;pug_debug_line = 86;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 86;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = itm) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E";
;pug_debug_line = 87;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 88;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
// iterate vals
;(function(){
  var $$obj = vals;
  if ('number' == typeof $$obj.length) {
      for (var _idx = 0, $$l = $$obj.length; _idx < $$l; _idx++) {
        var itm = $$obj[_idx];
;pug_debug_line = 89;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 90;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 90;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = itm) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 91;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
// iterate scale
;(function(){
  var $$obj = scale;
  if ('number' == typeof $$obj.length) {
      for (var idx = 0, $$l = $$obj.length; idx < $$l; idx++) {
        var itm = $$obj[idx];
;pug_debug_line = 92;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
var attr = attrs("multi-radio", i, idx, _idx)
;pug_debug_line = 93;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 94;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui radio checkbox\"\u003E";
;pug_debug_line = 95;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "radio","value": pug_escape(itm),"checked": pug_escape(idx===0 ? true : null)}, attr, i ]), false)) + "\u002F\u003E";
;pug_debug_line = 98;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", attr.id, true, false)) + "\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var idx in $$obj) {
      $$l++;
      var itm = $$obj[idx];
;pug_debug_line = 92;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
var attr = attrs("multi-radio", i, idx, _idx)
;pug_debug_line = 93;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 94;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui radio checkbox\"\u003E";
;pug_debug_line = 95;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "radio","value": pug_escape(itm),"checked": pug_escape(idx===0 ? true : null)}, attr, i ]), false)) + "\u002F\u003E";
;pug_debug_line = 98;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", attr.id, true, false)) + "\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var _idx in $$obj) {
      $$l++;
      var itm = $$obj[_idx];
;pug_debug_line = 89;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 90;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 90;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = itm) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 91;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
// iterate scale
;(function(){
  var $$obj = scale;
  if ('number' == typeof $$obj.length) {
      for (var idx = 0, $$l = $$obj.length; idx < $$l; idx++) {
        var itm = $$obj[idx];
;pug_debug_line = 92;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
var attr = attrs("multi-radio", i, idx, _idx)
;pug_debug_line = 93;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 94;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui radio checkbox\"\u003E";
;pug_debug_line = 95;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "radio","value": pug_escape(itm),"checked": pug_escape(idx===0 ? true : null)}, attr, i ]), false)) + "\u002F\u003E";
;pug_debug_line = 98;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", attr.id, true, false)) + "\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var idx in $$obj) {
      $$l++;
      var itm = $$obj[idx];
;pug_debug_line = 92;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
var attr = attrs("multi-radio", i, idx, _idx)
;pug_debug_line = 93;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 94;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui radio checkbox\"\u003E";
;pug_debug_line = 95;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "radio","value": pug_escape(itm),"checked": pug_escape(idx===0 ? true : null)}, attr, i ]), false)) + "\u002F\u003E";
;pug_debug_line = 98;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", attr.id, true, false)) + "\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";
};
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cdiv class=\"questions ui form\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cform action=\"\" id=\"form\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
// iterate questions
;(function(){
  var $$obj = questions;
  if ('number' == typeof $$obj.length) {
      for (var idx = 0, $$l = $$obj.length; idx < $$l; idx++) {
        var q = $$obj[idx];
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
var i = idx+1;

;pug_debug_line = 9;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cdiv class=\"single-question\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cdiv class=\"label\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "Pytanie ";
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i) ? "" : pug_interp));
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + ": ";
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = q.question) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
switch (q.type){
case "input":
;pug_debug_line = 13;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["textInput"](i);
  break;
case "textarea":
;pug_debug_line = 14;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["textArea"](i);
  break;
case "dropdown":
;pug_debug_line = 15;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["dropdown"](q.values, i);
  break;
case "bool":
;pug_debug_line = 16;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["bool"](q.values[0], q.values[1], i);
  break;
case "checkbox":
;pug_debug_line = 17;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["checkbox"](q.values, i);
  break;
case "radio":
;pug_debug_line = 18;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["radio"](q.values, i);
  break;
case "range":
;pug_debug_line = 19;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["range"](i);
  break;
case "multi-radio":
;pug_debug_line = 20;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["multiRadio"](q.values, q.opts.scale, i);
  break;
default:
;pug_debug_line = 21;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
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
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
var i = idx+1;

;pug_debug_line = 9;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cdiv class=\"single-question\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cdiv class=\"label\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "Pytanie ";
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i) ? "" : pug_interp));
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + ": ";
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = q.question) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
switch (q.type){
case "input":
;pug_debug_line = 13;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["textInput"](i);
  break;
case "textarea":
;pug_debug_line = 14;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["textArea"](i);
  break;
case "dropdown":
;pug_debug_line = 15;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["dropdown"](q.values, i);
  break;
case "bool":
;pug_debug_line = 16;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["bool"](q.values[0], q.values[1], i);
  break;
case "checkbox":
;pug_debug_line = 17;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["checkbox"](q.values, i);
  break;
case "radio":
;pug_debug_line = 18;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["radio"](q.values, i);
  break;
case "range":
;pug_debug_line = 19;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["range"](i);
  break;
case "multi-radio":
;pug_debug_line = 20;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_mixins["multiRadio"](q.values, q.opts.scale, i);
  break;
default:
;pug_debug_line = 21;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Fquestions.pug";
pug_html = pug_html + "\"Zły typ\"\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Ffooter.pug";
pug_html = pug_html + "\u003Cfooter\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Ffooter.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Ffooter.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = footer.thankYouText) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Ffooter.pug";
pug_html = pug_html + "\u003Cbutton class=\"ui button green size huge fluid\" id=\"submit\" type=\"submit\" form=\"form\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Frafcio\u002Fwebdev\u002Fbezp\u002Fapp\u002Ftemplates\u002Fpartials\u002Ffooter.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = footer.buttonText) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003C\u002Ffooter\u003E\u003C\u002Fdiv\u003E";}.call(this,"Set" in locals_for_with?locals_for_with.Set:typeof Set!=="undefined"?Set:undefined,"footer" in locals_for_with?locals_for_with.footer:typeof footer!=="undefined"?footer:undefined,"header" in locals_for_with?locals_for_with.header:typeof header!=="undefined"?header:undefined,"pool" in locals_for_with?locals_for_with.pool:typeof pool!=="undefined"?pool:undefined,"questions" in locals_for_with?locals_for_with.questions:typeof questions!=="undefined"?questions:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}