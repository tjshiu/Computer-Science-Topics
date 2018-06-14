# React Lifecycle Methods - how and when to use them

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
