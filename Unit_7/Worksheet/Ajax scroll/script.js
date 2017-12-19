$(document).ready(function() {
    var win = $(window);

    // Each time the user scrolls
    win.scroll(function() {
        // End of the document reached?
        var bool = false;
        if ($(document).height() - win.height() <= win.scrollTop() + 10 && bool == false) {
            $('#loading').show();
            bool = true;
            $.ajax({
                url: 'texto.txt',
                dataType: 'html',
                success: function(html) {
                    $('#posts').append(html);
                    $('#loading').hide();
                    bool = false;
                }
            });
        }
    });
});