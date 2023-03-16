/*global jQuery */
jQuery(function ($) {

	formatTime = function(t) {
			return t.format("hh:mm:ss a");
	};

	formatTimeShort = function(t) {
		return t.format("h:mm");
	};

	formatDuration = function(d) {
		hou = Math.floor(d / (1000*60*60));
		min = Math.floor( (d - hou*1000*60*60) / (1000*60) );
		sec = Math.floor( (d - hou*1000*60*60 - min*1000*60) / 1000);
		mil = d - hou*1000*60*60 - min*1000*60 - sec*1000;

		if (hou > 0)
			return hou.toLocaleString("US",{minimumIntegerDigits : 2}) + ":" + min.toLocaleString("US",{minimumIntegerDigits : 2}) + "'";
		else
			return min.toLocaleString("US", {minimumIntegerDigits : 2}) + ":" + sec.toLocaleString("US",{minimumIntegerDigits : 2}) + "''";
	};

	formatDurationShort = function(d) {
		min = Math.floor( d / (1000*60) );
		sec = Math.floor( (d - min*1000*60) / 1000);
		mil = d - min*1000*60 - sec*1000;

		return min.toLocaleString("US",{minimumIntegerDigits : 2}) + ":" + sec.toLocaleString("US",{minimumIntegerDigits : 2});
	};

	formatDurationLong = function(d) {
		hou = Math.floor(d / (1000*60*60));
		min = Math.floor( (d - hou*1000*60*60) / (1000*60) );
		sec = Math.floor( (d - hou*1000*60*60 - min*1000*60) / 1000);
		mil = d - hou*1000*60*60 - min*1000*60 - sec*1000;

		return hou.toLocaleString("US",{minimumIntegerDigits : 2}) + ":" + min.toLocaleString("US",{minimumIntegerDigits : 2}) + ":" + sec.toLocaleString("US",{minimumIntegerDigits : 2});
	};

	Handlebars.registerHelper('formatTime', function(t) {
		return formatTime(t);
	});

	Handlebars.registerHelper('formatTimeShort', function(t) {
		return formatTimeShort(t);
	});

	Handlebars.registerHelper('formatDuration', function(d) {
		return formatDuration(d);
	});

	new_observable = function(initial_value) {
		var value = initial_value;
		var observers = {};
		var nonce = 0;
		return {
			addObserver : function(callback) {
				var key = nonce++;
				observers[key] = callback;
				return key;
			},
			removeObserver : function(key) {
				return delete observers[key];
			},
			setValue : function(new_value) {
				var old_value = value;
				value = new_value;
				for (prop in observers) {
					if (observers.hasOwnProperty(prop)) {
						prop(old_value, new_value);
					}
				}
			},
			getValue : function() {
				return value;
			}
		}
	}

	class StateManager {

		constructor(app) {
			this.app = app;
			this.state = null;
		}

		setState(new_state) {
			if (this.state !== null) {
				this.state.exit(new_state);
			}
			new_state.enter(this.state);
			this.state = new_state;
		}

		getState() {
			return this.state;
		}
	}

	class ActiveState
	{
		constructor(manager, name)
		{
			this.is_active = true;
			this.manager = manager;
			this.name = name;
			this.paused = false;
			this.session_min_reached = false;
			this.total_active_time = 0;
			this.total_pause_time = 0;
			this.overall_start_timestamp = null;
			this.overall_stop_timestamp = null;
			this.segment_start_timestamp = null;
			this.segment_history = [];
		}

		enter(prev_state) {
			this.overall_start_timestamp = new moment();
			this.segment_start_timestamp = this.overall_start_timestamp;
		}

		exit(next_state) {
			this.overall_stop_timestamp = this.closeSegment();
			this.manager.app.setFinishedSession(this);
		}

		closeSegment() {
			var stop_time = new moment();
			var segment_data = {
				name : this.name,
				segment_ispause : this.paused,
				segment_start : this.segment_start_timestamp,
				segment_stop : stop_time,
				segment_duration : stop_time.diff(this.segment_start_timestamp)
			};
			if (this.paused) {
				this.total_pause_time += stop_time.diff(segment_data.segment_start);
			} else {
				this.total_active_time += stop_time.diff(segment_data.segment_start);
			}
			this.segment_history.push(segment_data);
			return stop_time;
		}

		getSessionMin() {
			if (this.name === "work") {
				return this.manager.app.work_minutes*60*1000;
			} else {
				return this.manager.app.break_minutes*60*1000;
			}
		}

		handleTimer() {
			var now = new moment();
			var current_active_time = this.total_active_time;

			if (!this.paused) {
				var current_session_time = now.diff(this.segment_start_timestamp);
				current_active_time += current_session_time;
			}

			var t_net_time_string = formatDurationShort(current_active_time);
			$("#clock").text(t_net_time_string);

			if (!this.session_min_reached && current_active_time > this.getSessionMin() ) {
				this.session_min_reached = true;
				this.manager.app.playDing();
			}
		}

		handleStartWork() {
			if (name !== 'work') {
				this.manager.setState(new ActiveState(this.manager,"work"));
			}
		}

		handleStartBreak() {
			if (name !== 'break') {
				this.manager.setState(new ActiveState(this.manager, "break"));
			}
		}

		handlePause() {
			var stop_time;
			if (!this.paused) {
				stop_time = this.closeSegment();
				this.segment_start_timestamp = stop_time;
				this.paused = true;
				this.manager.app.setPauseButtonText("Unpause");
			} else {
				stop_time = this.closeSegment();
				this.segment_start_timestamp = stop_time;
				this.paused = false;
				this.manager.app.setPauseButtonText("Pause");
			}
		}

		handleClockOut() {
			this.manager.setState(new ClockedOutState(this.manager));
		}
	}

	class ClockedOutState
	{
		constructor(manager) {
			this.manager = manager;
			this.is_active = false;
		}

		enter(prev_state) {

		}

		exit(next_state) {

		}

		handleTimer() {
			var co_text = "--:--";
			var current_text = $("#clock").text();
			if (current_text !== co_text) {
				$("#clock").text(co_text);
			}
		}

		handleStartWork() {
			this.manager.setState(new ActiveState(this.manager,"work"));
		}

		handleStartBreak() {
			this.manager.setState(new ActiveState(this.manager, "break"));
		}

		handlePause() {
		}

		handleClockOut() {
		}
	}



	var App = {
		work_minutes : 25,
		break_minutes : 5,
		state_manager : null,
		interval : null,
		session_history : [],
		summary_work_session_count : 0,
		summary_break_session_count : 0,
		summary_work_time : 0,
		summary_break_time : 0,
		summary_pause_time : 0,

		init : function() {

			var that = this;

			$("#iptWorkTime").val(this.work_minutes);
			$("#iptBreakTime").val(this.break_minutes);

			this.state_manager = new StateManager(this);
			this.state_manager.setState(new ClockedOutState(this.state_manager));

			$("#btnApply").click(function() {
				that.work_minutes = $("#iptWorkTime").val();
				that.break_minutes = $("#iptBreakTime").val();
			});

			$("#btnReset").click(function(){
				$("#iptWorkTime").val(that.work_minutes);
				$("#iptBreakTime").val(that.break_minutes);
			});

			$("#btnStartWork").click(function() {
				that.state_manager.getState().handleStartWork();
			});

			$("#btnStartBreak").click(function() {
				that.state_manager.getState().handleStartBreak();
			});

			$("#btnPause").click(function(){
				that.state_manager.getState().handlePause();
			});

			$("#btnClockOut").click(function(){
				that.state_manager.getState().handleClockOut();
			});

			$("#btnTestSound").click(function() {
				that.playDing();
			});

			$('#history').on("click","tr",function() {
				data_val = $(this).data('id');
				query_string = "tr.detail_row[data-id='" + data_val + "']";
				$(query_string).toggleClass("detail_hidden");
			});

			this.interval = setInterval(function() {that.state_manager.getState().handleTimer()},250);
		},
		playDing : function() {
			$("#dingsound").trigger('play');
		},
		setPauseButtonText(input) {
			$("#btnPause").text(input);
		},
		setFinishedSession(session) {
			if (session.is_active) {
				this.session_history.push(session);
			}

			if (session.name === "work") {
				this.summary_work_session_count += 1;
				this.summary_work_time += session.total_active_time;
				this.summary_pause_time += session.total_pause_time;
			} else if (session.name == "break") {
				this.summary_break_session_count += 1;
				this.summary_break_time += session.total_active_time;
				this.summary_pause_time += session.total_pause_time;
			}

			this.formatSummaryInfo();
		},
		formatSummaryInfo : function() {
			$("#summary_work_session_count").text(this.summary_work_session_count === 1 ? "1 session" : this.summary_work_session_count + " sessions");
			$("#summary_break_session_count").text(this.summary_break_session_count === 1 ? "1 session" : this.summary_break_session_count + " sessions");

			$("#summary_total_work_time").text(formatDuration(this.summary_work_time));
			$("#summary_total_break_time").text(formatDuration(this.summary_break_time));
			$("#summary_total_pause_time").text(formatDuration(this.summary_pause_time));

			history_content = Handlebars.templates['work-timer-history']({d : this.session_history})
			$("#history_body").html(history_content)
		}
	};

	App.init();
});
