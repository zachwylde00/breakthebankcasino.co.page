$(document).ready(function() {

    /*******************************************************************************
     *                                                                       *******
     *                                                                       *******
     *                                                                       *******
     *         CROPING AND UPLOADING IMAGE USING FILE API JQUERY             *******
     *                                                                       *******
     *                                                                       *******
     *                                                                       *******
     ******************************************************************************/

    $('#userpic1').fileapi({
        url: SITE_URL + 'advertise/ads/uploadImage',
        accept: 'image/*',
        imageSize: {minWidth: 200, minHeight: 200},
        elements: {
            active: {show: '.js-upload', hide: '.js-browse'},
            preview: {
                el: '.js-preview',
                width: 200,
                height: 200
            },
            progress: '.js-progress'
        },
        onSelect: function(evt, ui) {
            var file = ui.files[0];
            if (!FileAPI.support.transform) {
                alert('مرورگر شما فلش را پشتیبانی نمی کند');
            } else if (file) {
                $('#popup').modal({
                    closeOnEsc: true,
                    closeOnOverlayClick: true,
                    onOpen: function(overlay) {
                        $(overlay).on('click', '.js-upload', function() {
                            $.modal().close();
                            $('#userpic1').fileapi('upload');
                        });
                        $('.js-img', overlay).cropper({
                            file: file,
                            bgColor: '#fff',
                            maxSize: [$(window).width() - 100, $(window).height() - 100],
                            minSize: [200, 200],
                            selection: '90%',
                            aspectRatio: 4 / 3,
                            onSelect: function(coords) {
                                $('#userpic1').fileapi('crop', file, coords);
                            }
                        });
                    }
                }).open();
            }
        },
        onFileComplete: function(evt, uiEvt) {
            var error = uiEvt.error;
            var result = uiEvt.result; // server response
            $('input[name="picHidden"]').val(result.name);
        }
    });
    $('#userpic2').fileapi({
        url: SITE_URL + 'advertise/ads/uploadImage/2',
        accept: 'image/*',
        imageSize: {minWidth: 200, minHeight: 200},
        elements: {
            active: {show: '.js-upload', hide: '.js-browse'},
            preview: {
                el: '.js-preview',
                width: 200,
                height: 200
            },
            progress: '.js-progress'
        },
        onSelect: function(evt, ui) {
            var file = ui.files[0];
            if (!FileAPI.support.transform) {
                alert('مرورگر شما فلش را پشتیبانی نمی کند');
            } else if (file) {
                $('#popup').modal({
                    closeOnEsc: true,
                    closeOnOverlayClick: true,
                    onOpen: function(overlay) {
                        $(overlay).on('click', '.js-upload', function() {
                            $.modal().close();
                            $('#userpic2').fileapi('upload');
                        });
                        $('.js-img', overlay).cropper({
                            file: file,
                            bgColor: '#fff',
                            maxSize: [$(window).width() - 100, $(window).height() - 100],
                            minSize: [200, 200],
                            selection: '90%',
                            aspectRatio: 4 / 3,
                            onSelect: function(coords) {
                                $('#userpic2').fileapi('crop', file, coords);
                            }
                        });
                    }
                }).open();
            }
        },
        onFileComplete: function(evt, uiEvt) {
            var error = uiEvt.error;
            var result = uiEvt.result; // server response
            $('input[name="picHidden2"]').val(result.name);
        }
    });
    $('#userpic3').fileapi({
        url: SITE_URL + 'advertise/ads/uploadImage/3',
        accept: 'image/*',
        imageSize: {minWidth: 200, minHeight: 200},
        elements: {
            active: {show: '.js-upload', hide: '.js-browse'},
            preview: {
                el: '.js-preview',
                width: 200,
                height: 200
            },
            progress: '.js-progress'
        },
        onSelect: function(evt, ui) {
            var file = ui.files[0];
            if (!FileAPI.support.transform) {
                alert('مرورگر شما فلش را پشتیبانی نمی کند');
            } else if (file) {
                $('#popup').modal({
                    closeOnEsc: true,
                    closeOnOverlayClick: true,
                    onOpen: function(overlay) {
                        $(overlay).on('click', '.js-upload', function() {
                            $.modal().close();
                            $('#userpic3').fileapi('upload');
                        });
                        $('.js-img', overlay).cropper({
                            file: file,
                            bgColor: '#fff',
                            maxSize: [$(window).width() - 100, $(window).height() - 100],
                            minSize: [200, 200],
                            selection: '90%',
                            aspectRatio: 4 / 3,
                            onSelect: function(coords) {
                                $('#userpic3').fileapi('crop', file, coords);
                            }
                        });
                    }
                }).open();
            }
        },
        onFileComplete: function(evt, uiEvt) {
            var error = uiEvt.error;
            var result = uiEvt.result; // server response
            $('input[name="picHidden3"]').val(result.name);
        }
    });
    /*******************************************************************************
     *                                                                       *******
     *                                                                       *******
     *                                                                       *******
     *      END CROPING AND UPLOADING IMAGE USING FILE API JQUERY            *******
     *                                                                       *******
     *                                                                       *******
     *                                                                       *******
     ******************************************************************************/



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