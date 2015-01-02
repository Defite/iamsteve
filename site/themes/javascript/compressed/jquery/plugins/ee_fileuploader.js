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
!function(e){var i,t,a,l,o=!0;e.ee_fileuploader=function(t){var l={};a=e.extend({},l,t),e.ee_filebrowser.endpoint_request("setup_upload",function(t){i=e(t.uploader),e(document.body).append(i),_EE_uploader_attached()})},e.ee_fileuploader.setSource=function(t,l){i.find(t).attr("src",l),i=i.first(),i.removeClass().addClass("before_upload"),"filemanager"==a.type?i.find(".button_bar .filebrowser").remove():"filebrowser"==a.type&&i.find(".button_bar .filemanager").remove(),e(document).ready(function(){e.ee_fileuploader.build_dialog()}),"function"==typeof a.load&&a.load.call(this,i)},e.ee_fileuploader.build_dialog=function(){i.dialog({width:600,height:370,resizable:!1,position:["center","center"],modal:!0,draggable:!0,title:EE.fileuploader.window_title,autoOpen:!1,zIndex:99999,open:function(){f("before_upload"),l={},e("#file_uploader .button_bar .loading").addClass("visualEscapism"),e.ee_fileuploader.reset_upload(),void 0===t&&(t=i.html()),"function"==typeof a.open&&a.open.call(this,i),r()},close:function(){"undefined"!=typeof window.upload_iframe.file&&(o&&e.ajax({url:EE.BASE+"&"+EE.fileuploader.delete_url,type:"POST",dataType:"json",data:{file:l.file_id,XID:EE.XID},error:function(e,i){console.log(i)}}),"function"==typeof a.close&&a.close.call(this,i,l)),i.html(t)}}),e(document).on("click",a.trigger,function(e){e.preventDefault(),i.dialog("open")})};var r=function(){e("#file_uploader .button_bar #rename_file").click(function(i){i.preventDefault(),e("#file_uploader iframe").contents().find("form").trigger("submit")}),e("#file_uploader .button_bar .cancel").live("click",function(t){t.preventDefault(),$iframe=e("#file_uploader iframe").contents(),$iframe.find("#edit_file_metadata").size()?($iframe.find("#resize input").each(function(){e(this).val(e(this).data("default")).removeClass("oversized")}),$iframe.find("#rotate input").prop("checked",!1)):i.dialog("close")})};e.ee_fileuploader.reset_upload=function(i){"undefined"==typeof i&&(i=!0),e("#file_uploader .button_bar .loading").addClass("visualEscapism"),i===!0&&e("#file_uploader .button_bar #upload_file").addClass("disabled-btn").removeClass("submit").unbind()},e.ee_fileuploader.enable_upload=function(){e("#file_uploader .button_bar #upload_file").addClass("submit").removeClass("disabled-btn").click(function(i){i.preventDefault(),e("#file_uploader .button_bar .loading").removeClass("visualEscapism"),e("#file_uploader iframe").contents().find("form").trigger("submit")})};var n=function(){i.dialog("close"),e.ee_filebrowser.clean_up(l)};e.ee_fileuploader.set_directory_id=function(t){if(!isNaN(parseInt(t,10))){var a=i.find("iframe").attr("src"),l=a.search("&directory_id="),o=e.ee_filebrowser.get_current_settings();return l>0&&(a=a.substring(0,l)),a=a+"&directory_id="+t,e(".dir_choice_container:visible").size()<=0&&(a+="&restrict_directory=true"),o&&"image"==o.content_type&&(a+="&restrict_image=true"),i.find("iframe").attr("src",a),t}return!1},e.ee_fileuploader.file_exists=function(i){e.ee_fileuploader.update_file(i),f("file_exists")},e.ee_fileuploader.after_upload=function(t){if(e.ee_fileuploader.update_file(t),o=!1,"function"==typeof a.after_upload&&a.after_upload.call(this,i,l),f("after_upload"),e("#edit_image").toggle(t.is_image),"filemanager"==a.type){e("#file_uploader .button_bar").on("click","#browse_files",function(e){n(),e.preventDefault()});for(var r=["edit_file","edit_image"],d=0,u=r.length;u>d;d++){var _=e(".mainTable tr.new:first td:has(img) a[href*="+r[d]+"]").attr("href");e("#"+r[d],"#file_uploader .button_bar").attr("href",_)}}else"filebrowser"==a.type&&(e("#file_uploader .button_bar").on("click","#choose_file",function(e){n(),e.preventDefault()}),e("#file_uploader .button_bar").on("click","#edit_file_modal",function(i){e("#file_uploader iframe").contents().find("form#edit_file").trigger("submit"),f("edit_modal"),i.preventDefault()}),e("#file_uploader .button_bar").on("click","#save_file",function(i){e("#file_uploader iframe").contents().find("form#edit_file_metadata").trigger("submit"),i.preventDefault()}))},e.ee_fileuploader.update_file=function(e){l=e};var f=function(i){e("#file_uploader").removeClass("before_upload after_upload file_exists edit_modal").addClass(i)}}(jQuery);
=======

