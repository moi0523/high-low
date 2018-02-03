let num;
let limit;
let randNum = Math.ceil(Math.random()*limit);
let $div;
let condition;

$(function() {
    $('#result').on("click", function() {
        num = $('input#num').val();
    })
});

$(function() {
    $('#level1').on({
        'click': function() {
            $('div#page1').attr('style', 'display:none');
            $('div#page2').attr('style', '');
            limit = $('#easy').data('limit');
            randNum = Math.ceil(Math.random()*limit);
            $div = $('<span>1 ~ 10사이의 숫자를 입력하세요</span>');
            $('#text').append($div);
        },
        'mouseenter': function() {
            $('#level1').css('background-color', 'lightblue');
        },
        'mouseleave': function() {
            $('#level1').css('background-color', '');
        }
    });
});

$(function() {
    $('#level2').on({
        'click': function() {
            $('div#page1').attr('style', 'display:none');
            $('div#page2').attr('style', '');
            limit = $('#normal').data('limit');
            randNum = Math.ceil(Math.random()*limit);
            $div = $('<span>1 ~ 100사이의 숫자를 입력하세요</span>');
            $('#text').append($div);
        },
        'mouseenter': function() {
            $('#level2').css('background-color', 'lightblue');
        },
        'mouseleave': function() {
            $('#level2').css('background-color', '');
        }
    });
});

$(function() {
    $('#level3').on({
        'click': function() {
            $('div#page1').attr('style', 'display:none');
            $('div#page2').attr('style', '');
            limit = $('#hard').data('limit');
            randNum = Math.ceil(Math.random()*limit);
            $div = $('<span>1 ~ 1000사이의 숫자를 입력하세요</span>');
            $('#text').append($div);
        },
        'mouseenter': function() {
            $('#level3').css('background-color', 'lightblue');
        },
        'mouseleave': function() {
            $('#level3').css('background-color', '');
        }
    })
});

$(function() {
    $('#result').on("click", function _click() {
        if (num == randNum) {
            $('div#page1').attr('style', 'display:none');
            $('div#page2').attr('style', 'display:none');
            $('div#page3').attr('style', '');
        } else if (num < randNum) {
            $('br').remove();
            $('.string').remove();
            $div = $('<span class="string">답보다 작습니다.</span><br>');
            $('#text').after($div);
        } else if (num > randNum) {
            $('br').remove();
            $('.string').remove();
            $div = $('<span class="string">답보다 큽니다.</span><br>');
            $('#text').after($div);
        }

        condition = num <= limit;
        if (num <= 0) {
            condition = false;
        }
        if (condition == false) {
            $('.string').remove();
            $('br').remove();
            $div = $('<span class="string" style="color:red;">1 ~ ' + limit + '까지 입니다.</span><br>');
            $('#text').after($div);
        }
        $('#num').val('');
    })
});

$(function() {
    $('#num').on("keyup", function() {
        if (event.keyCode === 13) {
            $('#result').click();
        }
    })
});