// JavaScript Document
'use strict';

$(document).ready(function() {
    // Sidebar menu
    setSideMenu();
    function setSideMenu() {
        $('.menu > li').each(function() {
            if ($(this).find('li').length > 0) {
                $(this).find('> a').append('<i class="fas fa-angle-right arrow"></i>');
            }
        });
        
        $('.menu > li > a').on('click', function() {
            if ($(this).parent().hasClass('open')) {
                $(this).parent().find('> ul').slideUp(200);
                $(this).parent().removeClass('open');
            } else {
                $(this).parent().find('> ul').slideDown(200);
                $(this).parent().addClass('open');
            }
        }); // end of click
        
        var timerId = '';
        $('.sidebar-menu').on('mouseenter', function() {
            clearTimeout(timerId);
        }).on('mouseleave', function() {
            timerId = setTimeout(function() {
                $('.menu > li > ul').slideUp(200);
                $('.menu > li').removeClass('open');
            }, 500);

        }); // end of mouseleave
    } // end of sideMenu

    // Datepicker (달력 적용)
    $('.datepicker').datepicker();
    
    // Form UI : 첨부파일 첨부 시 input에 파일명 추가
    addFileName();
    function addFileName() {
        $('.b-file').on('change', function() {
            const fileName = $(this).val();
            $(this).siblings('.b-input').val(fileName); 
        })
    }  // end of addFileName
})// ready
