$(document).ready(function() {
    if ($(window).width() < 1220) {
        $('body').addClass('sidebar_main_active');
    }
    $('#dt_default').dataTable({
        "language": {
            "sProcessing": "درحال پردازش...",
            "sLengthMenu": "نمایش محتویات _MENU_",
            "sZeroRecords": "موردی یافت نشد",
            "sInfo": "نمایش _START_ تا _END_ از مجموع _TOTAL_ مورد",
            "sInfoEmpty": "تهی",
            "sInfoFiltered": "(فیلتر شده از مجموع _MAX_ مورد)",
            "sInfoPostFix": "",
            "sSearch": "جستجو:",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "ابتدا",
                "sPrevious": "قبلی",
                "sNext": "بعدی",
                "sLast": "انتها"
            }
        },
        "aoColumnDefs": [
            {"bSortable": false, "aTargets": ['no-sort']}
        ]
    });
    $('.delete').on('click', function(e) {
        e.preventDefault();
        $this = $(this);
        $.confirm({
            title: 'حذف',
            icon: 'uk-icon-warning uk-text-warning',
            confirmButton: 'بله',
            cancelButton: 'بیخیال',
            animation: 'zoom',
            autoClose: 'cancel|10000',
            animationSpeed: 600,
            content: 'آیتم انتخابی حذف خواهد شد. آیا اطمینان دارید؟',
            confirmButtonClass: 'btn-success',
            cancelButtonClass: 'btn-warning',
            contentClass: 'btn-danger',
            confirm: function() {
                window.location.href = $this.attr("href");
            },
            cancel: function() {
            }
        });
    });
    $page_content = $("#page_content");
    $("[data-md-one-selectize], .data-md-one-selectize").each(function() {
        var e = $(this);
        if (!e.hasClass("selectized")) {
            var i = e.attr("data-md-selectize-bottom");
            e.after('<div class="selectize_fix"></div>').selectize({
                create: false,
                sortField: 'text',
                onDropdownOpen: function(e) {
                    "undefined" != typeof i && e.css({"margin-top": "0"});
                },
                onDropdownClose: function(e) {
                    "undefined" != typeof i && e.css({"margin-top": ""});
                }
            })
        }
    });
    $("[data-md-tag-selectize], .data-md-tag-selectize").each(function() {
        var e = $(this);
        if (!e.hasClass("selectized")) {
            var i = e.attr("data-md-selectize-bottom");
            e.after('<div class="selectize_fix"></div>').selectize({
                plugins: {'remove_button': {label: ""}},
                create: function(input) {
                    return {
                        value: input,
                        text: input
                    }
                },
                onDropdownOpen: function(e) {
                    "undefined" != typeof i && e.css({"margin-top": "0"});
                },
                onDropdownClose: function(e) {
                    "undefined" != typeof i && e.css({"margin-top": ""});
                }
            })
        }
    });
    $("[data-md-closable-selectize], .data-md-closable-selectize").each(function() {
        var e = $(this);
        if (!e.hasClass("selectized")) {
            var i = e.attr("data-md-selectize-bottom");
            e.after('<div class="selectize_fix"></div>').selectize({
                plugins: {'remove_button': {label: ""}},
                create: false,
                sortField: 'text',
                onDropdownOpen: function(e) {
                    "undefined" != typeof i && e.css({"margin-top": "0"});
                },
                onDropdownClose: function(e) {
                    "undefined" != typeof i && e.css({"margin-top": ""});
                }
            })
        }
    });

    // slug making : 
    $('.slug').on('focus', function() {
        var character = $('.title').val();
        $(".slug").val(character);
    });

    $('.set_as_homepage').on('click', function(e) {
        e.preventDefault();
        url = $(this).attr('href');
        $.post(url, '', function(res) {
            if (res.success) {
                $('#body_for_ajax_notif').prepend("<div data-uk-alert='' id='ajax_notif' class='uk-alert uk-alert-success'><a class='uk-alert-close uk-close' href='#'></a>صفحه مورد نظر بعنوان صفحه اصلی تعیین شد</div>");
                setTimeout(function() {
                    $('#ajax_notif').slideUp(2500);
                    setTimeout(function() {
                        $('div').remove('.uk-alert');
                    }, 3500);
                }, 4500);
            }
        }, 'json');
    });



    /*************************** JALALI DATEPICKER **********************/
    /*
     month
     */
    $("#monthYearPicker").persianDatepicker({
        format: "YYYY-MM",
        altField: '#monthpickerAlt',
        altFormat: "YYYY MM DD HH:mm:ss",
        yearPicker: {
            enabled: true
        },
        monthPicker: {
            enabled: true
        },
        dayPicker: {
            enabled: false
        }
    });
    /*
     month
     */
    $("#fromMonthPicker, #toMonthPicker").persianDatepicker({
        format: "MM",
        altField: '#monthpickerAlt',
        altFormat: "YYYY MM DD HH:mm:ss",
        yearPicker: {
            enabled: false
        },
        monthPicker: {
            enabled: true
        },
        dayPicker: {
            enabled: false
        }
    });

    /*
     year
     */
    $("#fromYearPicker, #toYearPicker").persianDatepicker({
        format: "YYYY",
        altField: '#yearpickerAlt',
        altFormat: "YYYY MM DD HH:mm:ss",
        dayPicker: {
            enabled: false
        },
        monthPicker: {
            enabled: false
        },
        yearPicker: {
            enabled: true
        }
    });

    /*************************** END JALALI DATEPICKER **********************/

    $("#saeednavaro").on('load', function() {
        id = $('#ticket_id').val();
        $.ajax({
            url: ADMIN_URL + "/contacts/tickets/set-seen",
            type: "POST",
            data: {"input": id},
            dataType: "json",
            cache: false,
            success: function(result) {
                console.log(result.success);
                if (result.success == 1)
                {
                    console.log('developer: Saeed Tavakoli <saeed.g71@gmail.com>');
                    badgeCount = $('span.ticket-badge').data('badge');
                    $('span.ticket-badge').html(badgeCount - 1).fadeIn();
                    $('#ticket_id_' + id).remove();
                }
            }
        });
    }).each(function() {
        if (this.complete)
            $(this).load();
    });
    $("img.seen_loader").on('load', function() {
        id = $('#announce_id').val();
        $.ajax({
            url: ADMIN_URL + "/contacts/contact-us/set-seen",
            type: "POST",
            data: {"input": id},
            dataType: "json",
            cache: false,
            success: function(result) {
                if (result.success == 1)
                {
                    console.log('developer: Saeed Tavakoli <saeed.g71@gmail.com>');
                    badgeCount = $('span.announce-badge').data('badge');
                    $('span.announce-badge').html(badgeCount - 1).fadeIn();
                    $('#announce_id_' + id).remove();
                }
            }
        });
    }).each(function() {
        if (this.complete)
            $(this).load();
    });
    $("img.seen_loader_contact").on('load', function() {
        id = $('#contact_id').val();
        $.ajax({
            url: ADMIN_URL + "/contacts/contact-us/set-seen-contact",
            type: "POST",
            data: {"input": id},
            dataType: "json",
            cache: false,
            success: function(result) {
                if (result.success == 1)
                {
                    console.log('developer: Saeed Tavakoli <saeed.g71@gmail.com>');
                }
            }
        });
    }).each(function() {
        if (this.complete)
            $(this).load();
    });

    $('#target_blank').on('ifChecked', function(event) {
        $('#link_blank').prop('disabled', false);
    });

    $('#target_blank').on('ifUnchecked', function(event) {
        $('#link_blank').prop('disabled', true);
    });

//////////////////////////////////
//          ajax for select reciption of ticket
/////////////////////////////////

    $('#role_selectize').on('change', function() {
        var role_id = $(this).val();
        $.ajax({
            url: ADMIN_URL + "/users/roles/getRoleUsers",
            type: "POST",
            data: {"role_id": role_id},
            dataType: "JSON",
            cache: false,
            beforeSend: function() {
                $('#user_rcpt').css('color', '#CCC').prop('disabled', true);
            },
            success: function(result) {
                $.each(result, function(key, val) {
                    $('#user_rcpt').append('<option value="' + val.id + '" >' + val.first_name + ' ' + val.last_name + ' (' + val.email + ')</option>');
                });
            },
            complete: function() {
                $('#user_rcpt').css('color', '#000').prop('disabled', false);
            }
        });
    });







});