(function(a){var c,g,d,f,i=!0;a.ee_fileuploader=function(b){d=a.extend({},{},b);a.ee_filebrowser.endpoint_request("setup_upload",function(b){c=a(b.uploader);a(document.body).append(c);_EE_uploader_attached()})};a.ee_fileuploader.setSource=function(b,e){c.find(b).attr("src",e);c=c.first();c.removeClass().addClass("before_upload");"filemanager"==d.type?c.find(".button_bar .filebrowser").remove():"filebrowser"==d.type&&c.find(".button_bar .filemanager").remove();a(document).ready(function(){a.ee_fileuploader.build_dialog()});
"function"==typeof d.load&&d.load.call(this,c)};a.ee_fileuploader.build_dialog=function(){c.dialog({width:600,height:370,resizable:!1,position:["center","center"],modal:!0,draggable:!0,title:EE.fileuploader.window_title,autoOpen:!1,zIndex:99999,open:function(){h("before_upload");f={};a("#file_uploader .button_bar .loading").addClass("visualEscapism");a.ee_fileuploader.reset_upload();void 0===g&&(g=c.html());"function"==typeof d.open&&d.open.call(this,c);j()},close:function(){"undefined"!=typeof window.upload_iframe.file&&
(i&&a.ajax({url:EE.BASE+"&"+EE.fileuploader.delete_url,type:"POST",dataType:"json",data:{file:f.file_id,XID:EE.XID},error:function(a,c){console.log(c)}}),"function"==typeof d.close&&d.close.call(this,c,f),!1===i&&a.ee_filebrowser.reload());c.html(g)}});a(document).on("click",d.trigger,function(a){a.preventDefault();c.dialog("open")})};var j=function(){a("#file_uploader .button_bar #rename_file").click(function(b){b.preventDefault();a("#file_uploader iframe").contents().find("form").trigger("submit")});
a("#file_uploader .button_bar .cancel").live("click",function(b){b.preventDefault();$iframe=a("#file_uploader iframe").contents();$iframe.find("#edit_file_metadata").size()?($iframe.find("#resize input").each(function(){a(this).val(a(this).data("default")).removeClass("oversized")}),$iframe.find("#rotate input").prop("checked",!1)):c.dialog("close")})};a.ee_fileuploader.reset_upload=function(b){"undefined"==typeof b&&(b=!0);a("#file_uploader .button_bar .loading").addClass("visualEscapism");!0===
b&&a("#file_uploader .button_bar #upload_file").addClass("disabled-btn").removeClass("submit").unbind()};a.ee_fileuploader.enable_upload=function(){a("#file_uploader .button_bar #upload_file").addClass("submit").removeClass("disabled-btn").click(function(b){b.preventDefault();a("#file_uploader .button_bar .loading").removeClass("visualEscapism");a("#file_uploader iframe").contents().find("form").trigger("submit")})};var k=function(){c.dialog("close");a.ee_filebrowser.clean_up(f)};a.ee_fileuploader.set_directory_id=
function(b){if(!isNaN(parseInt(b,10))){var e=c.find("iframe").attr("src"),d=e.search("&directory_id="),f=a.ee_filebrowser.get_current_settings();0<d&&(e=e.substring(0,d));e=e+"&directory_id="+b;0>=a(".dir_choice_container:visible").size()&&(e+="&restrict_directory=true");f&&"image"==f.content_type&&(e+="&restrict_image=true");c.find("iframe").attr("src",e);return b}return!1};a.ee_fileuploader.file_exists=function(b){a.ee_fileuploader.update_file(b);h("file_exists")};a.ee_fileuploader.after_upload=
function(b){a.ee_fileuploader.update_file(b);i=!1;"function"==typeof d.after_upload&&d.after_upload.call(this,c,f);h("after_upload");a("#edit_image").toggle(b.is_image);if("filemanager"==d.type){a("#file_uploader .button_bar").on("click","#browse_files",function(a){k();a.preventDefault()});for(var b=["edit_file","edit_image"],e=0,g=b.length;e<g;e++){var j=a(".mainTable tr.new:first td:has(img) a[href*="+b[e]+"]").attr("href");a("#"+b[e],"#file_uploader .button_bar").attr("href",j)}}else"filebrowser"==
d.type&&(a("#file_uploader .button_bar").on("click","#choose_file",function(a){k();a.preventDefault()}),a("#file_uploader .button_bar").on("click","#edit_file_modal",function(b){a("#file_uploader iframe").contents().find("form#edit_file").trigger("submit");h("edit_modal");b.preventDefault()}),a("#file_uploader .button_bar").on("click","#save_file",function(b){a("#file_uploader iframe").contents().find("form#edit_file_metadata").trigger("submit");b.preventDefault()}))};a.ee_fileuploader.update_file=
function(a){f=a};var h=function(b){a("#file_uploader").removeClass("before_upload after_upload file_exists edit_modal").addClass(b)}})(jQuery);
>>>>>>> 0fa8825dc34df02ef80cbe3b3e72c69db1cc2cc1
