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
"use strict";$(document).ready(function(){$("#myaccountHtmlButtonsLink").show(),$(".mainTable .tag_order input").hide(),$(".mainTable tbody").sortable({axis:"y",containment:"parent",placeholder:"tablesize",start:function(){$(".submit input.submit").attr("disabled",!0).addClass("disabled_field")},stop:function(){var t="";$(".mainTable input.tag_order").each(function(){t+="&"+$(this).attr("name")+"="+$(this).val()}),$.ajax({type:"POST",url:EE.BASE+"&C=myaccount&M=reorder_html_buttons",data:"XID="+EE.XID+t,complete:function(){$(".submit input.submit").attr("disabled",!1).removeClass("disabled_field")},success:function(){$(".tag_order input[type=text]").each(function(t){$(this).val(t)})}})}}),$(".del_row").show(),$(".del_row a").click(function(){return $.ajax({url:$(this).attr("href")}),$(this).parent().parent().remove(),!1}),$("#add_new_html_button").hide(),$(".del_instructions").hide(),$(".cp_button").show().toggle(function(){$("#add_new_html_button").slideDown()},function(){$("#add_new_html_button").slideUp()})});
=======

$(document).ready(function(){$("#myaccountHtmlButtonsLink").show();$(".mainTable .tag_order input").hide();$(".mainTable tbody").sortable({axis:"y",containment:"parent",placeholder:"tablesize",start:function(){$(".submit input.submit").attr("disabled",!0).addClass("disabled_field")},stop:function(){var a="";$(".mainTable input.tag_order").each(function(){a+="&"+$(this).attr("name")+"="+$(this).val()});$.ajax({type:"POST",url:EE.BASE+"&C=myaccount&M=reorder_html_buttons",data:"XID="+EE.XID+a,complete:function(){$(".submit input.submit").attr("disabled",
!1).removeClass("disabled_field")},success:function(){$(".tag_order input[type=text]").each(function(a){$(this).val(a)})}})}});$(".del_row").show();$(".del_row a").click(function(){$.ajax({url:$(this).attr("href")});$(this).parent().parent().remove();return!1});$("#add_new_html_button").hide();$(".del_instructions").hide();$(".cp_button").show().toggle(function(){$("#add_new_html_button").slideDown()},function(){$("#add_new_html_button").slideUp()})});
>>>>>>> 0fa8825dc34df02ef80cbe3b3e72c69db1cc2cc1
