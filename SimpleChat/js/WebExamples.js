smalltalk.addPackage('WebExamples');
smalltalk.addClass('SimpleChatExample', smalltalk.Object, ['user', 'socket'], 'WebExamples');
smalltalk.addMethod(
"_connect",
smalltalk.method({
selector: "connect",
category: 'not yet classified',
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
args: [],
source: "connect\x0a\x09socket := WebSocket value: 'ws://localhost:9999/broadcast'.\x0a\x09socket onopen: [ \x0a\x09\x09\x09\x09\x09socket send: ( user asString, ' connected'). \x0a\x09\x09\x09\x09\x09window alert: 'Connected so server'.\x0a\x09\x09\x09\x09\x09'#loginform' asJQuery hide.\x0a\x09\x09\x09\x09\x09'#sendbutton' asJQuery show.\x0a\x09\x09\x09\x09\x09].\x0a\x09socket onmessage: [ :evt | self processMessage: ( evt data )  ].\x0a\x09socket onclose: [ \x0a\x09\x09\x09\x09\x09socket send: ( user asString, ' disconnected' ). \x0a\x09\x09\x09\x09\x09window alert: 'Disconnected from server'.\x0a\x09\x09\x09\x09\x09'#loginform' asJQuery show.\x0a\x09\x09\x09\x09\x09'#sendbutton' asJQuery hide.\x0a\x09\x09\x09\x09\x09]",
messageSends: ["value:", "onopen:", "send:", ",", "asString", "alert:", "hide", "asJQuery", "show", "onmessage:", "processMessage:", "data", "onclose:"],
referencedClasses: ["WebSocket"]
}),
smalltalk.SimpleChatExample);

smalltalk.addMethod(
"_disconnect",
smalltalk.method({
selector: "disconnect",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@socket"])._close();
return self}, function($ctx1) {$ctx1.fill(self,"disconnect",{},smalltalk.SimpleChatExample)})},
args: [],
source: "disconnect\x0a\x09socket close.\x0a\x09",
messageSends: ["close"],
referencedClasses: []
}),
smalltalk.SimpleChatExample);

smalltalk.addMethod(
"_init",
smalltalk.method({
selector: "init",
category: 'not yet classified',
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
args: [],
source: "init\x0a\x09( '#sendbutton' asJQuery ) hide.\x0a\x09( '#loginbutton' asJQuery ) click: [ self login ].\x0a\x09( '#sendbutton' asJQuery ) click: [ self sendMessage ].",
messageSends: ["hide", "asJQuery", "click:", "login", "sendMessage"],
referencedClasses: []
}),
smalltalk.SimpleChatExample);

smalltalk.addMethod(
"_login",
smalltalk.method({
selector: "login",
category: 'not yet classified',
fn: function (){
var self=this;
var username;
return smalltalk.withContext(function($ctx1) { username=_st(document)._getElementById_("logininput");
self["@user"]=_st(username)._value();
_st(self)._connect();
return self}, function($ctx1) {$ctx1.fill(self,"login",{username:username},smalltalk.SimpleChatExample)})},
args: [],
source: "login\x0a\x09| username |\x0a\x09username := document getElementById: 'logininput'.\x0a\x09user := (username value).\x09\x0a\x09self connect.",
messageSends: ["getElementById:", "value", "connect"],
referencedClasses: []
}),
smalltalk.SimpleChatExample);

smalltalk.addMethod(
"_processMessage_",
smalltalk.method({
selector: "processMessage:",
category: 'not yet classified',
fn: function (aMessage){
var self=this;
var messages;
return smalltalk.withContext(function($ctx1) { messages=_st(document)._getElementById_("messages");
_st(messages)._innerHTML_(_st(_st(_st(messages)._innerHTML()).__comma("<br>")).__comma(aMessage));
return self}, function($ctx1) {$ctx1.fill(self,"processMessage:",{aMessage:aMessage,messages:messages},smalltalk.SimpleChatExample)})},
args: ["aMessage"],
source: "processMessage: aMessage\x0a\x09| messages |\x0a\x09messages := document getElementById: 'messages'.\x0a\x09messages innerHTML: ( messages innerHTML, '<br>' , aMessage )",
messageSends: ["getElementById:", "innerHTML:", ",", "innerHTML"],
referencedClasses: []
}),
smalltalk.SimpleChatExample);

smalltalk.addMethod(
"_sendMessage",
smalltalk.method({
selector: "sendMessage",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@socket"])._send_(_st(_st(_st(_st(_st("[ ").__comma(_st(_st((smalltalk.Date || Date))._now())._asString())).__comma(" ] ")).__comma(_st(self["@user"])._asString())).__comma(": ")).__comma(_st(_st(document)._getElementById_("messageinput"))._value()));
_st(_st(document)._getElementById_("messageinput"))._value_("");
return self}, function($ctx1) {$ctx1.fill(self,"sendMessage",{},smalltalk.SimpleChatExample)})},
args: [],
source: "sendMessage\x0a\x09socket send: ( '[ ' , Date now asString, ' ] ' ,user asString, ': ', ( ( document getElementById: 'messageinput' ) value ) ).\x0a\x09( document getElementById: 'messageinput' ) value: ''.",
messageSends: ["send:", ",", "value", "getElementById:", "asString", "now", "value:"],
referencedClasses: ["Date"]
}),
smalltalk.SimpleChatExample);



