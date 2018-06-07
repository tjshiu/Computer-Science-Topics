# Bubbling and Capturing

Events always start at the root of the DOM tree. And slowly makes it's way to the destination (or the event you actually clicked on). It touches every parent and once it get to the destination it goes back up to the root.

These three phases are:
1. Event Capturing Phase (root -> destination)
2. Target Phase
3. Event Bubbling Phase (destination -> root)

## Capturing Phase

Not that this phase is rarely used in real code, but sometimes can be useful. 

In order to catch an event on the capturing phase, we need to set the 3rd argument of `addEventListner` to `true`.
``` JavaScript
var clickButton = document.querySelector("#buttonOne");
clickButton.addEventListener("click", showAlert, true); //usually defaults to false
```

A __true__ value means capture and then the handler is set during the capturing phase. A __false__ value means the handler is set on the bubbling phase. Please know that the default is __false__. The 2nd phase (target phase): the event reached the element is not handled separately. Handles on both capture and bubbling phases trigger at the target phase.


``` HTML
<div onclick="alert('The handler!')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
```

## stopPropagation()
To interrupt an event and permanently derail it from its path, you have the __stopPropagation__ method:

``` JavaScript
function handleClick(e) {
  e.stopPropagation();
}
```
The event will be stopped permanently from the capturing phase or bubbling method with __stopPropagation__.

What if there are multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones will execute?

Solution: `event.stopImmediatePropagation()` - This stops the bubbling and prevent handlers on the current element from running.

### Don't stop the bubble unless you have too!
Bubbling is convenient. There can be hidden pitfalls.

1. We created a nested menu. Each submenu handles clicks on the elements and calls `stopPropagation` so that the outer menu doesn't trigger.
2. Later we decide to catch clicks on the whole window, to track user's behavior.
3. Our analytic won't work over the area where clicks are stopped by `stopPropagation`. We've got a 'dead zone'.

## Bubbling

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up to other ancestors.

For example with this:
``` HTML
<form style="border: 1px solid red" onclick="alert('form')"> Form
  <div style="border: 1px solid blue"onclick="alert('div')">DIV
    <p style="border: 1px solid green" onclick="alert('p')">P</p>
  </div>
</form>
```
After the click on the `<p>`
1. On that `<p>`
2. Then the outer `<div>`
3. Then on the outer `<form>`
4. And so on upwards til the document object.

__ALMOST ALL EVENTS BUBBLE__
However, `focus` does not bubble.

## event.target
A handler on a parent element can always get the details about where it actually happened.

__event.target vs event.currentTarget__

* `event.target` is the actually element that is clicked - the deepest element that originated the event
* `event.currentTarget` is the element that is selected when capturing or bubbling. (=this) - the current element that handles the event (the one that has the handler on it)
* `event.eventPhase` - the current phase (capturing = 1, bubbling = 3)
