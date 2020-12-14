var akunperkiraan = function () {
    var getAkunPerkiraan = function(){
        $(".card-body").LoadingOverlay("show", {
            image: "../custom/img/loading2.gif"
        });
        var t = $('#tableakunperkiraan').DataTable({
            'ajax': {
                'url': '/akunperkiraan/getakunperkiraan',
                'dataSrc': '',
                'complete': function () {
                    $(".card-body").LoadingOverlay("hide");
                }
            },
            'columns': [
                { 'data': 'id'},
                { 'data': 'id_akunperkiraan'},
                { 'data': 'name'},
                { 'data': 'tipe' },
                {
                    'render': function (data, type, full, meta) {
                        var html = '';
                        html += '<div class="text-center">';
                        html += '<div class="btn-group btn-group-solid">';
                        html += '<a href="#edit" class="btn btn-primary btn-raised btn-xs" data-toggle="modal" data-target="#form-edit-akunperkiraan" id="btn-edit-akunperkiraan" title="Ubah Data"><i class="fas fa-edit"></i></a>';
                        // html += '<a href="#hapus" class="btn btn-danger btn-raised btn-xs" id="btn-hapus-akunperkiraan" title="Hapus Data"><i class="fas fa-trash"></i></a>';
                        html += '</div>';
                        html += '</div>';
                        return html;
                    }
                }
            ],
            "order": [],
            "columnDefs": [
                { "orderable": false, "targets": [0,4] }
            ]
        });
        t.on( 'order.dt search.dt', function () {
            t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                cell.innerHTML = i+1;
            } );
        } ).draw();
    };

    var resetData = function(){
        $('#btn-reset-simpanakunperkiraan').click(function(){
            $("#id_akunperkiraan_error_tambah").html("");
            $("#nama_akunperkiraan_error_tambah").html("");
            $("#tipe_akunperkiraan_error_tambah").html("");
            $("#id_akunperkiraan_error").html("");
            $("#nama_akunperkiraan_error").html("");
            $("#tipe_akunperkiraan_error").html("");
            $("#id_akunperkiraan_tambah").val("")
            $("#nama_akunperkiraan_tambah").val("");
            $("#tipe_akunperkiraan_tambah").val("");
            $("#id_akunperkiraan").val("");
            $("#nama_akunperkiraan").val("");
            $("#tipe_akunperkiraan").val("");
        });
        $('#btn-reset-editakunperkiraan').click(function(){
            $("#id_akunperkiraan_error_tambah").html("");
            $("#nama_akunperkiraan_error_tambah").html("");
            $("#tipe_akunperkiraan_error_tambah").html("");
            $("#id_akunperkiraan_error").html("");
            $("#nama_akunperkiraan_error").html("");
            $("#tipe_akunperkiraan_error").html("");
            $("#id_akunperkiraan_tambah").val("")
            $("#nama_akunperkiraan_tambah").val("");
            $("#tipe_akunperkiraan_tambah").val("");
            $("#id_akunperkiraan").val("");
            $("#nama_akunperkiraan").val("");
            $("#tipe_akunperkiraan").val("");
        });
    }
    var tambahAkunPerkiraan = function () {
        $('#btn-simpan-tambahakunperkiraan').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Akun Perkiraan Ini',
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
                        id_akunperkiraan: $('#id_akunperkiraan_tambah').val(),
                        name: $('#nama_akunperkiraan_tambah').val(),
                        tipe: $('#tipe_akunperkiraan_tambah').val(),
                    };
                    if(addData.id_akunperkiraan == ""){
                        $("#id_akunperkiraan_error_tambah").html("<strong>Data ID Kosong</strong>");
                        $("#nama_akunperkiraan_error_tambah").html("");
                        $("#tipe_akunperkiraan_error_tambah").html("");
                    }
                    else if(addData.name == ""){
                        $("#nama_akunperkiraan_error_tambah").html("<strong>Data Nama Kosong</strong>");
                        $("#id_akunperkiraan_error_tambah").html("");
                        $("#tipe_akunperkiraan_error_tambah").html("");
                    }
                    else if(addData.tipe == ""){
                        $("#tipe_akunperkiraan_error_tambah").html("<strong>Data Tipe Kosong</strong>");
                        $("#id_akunperkiraan_error_tambah").html("");
                        $("#nama_akunperkiraan_error_tambah").html("");
                    }
                    else{
                        $("#id_akunperkiraan_error_tambah").html("");
                        $("#nama_akunperkiraan_error_tambah").html("");
                        $("#tipe_akunperkiraan_error_tambah").html("");
                        $.ajax({
                            url : "/akunperkiraan/addakunperkiraan",
                            type : "POST",
                            data : addData,
                            success: function(res){
                                if(res == 'id_akunperkiraanerr'){
                                    $("#id_akunperkiraan_error_tambah").html("<strong>Data ID Ada</strong>");
                                }else{
                                    $('#tableakunperkiraan').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Ditambahkan",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-tambah-akunperkiraan').modal('hide');
                                    $("#id_akunperkiraan_tambah").val("");
                                    $("#nama_akunperkiraan_tambah").val("");
                                    $("#tipe_akunperkiraan_tambah").val("");
                                }
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-tambah-akunperkiraan').modal('hide');
                            }
                        })
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-tambah-akunperkiraan').modal('hide');
                }
            });
        });
    };

    var getDataEditAkunPerkiraan = function(){
        $('#tableakunperkiraan').on('click', '#btn-edit-akunperkiraan', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tableakunperkiraan').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            $('#id_akunperkiraan').val(data.id_akunperkiraan);
            $('#nama_akunperkiraan').val(data.name);
            $('#tipe_akunperkiraan').val(data.tipe);
            $('#btn-simpan-editakunperkiraan').html('Simpan');
            $('#btn-reset-editakunperkiraan').html('Batal');
        });
    };

    var editAkunPerkiraan = function () {
        $('#btn-simpan-editakunperkiraan').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Akun Perkiraan Ini',
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
                        id_akunperkiraan: $('#id_akunperkiraan').val(),
                        name: $('#nama_akunperkiraan').val(),
                        tipe: $('#tipe_akunperkiraan').val(),
                    };
                    if(update.id_akunperkiraan == ""){
                        $("#id_akunperkiraan_error").html("<strong>Data ID Kosong</strong>");
                        $("#nama_akunperkiraan_error").html("");
                        $("#tipe_akunperkiraan_error").html("");
                    }
                    else if(update.name == ""){
                        $("#nama_akunperkiraan_error").html("<strong>Data Nama Kosong</strong>");
                        $("#id_akunperkiraan_error").html("");
                        $("#tipe_akunperkiraan_error").html("");
                    }
                    else if(update.tipe == ""){
                        $("#tipe_akunperkiraan_error").html("<strong>Data Tipe Kosong</strong>");
                        $("#id_akunperkiraan_error").html("");
                        $("#nama_akunperkiraan_error").html("");
                    }
                    else{
                        $("#id_akunperkiraan_error").html("");
                        $("#nama_akunperkiraan_error").html("");
                        $("#tipe_akunperkiraan_error").html("");
                        $.ajax({
                            url : "/akunperkiraan/updateakunperkiraan",
                            type : "POST",
                            data : update,
                            success: function(res){
                                if(res == 'id_akunperkiraanerr'){
                                    $("#id_akunperkiraan_error").html("<strong>Data ID Ada</strong>");
                                }else{
                                    $('#tableakunperkiraan').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Diubah",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-edit-akunperkiraan').modal('hide');
                                }
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-edit-akunperkiraan').modal('hide');
                            }
                        });
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-edit-akunperkiraan').modal('hide');
                }
            });
        });
    };

    var deleteAkunPerkiraan = function () {
        $('#tableakunperkiraan').on('click', '#btn-hapus-akunperkiraan', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tableakunperkiraan').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menghapus Data Akun Perkiraan Ini',
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
                        url : "/akunperkiraan/deleteakunperkiraan",
                        type : "DELETE",
                        data : delData,
                        success: function(){
                            $('#tableakunperkiraan').DataTable().ajax.reload();
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
            getAkunPerkiraan();
            resetData();
            tambahAkunPerkiraan();
            getDataEditAkunPerkiraan();
            editAkunPerkiraan();
            deleteAkunPerkiraan();
        }
    };
}();
$(document).ready(function(){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    akunperkiraan.init();
});