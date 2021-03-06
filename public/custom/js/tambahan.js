var mastertambahan = function () {
    var getMasterTambahan = function(){
        $(".card-body").LoadingOverlay("show", {
            image: "../custom/img/loading2.gif"
        });
        var t = $('#tablemastertambahan').DataTable({
            'ajax': {
                'url': '/pemakaian/getmastertambahan',
                'dataSrc': '',
                'complete': function () {
                    $(".card-body").LoadingOverlay("hide");
                }
            },
            'columns': [
                { 'data': 'id'},
                { 'data': 'id_tambahan'},
                { 'data': 'name'},
                { 'data': 'akunperkiraan' },
                { 
                    'data': 'harga', 
                    'render': $.fn.dataTable.render.number( '.', ',', 2, 'Rp' )
                
                },
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

    var getDropAkunperkiraan = function(){
        $(".akun_tambahan_tambah").select2();
        $.ajax({
            type: 'GET',
            url: '/pemakaian/getdropakunperkiraan',
            contentType: 'application/json;charset=utf-8',
            async: false,
            success: function (data) {
                $('#akun_tambahan_tambah').append(
                    '<option value="0" selected>Pilih Akun Perkiraan</option>'
                );
                data.forEach(function(entry) {
                    $('#akun_tambahan_tambah').append(
                        '<option value="'+ entry.id +'">'+ entry.name +'</option>'
                    );
                });
            }
        })
    };

    var tambahMasterTambahan = function () {
        $('#btn-simpan-tambahmastertambahan').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Tambahan Ini',
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
                        id_tambahan: $('#id_tambahan_tambah').val(),
                        name: $('#nama_tambahan_tambah').val(),
                        akunperkiraan: $('#akun_tambahan_tambah').val(),
                        harga: $('#harga_tambahan_tambah').val(),
                    };
                    if(addData.id_tambahan == ""){
                        $("#id_tambahan_error_tambah").html("<strong>Data ID Tambahan Kosong</strong>");
                        $("#nama_tambahan_error_tambah").html("");
                        $("#akun_tambahan_error_tambah").html("");
                        $("#harga_tambahan_error_tambah").html("");
                    }
                    else if(addData.name == ""){
                        $("#nama_tambahan_error_tambah").html("<strong>Data Nama Kosong</strong>");
                        $("#id_tambahan_error_tambah").html("");
                        $("#akun_tambahan_error_tambah").html("");
                        $("#harga_tambahan_error_tambah").html("");
                    }
                    else if(addData.akunperkiraan == ""){
                        $("#akun_tambahan_error_tambah").html("<strong>Data Akun Perkiraan Kosong</strong>");
                        $("#id_tambahan_error_tambah").html("");
                        $("#nama_tambahan_error_tambah").html("");
                        $("#harga_tambahan_error_tambah").html("");
                    }
                    else if(addData.harga == ""){
                        $("#harga_tambahan_error_tambah").html("<strong>Data Harga Kosong</strong>");
                        $("#id_tambahan_error_tambah").html("");
                        $("#nama_tambahan_error_tambah").html("");
                        $("#akun_tambahan_error_tambah").html("");
                    }
                    else{
                        $("#id_tambahan_error_tambah").html("");
                        $("#nama_tambahan_error_tambah").html("");
                        $("#akun_tambahan_error_tambah").html("");
                        $("#harga_tambahan_error_tambah").html("");
                        $.ajax({
                            url : "/pemakaian/addmastertambahan",
                            type : "POST",
                            data : addData,
                            success: function(res){
                                if(res == 'id_tambahanerr'){
                                    $("#id_tambahan_error_tambah").html("<strong>Data ID Ada</strong>");
                                }else{
                                    $('#tablemastertambahan').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Ditambahkan",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-tambah-mastertambahan').modal('hide');
                                    $("#id_tambahan_tambah").val("")
                                    $("#nama_tambahan_tambah").val("");
                                    $("#akunperkiraan_tambahan_tambah").val("");
                                    $("#harga_tambahan_tambah").val("");
                                }
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-tambah-mastertambahan').modal('hide');
                            }
                        })
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-tambah-mastertambahan').modal('hide');
                }
            });
        });
    };

    var getDataEditMasterTambahan = function(){
        $('#tablemastertambahan').on('click', '#btn-edit-mastertambahan', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tablemastertambahan').DataTable();
            var data = table.row(baris).data();
            idtambahan = data.id;
            $('#nama_tambahan').val(data.name);
            akunperkiraan = data.akunperkiraan;
            $('#harga_tambahan').val(data.harga);
            getDropEditAkunPerkiraan();
            $('#btn-simpan-editmastertambahan').html('Simpan');
            $('#btn-reset-editmastertambahan').html('Batal');
        });
    };

    var getDropEditAkunPerkiraan = function(){
        $(".akun_tambahan").select2();
        $.ajax({
            type: 'GET',
            url: '/pemakaian/getdropeditakunperkiraan',
            contentType: 'application/json;charset=utf-8',
            data: {
                akunperkiraan : akunperkiraan
            },
            async: false,
            success: function (data) {
                $('#akun_tambahan').append(
                    '<option value="'+ idtambahan +'" selected>'+ akunperkiraan +'</option>'
                );
                data.forEach(function(entry) {
                    console.log(entry.name);
                    $('#akun_tambahan').append(
                        '<option value="'+ entry.id +'">'+ entry.name +'</option>'
                    );
                });
            }
        })
    };

    var editDataMasterTambahan = function () {
        $('#btn-simpan-editmastertambahan').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Master Tambahan Ini',
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
                        name: $('#nama_tambahan').val(),
                        akunperkiraan: $('#akun_tambahan').val(),
                        harga: $('#harga_tambahan').val(),
                    };
                    if(update.name == ""){
                        $("#nama_tambahan_error").html("<strong>Data Nama Kosong</strong>");
                    } else if(update.akunperkiraan == ""){
                        $("#akun_tambahan_error").html("<strong>Data Akun Perkiraan Kosong</strong>");
                    } else if(update.harga == ""){
                        $("#harga_tambahan_error").html("<strong>Data Harga Kosong</strong>");
                    }
                    else{
                        $("#nama_tambahan_error").html("");
                        $.ajax({
                            url : "/pemakaian/updatemastertambahan",
                            type : "POST",
                            data : update,
                            success: function(){
                                $('#tablemastertambahan').DataTable().ajax.reload();
                                swal({
                                    title: "Success!",
                                    text : "Data Berhasil Diubah",
                                    confirmButtonColor: "#66BB6A",
                                    type : "success",
                                });
                                $('#form-edit-mastertambahan').modal('hide');
                            },
                            error : function(data){
                                swal({
                                    title: 'Error',
                                    text : data.message,
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-edit-mastertambahan').modal('hide');
                            }
                        });
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-edit-mastertambahan').modal('hide');
                }
            });
        });
    };

    return {
        init: function () {
            getMasterTambahan();
            // resetData();
            getDropAkunperkiraan();
            tambahMasterTambahan();
            getDataEditMasterTambahan();
            editDataMasterTambahan();
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