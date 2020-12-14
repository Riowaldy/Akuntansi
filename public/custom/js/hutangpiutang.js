var hutangpiutang = function () {
    var getHutangPiutang = function(){
        $(".card-body").LoadingOverlay("show", {
            image: "../custom/img/loading2.gif"
        });
        var t = $('#tablehutangpiutang').DataTable({
            'ajax': {
                'url': '/hutangpiutang/gethutangpiutang',
                'dataSrc': '',
                'complete': function () {
                    $(".card-body").LoadingOverlay("hide");
                }
            },
            'columns': [
                { 'data': 'id'},
                { 'data': 'jenis'},
                { 'data': 'no_transaksi'},
                { 'data': 'tanggal'},
                { 'data': 'name' },
                { 'data': 'pesanan' },
                { 'data': 'quantity' },
                { 
                    'data': 'nilai', 
                    'render': $.fn.dataTable.render.number( '.', ',', 2, 'Rp' )
                
                },
                { 'data': 'invoice' }
            ],
            "order": [],
            "columnDefs": [
                { "orderable": false, "targets": [0] }
            ]
        });
        t.on( 'order.dt search.dt', function () {
            t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                cell.innerHTML = i+1;
            } );
        } ).draw();
    };

    return {
        init: function () {
            getHutangPiutang();
            // resetData();
        }
    };
}();
$(document).ready(function(){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    hutangpiutang.init();
});