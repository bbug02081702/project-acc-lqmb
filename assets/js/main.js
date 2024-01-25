$(document).ready(function() {
    let background_image = 1;
    let div_suggest_margin = -99999;

    function change_background_image() {
        background_image = (background_image < 4) ? background_image + 1 : 1;
        $('.top_background .image').fadeOut(1000);
        $('.top_background .image.image_' + background_image).fadeIn(1000);
    }

    function scroll_div(target) {
        const block_width = 210;
        const div_width = $('.category').width();
        const num_block = $('.cg_module .cg_item').length;
        const max_block = Math.floor(div_width / block_width);

        $('body #home_content.homepage .category .cg_module').css('width', num_block * block_width + 'px');

        if (num_block <= max_block) {
            $('.category .scroll').hide();
        } else {
            $('.category .scroll').show();
            if (target === 'right') {
                div_suggest_margin = (div_suggest_margin === -10) ? div_width - (((max_block + 1) * block_width) - 10) : div_suggest_margin - block_width;
                if (div_suggest_margin <= 10 - (((num_block + 1) * block_width) - div_width)) {
                    div_suggest_margin = -10;
                }
            } else if (target === 'left') {
                div_suggest_margin = -10;
            }
            $('.cg_module').css('margin-left', div_suggest_margin + 'px');
        }
    }

    function reload_all() {
        
    }

    $('.left').click(function() {
        scroll_div('left');
    });

    $('.right').click(function() {
        scroll_div('right');
    });
    
    setInterval(() => {
        change_background_image();
        scroll_div('right');
    }, 10000);

    scroll_div('right');
});
