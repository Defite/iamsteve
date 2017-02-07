/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		EllisLab Dev Team
 * @copyright	Copyright (c) 2003 - 2016, EllisLab, Inc.
 * @license		https://expressionengine.com/license
 * @link		https://ellislab.com
 * @since		Version 2.0
 * @filesource
 */
!function(e){var i,t,a,l,o=!0;e.ee_fileuploader=function(t){var l={};a=e.extend({},l,t),e.ee_filebrowser.endpoint_request("setup_upload",function(t){i=e(t.uploader),e(document.body).append(i),_EE_uploader_attached()})},e.ee_fileuploader.setSource=function(t,l){i.find(t).attr("src",l),i=i.first(),i.removeClass().addClass("before_upload"),"filemanager"==a.type?i.find(".button_bar .filebrowser").remove():"filebrowser"==a.type&&i.find(".button_bar .filemanager").remove(),e(document).ready(function(){e.ee_fileuploader.build_dialog()}),"function"==typeof a.load&&a.load.call(this,i)},e.ee_fileuploader.build_dialog=function(){i.dialog({width:600,height:370,resizable:!1,position:["center","center"],modal:!0,draggable:!0,title:EE.fileuploader.window_title,autoOpen:!1,zIndex:99999,open:function(){f("before_upload"),l={},e("#file_uploader .button_bar .loading").addClass("visualEscapism"),e.ee_fileuploader.reset_upload(),void 0===t&&(t=i.html()),"function"==typeof a.open&&a.open.call(this,i),r()},close:function(){"undefined"!=typeof window.upload_iframe.file&&(o&&e.ajax({url:EE.BASE+"&"+EE.fileuploader.delete_url,type:"POST",dataType:"json",data:{file:l.file_id,XID:EE.XID},error:function(e,i,t){console.log(i)}}),"function"==typeof a.close&&a.close.call(this,i,l)),i.html(t)}}),e(document).on("click",a.trigger,function(e){e.preventDefault(),i.dialog("open")})};var r=function(){e("#file_uploader .button_bar #rename_file").click(function(i){i.preventDefault(),e("#file_uploader iframe").contents().find("form").trigger("submit")}),e("#file_uploader .button_bar .cancel").live("click",function(t){t.preventDefault(),$iframe=e("#file_uploader iframe").contents(),$iframe.find("#edit_file_metadata").size()?($iframe.find("#resize input").each(function(i){e(this).val(e(this).data("default")).removeClass("oversized")}),$iframe.find("#rotate input").prop("checked",!1)):i.dialog("close")})};e.ee_fileuploader.reset_upload=function(i){"undefined"==typeof i&&(i=!0),e("#file_uploader .button_bar .loading").addClass("visualEscapism"),i===!0&&e("#file_uploader .button_bar #upload_file").addClass("disabled-btn").removeClass("submit").unbind()},e.ee_fileuploader.enable_upload=function(){e("#file_uploader .button_bar #upload_file").addClass("submit").removeClass("disabled-btn").click(function(i){i.preventDefault(),e("#file_uploader .button_bar .loading").removeClass("visualEscapism"),e("#file_uploader iframe").contents().find("form").trigger("submit")})};var n=function(){i.dialog("close"),e.ee_filebrowser.clean_up(l)};e.ee_fileuploader.set_directory_id=function(t){if(!isNaN(parseInt(t,10))){var a=i.find("iframe").attr("src"),l=a.search("&directory_id="),o=e.ee_filebrowser.get_current_settings();return l>0&&(a=a.substring(0,l)),a=a+"&directory_id="+t,e(".dir_choice_container:visible").size()<=0&&(a+="&restrict_directory=true"),o&&"image"==o.content_type&&(a+="&restrict_image=true"),i.find("iframe").attr("src",a),t}return!1},e.ee_fileuploader.file_exists=function(i){e.ee_fileuploader.update_file(i),f("file_exists")},e.ee_fileuploader.after_upload=function(t){if(e.ee_fileuploader.update_file(t),o=!1,"function"==typeof a.after_upload&&a.after_upload.call(this,i,l),f("after_upload"),e("#edit_image").toggle(t.is_image),"filemanager"==a.type){e("#file_uploader .button_bar").on("click","#browse_files",function(e){n(),e.preventDefault()});for(var r=["edit_file","edit_image"],d=0,u=r.length;u>d;d++){var _=e(".mainTable tr.new:first td:has(img) a[href*="+r[d]+"]").attr("href");e("#"+r[d],"#file_uploader .button_bar").attr("href",_)}}else"filebrowser"==a.type&&(e("#file_uploader .button_bar").on("click","#choose_file",function(e){n(),e.preventDefault()}),e("#file_uploader .button_bar").on("click","#edit_file_modal",function(i){e("#file_uploader iframe").contents().find("form#edit_file").trigger("submit"),f("edit_modal"),i.preventDefault()}),e("#file_uploader .button_bar").on("click","#save_file",function(i){e("#file_uploader iframe").contents().find("form#edit_file_metadata").trigger("submit"),i.preventDefault()}))},e.ee_fileuploader.update_file=function(e){l=e};var f=function(i){e("#file_uploader").removeClass("before_upload after_upload file_exists edit_modal").addClass(i)}}(jQuery);