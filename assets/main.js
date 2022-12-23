function shuffuleBtnEnableCheck() {
    let noValFlag = false;

    $('.name-text').on('change', function () {
        shuffuleBtnEnableCheck();
    });

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
    const total = content.length;
    content.each(function () {
        content.eq(Math.floor(Math.random() * total)).prependTo(container);
    });

    $('.browser-box input').each(function (i) {
        const $this = $(this);
        const val = $this.val();
        const index = i;

        $('.result-history-box').find('.history-box').eq(shuffuleNum).find('.history-browser p').eq(index).text(val);
    });
}

function _setName(shuffuleNum) {
    $('.name-box input').each(function (i) {
        const $this = $(this);
        const val = $this.val();
        const index = i;

        $('.result-history-box').find('.history-box').eq(shuffuleNum).find('.name-browser p').eq(index).text(val);
    })
}

function _setNum(headNum, shuffuleNum) {
    $('.name-box input').each(function (i) {
        $('.result-history-box').find('.history-box').eq(shuffuleNum).prev('p').text(`${headNum + 1}回目`);
    })
}

function displayMinus() {
    $('.display-minus').on('click', function () {
        const $this = $(this);
        const $this_parent = $this.closest('.display-text')
        const index = $('.display-text').index($this_parent)

        $this_parent.remove();
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