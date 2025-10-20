// Animation on tooltip
function animationOut(element) {
    element.setAttribute("style", "display:none");
}

// Copy to clipboard function
$(document).ready(function () {
    var clipInit = false;

    console.log("function launched")

    $('code').each(function () {
        var code = $(this),
            text = code.text();

        // Verify if code is a blockcode or line code
        if (code.parent().get(0).tagName == "PRE") {

            if (text.length > 5) {
                if (!clipInit) {
                    var text, clip = new ClipboardJS('.copy-to-clipboard', {
                        text: function (trigger) {
                            // text = $(trigger).prev('code').text();
                            text = $(trigger).prev('pre').text();
                            // console.log(trigger);
                            return text.replace(/^\$>\s/gm, '');
                        }
                    });

                    clip.on('success', function (e) {
                        e.clearSelection();
                        $(e.trigger).after('<span class="tooltipped" onmouseout="animationOut(this)">Copied !</span>');
                    });
                    clipInit = true;
                }

                // Modified version of code
                code.parent().after('<span class="copy-to-clipboard" title="Copy to clipboard" />');
            }
        }
    });
});