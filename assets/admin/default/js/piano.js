$(document).ready(function() {

    /**
     * 
     * new ads page js for fields
     * 
     * ***/
////////////// انتخاب دسته بندی آگهی  اطلاعات تکمیلی برای پیانو
    $('#category_piano').on('change', function() {

        var category_id = $(this).val();
        if (category_id == 1) {
            $('#digital').hide();
            $('#acoustic').fadeIn();
        } else if (category_id == 2) {
            $('#acoustic').hide();
            $('#digital').fadeIn();
        } else {
            $('#acoustic').fadeOut();
            $('#digital').fadeOut();
        }
    }).trigger('change');
    /*
     * نوع پیانو
     */
    $('#ac_piano_type_select').on('change', function() {
        var select_val = $(this).val();
        if (select_val == 'دیواری') {
            $('#ac_piano_type_child label').html('ارتفاع');
            $('#ac_piano_type_child input').attr('name', 'ac_height');
        } else if (select_val == 'گرند') {
            $('#ac_piano_type_child label').html('قطر');
            $('#ac_piano_type_child input').attr('name', 'ac_diameter');
        }

    }).trigger('change');

    $('#piano_type_select').on('change', function() {
        var select_val = $(this).val();
        if (select_val == 'دیواری') {
            $('#piano_type_child label').html('ارتفاع');
            $('#piano_type_child input').attr('name', 'height');
        } else if (select_val == 'گرند') {
            $('#piano_type_child label').html('قطر');
            $('#piano_type_child input').attr('name', 'diameter');
        }
    }).trigger('change');


});