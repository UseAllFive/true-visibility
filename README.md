true-visibility 0.0.6
=====================

Checks if a DOM element is truly visible


Installation
------------

```
npm i true-visibility -D
```


Usage
-----

isVisible accepts elements and selector strings

```js
var bodyElement = document.getElementById( 'body' );
isVisible( bodyElement ); // true

isVisible( 'body' ); // true
```
