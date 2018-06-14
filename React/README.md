# React Lifecycle Methods - how and when to use them

Ideally, we wouldn't use lifecycle methods and all the rendering issues would be controlled through the state and props. However, sometimes you need a little more control. 

## componentWillMount

It's a little bit of a dud because there is no component to play with yet, so you can't do anything involving the DOM. Also, nothing has changed since your component's constructor was called, which is where you should be setting up your component's default configuration away.

Any setup that can only be done at runtime --namely, connecting to external API's. For example, if you use Firebase for your app, you'll need to get that set up as your app is first mounting.

Most of your components should NOT use componentWillMount. You may see people using componentWillMount to start AJAX calls to load data for your components. Don't do this!!!

__Most Common Use Case:__ App configuration in your root component.

__Can call setState:__ Don't. Use default state instead.

## componentDidMount

__HERE__ is where you __load your data__. As from Tyler McGinnis "You can’t guarantee the AJAX request won’t resolve before the component mounts. If it did, that would mean that you’d be trying to setState on an unmounted component, which not only won’t work, but React will yell at you for. Doing AJAX in componentDidMount will guarantee that there’s a component to update."

There are some fun things that you couldn't do when there was no component to play with:.
1. Draw on a <canvas> element that you just rendered
2. Initialize a masonry grid layout from a collection of elements
3. Add event listeners.

__Most Common Use Case:__ Starting AJAX calls to load in data for your component.

__Can call setState:__ YES.

## componentWillReceiveProps

Before our component does anything with the new props, componentWillReceiveProps is called, with the next props as the argument. One thing to note is that componentWillReceiveProps is not called with the initial render. There are no old props, and thus, it won't be called.

``` JavaScript
componentWillReceiveProps(nextProps) {
  if (parseInt(nextProps.modelId, 10) !== parseInt(this.props.modelId, 10)) {
    this.setState({ postsLoaded: false })
    this.contentLoaded = 0;
  }
}
```

Here is wha

__Most Common Use Case:__ Acting on particular prop changes to trigger state transitions.

__Can call setState:__ YES.

## shouldComponentUpdate

This should always return a boolean - an answer to the question of, "should I re-render?" The default is always returns true. However, if you're worried about wasted renders and other nonsense-- shouldComponentUpdate is an awesome place to improve performance. Use this with caution because if you forget about it, your React component will not update normally.

``` JavaScript
shouldComponentUpdate(nextProps, nextState) {
  return this.props.engagement !== nextProps.engagement
    || nextState.input !== this.state.input
}
```

__Most Common Use Case:__ Controlling exactly when your component will re-render.

__Can call setState:__ No.

## componentWillUpdate

Very similar to componentWillReceiveProps, but you are not allowed to call `this.setState`. If you were using shouldComponentUpdate AND needed to do something when props change, componentWillUpdate makes sense. However, it is not going to give a lot of additional utility.

__Most Common Use Case:__ Used instead of componentWillReceiveProps on a component that also has shouldComponentUpdate (but no access to previous props)

__Can call setState:__ No.

## componentDidUpdate

`componentDidUpdate` can do the same stuff as `componentDidMount`. We can make changes after the component updates.

__Most Common Use Case:__ Updating the DOM in response to prop or state changes.

__Can call setState:__ Yes.

## componentWillUnmount

This is any last minute requests before the component goes away. Here we can cancel any outgoing network requests, or remove all event listeners associated with the component. Basically, clean up anything to do that solely involves the component in questions.

__Most Common Use Case:__ Cleaning up any leftover debris from your component.

__Can call setState:__ No.
