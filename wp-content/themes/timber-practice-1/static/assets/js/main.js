$(document).ready(function() {   

	/* mobile nav */
	$('.mobilenav-trigger').click(function(e) {
	    e.preventDefault();
	    $(this).toggleClass('active');
	    $('.nav-styleguide').toggleClass('active');
	});

	$('.nav-styleguide a').click(function() {
	    $('.mobilenav-trigger, .nav-styleguide').removeClass('active');
	});




    /* Multi-Toggle Navigation: http://codepen.io/bradfrost/pen/qwJvF */
    var $menu = $('#menu'),
        $menulink = $('.menu-link'),
        $menuTrigger = $('.has-subnav > a');

    $menulink.click(function(e) {
        e.preventDefault();
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
    });

    $menuTrigger.click(function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass('active').next('ul').toggleClass('active');
    });
        



    /* Tabs pattern */
    $('.tabs a').click(function(e) {
	    e.preventDefault();
        $('.tabs a').parent().removeClass('active');
        $(this).parent().addClass('active');
    });




    /* Modal pattern */
    $('.modal-trigger').click(function(e) {
        e.preventDefault();
        $(this).siblings().toggleClass('active');
    });
    $('.modal-close').click(function(e) {
        e.preventDefault();
        $('.modal-background').removeClass('active');
    });



	/* Topics toggle */
    $('.toggle-trigger').each(function() {
        var tis = $(this), state = false, toggleTarget = tis.next('.toggle-target').slideUp();
        tis.click(function() {
            state = !state;
            toggleTarget.slideToggle(state);
            tis.toggleClass('active',state);
        });
        expand.click(function() {
            toggleTarget.slideDown();
            $('.toggle-trigger').addClass('active');
        });
        collapse.click(function() {
            toggleTarget.slideUp();
            $('.toggle-trigger').removeClass('active');
        });
    });

});