[Home](../) > [JavaScript](./)

# JQuery Cheatsheet

jQuery Cheat Sheet
< Learn These Shortcuts
Attributes
.addClass
Adds the specified class(es) to each of the set of matched elements
.attr
Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element
.hasClass
Determine whether any of the matched elements are assigned the given class
.html
Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element
.prop
Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element
.removeAttr
Remove an attribute from each element in the set of matched elements
.removeClass
Remove a single class, multiple classes, or all classes from each element in the set of matched elements
.removeProp
Remove a property for the set of matched elements
.toggleClass
Add or remove one or more classes from each element in the set of matched elements, depending on either the class’s presence or the value of the switch argument
.val
Get the current value of the first element in the set of matched elements or set the value of every matched element
Effects I
.animate
Perform a custom animation of a set of CSS properties
.fadeIn
Display the matched elements by fading them to opaque
.fadeOut
Hide the matched elements by fading them to transparent
.fadeTo
Adjust the opacity of the matched elements
.fadeToggle
Display or hide the matched elements by animating their opacity
.hide
Hide the matched elements
.show
Display the matched elements
.slideDown
Display the matched elements with a sliding motion
.slideToggle
Display or hide the matched elements with a sliding motion
.slideUp
Hide the matched elements with a sliding motion
.toggle
Display or hide the matched elements
Effects II
.clearQueue
Remove from the queue all items that have not yet been run
.delay
Set a timer to delay execution of subsequent items in the queue
.dequeue
Execute the next function on the queue for the matched elements
.finish
Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements
$.fx.interval
The rate (in milliseconds) at which animations fire
$.fx.off
Globally disable all animations
.queue
Show or manipulate the queue of functions to be executed on the matched elements
.stop
Stop the currently-running animation on the matched elements
Traversing I
.add
Add elements to the set of matched elements
.addBack
Add the previous set of elements on the stack to the current set, optionally filtered by a selector
.andSelf
Add the previous set of elements on the stack to the current set
.children
Get the children of each element in the set of matched elements, optionally filtered by a selector
.closest
For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree
.contents
Get the children of each element in the set of matched elements, including text and comment nodes
.each
Iterate over a jQuery object, executing a function for each matched element
.end
End the most recent filtering operation in the current chain and return the set of matched elements to its previous state
.eq
Reduce the set of matched elements to the one at the specified index
.filter
Reduce the set of matched elements to those that match the selector or pass the function’s test
.find
Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
.first
Reduce the set of matched elements to the first in the set
.has
Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element
.is
Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments
.last
Reduce the set of matched elements to the final one in the set
Traversing II
.map
Pass each element in the current matched set through a function, producing a new jQuery object containing the return values
.next
Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector
.nextAll
Get all following siblings of each element in the set of matched elements, optionally filtered by a selector
.nextUntil
Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed
.not
Remove elements from the set of matched elements
.offsetParent
Get the closest ancestor element that is positioned
.parent
Get the parent of each element in the current set of matched elements, optionally filtered by a selector
.parents
Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
.parentsUntil
Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object
.prev
Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector
.prevAll
Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector
.prevUntil
Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object
.siblings
Get the siblings of each element in the set of matched elements, optionally filtered by a selector
.slice
Reduce the set of matched elements to a subset specified by a range of indices
Selectors I
"_"
Selects all elements
:animated
Select all elements that are in the progress of an animation at the time the selector is run
name|="value"
Attribute contains prefix selector
name_="value"
Attribute contains selector
name~="value"
Attribute contains word selector
name$="value"
Attribute ends with selector
name="value"
Attribute equals selector
name!="value"
Attribute not equal selector
name^="value"
Attribute starts with selector
:button
Selects all button elements and elements of type button
:checkbox
Selects all elements of type checkbox
:checked
Matches all elements that are checked or selected
"parent>child"
Child selector
".class"
Class selector
:contains
Select all elements that contain the specified text
"ancestor descendant"
Selects all elements that are descendants of a given ancestor
:disabled
Selects all elements that are disabled
"element"
Element selector
:empty
Select all elements that have no children (including text nodes)
:enabled
Selects all elements that are enabled
Selectors II
:eq
Select the element at index n within the matched set
:even
Selects even elements, zero-indexed. See also odd
:file
Selects all elements of type file
:first-child
Selects all elements that are the first child of their parent
:first-of-type
Selects all elements that are the first among siblings of the same element name
:first
Selects the first matched element
:focus
Selects element if it is currently focused
:gt
Select all elements at an index greater than index within the matched set
:has
Selects elements which contain at least one element that matches the specified selector
:header
Selects all elements that are headers, like h1, h2, h3 and so on
:hidden
Selects all elements that are hidden
"#id"
Selects a single element with the given id attribute
:image
Selects all elements of type image
:input
Selects all input, textarea, select and button elements
[name]
Has Attribute Selector
:lang
Selects all elements of the specified language
:last-child
Selects all elements that are the last child of their parent
:last-of-type
Selects all elements that are the last among siblings of the same element name
:last
Selects the last matched element
:it
Select all elements at an index less than index within the matched set
Selectors III
name="value", name2="Value2"
Multiple attribute selector
"selector1, selector2,selectorN"
Multiple Selectors
"prev+next"
Next adjacent selector
"prev~siblings"
Next siblings selector
:not
Selects all elements that do not match the given selector
:nth-child
Selects all elements that are the nth-child of their parent
:nth-last-of-type
Selects all elements that are the nth-child of their parent, counting from the last element to the first
:nth-of-type
Selects all elements that are the nth child of their parent in relation to siblings with the same element name
:odd
Selects odd elements, zero-indexed. See also even
:only-child
Selects all elements that are the only child of their parent
:only-of-type
Selects all elements that have no siblings with the same element name
:parent
Select all elements that have at least one child node (either an element or text
:password
Selects all elements of type password
:radio
Selects all elements of type radio
:reset
Selects all elements of type reset
:root
Selects the element that is the root of the document
:selected
Selects all elements that are selected
:submit
Selects all elements of type submit
:target
Selects the target element indicated by the fragment identifier of the document’s URI
:text
Selects all elements of type text
:visible
Selects all elements that are visible
Ajax
.ajaxComplete
Register a handler to be called when Ajax requests complete
.ajaxError
Register a handler to be called when Ajax requests complete with an error.
.ajaxSend
Attach a function to be executed before an Ajax request is sent
.ajaxStart
Register a handler to be called when the first Ajax request begins
.ajaxStop
Register a handler to be called when all Ajax requests have completed
.ajaxSuccess
Attach a function to be executed whenever an Ajax request completes successfully
$.ajax
Perform an asynchronous HTTP (Ajax) request
$.ajaxPrefilter
Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax()
$.ajaxSetup
Set default values for future Ajax requests. Its use is not recommended
$.ajaxTransport
Creates an object that handles the actual transmission of Ajax data
$.get
Load data from the server using a HTTP GET request
$.getJSON
Load JSON-encoded data from the server using a GET HTTP request
$.getScript
Load a JavaScript file from the server using a GET HTTP request, then execute it
$.post
Load data from the server using a HTTP POST request
.load
Load data from the server and place the returned HTML into the matched element
Properties
.context
The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document
.jquery
A string containing the jQuery version number
$.browser
Contains flags for the useragent, read from navigator.userAgent. This property was removed in jQuery 1.9 and is available only through the jQuery.migrate plugin. Please try to use feature detection instead
$.support
A collection of properties that represent the presence of different browser features or bugs
.length
The number of elements in the jQuery object
.selector
A selector representing selector passed to jQuery(), if any, when creating the original set
Manipulation I
.after
Insert content, specified by the parameter, after each element in the set of matched elements
.append
Insert content, specified by the parameter, to the end of each element in the set of matched elements
.before
Insert content, specified by the parameter, before each element in the set of matched elements
.clone
Create a deep copy of the set of matched elements
.css
Get the value of a style property for the first element in the set of matched elements or set one or more CSS properties for every matched element
.empty
Remove all child nodes of the set of matched elements from the DOM
.height
Get the current computed height for the first element in the set of matched elements or set the height of every matched element
.innerHeight
Get the current computed inner height (including padding but not border) for the first element in the set of matched elements or set the inner height of every matched element
.innerWidth
Get the current computed inner width (including padding but not border) for the first element in the set of matched elements or set the inner width of every matched element
.insertAfter
Insert every element in the set of matched elements after the target
.insertBefore
Insert every element in the set of matched elements before the target
.outerHeight
Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin. Returns a number (without “px”) representation of the value or null if called on an empty set of elements
Manipulation II
.outerWidth
Get the current computed width for the first element in the set of matched elements, including padding and border
.prepend
Insert content, specified by the parameter, to the beginning of each element in the set of matched elements
.prependTo
Insert every element in the set of matched elements to the beginning of the target
.remove
Remove the set of matched elements from the DOM
.replaceAll
Replace each target element with the set of matched elements
.replaceWith
Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed
.scrollLeft
Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element
.text
Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements
.unwrap
Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place
.width
Get the current computed width for the first element in the set of matched elements or set the width of every matched element
.wrap
Wrap an HTML structure around each element in the set of matched elements
.wrapAll
Wrap an HTML structure around all elements in the set of matched elements
.wrapInner
Wrap an HTML structure around the content of each element in the set of matched elements
Events I
.bind
Attach a handler to an event for the elements
.click
Bind an event handler to the “click” JavaScript event, or trigger that event on an element
.dblclick
Bind an event handler to the “dblclick” JavaScript event, or trigger that event on an element
.delegate
Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements
.die
Remove event handlers previously attached using .live() from the elements
.error
Bind an event handler to the “error” JavaScript event
event.currentTarget
The current DOM element within the event bubbling phase
event.data
An optional object of data passed to an event method when the current executing handler is bound
event.delegateTarget
The element where the currently-called jQuery event handler was attached
event.isDefaultPrevented
Returns whether event.preventDefault() was ever called on this event object
event.isImmediatePropagationStopped
Returns whether event.stopImmediatePropagation() was ever called on this event object
event.isPropagationStopped
Returns whether event.stopPropagation() was ever called on this event object
event.metaKey
Indicates whether the META key was pressed when the event fired
event.namespace
The namespace specified when the event was triggered
event.pageX
The mouse position relative to the left edge of the document
event.pageY
The mouse position relative to the top edge of the document
event.preventDefault
If this method is called, the default action of the event will not be triggered
event.relatedTarget
The other DOM element involved in the event, if any
Events II
event.result
The last value returned by an event handler that was triggered by this event, unless the value was undefined
event.stopImmediatePropagation
Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree
event.stopPropagation
Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event
event.target
The DOM element that initiated the event
event.timeStamp
The difference in milliseconds between the time the browser created the event and January 1, 1970
event.type
Describes the nature of the event
event.which
For key or mouse events, this property indicates the specific key or button that was pressed
.focusin
Bind an event handler to the “focusin” event
.focusout
Bind an event handler to the “focusout” JavaScript event
.hover
Bind one or two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements
.keydown
Bind an event handler to the “keydown” JavaScript event, or trigger that event on an element
.keypress
Bind an event handler to the “keypress” JavaScript event, or trigger that event on an element
.keyup
Bind an event handler to the “keyup” JavaScript event, or trigger that event on an element
.live
Attach an event handler for all elements which match the current selector, now and in the future
.load
Bind an event handler to the “load” JavaScript event
.mousedown
Bind an event handler to the “mousedown” JavaScript event, or trigger that event on an element
.mouseenter
Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element
.mouseleave
Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element
Events III
.mousemove
Bind an event handler to the “mousemove” JavaScript event, or trigger that event on an element
.mouseout
Bind an event handler to the “mouseout” JavaScript event, or trigger that event on an element
.mouseover
Bind an event handler to the “mouseover” JavaScript event, or trigger that event on an element
.mouseup
Bind an event handler to the “mouseup” JavaScript event, or trigger that event on an element
.off
Remove an event handler
.on
Attach an event handler function for one or more events to the selected elements
.one
Attach a handler to an event for the elements. The handler is executed at most once per element per event type
.ready
Specify a function to execute when the DOM is fully loaded
.resize
Bind an event handler to the “resize” JavaScript event, or trigger that event on an element
.scroll
Bind an event handler to the “scroll” JavaScript event, or trigger that event on an element
.toggle
Bind two or more handlers to the matched elements, to be executed on alternate clicks
.trigger
Execute all handlers and behaviors attached to the matched elements for the given event type
.triggerHandler
Execute all handlers attached to an element for an event
.unbind
Remove a previously-attached event handler from the elements
.undelegate
Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements
.unload
Bind an event handler to the “unload” JavaScript event
Forms
.blur
Bind an event handler to the “blur” JavaScript event, or trigger that event on an element
.change
Bind an event handler to the “change” JavaScript event, or trigger that event on an element
.focus
Bind an event handler to the “focus” JavaScript event, or trigger that event on an element
.select
Bind an event handler to the “select” JavaScript event, or trigger that event on an element
.serialize
Encode a set of form elements as a string for submission
.serializeArray
Encode a set of form elements as an array of names and values
.submit
Bind an event handler to the “submit” JavaScript event, or trigger that event on an element
Utilities I
$.contains
Check to see if a DOM element is a descendant of another DOM element
$.data
Store arbitrary data associated with the specified element and/or return the value that was set
$.dequeue
Execute the next function on the queue for the matched element
$.each
Iterator function used to iterate over both objects or arrays
$.extend
Merge the contents of two or more objects together into the first object
$.fn.extend
Merge the contents of an object onto the jQuery prototype to provide new jQuery instance methods
$.globalEval
Execute some JavaScript code globally
$.grep
Finds the elements of an array which satisfy a filter function. The original array is not affected
$.inArray
Search for a specified value within an array and return its index (or -1 if not found)
$.isArray
Determine whether the argument is an array
$.isEmptyObject
Check to see if an object is empty (contains no enumerable properties)
$.isFunction
Determine if the argument passed is a Javascript function object
$.isNumeric
Determines whether its argument is a number
$.isPlainObject
Check to see if an object is a plain object (created using “{}” or “new Object”)
$.isWindow
Determine whether the argument is a window
Utilities II
$.isXMLDoc
Check to see if a DOM node is within an XML document (or is an XML document)
$.makeArray
Convert an array-like object into a true JavaScript array
$.map
Translate all items in an array or object to new array of items
$.merge
Merge the contents of two arrays together into the first array
$.noop
An empty function
$.now
Return a number representing the current time
$.parseHTML
Parses a string into an array of DOM nodes
$.parseJSON
Takes a well-formed JSON string and returns the resulting JavaScript object
$.parseXML
Parses a string into an XML document
$.proxy
Takes a function and returns a new one that will always have a particular context
$.queue
Show or manipulate the queue of functions to be executed on the matched element
$.removeData
Remove a previously-stored piece of data
$.trim
Remove the whitespace from the beginning and end of a string
$.type
Determine the internal JavaScript [[Class]] of an object
$.unique
Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers
Deferred Objects
deferred.always
Add handlers to be called when the Deferred object is either resolved or rejected
deferred.done
Add handlers to be called when the Deferred object is resolved
deferred.fail
Add handlers to be called when the Deferred object is rejected
deferred.isRejected
Determine whether a Deferred object has been rejected
deferred.isResolved
Determine whether a Deferred object has been resolved
deferred.notify
Call the progressCallbacks on a Deferred object with the given args
deferred.notifyWith
Call the progressCallbacks on a Deferred object with the given context and args
deferred.pipe
Utility method to filter and/or chain Deferreds
deferred.progress
Add handlers to be called when the Deferred object generates progress notifications
deferred.promise
Return a Deferred’s Promise object
deferred.reject
Reject a Deferred object and call any failCallbacks with the given args
deferred.rejectWith
Reject a Deferred object and call any failCallbacks with the given context and args
deferred.resolve
Resolve a Deferred object and call any doneCallbacks with the given args
deferred.resolveWith
Resolve a Deferred object and call any doneCallbacks with the given context and args
deferred.state
Determine the current state of a Deferred object
deferred.then
Add handlers to be called when the Deferred object is resolved, rejected, or still in progress
$.Deferred
A constructor function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function
$.when
Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events
.promise
Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished
Callbacks Object
callbacks.add
Add a callback or a collection of callbacks to a callback list
callbacks.disable
Disable a callback list from doing anything more
callbacks.disabled
Determine if the callbacks list has been disabled
callbacks.empty
Remove all of the callbacks from a list
callbacks.fire
Call all of the callbacks with the given arguments
callbacks.fired
Determine if the callbacks have already been called at least once
callbacks.fireWith
Call all callbacks in a list with the given context and arguments
callbacks.has
Determine whether a supplied callback is in a list
callbacks.lock
Lock a callback list in its current state
callbacks.locked
Determine if the callbacks list has been locked
callbacks.remove
Remove a callback or a collection of callbacks from a callback list
$.Callbacks
A multi-purpose callbacks list object that provides a powerful way to manage callback lists
Miscellaneous
$.holdReady
Holds or releases the execution of jQuery’s ready event
$()
Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string
$.sub
Creates a new copy of jQuery whose properties and methods can be modified without affecting the original jQuery object
$.cssHooks
Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize CSS property naming, or create custom properties
$.hasData
Determine whether an element has any jQuery data associated with it
$.queue
Show or manipulate the queue of functions to be executed on the matched element.
$.error
Takes a string and throws an exception containing it
.pushStack
Add a collection of DOM elements onto the jQuery stack
.data
Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the set of matched elements
.get
Retrieve the DOM elements matched by the jQuery object
.index
Search for a given element from among the matched elements
$.noConflict
Relinquish jQuery’s control of the $ variable
$.param
Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request
.size
Return the number of elements in the jQuery object
.toArray
Retrieve all the elements contained in the jQuery set, as an array
.offset
Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document
.position
Get the current coordinates of the first element in the set of matched elements, relative to the offset parent
.scrollLeft
Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element.
.scrollTop
Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element
