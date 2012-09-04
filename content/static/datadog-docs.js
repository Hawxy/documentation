$(function () {

    $('.lang-tab').click(function (e) {
        var el = $(this);
        var lang = el.attr('lang');
        $('.' + lang + '-lang-tab').tab('show');
    });

    $('.lang-btn').click(function (e) {

        var el = $(this);

        // Highlight the active button.
        $('.lang-btn').removeClass('active');
        el.addClass('active');

        // Show this language's code blocks.
        var lang = el.attr('lang');
        $('.code-block').hide();
        $('.code-block-' + lang).fadeIn();
    });

});
