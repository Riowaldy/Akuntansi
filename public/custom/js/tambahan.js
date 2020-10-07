var mastertambahan = function () {
    var getMasterTambahan = function(){
        var t = $('#tablemastertambahan').DataTable({
            'ajax': {
                'url': '/pemakaian/getmastertambahan',
                'dataSrc': '',
                'complete': function () {
                    $( "#loading" ).hide();
                }
            },
            'columns': [
                { 'data': 'id'},
                { 'data': 'id_tambahan'},
                { 'data': 'name'},
                { 'data': 'akunperkiraan' },
                { 'data': 'harga' },
                {
                    'render': function (data, type, full, meta) {
                        var html = '';
                        html += '<div class="text-center">';
                        html += '<div class="btn-group btn-group-solid">';
                        html += '<a href="#edit" class="btn btn-primary btn-raised btn-xs" data-toggle="modal" data-target="#form-edit-mastertambahan" id="btn-edit-mastertambahan" title="Ubah Data"><i class="fas fa-edit"></i></a>';
                        html += '<a href="#hapus" class="btn btn-danger btn-raised btn-xs" id="btn-hapus-mastertambahan" title="Hapus Data"><i class="fas fa-trash"></i></a>';
                        html += '</div>';
                        html += '</div>';
                        return html;
                    }
                }
            ],
            "order": [],
            "columnDefs": [
                { "orderable": false, "targets": [0,5] }
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
            getMasterTambahan();
            // resetData();
            // tambahMasterTambahan();
            // getDataEditMasterTambahan();
            // editMasterTambahan();
            // deleteMasterTambahan();
        }
    };
}();
$(document).ready(function(){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    mastertambahan.init();
});