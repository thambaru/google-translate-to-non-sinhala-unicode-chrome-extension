/**
 * Google Translator to Sinhala Non-Unicode Text
 *
 * @author Thambaru Wijesekara
 */
chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            // ----------------------------------------------------------
            // This part of the script triggers when page is done loading
            // ----------------------------------------------------------

            drawElements();
            var txtbox = $('#gttb-cpy-txt-input');

            $('body').on('click', '.tlid-copy-translation-button.copybutton', function () {
                if (!$('#gttb-cbx').is(':checked'))
                    return;

                setTimeout(function () {
                    txtbox.val('');
                    txtbox.show().focus();
                    document.execCommand('paste');
                    txtbox.val(convertText(txtbox.val()));
                    txtbox.select();
                    document.execCommand('copy');
                    txtbox.hide();
                }, 500);
            });
        }
    }, 10);
});

function drawElements() {
    $('.tlid-input-button-container.focus-wrapper').append('<input type="checkbox" id="gttb-cbx" class="cbx hidden"/>' +
            '<label for="gttb-cbx" class="lbl"></label><input id="gttb-cpy-txt-input" style="display:none;">');
}