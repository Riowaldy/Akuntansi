var penerimaanbarang = function () {
    var getPenerimaanBarang = function(){
        var t = $('#tablepenerimaanbarang').DataTable({
            'ajax': {
                'url': '/penerimaanbarang/getpenerimaanbarang',
                'dataSrc': '',
                'complete': function () {
                    $( "#loading" ).hide();
                }
            },
            'columns': [
                { 'data': 'id'},
                { 'data': 'no_transaksi'},
                { 'data': 'tanggal'},
                { 'data': 'name' },
                { 'data': 'pesanan' },
                { 'data': 'quantity' },
                { 
                    'data': 'nilai', 
                    'render': $.fn.dataTable.render.number( '.', ',', 2, 'Rp' )
                
                },
                { 'data': 'invoice' },
                {
                    'render': function (data, type, full, meta) {
                        var html = '';
                        html += '<div class="text-center">';
                        html += '<div class="btn-group btn-group-solid">';
                        html += '<a href="#edit" class="badge badge-primary" data-toggle="modal" data-target="#form-edit-penerimaanbarang" id="btn-edit-penerimaanbarang">Selesai</a>';
                        html += '</div>';
                        html += '</div>';
                        return html;
                    }
                }
            ],
            "order": [],
            "columnDefs": [
                { "orderable": false, "targets": [0,8] }
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
            getPenerimaanBarang();
            // editDataPenerimaanBarang();
        }
    };
}();
$(document).ready(function(){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    penerimaanbarang.init();
});