$(document).ready(function() {
    $('.undone').on('click', function() {
        $(this).hide();
        $('.done', $(this).parent()).show();
        $(this).parent().parent().addClass('strike-out-text')

        //add task to completed task
        $('#completed_list').append($(this).parent().parent().clone())
    })

    $('.done').on('click', function() {
        $(this).hide();
        $('.undone', $(this).parent()).show()
        $(this).parent().parent().removeClass('strike-out-text');

    })

    $('#main-btn').on('click', function() {
        $('#popup').show();
    })
    $('#close').on('click', function() {
        $('#popup').hide();
    })
    $('.add_todo').on('click', function() {
        let element = $('#ul li:last-child').clone();
        $('#ul').append(element);
        $('#ul li:last-child .dos').text($('#text-value').val());
        $('#text-value').val('');
        $('#popup').hide();
    })
})