(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['work-timer-history'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "<tr data-id="
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ">\r\n	<td class=\"start_col\">\r\n		<span title=\""
    + alias4((helpers.formatTime || (depth0 && depth0.formatTime) || alias2).call(alias1,(depth0 != null ? depth0.overall_start_timestamp : depth0),{"name":"formatTime","hash":{},"data":data}))
    + "\">\r\n			"
    + alias4((helpers.formatTimeShort || (depth0 && depth0.formatTimeShort) || alias2).call(alias1,(depth0 != null ? depth0.overall_start_timestamp : depth0),{"name":"formatTimeShort","hash":{},"data":data}))
    + "\r\n		</span>\r\n	</td>\r\n	<td class=\"stop_col\">\r\n		<span title=\""
    + alias4((helpers.formatTime || (depth0 && depth0.formatTime) || alias2).call(alias1,(depth0 != null ? depth0.overall_stop_timestamp : depth0),{"name":"formatTime","hash":{},"data":data}))
    + "\"\">\r\n			"
    + alias4((helpers.formatTimeShort || (depth0 && depth0.formatTimeShort) || alias2).call(alias1,(depth0 != null ? depth0.overall_stop_timestamp : depth0),{"name":"formatTimeShort","hash":{},"data":data}))
    + "\r\n		</span>\r\n	</td>\r\n	<td class=\"name_col\">"
    + alias4(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</td>\r\n	<td class=\"active_col\">"
    + alias4((helpers.formatDuration || (depth0 && depth0.formatDuration) || alias2).call(alias1,(depth0 != null ? depth0.total_active_time : depth0),{"name":"formatDuration","hash":{},"data":data}))
    + "</td>\r\n	<td class=\"pause_col\">"
    + alias4((helpers.formatDuration || (depth0 && depth0.formatDuration) || alias2).call(alias1,(depth0 != null ? depth0.total_pause_time : depth0),{"name":"formatDuration","hash":{},"data":data}))
    + "</td>\r\n</tr>\r\n";
  stack1 = ((helper = (helper = helpers.segment_history || (depth0 != null ? depth0.segment_history : depth0)) != null ? helper : alias2),(options={"name":"segment_history","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.segment_history) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing;

  return "<tr class=\"detail_row detail_hidden\" data-id="
    + alias1(container.lambda((container.data(data, 1) && container.data(data, 1).index), depth0))
    + ">\r\n	<td class=\"start_col\">\r\n		<span title=\""
    + alias1((helpers.formatTime || (depth0 && depth0.formatTime) || alias3).call(alias2,(depth0 != null ? depth0.segment_start : depth0),{"name":"formatTime","hash":{},"data":data}))
    + "\">\r\n			"
    + alias1((helpers.formatTimeShort || (depth0 && depth0.formatTimeShort) || alias3).call(alias2,(depth0 != null ? depth0.segment_start : depth0),{"name":"formatTimeShort","hash":{},"data":data}))
    + "\r\n		</span>\r\n	</td>\r\n	<td class=\"stop_col\">\r\n		<span title=\""
    + alias1((helpers.formatTime || (depth0 && depth0.formatTime) || alias3).call(alias2,(depth0 != null ? depth0.segment_stop : depth0),{"name":"formatTime","hash":{},"data":data}))
    + "\">\r\n			"
    + alias1((helpers.formatTimeShort || (depth0 && depth0.formatTimeShort) || alias3).call(alias2,(depth0 != null ? depth0.segment_stop : depth0),{"name":"formatTimeShort","hash":{},"data":data}))
    + "\r\n		</span>\r\n	</td>\r\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.segment_ispause : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<td class=\"name_col\">pause</td>\r\n	<td class=\"active_col\">-</td>\r\n	<td class=\"pause_col\">"
    + container.escapeExpression((helpers.formatDuration || (depth0 && depth0.formatDuration) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.segment_duration : depth0),{"name":"formatDuration","hash":{},"data":data}))
    + "</td>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression;

  return "	<td class=\"name_col\">"
    + alias1(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</td>\r\n	<td class=\"active_col\">"
    + alias1((helpers.formatDuration || (depth0 && depth0.formatDuration) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.segment_duration : depth0),{"name":"formatDuration","hash":{},"data":data}))
    + "</td>\r\n	<td class=\"pause_col\">-</td>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.d || (depth0 != null ? depth0.d : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"d","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.d) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true,"useDepths":true});
})();