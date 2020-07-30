// JS CSS Overwrites

<script type="text/javascript">
    /* Function to add style element */
    function addStyle(styles) {

        /* Create style document */
        var css = document.createElement('style');
        css.type = 'text/css';

        if (css.styleSheet)
            css.styleSheet.cssText = styles;
        else
            css.appendChild(document.createTextNode(styles));

        /* Append style to the tag name */
        document.getElementsByTagName("head")[0].appendChild(css);
    }

    /* Set the style */
    var styles = ' .section li.snap-activity.modtype_quiz { border-top-color: pink } ';
    styles += ' * { font-family: monospace !important} ';
    styles += ' .chapters li:hover::before { background-image: url(https://media.giphy.com/media/LlFhIhRDZiDLfIwE9L/giphy.gif); background-size: 20px 22px; display: inline-block; float: left; width: 20px; height: 22px; margin-left: -25px; content:""; } ';
    styles += ' .section li.snap-activity.modtype_hsuforum { border-top-color: brown } .hsuforum a.activityicon { display: block;-moz-box-sizing: border-box;box-sizing: border-box;background: url(http://akamaicovers.oreilly.com/images/9780596517748/cat.gif) no-repeat; background-size: cover; padding-left: 50px}';

    /* Function call */
    window.onload = function() {
        addStyle(styles)
    };
</script>


//JS Progress Star Exchange

<script type="text/javascript">
    // Iterate all elements and replace with stars
    Array.from(document.querySelectorAll('small')).forEach((x) => {
        [n, k] = x.innerHTML.replace('Progress: ', '').split('/');
        text = '';
        for (let i = 0; i < n; i++) text += '★';
        for (let i = 0; i < k - n; i++) text += '☆';

        x.innerHTML = text;


    });
</script>

// Just load external CSS file
<script>
    // Create new link Element
    var link = document.createElement('link');

    // set the attributes for link element
    link.rel = 'stylesheet';

    link.type = 'text/css';

    link.href = 'https://codepen.io/Media-Ed-Online/pen/pojrdjw.css';

    // Get HTML head element to append
    // link element to it
    document.getElementsByTagName('HEAD')[0].appendChild(link);
</script>
