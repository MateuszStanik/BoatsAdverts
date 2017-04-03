function AppViewModel() {

    $('#list').click(function (event) { event.preventDefault(); $('#products .item').addClass('list-group-item'); });
    $('#grid').click(function (event) { event.preventDefault(); $('#products .item').removeClass('list-group-item'); $('#products .item').addClass('grid-group-item'); });

    $('#selectPrice').select2({
        placeholder: "Cena od - do"
    });
    $('#selectLenght').select2({
        placeholder: "Długość od - do"
    });
    $('#selectBoatType').select2({
        placeholder: "Typ kadłuba"
    });
    $('#selectMotorBoatPrice').select2({
        placeholder: "Cena od - do"
    });
    $('#selectMotorBoatLenght').select2({
        placeholder: "Długość od - do"
    });
    $('#selectMotorBoatPower').select2({
        placeholder: "Moc silnika"
    });
    var options = {
        valueNames: ['name', 'price']
    };
    var menu_ul = $('.product-menu > li > ul'),
	           menu_a = $('.product-menu > li > a');

    menu_ul.hide();

    menu_a.click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            menu_a.removeClass('active');
            menu_ul.filter(':visible').slideUp('normal');
            $(this).addClass('active').next().stop(true, true).slideDown('normal');
        } else {
            $(this).removeClass('active');
            $(this).next().stop(true, true).slideUp('normal');
        }
    });
    
    $('.form').find('input, textarea').on('keyup blur focus', function (e) {

        var $this = $(this),
            label = $this.prev('label');

        if (e.type === 'keyup') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.removeClass('highlight');
            }
        } else if (e.type === 'focus') {

            if ($this.val() === '') {
                label.removeClass('highlight');
            }
            else if ($this.val() !== '') {
                label.addClass('highlight');
            }
        }

    });

    $('.tab a').on('click', function (e) {

        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        target = $(this).attr('href');

        $('.tab-content > div').not(target).hide();

        $(target).fadeIn(600);

    });


}