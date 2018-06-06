# Bubbling and Capturing

``` HTML
<div onclick="alert('The handler!')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
```
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

__event.target vs event.currentTarget
