// function updatePostResult(data) {
//     $("#span-two").text(data);
//     $("#table tr:last").after('<tr><td>' + codes + '</td><td>' + data + '</td></tr>')
// }
//
// function updateBarcodeResult(data) {
//     $("#span-two").text(data);
//     $("#table tr:last").after('<tr><td>' + codes + '</td><td>' + data + '</td></tr>')
// }

function barSend(codes) {
    if (/^\| [:| ]+\|$/.test(codes)) {
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/turnPostcode",
            async: true,
            data: "barcode=" + $('#input-code').val(),
            success: function (data) {
                $("#span-two").text(data);
                $("#table tr:last").after('<tr><td>' + codes + '</td><td>' + data + '</td></tr>');
                // updateBarcodeResult(data);
            }
        })
    } else {
        $('#span-one').text('error input,please input barcode again');
    }
}

function postSend(codes) {
    if (/^\d{5}(-?\d{4})?$/.test(codes)) {
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/turnBarcode",
            async: true,
            data: "postcode=" + $('#input-code').val(),
            success: function (data) {
                $("#span-two").text(data);
                $("#table tr:last").after('<tr><td>' + codes + '</td><td>' + data + '</td></tr>');
                // updatePostResult(data);
            }
        });
    }
    else {
        $('#span-one').text('error input,please input postcode again');
    }
}

// function updateTipInfo() {
//     $('#span-one').text('Please input code here!');
// }
$(document).ready(function () {
    $('#ok').click(function () {
        let codes = $('#input-code').val();
        if (codes === '') {
            $('#span-one').text('Please input code here!');
            // updateTipInfo();
        } else if ($('#bTz').is(":checked")) {
            barSend(codes);
        } else if ($('#zTb').is(":checked")) {
            postSend(codes);
        }

    });
});