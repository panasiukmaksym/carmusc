$(function(){

    $('.slider .left-button').on('click', function(){

        var oneCard = $($('.slider__card img')[0]).attr('src');
        var twoCard = $($('.slider__card img')[1]).attr('src');
        var threeCard = $($('.slider__card img')[2]).attr('src');
        var arrCardSrc = [ oneCard, twoCard, threeCard ];
        for (  var i = 0; i < 3; i++ ) {
            if ( arrCardSrc[i][13] == '1' ) {
                arrCardSrc[i] = "images/slider2.png";
            } else if ( arrCardSrc[i][13] == '2' ) {
                arrCardSrc[i] = "images/slider3.png";
            } else if ( arrCardSrc[i][13] == '3' ) {
                arrCardSrc[i] = "images/slider1.png";
            }
        }

        $($('.slider__card img')[0]).attr('src', arrCardSrc[0]);
        $($('.slider__card img')[1]).attr('src', arrCardSrc[1]);
        $($('.slider__card img')[2]).attr('src', arrCardSrc[2]);
    });

    $('.slider .right-button').on('click', function(){

        var oneCard = $($('.slider__card img')[0]).attr('src');
        var twoCard = $($('.slider__card img')[1]).attr('src');
        var threeCard = $($('.slider__card img')[2]).attr('src');
        var arrCardSrc = [ oneCard, twoCard, threeCard ];
        for (  var i = 0; i < 3; i++ ) {
            if ( arrCardSrc[i][13] == '1' ) {
                arrCardSrc[i] = "images/slider3.png";
            } else if ( arrCardSrc[i][13] == '2' ) {
                arrCardSrc[i] = "images/slider1.png";
            } else if ( arrCardSrc[i][13] == '3' ) {
                arrCardSrc[i] = "images/slider2.png";
            }
        }
        $($('.slider__card img')[0]).attr('src', arrCardSrc[0]);
        $($('.slider__card img')[1]).attr('src', arrCardSrc[1]);
        $($('.slider__card img')[2]).attr('src', arrCardSrc[2]);

    });

    $('.advantages .left-button').on('click', function () {
        var oneCard = $($('.advantages__image-car img')).attr('src');
        if ( oneCard[7] == 'b' ) {
            $('.advantages__image-car img').attr('src', 'images/yellow-car.png');
        } else {
            $('.advantages__image-car img').attr('src', 'images/blue-car.png');
        }
    });

    $('.advantages .right-button').on('click', function () {
        var oneCard = $($('.advantages__image-car img')).attr('src');
        if ( oneCard[7] == 'b' ) {
            $('.advantages__image-car img').attr('src', 'images/yellow-car.png');
        } else {
            $('.advantages__image-car img').attr('src', 'images/blue-car.png');
        }
    });

    $('.advantages-two .left-button').on('click', function () {
        var oneCard = $($('.advantages-two__image-car img')).attr('src');
        if ( oneCard[7] == 'b' ) {
            $('.advantages-two__image-car img').attr('src', 'images/yellow-car.png');
        } else {
            $('.advantages-two__image-car img').attr('src', 'images/blue-car.png');
        }
    });

    $('.advantages-two .right-button').on('click', function () {
        var oneCard = $($('.advantages-two__image-car img')).attr('src');
        if ( oneCard[7] == 'b' ) {
            $('.advantages-two__image-car img').attr('src', 'images/yellow-car.png');
        } else {
            $('.advantages-two__image-car img').attr('src', 'images/blue-car.png');
        }
    });

    $($('.services__btn')[0]).on('click', function(){
        $($('.services__btn')[1]).css('background', 'none');
        $($('.services__btn')[0]).css('background', '#DB3138');
    });

    $($('.services__btn')[1]).on('click', function(){
        $($('.services__btn')[0]).css('background', 'none');
        $($('.services__btn')[1]).css('background', '#DB3138');
    });
});