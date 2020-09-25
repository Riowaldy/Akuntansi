var pesananpenjualan = function () {
    var getPesananPenjualan = function(){
        var t = $('#tablepesananpenjualan').DataTable({
            'ajax': {
                'url': '/pesananpenjualan/getpesananpenjualan',
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
                { 'data': 'nilai' },
                { 'data': 'invoice' },
                {
                    'render': function (data, type, full, meta) {
                        var html = '';
                        html += '<div class="text-center">';
                        html += '<div class="btn-group btn-group-solid">';
                        html += '<a href="#edit" class="badge badge-danger" data-toggle="modal" data-target="#form-edit-pesananpenjualan" id="btn-edit-pesananpenjualan">Belum Bayar</a>';
                        html += '</div>';
                        html += '</div>';
                        return html;
                    }
                }
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

    var tambahPesananPenjualan = function () {
        $('#btn-simpan-tambahpesananpenjualan').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Pesanan Penjualan Ini',
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
                    var addData = {
                        no_transaksi: $('#notrans_pesananpenjualan_tambah').val(),
                        tanggal: $('#tanggal_pesananpenjualan_tambah').val(),
                        name: $('#nama_pesananpenjualan_tambah').val(),
                        pesanan: $('#pesanan_pesananpenjualan_tambah').val(),
                        quantity: $('#quantity_pesananpenjualan_tambah').val(),
                        invoice: $('#invoice_pesananpenjualan_tambah').val(),
                    };
                    if(addData.no_transaksi == ""){
                        $("#notrans_pesananpenjualan_error_tambah").html("<strong>Data No Transaksi Kosong</strong>");
                        $("#tanggal_pesananpenjualan_error_tambah").html("");
                        $("#nama_pesananpenjualan_error_tambah").html("");
                        $("#pesanan_pesananpenjualan_error_tambah").html("");
                        $("#quantity_pesananpenjualan_error_tambah").html("");
                        $("#invoice_pesananpenjualan_error_tambah").html("");
                    }
                    else if(addData.tanggal == ""){
                        $("#tanggal_pesananpenjualan_error_tambah").html("<strong>Data Tanggal Kosong</strong>");
                        $("#notrans_pesananpenjualan_error_tambah").html("");
                        $("#nama_pesananpenjualan_error_tambah").html("");
                        $("#pesanan_pesananpenjualan_error_tambah").html("");
                        $("#quantity_pesananpenjualan_error_tambah").html("");
                        $("#invoice_pesananpenjualan_error_tambah").html("");
                    }
                    else if(addData.name == ""){
                        $("#nama_pesananpenjualan_error_tambah").html("<strong>Data Nama Kosong</strong>");
                        $("#notrans_pesananpenjualan_error_tambah").html("");
                        $("#tanggal_pesananpenjualan_error_tambah").html("");
                        $("#pesanan_pesananpenjualan_error_tambah").html("");
                        $("#quantity_pesananpenjualan_error_tambah").html("");
                        $("#invoice_pesananpenjualan_error_tambah").html("");
                    }
                    else if(addData.pesanan == ""){
                        $("#pesanan_pesananpenjualan_error_tambah").html("<strong>Data Pesanan Kosong</strong>");
                        $("#notrans_pesananpenjualan_error_tambah").html("");
                        $("#tanggal_pesananpenjualan_error_tambah").html("");
                        $("#nama_pesananpenjualan_error_tambah").html("");
                        $("#quantity_pesananpenjualan_error_tambah").html("");
                        $("#invoice_pesananpenjualan_error_tambah").html("");
                    }
                    else if(addData.quantity == ""){
                        $("#quantity_pesananpenjualan_error_tambah").html("<strong>Data Quantity Kosong</strong>");
                        $("#notrans_pesananpenjualan_error_tambah").html("");
                        $("#tanggal_pesananpenjualan_error_tambah").html("");
                        $("#nama_pesananpenjualan_error_tambah").html("");
                        $("#pesanan_pesananpenjualan_error_tambah").html("");
                        $("#invoice_pesananpenjualan_error_tambah").html("");
                    }
                    else if(addData.invoice == ""){
                        $("#invoice_pesananpenjualan_error_tambah").html("<strong>Data Invoice Kosong</strong>");
                        $("#notrans_pesananpenjualan_error_tambah").html("");
                        $("#tanggal_pesananpenjualan_error_tambah").html("");
                        $("#nama_pesananpenjualan_error_tambah").html("");
                        $("#pesanan_pesananpenjualan_error_tambah").html("");
                        $("#quantity_pesananpenjualan_error_tambah").html("");
                    }
                    else{
                        $("#notrans_pesananpenjualan_error_tambah").html("");
                        $("#tanggal_pesananpenjualan_error_tambah").html("");
                        $("#nama_pesananpenjualan_error_tambah").html("");
                        $("#pesanan_pesananpenjualan_error_tambah").html("");
                        $("#quantity_pesananpenjualan_error_tambah").html("");
                        $("#invoice_pesananpenjualan_error_tambah").html("");
                        $.ajax({
                            url : "/pesananpenjualan/addpesananpenjualan",
                            type : "POST",
                            data : addData,
                            success: function(res){
                                $('#tablepesananpenjualan').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Ditambahkan",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-tambah-pesananpenjualan').modal('hide');
                                    $("#notrans_pesananpenjualan_tambah").val("");
                                    $("#tanggal_pesananpenjualan_tambah").val("");
                                    $("#nama_pesananpenjualan_tambah").val("");
                                    $("#pesanan_pesananpenjualan_tambah").val("");
                                    $("#quantity_pesananpenjualan_tambah").val("");
                                    $("#invoice_pesananpenjualan_tambah").val("");
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-tambah-pesananpenjualan').modal('hide');
                            }
                        })
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-tambah-pesananpenjualan').modal('hide');
                }
            });
        });
    };

    var getDropNama = function(){
        $(".nama_pesananpenjualan_tambah").select2();
        $.ajax({
            type: 'GET',
            url: '/pesananpenjualan/getdropnama',
            contentType: 'application/json;charset=utf-8',
            async: false,
            success: function (data) {
                $('#nama_pesananpenjualan_tambah').append(
                    '<option value="" selected>-- Pilih Nama Pelanggan --</option>'
                );
                data.forEach(function(entry) {
                    $('#nama_pesananpenjualan_tambah').append(
                        '<option value="'+ entry.id +'">'+ entry.name +'</option>'
                    );
                });
            }
        })
    };

    var getDropPesanan = function(){
        $(".pesanan_pesananpenjualan_tambah").select2();
        $.ajax({
            type: 'GET',
            url: '/pesananpenjualan/getdroppesanan',
            contentType: 'application/json;charset=utf-8',
            async: false,
            success: function (data) {
                $('#pesanan_pesananpenjualan_tambah').append(
                    '<option value="" selected>-- Pilih Pesanan --</option>'
                );
                data.forEach(function(entry) {
                    $('#pesanan_pesananpenjualan_tambah').append(
                        '<option value="'+ entry.id +'">'+ entry.name +'</option>'
                    );
                });
            }
        })
    };

    return {
        init: function () {
            getPesananPenjualan();
            // resetData();
            tambahPesananPenjualan();
            getDropNama();
            getDropPesanan();
        }
    };
}();
$(document).ready(function(){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd'
    }).datepicker("setDate", new Date());
    pesananpenjualan.init();
});
