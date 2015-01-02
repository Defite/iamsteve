/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		EllisLab Dev Team
<<<<<<< HEAD
 * @copyright	Copyright (c) 2003 - 2014, EllisLab, Inc.
=======
 * @copyright	Copyright (c) 2003 - 2013, EllisLab, Inc.
>>>>>>> 0fa8825dc34df02ef80cbe3b3e72c69db1cc2cc1
 * @license		http://ellislab.com/expressionengine/user-guide/license.html
 * @link		http://ellislab.com
 * @since		Version 2.0
 * @filesource
 */
<<<<<<< HEAD
!function(){function e(e){this.el=e,this.lastIdx=-2,this.currentIdx=0,document.selection&&(this.range=this.el.createTextRange())}function t(t){e.call(this,t);var i=$(this.el),n=i.scrollTop(9999).scrollTop(),s=i.val();i.val(s+"\n"),new_height=i.scrollTop(9999).scrollTop(),i.val(s).scrollTop(0),this.textarea_line_height=new_height-n,this.jQ_el=i}function i(e){this.el=e,this.sel=new t(this.el)}if(e.prototype={createSelection:function(e,t){if(this.el.focus(),"selectionStart"in this.el)this.el.selectionStart=e,this.el.selectionEnd=t;else if(document.selection){var i=document.selection.createRange();i.moveStart("character",-this.el.value.length),i.collapse(),i.moveStart("character",e),i.moveEnd("character",t-e),i.select()}return this},getSelectedText:function(){return"selectionStart"in this.el?this.el.value.substr(this.el.selectionStart,this.el.selectionEnd-this.el.selectionStart):document.selection?(this.el.focus(),document.selection.createRange().text):void 0},getSelectedRange:function(){if("selectionStart"in this.el)return{start:this.el.selectionStart,end:this.el.selectionEnd};if(document.selection){var e=document.selection.createRange(),t=Math.abs(e.duplicate().moveEnd("character",-1e5));return selectionStart=t-e.text.length,{start:selectionStart,end:t}}},replaceWith:function(e){var t;return this.el.focus(),"selectionStart"in this.el?(t=this.el.selectionStart+e.length,this.el.value=this.el.value.substr(0,this.el.selectionStart)+e+this.el.value.substr(this.el.selectionEnd,this.el.value.length),this.el.setSelectionRange(t,t)):document.selection&&(document.selection.createRange().text=e),this},selectNext:function(e){if("selectionStart"in this.el){var t=this.currentIdx;chunk=t>0?this.el.value.substring(this.currentIdx):this.el.value,this.currentIdx=chunk.indexOf(e),-1!=this.currentIdx?(this.createSelection(t+this.currentIdx,t+this.currentIdx+e.length),this.lastIdx=t+this.currentIdx,this.currentIdx+=t+e.length):this.lastIdx!=this.currentIdx&&(this.lastIdx=-1,this.currentIdx=0,this.selectNext(e))}else if(document.selection){this.el.focus();var i=this.range.findText(e,1,0);i?(this.range.select(),this.range.collapse(!1)):this.range=this.el.createTextRange()}},resetCycle:function(){this.lastIdx=-2,this.currentIdx=0,document.selection&&(this.range=this.el.createTextRange())}},jQuery){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.prototype.scrollToCursor=function(){if("selectionStart"in this.el){for(var e=this.getSelectedRange(),t=this.jQ_el.val().substr(0,e.start).split("\n"),i=t.length,n=0;n<t.length;n++)length_ratio=t[n].length/this.el.cols,length_ratio>1&&(i+=Math.ceil(length_ratio));i=i>5?i-5:0,this.jQ_el.scrollTop((i-5)*this.textarea_line_height)}return this}}else t=e;if(i.prototype={getSelectionObj:function(){return this.sel},createSelection:function(e,t){return this.sel.createSelection(e,t)},getSelectedText:function(){return this.sel.getSelectedText()},getSelectedRange:function(){return this.sel.getSelectedRange()},insertAtCursor:function(e){this.sel.replaceWith(e)},selectNext:function(e){return this.sel.selectNext(e),this.sel},_resize:function(){var e=this.sel.getSelectedRange();e.start==e.end&&e.end==this.el.value.length&&(this.el.value+="\n",this.sel.createSelection(e.end,e.end)),this.el.scrollHeight>this.el.clientHeight&&$(this.el).height(this.el.scrollHeight+10)},autoResize:function(){var e=this,t=$(this.el);t.css("overflow","hidden"),t.keypress(function(){e._resize()}),t.keyup(function(t){13==t.keyCode&&e._resize()})}},jQuery)for(func in i.prototype)jQuery.fn[func]=function(e){return function(){var t=Array.prototype.slice.call(arguments),n=this.data("txtarea");return n||(n=new i(this[0]),this.data("txtarea",n)),n[e].apply(n,t)}}(func);window.Txtarea=i}();
=======

