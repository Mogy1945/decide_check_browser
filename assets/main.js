function shuffleContent(container, shuffuleNum) {
    const content = container.find("> *");
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

function setName(shuffuleNum) {
    $('.name-box input').each(function (i) {
        const $this = $(this);
        const val = $this.val();
        const index = i;

        $('.result-history-box').find('.history-box').eq(shuffuleNum).find('.name-browser p').eq(index).text(val);
    })
}

function setNum(headNum, shuffuleNum) {
    $('.name-box input').each(function (i) {
        $('.result-history-box').find('.history-box').eq(shuffuleNum).prev('p').text(`${headNum + 1}回目`);
        console.log(1)

    })
}

//実行
$(function () {
    let shuffuleNum = -1;
    let headNum = -1;
    $(".shuffle-btn").on('click', function () {
        if (shuffuleNum > 3) {
            shuffuleNum = -1;
        }
        shuffuleNum++
        headNum++

        setNum(headNum, shuffuleNum);
        setName(shuffuleNum);
        shuffleContent($('.browser-box'), shuffuleNum);
    });
});