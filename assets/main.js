function shuffuleBtnEnableCheck() {
    let noValFlag = false;

    $('.name-text').on('change', shuffuleBtnEnableCheck);

    $('.name-text:visible').each(function () {
        const $this = $(this);
        const $input = $this.find('input');
        const val = $input.val();

        if (val === "") {
            noValFlag = true;
        }
    });
    noValFlag ? $('.shuffle-btn').addClass('disabled') : $('.shuffle-btn').removeClass('disabled');
}

function shuffuleControl() {
    let shuffuleNum = -1;
    let headNum = -1;
    $(".shuffle-btn").on('click', function () {
        if (shuffuleNum > 3) {
            shuffuleNum = -1;
        }
        shuffuleNum++
        headNum++

        _setNum(headNum, shuffuleNum);
        _setName(shuffuleNum);
        _shuffleContent($('.browser-box'), shuffuleNum);

        shuffuleBtnEnableCheck();
    });
}

function _shuffleContent(container, shuffuleNum) {
    const content = container.find("> *:not(.off)");
    content.sort(() => Math.random() - 0.5).prependTo(container);

    $('.browser-box input').each((i, element) => {
        const val = $(element).val();
        $('.result-history-box .history-box').eq(shuffuleNum).find('.history-browser p').eq(i).text(val);
    });
}

function _setName(shuffuleNum) {
    $('.name-box input').each((i, element) => {
        const val = $(element).val();
        $('.result-history-box .history-box').eq(shuffuleNum).find('.name-browser p').eq(i).text(val);
    });
}

function _setNum(headNum, shuffuleNum) {
    $('.name-box input').each(function (i) {
        $('.result-history-box').find('.history-box').eq(shuffuleNum).prev('p').text(`${headNum + 1}回目`);
    })
}

function displayMinus() {
    $('.display-minus').on('click', function () {
        const $displayText = $(this).closest('.display-text');
        const index = $('.display-text').index($displayText);

        $displayText.remove();
        $('.browser-text').eq(index).remove();
        $('.name-text').eq(index).remove();

        shuffuleBtnEnableCheck();
    });
}

//実行
$(function () {
    shuffuleBtnEnableCheck();
    shuffuleControl();
    displayMinus();
});