(function(){function e(a){this.el=a;this.lastIdx=-2;this.currentIdx=0;if(document.selection)this.range=this.el.createTextRange()}function f(a){this.el=a;this.sel=new d(this.el)}e.prototype={createSelection:function(a,b){this.el.focus();if("selectionStart"in this.el)this.el.selectionStart=a,this.el.selectionEnd=b;else if(document.selection){var c=document.selection.createRange();c.moveStart("character",-this.el.value.length);c.collapse();c.moveStart("character",a);c.moveEnd("character",b-a);c.select()}return this},
getSelectedText:function(){if("selectionStart"in this.el)return this.el.value.substr(this.el.selectionStart,this.el.selectionEnd-this.el.selectionStart);if(document.selection)return this.el.focus(),document.selection.createRange().text},getSelectedRange:function(){if("selectionStart"in this.el)return{start:this.el.selectionStart,end:this.el.selectionEnd};if(document.selection){var a=document.selection.createRange(),b=Math.abs(a.duplicate().moveEnd("character",-1E5));selectionStart=b-a.text.length;
return{start:selectionStart,end:b}}},replaceWith:function(a){var b;this.el.focus();if("selectionStart"in this.el)b=this.el.selectionStart+a.length,this.el.value=this.el.value.substr(0,this.el.selectionStart)+a+this.el.value.substr(this.el.selectionEnd,this.el.value.length),this.el.setSelectionRange(b,b);else if(document.selection)document.selection.createRange().text=a;return this},selectNext:function(a){if("selectionStart"in this.el){var b=this.currentIdx;chunk=0<b?this.el.value.substring(this.currentIdx):
this.el.value;this.currentIdx=chunk.indexOf(a);if(-1!=this.currentIdx)this.createSelection(b+this.currentIdx,b+this.currentIdx+a.length),this.lastIdx=b+this.currentIdx,this.currentIdx+=b+a.length;else if(this.lastIdx!=this.currentIdx)this.lastIdx=-1,this.currentIdx=0,this.selectNext(a)}else if(document.selection)this.el.focus(),this.range.findText(a,1,0)?(this.range.select(),this.range.collapse(!1)):this.range=this.el.createTextRange()},resetCycle:function(){this.lastIdx=-2;this.currentIdx=0;if(document.selection)this.range=
this.el.createTextRange()}};if(jQuery){var d=function(a){e.call(this,a);var a=$(this.el),b=a.scrollTop(9999).scrollTop(),c=a.val();a.val(c+"\n");new_height=a.scrollTop(9999).scrollTop();a.val(c).scrollTop(0);this.textarea_line_height=new_height-b;this.jQ_el=a},g=function(){};g.prototype=e.prototype;d.prototype=new g;d.prototype.constructor=d;d.prototype.scrollToCursor=function(){if("selectionStart"in this.el){for(var a=this.getSelectedRange(),a=this.jQ_el.val().substr(0,a.start).split("\n"),b=a.length,
c=0;c<a.length;c++)length_ratio=a[c].length/this.el.cols,1<length_ratio&&(b+=Math.ceil(length_ratio));this.jQ_el.scrollTop(((5<b?b-5:0)-5)*this.textarea_line_height)}return this}}else d=e;f.prototype={getSelectionObj:function(){return this.sel},createSelection:function(a,b){return this.sel.createSelection(a,b)},getSelectedText:function(){return this.sel.getSelectedText()},getSelectedRange:function(){return this.sel.getSelectedRange()},insertAtCursor:function(a){this.sel.replaceWith(a)},selectNext:function(a){this.sel.selectNext(a);
return this.sel},_resize:function(){var a=this.sel.getSelectedRange();a.start==a.end&&a.end==this.el.value.length&&(this.el.value+="\n",this.sel.createSelection(a.end,a.end));this.el.scrollHeight>this.el.clientHeight&&$(this.el).height(this.el.scrollHeight+10)},autoResize:function(){var a=this,b=$(this.el);b.css("overflow","hidden");b.keypress(function(){a._resize()});b.keyup(function(b){13==b.keyCode&&a._resize()})}};if(jQuery)for(func in f.prototype)jQuery.fn[func]=function(a){return function(){var b=
Array.prototype.slice.call(arguments),c=this.data("txtarea");c||(c=new f(this[0]),this.data("txtarea",c));return c[a].apply(c,b)}}(func);window.Txtarea=f})();
>>>>>>> 0fa8825dc34df02ef80cbe3b3e72c69db1cc2cc1
