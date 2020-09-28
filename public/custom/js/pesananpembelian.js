var pesananpembelian = function () {
    var getPesananPembelian = function(){
        var t = $('#tablepesananpembelian').DataTable({
            'ajax': {
                'url': '/pesananpembelian/getpesananpembelian',
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
                        html += '<a href="#edit" class="badge badge-danger" data-toggle="modal" data-target="#form-edit-pesananpembelian" id="btn-edit-pesananpembelian">Belum Bayar</a>';
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

    var tambahPesananPembelian = function () {
        $('#btn-simpan-tambahpesananpembelian').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Pesanan Pembelian Ini',
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
                        no_transaksi: $('#notrans_pesananpembelian_tambah').val(),
                        tanggal: $('#tanggal_pesananpembelian_tambah').val(),
                        name: $('#nama_pesananpembelian_tambah').val(),
                        pesanan: $('#pesanan_pesananpembelian_tambah').val(),
                        quantity: $('#quantity_pesananpembelian_tambah').val(),
                        invoice: $('#invoice_pesananpembelian_tambah').val(),
                    };
                    if(addData.no_transaksi == ""){
                        $("#notrans_pesananpembelian_error_tambah").html("<strong>Data No Transaksi Kosong</strong>");
                        $("#tanggal_pesananpembelian_error_tambah").html("");
                        $("#nama_pesananpembelian_error_tambah").html("");
                        $("#pesanan_pesananpembelian_error_tambah").html("");
                        $("#quantity_pesananpembelian_error_tambah").html("");
                        $("#invoice_pesananpembelian_error_tambah").html("");
                    }
                    else if(addData.tanggal == ""){
                        $("#tanggal_pesananpembelian_error_tambah").html("<strong>Data Tanggal Kosong</strong>");
                        $("#notrans_pesananpembelian_error_tambah").html("");
                        $("#nama_pesananpembelian_error_tambah").html("");
                        $("#pesanan_pesananpembelian_error_tambah").html("");
                        $("#quantity_pesananpembelian_error_tambah").html("");
                        $("#invoice_pesananpembelian_error_tambah").html("");
                    }
                    else if(addData.name == ""){
                        $("#nama_pesananpembelian_error_tambah").html("<strong>Data Nama Kosong</strong>");
                        $("#notrans_pesananpembelian_error_tambah").html("");
                        $("#tanggal_pesananpembelian_error_tambah").html("");
                        $("#pesanan_pesananpembelian_error_tambah").html("");
                        $("#quantity_pesananpembelian_error_tambah").html("");
                        $("#invoice_pesananpembelian_error_tambah").html("");
                    }
                    else if(addData.pesanan == ""){
                        $("#pesanan_pesananpembelian_error_tambah").html("<strong>Data Pesanan Kosong</strong>");
                        $("#notrans_pesananpembelian_error_tambah").html("");
                        $("#tanggal_pesananpembelian_error_tambah").html("");
                        $("#nama_pesananpembelian_error_tambah").html("");
                        $("#quantity_pesananpembelian_error_tambah").html("");
                        $("#invoice_pesananpembelian_error_tambah").html("");
                    }
                    else if(addData.quantity == ""){
                        $("#quantity_pesananpembelian_error_tambah").html("<strong>Data Quantity Kosong</strong>");
                        $("#notrans_pesananpembelian_error_tambah").html("");
                        $("#tanggal_pesananpembelian_error_tambah").html("");
                        $("#nama_pesananpembelian_error_tambah").html("");
                        $("#pesanan_pesananpembelian_error_tambah").html("");
                        $("#invoice_pesananpembelian_error_tambah").html("");
                    }
                    else if(addData.invoice == ""){
                        $("#invoice_pesananpembelian_error_tambah").html("<strong>Data Invoice Kosong</strong>");
                        $("#notrans_pesananpembelian_error_tambah").html("");
                        $("#tanggal_pesananpembelian_error_tambah").html("");
                        $("#nama_pesananpembelian_error_tambah").html("");
                        $("#pesanan_pesananpembelian_error_tambah").html("");
                        $("#quantity_pesananpembelian_error_tambah").html("");
                    }
                    else{
                        $("#notrans_pesananpembelian_error_tambah").html("");
                        $("#tanggal_pesananpembelian_error_tambah").html("");
                        $("#nama_pesananpembelian_error_tambah").html("");
                        $("#pesanan_pesananpembelian_error_tambah").html("");
                        $("#quantity_pesananpembelian_error_tambah").html("");
                        $("#invoice_pesananpembelian_error_tambah").html("");
                        $.ajax({
                            url : "/pesananpembelian/addpesananpembelian",
                            type : "POST",
                            data : addData,
                            success: function(res){
                                console.log(res);
                                $('#tablepesananpembelian').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Ditambahkan",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-tambah-pesananpembelian').modal('hide');
                                    $("#notrans_pesananpembelian_tambah").val("");
                                    $("#tanggal_pesananpembelian_tambah").val("");
                                    $("#nama_pesananpembelian_tambah").val("");
                                    $("#pesanan_pesananpembelian_tambah").val("");
                                    $("#quantity_pesananpembelian_tambah").val("");
                                    $("#invoice_pesananpembelian_tambah").val("");
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-tambah-pesananpembelian').modal('hide');
                            }
                        })
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-tambah-pesananpembelian').modal('hide');
                }
            });
        });
    };

    var getDropNama = function(){
        $(".nama_pesananpembelian_tambah").select2();
        $.ajax({
            type: 'GET',
            url: '/pesananpembelian/getdropnama',
            contentType: 'application/json;charset=utf-8',
            async: false,
            success: function (data) {
                $('#nama_pesananpembelian_tambah').append(
                    '<option value="" selected>-- Pilih Nama Supplier --</option>'
                );
                data.forEach(function(entry) {
                    $('#nama_pesananpembelian_tambah').append(
                        '<option value="'+ entry.id +'">'+ entry.name +'</option>'
                    );
                });
            }
        })
    };

    var getDropPesanan = function(){
        $(".pesanan_pesananpembelian_tambah").select2();
        $.ajax({
            type: 'GET',
            url: '/pesananpembelian/getdroppesanan',
            contentType: 'application/json;charset=utf-8',
            async: false,
            success: function (data) {
                $('#pesanan_pesananpembelian_tambah').append(
                    '<option value="" selected>-- Pilih Pesanan --</option>'
                );
                data.forEach(function(entry) {
                    $('#pesanan_pesananpembelian_tambah').append(
                        '<option value="'+ entry.id +'">'+ entry.name +'</option>'
                    );
                });
            }
        })
    };

    var editDataPesananPembelian = function () {
        $('#tablepesananpembelian').on('click', '#btn-edit-pesananpembelian', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tablepesananpembelian').DataTable();
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
                text: 'Mengubah Data Pesanan Pembelian Ini',
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
                        url : "/pesananpembelian/updatepesananpembelian",
                        type : "POST",
                        data : updateData,
                        success: function(res){
                            $('#tablepesananpembelian').DataTable().ajax.reload();
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
            getPesananPembelian();
            // resetData();
            tambahPesananPembelian();
            getDropNama();
            getDropPesanan();
            editDataPesananPembelian();
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
    pesananpembelian.init();
});