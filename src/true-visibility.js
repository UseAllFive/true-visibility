/**
 * ## isVisible
 *
 * @author Jason Farrell (http://useallfive.com/)
 * @author Mouse Braun (mouse@knoblau.ch)
 *
 * Checks if a DOM element is truly visible.
 */
var isVisible = function( _el )
{
    'use strict';

    var VISIBLE_PADDING = 2;

    /*
     * allows selector strings
     */
    if ( typeof _el === 'string' )
    {
        _el = document.querySelector( _el );
    }

    /**
     * ## inDocument
     *
     * checks if an element is in the document
     *
     * @param {DOMElement} element element to check
     *
     * @return {Boolean} in document or not
     */
    var _inDocument = function( element )
    {
        while ( element = element.parentNode )
        {
            console.log( )
            if ( element === document )
            {
                return true;
            }
        }
        return false;
    };

    /**
     * ## _isVisible
     *
     * Checks if a DOM element is visible. Takes into
     * consideration its parents and overflow.
     *
     * @param {DOMElement} el the DOM element to check if is visible
     * @param {Number} t Top corner position number
     * @param {Number} r Right corner position number
     * @param {Number} b Bottom corner position number
     * @param {Number} l Left corner position number
     * @param {Number} w Element width number
     * @param {Number} h Element height number
     *
     * @return _Boolean_ [description]
     */
    var _isVisible = function( el, t, r, b, l, w, h )
    {
        var style = getComputedStyle( el );

        if ( style.opacity === '0' || style.display === 'none' ||
            style.visibility === 'hidden' )
        {
            return false;
        }

        var p = el.parentNode;

        if ( p )
        {
            if ( p === document )
            {
                return true;
            }

            var pStyle      = getComputedStyle( p );
            var pOverflow   = pStyle.overflow;

            /**
             * check if the target element is to the right, left, under, or
             * above it's parent
             */
            if ( pOverflow === 'hidden' || pOverflow === 'scroll' )
            {
                if ( l + VISIBLE_PADDING > p.offsetWidth + p.scrollLeft ||
                    l + w - VISIBLE_PADDING < p.scrollLeft ||
                    t + VISIBLE_PADDING > p.offsetHeight + p.scrollTop ||
                    t + h - VISIBLE_PADDING < p.scrollTop )
                {
                    return false;
                }
            }

            if ( p === el.offsetParent )
            {
                l += p.offsetLeft;
                t += p.offsetTop;
            }

            return _isVisible( p, t, r, b, l, w, h );
        }

        return true;
    };

    /*
     * only check once.  it's parents aren't going to be any more or less in
     * the document
     */
    if ( !_el || !_inDocument( _el ) )
    {
        return false;
    }

    var t = _el.offsetTop;
    var l = _el.offsetLeft;
    var b = t + _el.offsetHeight;
    var r = l + _el.offsetWidth;
    var w = _el.offsetWidth;
    var h = _el.offsetHeight;

    return _isVisible( _el, t, r, b, l, w, h );
};

if ( typeof module !== 'undefined' )
{
    module.exports = isVisible;
}
else
{
    window.isVisible;
}
