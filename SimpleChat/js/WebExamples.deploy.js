smalltalk.addPackage('WebExamples');
smalltalk.addClass('SimpleChatExample', smalltalk.Object, ['user', 'socket'], 'WebExamples');
smalltalk.addMethod(
"_connect",
smalltalk.method({
selector: "connect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@socket"]=_st((smalltalk.WebSocket || WebSocket))._value_("ws://localhost:9999/broadcast");
_st(self["@socket"])._onopen_((function(){
return smalltalk.withContext(function($ctx2) {_st(self["@socket"])._send_(_st(_st(self["@user"])._asString()).__comma(" connected"));
_st(window)._alert_("Connected so server");
_st(_st("#loginform")._asJQuery())._hide();
return _st(_st("#sendbutton")._asJQuery())._show();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@socket"])._onmessage_((function(evt){
return smalltalk.withContext(function($ctx2) {return _st(self)._processMessage_(_st(evt)._data());
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(self["@socket"])._onclose_((function(){
return smalltalk.withContext(function($ctx2) {_st(self["@socket"])._send_(_st(_st(self["@user"])._asString()).__comma(" disconnected"));
_st(window)._alert_("Disconnected from server");
_st(_st("#loginform")._asJQuery())._show();
return _st(_st("#sendbutton")._asJQuery())._hide();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"connect",{},smalltalk.SimpleChatExample)})},
messageSends: ["value:", "onopen:", "send:", ",", "asString", "alert:", "hide", "asJQuery", "show", "onmessage:", "processMessage:", "data", "onclose:"]}),
smalltalk.SimpleChatExample);

smalltalk.addMethod(
"_disconnect",
smalltalk.method({
selector: "disconnect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@socket"])._close();
return self}, function($ctx1) {$ctx1.fill(self,"disconnect",{},smalltalk.SimpleChatExample)})},
messageSends: ["close"]}),
smalltalk.SimpleChatExample);

smalltalk.addMethod(
"_init",
smalltalk.method({
selector: "init",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st("#sendbutton")._asJQuery())._hide();
_st(_st("#loginbutton")._asJQuery())._click_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._login();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st("#sendbutton")._asJQuery())._click_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._sendMessage();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.SimpleChatExample)})},
messageSends: ["hide", "asJQuery", "click:", "login", "sendMessage"]}),
smalltalk.SimpleChatExample);

smalltalk.addMethod(
"_login",
smalltalk.method({
selector: "login",
fn: function (){
var self=this;
var username;
return smalltalk.withContext(function($ctx1) { username=_st(document)._getElementById_("logininput");
self["@user"]=_st(username)._value();
_st(self)._connect();
return self}, function($ctx1) {$ctx1.fill(self,"login",{username:username},smalltalk.SimpleChatExample)})},
messageSends: ["getElementById:", "value", "connect"]}),
smalltalk.SimpleChatExample);

smalltalk.addMethod(
"_processMessage_",
smalltalk.method({
selector: "processMessage:",
fn: function (aMessage){
var self=this;
var messages;
return smalltalk.withContext(function($ctx1) { messages=_st(document)._getElementById_("messages");
_st(messages)._innerHTML_(_st(_st(_st(messages)._innerHTML()).__comma("<br>")).__comma(aMessage));
return self}, function($ctx1) {$ctx1.fill(self,"processMessage:",{aMessage:aMessage,messages:messages},smalltalk.SimpleChatExample)})},
messageSends: ["getElementById:", "innerHTML:", ",", "innerHTML"]}),
smalltalk.SimpleChatExample);

smalltalk.addMethod(
"_sendMessage",
smalltalk.method({
selector: "sendMessage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@socket"])._send_(_st(_st(_st(_st(_st("[ ").__comma(_st(_st((smalltalk.Date || Date))._now())._asString())).__comma(" ] ")).__comma(_st(self["@user"])._asString())).__comma(": ")).__comma(_st(_st(document)._getElementById_("messageinput"))._value()));
_st(_st(document)._getElementById_("messageinput"))._value_("");
return self}, function($ctx1) {$ctx1.fill(self,"sendMessage",{},smalltalk.SimpleChatExample)})},
messageSends: ["send:", ",", "value", "getElementById:", "asString", "now", "value:"]}),
smalltalk.SimpleChatExample);



