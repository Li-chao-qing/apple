$(function(){

    $(window).resize(function(){
        var cliew=$(window).width();
        if(cliew<730){
            $('.header1').hide();
            $('.header2').show();
           //if(kai){
           //    $('.menu').hide();
           //}
        }else{
            $('.header1').show();
            $('.header2').hide();
            $('.boo li').show();

        }


    });
    $(window).resize();
    var kai=true;
    //$('.nav1').click(function(){
    //    //kai=(kai)?false:true;
    //    $('.menu').slideToggle(300);
    //
    //
    //});
    //$('.nav1').click(function(){
    //    $('.menu').css({'display':'block'});
    //    $('.menu span').css({'display':'block',transform:'rotateX(180deg)'});
    //    //for(var i=0;i<6;i++){
    //    $('.menu span:nth-child(1)').animate({
    //        '-webkit-transform': 'rotateX(0deg)'
    //            //'display':'block',
    //            //opacity:0,
    //            //transition:'transform 2s ease '
    //        },2000);
    //    //}
    //});





    $('.nav1').click(function(){
        if(kai){
            $('.menu').css({'display':'block'});
            $('.menu span').css('display','none');
            var i=0;
            clearInterval(timeid);
            var timeid= setInterval(function(){
                i++;
                if(i>6){clearInterval(timeid);return;}
                $('.menu span:nth-child('+i+')').css({
                    transform:'rotateX(180deg)',
                    'display':'block',
                    opacity:0,
                    transition:'transform 1s ease '

                });
                setTimeout(function(){
                    $('.menu span:nth-child('+i+')').css({
                        transform:'rotateX(0deg)',
                        opacity:1,
                        transformOrigin:'top'
                    });
                },i*5)
            },500);
            kai=false;
            //return false;
        }else{
            //alert(1);
            kai=true;
            var j=7;
            var x=0;
            var timeid1= setInterval(function(){
                j--;
                x++;
                if(j<1){clearInterval(timeid1);return;}
                $('.menu span:nth-child('+j+')').css({
                    //transform:'rotateX(180deg)',
                    //'display':'block',
                    //opacity:0,
                    transition:'transform 0.4s ease ',
                    transform:'rotateX(180deg)',transformOrigin:'top'

                });
                setTimeout(function(){
                    $('.menu span:nth-child('+j+')').css({
                        display:'none'
                        //transform:'translate(0,'+(-44*x)+'px)'


                    });
                    //alert(2);
                },200)
            },500);
        }


    })





    //$('.nav1').click(function(){
    //    if(kai){
    //        $('.menu').css({'display':'block'});
    //        $('.menu span').css('display','none');
    //        var i=0;
    //        clearInterval(timeid);
    //        var timeid= setInterval(function(){
    //            i++;
    //            if(i>6){clearInterval(timeid);return;}
    //            $('.menu span:nth-child('+i+')').css({
    //                transform:'rotateX(180deg)',
    //                'display':'block',
    //                opacity:0,
    //                transition:'transform 2s ease '
    //
    //            });
    //            setTimeout(function(){
    //                $('.menu span:nth-child('+i+')').css({
    //                    transform:'rotateX(0deg)',
    //                    opacity:1,
    //                    transformOrigin:'top'
    //                });
    //            },i*10)
    //        },700);
    //        kai=false;
    //        //return false;
    //    }else{
    //        //alert(1);
    //        kai=true;
    //        var j=7;
    //        var timeid1= setInterval(function(){
    //            j--;
    //            if(j<1){clearInterval(timeid1);return;}
    //            $('.menu span:nth-child('+j+')').css({
    //                //transform:'rotateX(180deg)',
    //                //'display':'block',
    //                //opacity:0,
    //                //transition:'transform 2s ease ',
    //                transform:'rotateX(180deg)',transformOrigin:'top'
    //
    //            });
    //            setTimeout(function(){
    //                $('.menu span:nth-child('+j+')').css({
    //                        display:'none'
    //                    //opacity:1,
    //
    //
    //                });
    //                //alert(2);
    //            },2000)
    //        },3000);
    //    }
    //
    //
    //})










    //$('.nav1').click(function(){
    //   $('.menu').css({
    //       'display':'block'
    //
    //   });
    //    $('.menu span').css('display','none');
    //    var i=1;
    //    $('.menu span:nth-child('+i+')').css({
    //        transform:'rotateX(90deg)',
    //        'display':'block',
    //        transition:'transform 1s ease'
    //
    //    });
    //
    //    setTimeout(function(){
    //        $('.menu span:nth-child('+i+')')[0].addEventListener('webkitTransitionEnd',function(){
    //            i++;
    //            $('.menu span:nth-child('+i+')').css({
    //                transform:'rotateX(90deg)',
    //                'display':'block',
    //                transition:'transform 1s ease'
    //
    //            });
    //            setTimeout(function(){
    //                $('.menu span:nth-child('+i+')').css({
    //                    transform:'rotateX(0deg)',
    //                    transformOrigin:'top'
    //                });
    //            },0)
    //
    //
    //        },false);
    //        //console.log($('.menu span:nth-child('+i+')')[0]);
    //        $('.menu span:nth-child('+i+')').css({
    //            transform:'rotateX(0deg)',
    //            transformOrigin:'top'
    //        });
    //    },0);
    //
    //
    //});




    $('.jia').each(function(){
        $(this).data('index',true);

    });
    $('.jia').click(function(){
        var x=$(this).data('index');
        if(x){
            $(this).parent().siblings().slideDown(300);
            //$(this).parent().siblings().css({'display':'block'});
            //$(this).parent().siblings().parent().css({'display':'block'});
            $(this).data('index',false);
        }else{
            $(this).data('index',true);
            $(this).parent().siblings().slideUp(300);
            //$(this).parent().siblings().css({'display':'none'});
        }

    });
    //$('.boo li:nth-child(1)').click(function(){
    //    $(this).parent().siblings().slideToggle(300);
    //});
    $('.bannerda').hover(function(){
        clearInterval(t);
    },function(){
        clearInterval(t);
        t=setInterval(move,2000);
    });
    //$('.x-dd').hover(function(){
    //    clearInterval(t);
    //},function(){
    //    t=setInterval(move,2000);
    //});
    $('.x-dd').click(function(){
        var index=$(this).index('.x-dd');
        num=index;

        $('.x-dd').removeClass('current');
        $('.x-dd').eq(num).addClass('current');
        $('.box').stop();
        $('.box').animate({'marginLeft':-num*100+'%'},1000);
        clearInterval(t);
        t=setInterval(move,2000);

    });
    var num=0;

    function move(){
        num++;
        if(num==$('.banner').length-1){
            //$('.box').finish();
            //$('.box').stop();
            $('.box').animate({'marginLeft':-num*100+'%'},500,function(){
                $('.box').css({'marginLeft':0});
            });
            //$('.x-dd').removeClass('current');
            //$('.x-dd').eq(0).addClass('current');
            num=0;
        }else{
            //if(num==$('.banner').length-1){
            //
            //}else{


            //}
            //$('.box').finish();
            //$('.box').stop();
            $('.box').animate({'marginLeft':-num*100+'%'},500);
        }
        $('.x-dd').removeClass('current');
        $('.x-dd').eq(num).addClass('current');

    }
    var t=setInterval(move,3000);

    //touch.config({ holdTime: 2000});
    //touch.on(document,'tap','',function(){
    //    alert(1);
    //});
    var margin;
    touch.on('.box','dragstart', function (e){
        margin=$('.box')[0].offsetLeft;
        //alert(margin);
    });
    touch.on('.box','dragend', function (e){
        console.log(Math.abs(e.x));
        if(Math.abs(e.x)>500|| e.factor<5){
            if(e.direction=='left'){
                num++;
                if(num==$('.banner').length-1){

                    $('.box').animate({'marginLeft':-num*100+'%'},500,function(){
                        $('.box').css({'marginLeft':0});
                    });

                    num=0;
                }else{


                    $('.box').animate({'marginLeft':-num*100+'%'},500);
                }
                $('.x-dd').removeClass('current');
                $('.x-dd').eq(num).addClass('current');
            }else if(e.direction=='right'){

                num--;
                if(num==-1){
                    //num=$('.banner').length-2;
                    //$('.box').finish();
                    //$('.box').css({'marginLeft':'-200%'});
                    //$('.box').animate({'marginLeft':-300+'%'},500);
                    num=0;
                    $('.box').animate({'marginLeft':-num*100+'%'},500);

                    return;

                }else{

                    //$('.box').finish();
                    $('.box').animate({'marginLeft':-num*100+'%'},500);
                }
                //$('.box').animate({'marginLeft':-num*100+'%'},500);
                $('.x-dd').removeClass('current');
                $('.x-dd').eq(num).addClass('current');
            }
        }else{
            $('.box').finish();
            $('.box').animate({'marginLeft':-num*100+'%'},500);


        }
    });
    touch.on('.box','drag', function (e){
        $('.box').css('marginLeft', margin+e.x);

    });
    $('.box').mousedown(function(e){
        e.preventDefault();
    });

});