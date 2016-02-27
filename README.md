true-visibility 0.1.0
=====================

Checks if a DOM element is truly visible


Installation
------------

```
    npm i true-visibility -D
```


Usage
-----

isVisible accepts elements and selector strings.

true-visibility is UMD compatible. Depending on your environment, you can use true-visibility as follows.

```js
    requirejs( [ 'true-visibility' ], function( isVisible )
    {
        isVisible( 'body' ) // true
    } );
```

or

```js
    let isVisible = require( 'true-visibility'' );
    isVisible( 'body' ) // true
```

or

```js
    var bodyElement = document.getElementById( 'body' );
    isVisible( bodyElement ); // true
```


This project adheres to the [Contributor Covenant](http://contributor-covenant.org/). By participating, you are expected to honor this code.

[true-visibility - Code of Conduct](https://github.com/mousemke/true-visibility/blob/master/CODE_OF_CONDUCT.md)

Need to report something? [mkem@knoblau.ch](mailto:mkem@knoblau.ch)


Changes
-------

+ 0.1.0
    + UMD fixed
    + CoC added
    + Readme is slightly more useful
