function AppViewModel() {

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

    var userList = new List('users', options);

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