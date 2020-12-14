var datapelanggan = function () {
    var getDataPelanggan = function(){
        $(".card-body").LoadingOverlay("show", {
            image: "../custom/img/loading2.gif"
        });
        var t = $('#tabledatapelanggan').DataTable({
            'ajax': {
                'url': '/datapelanggan/getdatapelanggan',
                'dataSrc': '',
                'complete': function () {
                    $(".card-body").LoadingOverlay("hide");
                }
            },
            'columns': [
                { 'data': 'id'},
                { 'data': 'id_pelanggan'},
                { 'data': 'name' },
                { 'data': 'telp' },
                { 'data': 'alamat'},
                {
                    'render': function (data, type, full, meta) {
                        var html = '';
                        html += '<div class="text-center">';
                        html += '<div class="btn-group btn-group-solid">';
                        html += '<a href="#edit" class="btn btn-primary btn-raised btn-xs" data-toggle="modal" data-target="#form-edit-datapelanggan" id="btn-edit-datapelanggan" title="Ubah Data"><i class="fas fa-edit"></i></a>';
                        //html += '<a href="#hapus" class="btn btn-danger btn-raised btn-xs" id="btn-hapus-datapelanggan" title="Hapus Data"><i class="fas fa-trash"></i></a>';
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

    var resetData = function(){
        $('#btn-reset-simpandatapelanggan').click(function(){
            $("#id_pelanggan_error_tambah").html("");
            $("#nama_pelanggan_error_tambah").html("");
            $("#telp_pelanggan_error_tambah").html("");
            $("#alamat_pelanggan_error_tambah").html("");
            $("#id_pelanggan_error").html("");
            $("#nama_pelanggan_error").html("");
            $("#telp_pelanggan_error").html("");
            $("#alamat_pelanggan_error").html("");
            $("#id_pelanggan_tambah").val("")
            $("#nama_pelanggan_tambah").val("");
            $("#telp_pelanggan_tambah").val("");
            $("#alamat_pelanggan_tambah").val("");
        });
        $('#btn-reset-editdatapelanggan').click(function(){
            $("#id_pelanggan_error_tambah").html("");
            $("#nama_pelanggan_error_tambah").html("");
            $("#telp_pelanggan_error_tambah").html("");
            $("#alamat_pelanggan_error_tambah").html("");
            $("#id_pelanggan_error").html("");
            $("#nama_pelanggan_error").html("");
            $("#telp_pelanggan_error").html("");
            $("#alamat_pelanggan_error").html("");
        });
    };

    var tambahDataPelanggan = function () {
        $('#btn-simpan-tambahdatapelanggan').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Pelanggan Ini',
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
                        id_pelanggan: $('#id_pelanggan_tambah').val(),
                        name: $('#nama_pelanggan_tambah').val(),
                        telp: $('#telp_pelanggan_tambah').val(),
                        alamat: $('#alamat_pelanggan_tambah').val(),
                    };
                    if(addData.id_pelanggan == ""){
                        $("#id_pelanggan_error_tambah").html("<strong>Data ID Pelanggan Kosong</strong>");
                        $("#nama_pelanggan_error_tambah").html("");
                        $("#telp_pelanggan_error_tambah").html("");
                        $("#alamat_pelanggan_error_tambah").html("");
                    }
                    else if(addData.name == ""){
                        $("#nama_pelanggan_error_tambah").html("<strong>Data Nama Kosong</strong>");
                        $("#id_pelanggan_error_tambah").html("");
                        $("#telp_pelanggan_error_tambah").html("");
                        $("#alamat_pelanggan_error_tambah").html("");
                    }
                    else if(addData.telp == ""){
                        $("#telp_pelanggan_error_tambah").html("<strong>Data Telepon Kosong</strong>");
                        $("#id_pelanggan_error_tambah").html("");
                        $("#nama_pelanggan_error_tambah").html("");
                        $("#alamat_pelanggan_error_tambah").html("");
                    }
                    else if(addData.alamat == ""){
                        $("#alamat_pelanggan_error_tambah").html("<strong>Data Alamat Kosong</strong>");
                        $("#id_pelanggan_error_tambah").html("");
                        $("#nama_pelanggan_error_tambah").html("");
                        $("#telp_pelanggan_error_tambah").html("");
                    }
                    else{
                        $("#id_pelanggan_error_tambah").html("");
                        $("#nama_pelanggan_error_tambah").html("");
                        $("#telp_pelanggan_error_tambah").html("");
                        $("#alamat_pelanggan_error_tambah").html("");
                        $.ajax({
                            url : "/datapelanggan/adddatapelanggan",
                            type : "POST",
                            data : addData,
                            success: function(res){
                                if(res == 'id_pelangganerr'){
                                    $("#id_pelanggan_error_tambah").html("<strong>Data ID Ada</strong>");
                                }else{
                                    $('#tabledatapelanggan').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Ditambahkan",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-tambah-datapelanggan').modal('hide');
                                    $("#id_pelanggan_tambah").val("")
                                    $("#nama_pelanggan_tambah").val("");
                                    $("#telp_pelanggan_tambah").val("");
                                    $("#alamat_pelanggan_tambah").val("");
                                }
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-tambah-datapelanggan').modal('hide');
                            }
                        })
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-tambah-datapelanggan').modal('hide');
                }
            });
        });
    };

    var getDataEditDataPelanggan = function(){
        $('#tabledatapelanggan').on('click', '#btn-edit-datapelanggan', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tabledatapelanggan').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            $('#id_pelanggan').val(data.id_pelanggan);
            $('#nama_pelanggan').val(data.name);
            $('#telp_pelanggan').val(data.telp);
            $('#alamat_pelanggan').val(data.alamat);
            $('#btn-simpan-editdatapelanggan').html('Simpan');
            $('#btn-reset-editdatapelanggan').html('Batal');
        });
    };

    var editDataPelanggan = function () {
        $('#btn-simpan-editdatapelanggan').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Pelanggan Ini',
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
                        id_pelanggan: $('#id_pelanggan').val(),
                        name: $('#nama_pelanggan').val(),
                        telp: $('#telp_pelanggan').val(),
                        alamat: $('#alamat_pelanggan').val(),
                    };
                    if(update.id_pelanggan == ""){
                        $("#id_pelanggan_error").html("<strong>Data ID Pelanggan Kosong</strong>");
                        $("#nama_pelanggan_error").html("");
                        $("#telp_pelanggan_error").html("");
                        $("#alamat_pelanggan_error").html("");
                    }
                    else if(update.name == ""){
                        $("#nama_pelanggan_error").html("<strong>Data Nama Kosong</strong>");
                        $("#id_pelanggan_error").html("");
                        $("#telp_pelanggan_error").html("");
                        $("#alamat_pelanggan_error").html("");
                    }
                    else if(update.telp == ""){
                        $("#telp_pelanggan_error").html("<strong>Data Telepon Kosong</strong>");
                        $("#id_pelanggan_error").html("");
                        $("#nama_pelanggan_error").html("");
                        $("#alamat_pelanggan_error").html("");
                    }
                    else if(update.alamat == ""){
                        $("#alamat_pelanggan_error").html("<strong>Data Alamat Kosong</strong>");
                        $("#id_pelanggan_error").html("");
                        $("#nama_pelanggan_error").html("");
                        $("#telp_pelanggan_error").html("");
                    }
                    else{
                        $("#id_pelanggan_error").html("");
                        $("#nama_pelanggan_error").html("");
                        $("#telp_pelanggan_error").html("");
                        $("#alamat_pelanggan_error").html("");
                        $.ajax({
                            url : "/datapelanggan/updatedatapelanggan",
                            type : "POST",
                            data : update,
                            success: function(res){
                                if(res == 'id_pelangganerr'){
                                    $("#id_pelanggan_error").html("<strong>Data ID Ada</strong>");
                                }else{
                                    $('#tabledatapelanggan').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Diubah",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-edit-datapelanggan').modal('hide');
                                }
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-edit-datapelanggan').modal('hide');
                            }
                        });
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-edit-datapelanggan').modal('hide');
                }
            });
        });
    };

    var deleteDataPelanggan = function () {
        $('#tabledatapelanggan').on('click', '#btn-hapus-datapelanggan', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tabledatapelanggan').DataTable();
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
                        url : "/datapelanggan/deletedatapelanggan",
                        type : "DELETE",
                        data : delData,
                        success: function(){
                            $('#tabledatapelanggan').DataTable().ajax.reload();
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
            getDataPelanggan();
            resetData();
            tambahDataPelanggan();
            getDataEditDataPelanggan();
            editDataPelanggan();
            deleteDataPelanggan();
        }
    };
}();
$(document).ready(function(){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    datapelanggan.init();
});