
//search functionality
$("#name").on("keyup", function () {
    var value = $(this).val().toLowerCase();;

    $("table tr").each(function (index) {
        if (index !== 0) {
            $row = $(this);
            var id = $row.find("td:first").text().toLowerCase();;
            if (id.indexOf(value) !== 0) {
                $row.hide();
            }
            else {
                $row.show();
            }
        }
    });
});
$("#city").on("keyup", function () {
    var value = $(this).val().toLowerCase();;
    console.log(value)

    $("table tr").each(function (index) {
        if (index !== 0) {

            $row = $(this);

            var id = $row.find("td:nth-child(5)").text().toLowerCase();;

            if (id.indexOf(value) !== 0) {
                $row.hide();
            }
            else {
                $row.show();
            }
        }
    });
});
$("#state").on("keyup", function () {
    var value = $(this).val().toLowerCase();;

    $("table tr").each(function (index) {
        if (index !== 0) {

            $row = $(this);

            var id = $row.find("td:nth-child(4)").text().toLowerCase();;

            if (id.indexOf(value) !== 0) {
                $row.hide();
            }
            else {
                $row.show();
            }
        }
    });
});
$("#hobbies").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("table tr").each(function (index) {
        if (index !== 0) {

            $row = $(this);

            var id = $row.find("td:nth-child(6)").text().toLowerCase();
            var val = id.split(',')
            for (var x = 0; x < val.length; x++) {
                if (val[x].indexOf(value) !== 0) {
                    $row.hide();
                }
                else {
                    $row.show();
                }

            }
        }
    });
});
$("#books").on("keyup", function () {
    var value = $(this).val().toLowerCase();

    $("table tr").each(function (index) {
        if (index !== 0) {

            $row = $(this);

            var id = $row.find("td:nth-child(7)").text().toLowerCase();
            var vals = id.split(',')
            for (var i = 0; i < vals.length; i++) {
                if (vals[i].indexOf(value) !== 0) {
                    $row.hide();
                }
                else {
                    $row.show();
                }
            }
        }
    });
});

//datatable add export excel button
$(document)
    .ready(function () {
        $('#tables')
            .DataTable({
                dom: 'Bfrtip',
                buttons: [{
                    extend: 'excelHtml5',
                    exportOptions: {
                        columns: [':visible']
                    }
                },
                    'colvis'
                ],
                columnDefs: [{
                    targets: -1,
                    visible: false
                }],
                "columnDefs": [{
                    "orderable": false,
                    "targets": [0, 1, 2, 3, 4, 5, 6, 7, 8]
                }]
            });

    });