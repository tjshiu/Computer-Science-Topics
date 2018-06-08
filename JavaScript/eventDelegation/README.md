# Event Delegation

Capturing and bubbling allow us to implement one of most powerful event handling patterns called _event delegation_.

The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them - we put a single handler on their common ancestor.

In the handler we get `event.target`, see where the event actually happened and handle it.

Steps:
1. Put a single handler on the container
2. In the handler - check the source element `event.target`
3. If the event happened inside an element that interests us, then handle the event.

This allows us to:
* Simplifies initialization and saves memory: no need to add many handlers
* Less code: when adding or removing elements, no need to add/remove handlers.
* DOM modifications we can mass add/remove elements with `innerHTML` and alike.

HOWEVER,
* Events must be bubbling. Should not have `event.stopPropagation()`
* The delegation may add CPU load, because the container-level handler reacts on events in any place of the container, no matter if they interest us or not. But usually the load is negligible, so we don't take it into account.

Below you can see that we are only changing the color red to the target that is selected. **Beware of USING currentTarget**

``` HTML
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <style>
    .red {
      color: red;
    }
  </style>
  <body>
    <ul class="list">
      <li>first</li>
      <li>second</li>
      <li>third</li>
    </ul>

    <script>
      document.querySelector(".list").addEventListener("click", (e) => {
        e.target.classList.toggle('red')
      })
    </script>
  </body>
</html>
```

1. The method elem.closest(selector) returns the nearest ancestor that matches the selector. In our case we look for <td> on the way up from the source element.
2. If event.target is not inside any <td>, then the call returns null, and we don’t have to do anything.
3. In case of nested tables, event.target may be a <td> lying outside of the current table. So we check if that’s actually our table’s <td>.
4. And, if it’s so, then highlight it.
