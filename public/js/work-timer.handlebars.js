(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['work-timer-history'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<tr data-id="
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":2,"column":12},"end":{"line":2,"column":22}}}) : helper)))
    + ">\r\n	<td class=\"start_col\">\r\n		<span title=\""
    + alias4((lookupProperty(helpers,"formatTime")||(depth0 && lookupProperty(depth0,"formatTime"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"overall_start_timestamp") : depth0),{"name":"formatTime","hash":{},"data":data,"loc":{"start":{"line":4,"column":15},"end":{"line":4,"column":58}}}))
    + "\">\r\n			"
    + alias4((lookupProperty(helpers,"formatTimeShort")||(depth0 && lookupProperty(depth0,"formatTimeShort"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"overall_start_timestamp") : depth0),{"name":"formatTimeShort","hash":{},"data":data,"loc":{"start":{"line":5,"column":3},"end":{"line":5,"column":51}}}))
    + "\r\n		</span>\r\n	</td>\r\n	<td class=\"stop_col\">\r\n		<span title=\""
    + alias4((lookupProperty(helpers,"formatTime")||(depth0 && lookupProperty(depth0,"formatTime"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"overall_stop_timestamp") : depth0),{"name":"formatTime","hash":{},"data":data,"loc":{"start":{"line":9,"column":15},"end":{"line":9,"column":57}}}))
    + "\"\">\r\n			"
    + alias4((lookupProperty(helpers,"formatTimeShort")||(depth0 && lookupProperty(depth0,"formatTimeShort"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"overall_stop_timestamp") : depth0),{"name":"formatTimeShort","hash":{},"data":data,"loc":{"start":{"line":10,"column":3},"end":{"line":10,"column":50}}}))
    + "\r\n		</span>\r\n	</td>\r\n	<td class=\"name_col\">"
    + alias4(container.lambda((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</td>\r\n	<td class=\"active_col\">"
    + alias4((lookupProperty(helpers,"formatDuration")||(depth0 && lookupProperty(depth0,"formatDuration"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"total_active_time") : depth0),{"name":"formatDuration","hash":{},"data":data,"loc":{"start":{"line":14,"column":24},"end":{"line":14,"column":65}}}))
    + "</td>\r\n	<td class=\"pause_col\">"
    + alias4((lookupProperty(helpers,"formatDuration")||(depth0 && lookupProperty(depth0,"formatDuration"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"total_pause_time") : depth0),{"name":"formatDuration","hash":{},"data":data,"loc":{"start":{"line":15,"column":23},"end":{"line":15,"column":63}}}))
    + "</td>\r\n</tr>\r\n";
  stack1 = ((helper = (helper = lookupProperty(helpers,"segment_history") || (depth0 != null ? lookupProperty(depth0,"segment_history") : depth0)) != null ? helper : alias2),(options={"name":"segment_history","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":0},"end":{"line":39,"column":20}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"segment_history")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr class=\"detail_row detail_hidden\" data-id="
    + alias1(container.lambda((container.data(data, 1) && lookupProperty(container.data(data, 1),"index")), depth0))
    + ">\r\n	<td class=\"start_col\">\r\n		<span title=\""
    + alias1((lookupProperty(helpers,"formatTime")||(depth0 && lookupProperty(depth0,"formatTime"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"segment_start") : depth0),{"name":"formatTime","hash":{},"data":data,"loc":{"start":{"line":20,"column":15},"end":{"line":20,"column":48}}}))
    + "\">\r\n			"
    + alias1((lookupProperty(helpers,"formatTimeShort")||(depth0 && lookupProperty(depth0,"formatTimeShort"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"segment_start") : depth0),{"name":"formatTimeShort","hash":{},"data":data,"loc":{"start":{"line":21,"column":3},"end":{"line":21,"column":41}}}))
    + "\r\n		</span>\r\n	</td>\r\n	<td class=\"stop_col\">\r\n		<span title=\""
    + alias1((lookupProperty(helpers,"formatTime")||(depth0 && lookupProperty(depth0,"formatTime"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"segment_stop") : depth0),{"name":"formatTime","hash":{},"data":data,"loc":{"start":{"line":25,"column":15},"end":{"line":25,"column":47}}}))
    + "\">\r\n			"
    + alias1((lookupProperty(helpers,"formatTimeShort")||(depth0 && lookupProperty(depth0,"formatTimeShort"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"segment_stop") : depth0),{"name":"formatTimeShort","hash":{},"data":data,"loc":{"start":{"line":26,"column":3},"end":{"line":26,"column":40}}}))
    + "\r\n		</span>\r\n	</td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias2,(depth0 != null ? lookupProperty(depth0,"segment_ispause") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":29,"column":1},"end":{"line":37,"column":8}}})) != null ? stack1 : "")
    + "</tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<td class=\"name_col\">pause</td>\r\n	<td class=\"active_col\">-</td>\r\n	<td class=\"pause_col\">"
    + container.escapeExpression((lookupProperty(helpers,"formatDuration")||(depth0 && lookupProperty(depth0,"formatDuration"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"segment_duration") : depth0),{"name":"formatDuration","hash":{},"data":data,"loc":{"start":{"line":32,"column":23},"end":{"line":32,"column":63}}}))
    + "</td>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<td class=\"name_col\">"
    + alias1(container.lambda((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</td>\r\n	<td class=\"active_col\">"
    + alias1((lookupProperty(helpers,"formatDuration")||(depth0 && lookupProperty(depth0,"formatDuration"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"segment_duration") : depth0),{"name":"formatDuration","hash":{},"data":data,"loc":{"start":{"line":35,"column":24},"end":{"line":35,"column":64}}}))
    + "</td>\r\n	<td class=\"pause_col\">-</td>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  stack1 = ((helper = (helper = lookupProperty(helpers,"d") || (depth0 != null ? lookupProperty(depth0,"d") : depth0)) != null ? helper : container.hooks.helperMissing),(options={"name":"d","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":40,"column":6}}}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!lookupProperty(helpers,"d")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true,"useDepths":true});
})();