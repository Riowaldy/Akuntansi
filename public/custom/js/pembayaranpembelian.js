var pembayaranpembelian = function () {
    var getPembayaranPembelian = function(){
        $(".card-body").LoadingOverlay("show", {
            image: "../custom/img/loading2.gif"
        });
        var t = $('#tablepembayaranpembelian').DataTable({
            'ajax': {
                'url': '/pembayaranpembelian/getpembayaranpembelian',
                'dataSrc': '',
                'complete': function () {
                    $(".card-body").LoadingOverlay("hide");
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
                        html += '<a href="#edit" class="badge badge-success" data-toggle="modal" data-target="#form-edit-pembayaranpembelian" id="btn-edit-pembayaranpembelian">Sudah Bayar</a>';
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

    var editDataPembayaranPembelian = function () {
        $('#tablepembayaranpembelian').on('click', '#btn-edit-pembayaranpembelian', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tablepembayaranpembelian').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            no_transaksi = data.no_transaksi;
            tanggal = data.tanggal;
            name = data.name;
            pesanan = data.pesanan;
            quantity = data.quantity;
            nilai = data.nilai;
            invoice = data.invoice;
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Mengubah Data Pembayaran Pembelian Ini',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#2196F3',
                confirmButtonText: 'Ya',
                cancelButtonText: 'Tidak',
                closeOnConfirm: false,
                closeOnCancel: true,
                showLoaderOnConfirm: true
            })
            .then((isConfirm) => {
                window.onkeydown = null;
                window.onfocus = null;
                if (isConfirm) {
                    var updateData = {
                        id: id,
                        no_transaksi: no_transaksi,
                        tanggal: tanggal,
                        name: name,
                        pesanan: pesanan,
                        quantity: quantity,
                        nilai: nilai,
                        invoice: invoice,
                    };
                    $.ajax({
                        url : "/pembayaranpembelian/updatepembayaranpembelian",
                        type : "POST",
                        data : updateData,
                        success: function(res){
                            console.log(res);
                            $('#tablepembayaranpembelian').DataTable().ajax.reload();
                            swal({
                                title: "Success!",
                                text : "Data Berhasil Dihapus",
                                confirmButtonColor: "#66BB6A",
                                type : "success",
                            });
                        },
                        error : function(res){
                            swal({
                                title: 'Error',
                                text : data.message,
                                type : "error",
                                confirmButtonColor: "#EF5350",
                            });
                        }
                    })
                } else {
                    swal("Aksi Dibatalkan!");
                }
            });
        });
    };

    return {
        init: function () {
            getPembayaranPembelian();
            editDataPembayaranPembelian();
        }
    };
}();
$(document).ready(function(){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    pembayaranpembelian.init();
});