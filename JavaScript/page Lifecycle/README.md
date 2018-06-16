# Page lifecycle events:

The lifecycle of an HTML page has three important events.
1. `DOMContentLoaded` - browser fully loaded HTML, and the DOM tree is built, but external resources like pictures `<img>` and stylsheets may not be loaded yet. Now, we can lookup DOM nodes, initialize the interface
2. `load` - the browser loaded all resources (images, styles etc). All the aditional resources are loaded.
3. `beforeunload/unload` - when the user is leaving the page; this is where we can check if the user saved the changes and ask him whether he really wants to leave.

## DOMContentLoaded

Here we can execute scripts after the DOMContentLoaded. We can add an event listener that will execute the script later on. This is important because it could be the case that the script relies upon the DOM tree.

``` JavaScript
document.addEventListener("DOMContentLoaded", ready)

<script>
  function ready() {
    alert('DOM is ready');
  }
</script>
```

Some scripts have `async` and `defer` attributes. Both tell the browser that it may go on working with the page, and load the script "in background", then run the script when it loads. There are some differences between `async` and `defer`.

One difference is the order, and when they are executed.
| | `async` | `defer` |
|---|---|---|
| __Order__ | Document order doesn't matter - whichever loads first runs first | Always executes in document order (as they go in the document) |
| __DOMContentLoaded__ | Load and execute while the document has not been fully downloaded (Often when scripts are small or cached, and the document is long enough) | Execute after the document is loaded and parsed, and execute right before DOMContentLoaded|

_NOTE_ Scripts that are written after the stylesheet, must wait for the stylesheet to execute. 


* `DOMContentLoaded` event triggers on `document` when DOM is ready. We can apply JavaScript to elements at this stage.
  * All scripts are executed except those that are external with `async` or `defer`
  * Images and other resources may still continue loading.
* `load` event on `window` triggers when the page and all resources are loaded. We rarely use it, because there’s usually no need to wait for so long.
* `beforeunload` event on `window` triggers when the user wants to leave the page. If it returns a string, the browser shows a question whether the user really wants to leave or not.
* `unload` event on `window` triggers when the user is finally leaving, in the handler we can only do simple things that do not involve delays or asking a user. Because of that limitation, it’s rarely used.
* `document.readyState` is the current state of the document, changes can be tracked in the `readystatechange` event:
  * `loading` – the document is loading.
  * `interactive` – the document is parsed, happens at about the same time as DOMContentLoaded, but before it.
  * `complete` – the document and resources are loaded, happens at about the same time as `window.onload`, but before it.
