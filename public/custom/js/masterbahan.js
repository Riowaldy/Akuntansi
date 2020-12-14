var masterbahan = function () {
    var getMasterBahan = function(){
        var t = $('#tablemasterbahan').DataTable({
            'ajax': {
                'url': '/masterbahan/getmasterbahan',
                'dataSrc': '',
                'complete': function () {
                    $( "#loading" ).hide();
                }
            },
            'columns': [
                { 'data': 'id'},
                { 'data': 'id_bahan'},
                { 'data': 'name'},
                { 
                    'data': 'harga', 
                    'render': $.fn.dataTable.render.number( '.', ',', 2, 'Rp' )
                
                },
                { 'data': 'stock' },
                { 'data': 'satuan'},
                {
                    'render': function (data, type, full, meta) {
                        var html = '';
                        html += '<div class="text-center">';
                        html += '<div class="btn-group btn-group-solid">';
                        html += '<a href="#edit" class="btn btn-primary btn-raised btn-xs" data-toggle="modal" data-target="#form-edit-masterbahan" id="btn-edit-masterbahan" title="Ubah Data"><i class="fas fa-edit"></i></a>';
                        //html += '<a href="#hapus" class="btn btn-danger btn-raised btn-xs" id="btn-hapus-masterbahan" title="Hapus Data"><i class="fas fa-trash"></i></a>';
                        html += '</div>';
                        html += '</div>';
                        return html;
                    }
                }
            ],
            "order": [],
            "columnDefs": [
                { "orderable": false, "targets": [0,6] }
            ]
        });
        t.on( 'order.dt search.dt', function () {
            t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                cell.innerHTML = i+1;
            } );
        } ).draw();
    };

    var resetData = function(){
        $('#btn-reset-simpanmasterbahan').click(function(){
            $("#id_bahan_error_tambah").html("");
            $("#nama_bahan_error_tambah").html("");
            $("#stock_bahan_error_tambah").html("");
            $("#harga_bahan_error_tambah").html("");
            $("#satuan_bahan_error_tambah").html("");
            $("#id_bahan_error").html("");
            $("#nama_bahan_error").html("");
            $("#harga_bahan_error").html("");
            $("#stock_bahan_error").html("");
            $("#satuan_bahan_error").html("");
            $("#id_bahan_tambah").val("");
            $("#nama_bahan_tambah").val("");
            $("#harga_bahan_tambah").val("");
            $("#stock_bahan_tambah").val("");
            $("#satuan_bahan_tambah").val("");
            $("#id_bahan").val("");
            $("#nama_bahan").val("");
            $("#harga_bahan").val("");
            $("#stock_bahan").val("");
            $("#satuan_bahan").val("");
        });
        $('#btn-reset-editmasterbahan').click(function(){
            $("#id_bahan_error_tambah").html("");
            $("#nama_bahan_error_tambah").html("");
            $("#stock_bahan_error_tambah").html("");
            $("#harga_bahan_error_tambah").html("");
            $("#satuan_bahan_error_tambah").html("");
            $("#id_bahan_error").html("");
            $("#nama_bahan_error").html("");
            $("#harga_bahan_error").html("");
            $("#stock_bahan_error").html("");
            $("#satuan_bahan_error").html("");
            $("#id_bahan_tambah").val("");
            $("#nama_bahan_tambah").val("");
            $("#harga_bahan_tambah").val("");
            $("#stock_bahan_tambah").val("");
            $("#satuan_bahan_tambah").val("");
            $("#id_bahan").val("");
            $("#nama_bahan").val("");
            $("#harga_bahan").val("");
            $("#stock_bahan").val("");
            $("#satuan_bahan").val("");
        });
    };

    var tambahMasterBahan = function () {
        $('#btn-simpan-tambahmasterbahan').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Bahan Ini',
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
                        id_bahan: $('#id_bahan_tambah').val(),
                        name: $('#nama_bahan_tambah').val(),
                        harga: $('#harga_bahan_tambah').val(),
                        stock: $('#stock_bahan_tambah').val(),
                        satuan: $('#satuan_bahan_tambah').val(),
                    };
                    if(addData.id_bahan == ""){
                        $("#id_bahan_error_tambah").html("<strong>Data ID Bahan Kosong</strong>");
                        $("#nama_bahan_error_tambah").html("");
                        $("#harga_bahan_error_tambah").html("");
                        $("#stock_bahan_error_tambah").html("");
                        $("#satuan_bahan_error_tambah").html("");
                    }
                    else if(addData.name == ""){
                        $("#nama_bahan_error_tambah").html("<strong>Data Nama Kosong</strong>");
                        $("#id_bahan_error_tambah").html("");
                        $("#harga_bahan_error_tambah").html("");
                        $("#stock_bahan_error_tambah").html("");
                        $("#satuan_bahan_error_tambah").html("");
                    }
                    else if(addData.harga == ""){
                        $("#harga_bahan_error_tambah").html("<strong>Data Harga Kosong</strong>");
                        $("#id_bahan_error_tambah").html("");
                        $("#nama_bahan_error_tambah").html("");
                        $("#stock_bahan_error_tambah").html("");
                        $("#satuan_bahan_error_tambah").html("");
                    }
                    else if(addData.harga == ""){
                        $("#stock_bahan_error_tambah").html("<strong>Data Stock Kosong</strong>");
                        $("#id_bahan_error_tambah").html("");
                        $("#nama_bahan_error_tambah").html("");
                        $("#stock_bahan_error_tambah").html("");
                        $("#satuan_bahan_error_tambah").html("");
                    }
                    else if(addData.satuan == ""){
                        $("#satuan_bahan_error_tambah").html("<strong>Data Satuan Kosong</strong>");
                        $("#id_bahan_error_tambah").html("");
                        $("#nama_bahan_error_tambah").html("");
                        $("#stock_bahan_error_tambah").html("");
                        $("#harga_bahan_error_tambah").html("");
                    }
                    else{
                        $("#id_bahan_error_tambah").html("");
                        $("#nama_bahan_error_tambah").html("");
                        $("#stock_bahan_error_tambah").html("");
                        $("#harga_bahan_error_tambah").html("");
                        $("#satuan_bahan_error_tambah").html("");
                        $.ajax({
                            url : "/masterbahan/addmasterbahan",
                            type : "POST",
                            data : addData,
                            success: function(res){
                                if(res == 'id_bahanerr'){
                                    $("#id_bahan_error_tambah").html("<strong>Data ID Ada</strong>");
                                }else{
                                    $('#tablemasterbahan').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Ditambahkan",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-tambah-masterbahan').modal('hide');
                                    $("#id_bahan_tambah").val("")
                                    $("#nama_bahan_tambah").val("");
                                    $("#stock_bahan_tambah").val("");
                                    $("#harga_bahan_tambah").val("");
                                    $("#satuan_bahan_tambah").val("");
                                }
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-tambah-masterbahan').modal('hide');
                            }
                        })
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-tambah-masterbahan').modal('hide');
                }
            });
        });
    };

    var getDataEditMasterBahan = function(){
        $('#tablemasterbahan').on('click', '#btn-edit-masterbahan', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tablemasterbahan').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            $('#id_bahan').val(data.id_bahan);
            $('#nama_bahan').val(data.name);
            $('#harga_bahan').val(data.harga);
            $('#stock_bahan').val(data.stock);
            $('#satuan_bahan').val(data.satuan);
            $('#btn-simpan-editmasterbahan').html('Simpan');
            $('#btn-reset-editmasterbahan').html('Batal');
        });
    };

    var editMasterBahan = function () {
        $('#btn-simpan-editmasterbahan').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Bahan Ini',
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
                    var update = {
                        id: id,
                        id_bahan: $('#id_bahan').val(),
                        name: $('#nama_bahan').val(),
                        harga: $('#harga_bahan').val(),
                        stock: $('#stock_bahan').val(),
                        satuan: $('#satuan_bahan').val(),
                    };
                    if(update.id_bahan == ""){
                        $("#id_bahan_error").html("<strong>Data ID Bahan Kosong</strong>");
                        $("#nama_bahan_error").html("");
                        $("#harga_bahan_error").html("");
                        $("#stock_bahan_error").html("");
                        $("#satuan_bahan_error").html("");
                    }
                    else if(update.name == ""){
                        $("#nama_bahan_error").html("<strong>Data Nama Kosong</strong>");
                        $("#id_bahan_error").html("");
                        $("#harga_bahan_error").html("");
                        $("#stock_bahan_error").html("");
                        $("#satuan_bahan_error").html("");
                    }
                    else if(update.harga == ""){
                        $("#harga_bahan_error").html("<strong>Data Harga Kosong</strong>");
                        $("#id_bahan_error").html("");
                        $("#nama_bahan_error").html("");
                        $("#stock_bahan_error").html("");
                        $("#satuan_bahan_error").html("");
                    }
                    else if(update.stock == ""){
                        $("#stock_bahan_error").html("<strong>Data Stock Kosong</strong>");
                        $("#id_bahan_error").html("");
                        $("#nama_bahan_error").html("");
                        $("#harga_bahan_error").html("");
                        $("#satuan_bahan_error").html("");
                    }
                    else if(update.satuan == ""){
                        $("#satuan_bahan_error").html("<strong>Data Satuan Kosong</strong>");
                        $("#id_bahan_error").html("");
                        $("#nama_bahan_error").html("");
                        $("#harga_bahan_error").html("");
                        $("#stock_bahan_error").html("");
                    }
                    else{
                        $("#id_bahan_error").html("");
                        $("#nama_bahan_error").html("");
                        $("#harga_bahan_error").html("");
                        $("#stock_bahan_error").html("");
                        $("#satuan_bahan_error").html("");
                        $.ajax({
                            url : "/masterbahan/updatemasterbahan",
                            type : "POST",
                            data : update,
                            success: function(res){
                                if(res == 'id_bahanerr'){
                                    $("#id_bahan_error").html("<strong>Data ID Ada</strong>");
                                }else{
                                    $('#tablemasterbahan').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Diubah",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-edit-masterbahan').modal('hide');
                                }
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-edit-masterbahan').modal('hide');
                            }
                        });
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-edit-masterbahan').modal('hide');
                }
            });
        });
    };

    var deleteMasterBahan = function () {
        $('#tablemasterbahan').on('click', '#btn-hapus-masterbahan', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tablemasterbahan').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menghapus Data Pelanggan Ini',
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
                    var delData = {
                        id: id,
                    };
                    $.ajax({
                        url : "/masterbahan/deletemasterbahan",
                        type : "DELETE",
                        data : delData,
                        success: function(){
                            $('#tablemasterbahan').DataTable().ajax.reload();
                            swal({
                                title: "Success!",
                                text : "Data Berhasil Dihapus",
                                confirmButtonColor: "#66BB6A",
                                type : "success",
                            });
                        },
                        error : function(){
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
            getMasterBahan();
            resetData();
            tambahMasterBahan();
            getDataEditMasterBahan();
            editMasterBahan();
            deleteMasterBahan();
        }
    };
}();
$(document).ready(function(){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    masterbahan.init();
});