$( "form#pay" ).submit(function( event ) {
    event.preventDefault();

    $.post(
        "ajax/pay.php", { barcode: $('#user-rfid').val()}
    ).done( function(data) {
        let mainText = $("#main-text");
        updateText(mainText, data);
        removeForm();
        animateBeer();
        reshowText(mainText);
        //refreshPage(7000);
    });
});

function scrollToAnchor(aid, element = null, url = null) {
    let aTag = $("section[id='"+ aid +"']");
    $('html,body').animate(
        {scrollTop: aTag.offset().top},
        {duration: 'slow',
                complete: function() {
                    (element && url) ? element.load(url) : false
                }
        });
}

$("#down").on( "click", function(e) {
    scrollToAnchor(
        'leaderboard-section',
        $("#leaderboard-section"),
        "/leaderboard.php"
    );
});
$("#up").on( "click", function(e) {
    scrollToAnchor('beer-section')
});

$( "#reset-consumption" ).on( "click", function(e) {
    e.preventDefault();
    $( "#reset-consumption" ).hide();
    $( "#reset-consumption-yes" ).show();
});

$( "#reset-consumption-yes" ).on( "click", function(e) {
    e.preventDefault();
    $.get(
        "ajax/reset-consumption.php",
    ).done( function(data) {
        let dataObj = JSON.parse(data);
        if(dataObj.status === 'failed') {
            $( "#reset-consumption-yes" ).text(data.message)
        } else {
            $( "#reset-consumption-yes" ).text('Done. Refreshing')
            refreshPage(2000);
        }
    });
});

$(".modal-toggle").on( "click", function(e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
});

$('#showInputSubmit').on('change', function() {
    $('.user-barcode').toggleClass('trans');
    $('.dev-element').toggleClass('hidden');
});

$('#showGenerateButton').on('change', function() {
    toggleGenerateButton();
});

$("#generate-btn").on( "click", function(e) {
    submitTestBarcode();
});

$("#add-human").on( "click", function(e) {
    $('.add-human').toggleClass('hidden');
});

$("#refresh-page").on( "click", function(e) {
    refreshPage(0);
});


$("#add-human-form").submit(function(e) {
    e.preventDefault();
    $.post(
        "ajax/add-human.php", {
            fname: $('input[name="f-name"]').val(),
            lname: $('input[name="l-name"]').val(),
            gender: $('select[name="gender"]').val(),
        }
    ).done( function(data) {
        let dataObj = JSON.parse(data);
        if(dataObj.status === 'failed') {
            $('.add-begin').text(data.message)
        } else {
            $('.add-begin').text('Added: Barcode is ' + dataObj.barcode)
        }

    });
})


function refreshPage(delay = 0)
{
    setTimeout(function() {
        location.reload();
    }, delay);
}

function submitTestBarcode()
{
    $("#user-barcode").val('0donpepe0000000');
    $("form#pay").submit();
    toggleGenerateButton();
}

function toggleGenerateButton()
{
    $('.generate-button').toggleClass('hidden');
}

function removeForm()
{
    $('form#pay').remove();
}

function animateBeer()
{
    $('.glass').addClass('glass-animation')
    $('.beer').addClass('beer-animation')
    $('.pipe').addClass('pipe-animation')
    $('.pipe-handle').addClass('pipe-handle-animation')
}

function updateText(mainText, data)
{
    let dataObj = JSON.parse(data);
    let text = 'Something went wrong - ' + dataObj.message;
    if (dataObj.status === 'success') {
        text = dataObj.firstName + ', you are number ' + dataObj.leaderboard + ' in the leaderboard.';
    }

    mainText.fadeTo( "slow" , 0, function () {
        mainText.text(text);
        mainText.addClass('main-title-post')
    });

    $('#scan-arrow-person').fadeTo( "slow" , 0);
}

function reshowText(mainText)
{
    mainText.delay(2000).fadeTo( "slow" , 1);
}
