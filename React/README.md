# React Lifecycle Methods - how and when to use them

## componentWillMount

It's a little bit of a dud because there is no component to play with yet, so you can't do anything involving the DOM. Also, nothing has changed since your component's constructor was called, which is where you should be setting up your component's default configuration away.

Any setup that can only be done at runtime --namely, connecting to external API's. For example, if you use Firebase for your app, you'll need to get that set up as your app is first mounting.

Most of your components should NOT use componentWillMount. You may see people using componentWillMount to start AJAX calls to load data for your components. Don't do this!!!

__Most Common Use Case:__ App configuration in your root component.

__Can call setState:__ Don't. Use default state instead.
