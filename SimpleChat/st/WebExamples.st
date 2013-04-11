Smalltalk current createPackage: 'WebExamples'!
Object subclass: #SimpleChatExample
	instanceVariableNames: 'user socket'
	package: 'WebExamples'!

!SimpleChatExample methodsFor: 'not yet classified'!

connect
	socket := WebSocket value: 'ws://localhost:9999/broadcast'.
	socket onopen: [ 
					socket send: ( user asString, ' connected'). 
					window alert: 'Connected so server'.
					'#loginform' asJQuery hide.
					'#sendbutton' asJQuery show.
					].
	socket onmessage: [ :evt | self processMessage: ( evt data )  ].
	socket onclose: [ 
					socket send: ( user asString, ' disconnected' ). 
					window alert: 'Disconnected from server'.
					'#loginform' asJQuery show.
					'#sendbutton' asJQuery hide.
					]
!

disconnect
	socket close.
!

init
	( '#sendbutton' asJQuery ) hide.
	( '#loginbutton' asJQuery ) click: [ self login ].
	( '#sendbutton' asJQuery ) click: [ self sendMessage ].
!

login
	| username |
	username := document getElementById: 'logininput'.
	user := (username value).	
	self connect.
!

processMessage: aMessage
	| messages |
	messages := document getElementById: 'messages'.
	messages innerHTML: ( messages innerHTML, '<br>' , aMessage )
!

sendMessage
	socket send: ( '[ ' , Date now asString, ' ] ' ,user asString, ': ', ( ( document getElementById: 'messageinput' ) value ) ).
	( document getElementById: 'messageinput' ) value: ''.
! !

