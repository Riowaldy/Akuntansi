var datasupplier = function () {
    var getDataSupplier = function(){
        var t = $('#tabledatasupplier').DataTable({
            'ajax': {
                'url': '/datasupplier/getdatasupplier',
                'dataSrc': '',
                'complete': function () {
                    $( "#loading" ).hide();
                }
            },
            'columns': [
                { 'data': 'id'},
                { 'data': 'id_supplier'},
                { 'data': 'name' },
                { 'data': 'telp' },
                { 'data': 'alamat'},
                {
                    'render': function (data, type, full, meta) {
                        var html = '';
                        html += '<div class="text-center">';
                        html += '<div class="btn-group btn-group-solid">';
                        html += '<a href="#edit" class="btn btn-primary btn-raised btn-xs" data-toggle="modal" data-target="#form-edit-datasupplier" id="btn-edit-datasupplier" title="Ubah Data"><i class="fas fa-edit"></i></a>';
                        //html += '<a href="#hapus" class="btn btn-danger btn-raised btn-xs" id="btn-hapus-datasupplier" title="Hapus Data"><i class="fas fa-trash"></i></a>';
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
        $('#btn-reset-simpandatasupplier').click(function(){
            $("#id_supplier_error_tambah").html("");
            $("#nama_supplier_error_tambah").html("");
            $("#telp_supplier_error_tambah").html("");
            $("#alamat_supplier_error_tambah").html("");
            $("#id_supplier_error").html("");
            $("#nama_supplier_error").html("");
            $("#telp_supplier_error").html("");
            $("#alamat_supplier_error").html("");
            $("#id_supplier_tambah").val("")
            $("#nama_supplier_tambah").val("");
            $("#telp_supplier_tambah").val("");
            $("#alamat_supplier_tambah").val("");
        });
        $('#btn-reset-editdatasupplier').click(function(){
            $("#id_supplier_error_tambah").html("");
            $("#nama_supplier_error_tambah").html("");
            $("#telp_supplier_error_tambah").html("");
            $("#alamat_supplier_error_tambah").html("");
            $("#id_supplier_error").html("");
            $("#nama_supplier_error").html("");
            $("#telp_supplier_error").html("");
            $("#alamat_supplier_error").html("");
        });
    };

    var tambahDataSupplier = function () {
        $('#btn-simpan-tambahdatasupplier').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Supplier Ini',
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
                        id_supplier: $('#id_supplier_tambah').val(),
                        name: $('#nama_supplier_tambah').val(),
                        telp: $('#telp_supplier_tambah').val(),
                        alamat: $('#alamat_supplier_tambah').val(),
                    };
                    if(addData.id_supplier == ""){
                        $("#id_supplier_error_tambah").html("<strong>Data ID Supplier Kosong</strong>");
                        $("#nama_supplier_error_tambah").html("");
                        $("#telp_supplier_error_tambah").html("");
                        $("#alamat_supplier_error_tambah").html("");
                    }
                    else if(addData.name == ""){
                        $("#nama_supplier_error_tambah").html("<strong>Data Nama Kosong</strong>");
                        $("#id_supplier_error_tambah").html("");
                        $("#telp_supplier_error_tambah").html("");
                        $("#alamat_supplier_error_tambah").html("");
                    }
                    else if(addData.telp == ""){
                        $("#telp_supplier_error_tambah").html("<strong>Data Telepon Kosong</strong>");
                        $("#id_supplier_error_tambah").html("");
                        $("#nama_supplier_error_tambah").html("");
                        $("#alamat_supplier_error_tambah").html("");
                    }
                    else if(addData.alamat == ""){
                        $("#alamat_supplier_error_tambah").html("<strong>Data Alamat Kosong</strong>");
                        $("#id_supplier_error_tambah").html("");
                        $("#nama_supplier_error_tambah").html("");
                        $("#telp_supplier_error_tambah").html("");
                    }
                    else{
                        $("#id_supplier_error_tambah").html("");
                        $("#nama_supplier_error_tambah").html("");
                        $("#telp_supplier_error_tambah").html("");
                        $("#alamat_supplier_error_tambah").html("");
                        $.ajax({
                            url : "/datasupplier/adddatasupplier",
                            type : "POST",
                            data : addData,
                            success: function(res){
                                if(res == 'id_suppliererr'){
                                    $("#id_supplier_error_tambah").html("<strong>Data ID Ada</strong>");
                                }else{
                                    $('#tabledatasupplier').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Ditambahkan",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-tambah-datasupplier').modal('hide');
                                    $("#id_supplier_tambah").val("")
                                    $("#nama_supplier_tambah").val("");
                                    $("#telp_supplier_tambah").val("");
                                    $("#alamat_supplier_tambah").val("");
                                }
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-tambah-datasupplier').modal('hide');
                            }
                        })
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-tambah-datasupplier').modal('hide');
                }
            });
        });
    };

    var getDataEditDataSupplier = function(){
        $('#tabledatasupplier').on('click', '#btn-edit-datasupplier', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tabledatasupplier').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            $('#id_supplier').val(data.id_supplier);
            $('#nama_supplier').val(data.name);
            $('#telp_supplier').val(data.telp);
            $('#alamat_supplier').val(data.alamat);
            $('#btn-simpan-editdatasupplier').html('Simpan');
            $('#btn-reset-editdatasupplier').html('Batal');
        });
    };

    var editDataSupplier = function () {
        $('#btn-simpan-editdatasupplier').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Supplier Ini',
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
                        id_supplier: $('#id_supplier').val(),
                        name: $('#nama_supplier').val(),
                        telp: $('#telp_supplier').val(),
                        alamat: $('#alamat_supplier').val(),
                    };
                    if(update.id_supplier == ""){
                        $("#id_supplier_error").html("<strong>Data ID Supplier Kosong</strong>");
                        $("#nama_supplier_error").html("");
                        $("#telp_supplier_error").html("");
                        $("#alamat_supplier_error").html("");
                    }
                    else if(update.name == ""){
                        $("#nama_supplier_error").html("<strong>Data Nama Kosong</strong>");
                        $("#id_supplier_error").html("");
                        $("#telp_supplier_error").html("");
                        $("#alamat_supplier_error").html("");
                    }
                    else if(update.telp == ""){
                        $("#telp_supplier_error").html("<strong>Data Telepon Kosong</strong>");
                        $("#id_supplier_error").html("");
                        $("#nama_supplier_error").html("");
                        $("#alamat_supplier_error").html("");
                    }
                    else if(update.alamat == ""){
                        $("#alamat_supplier_error").html("<strong>Data Alamat Kosong</strong>");
                        $("#id_supplier_error").html("");
                        $("#nama_supplier_error").html("");
                        $("#telp_supplier_error").html("");
                    }
                    else{
                        $("#id_supplier_error").html("");
                        $("#nama_supplier_error").html("");
                        $("#telp_supplier_error").html("");
                        $("#alamat_supplier_error").html("");
                        $.ajax({
                            url : "/datasupplier/updatedatasupplier",
                            type : "POST",
                            data : update,
                            success: function(res){
                                if(res == 'id_suppliererr'){
                                    $("#id_supplier_error").html("<strong>Data ID Ada</strong>");
                                }else{
                                    $('#tabledatasupplier').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Diubah",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-edit-datasupplier').modal('hide');
                                }
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-edit-datasupplier').modal('hide');
                            }
                        });
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-edit-datasupplier').modal('hide');
                }
            });
        });
    };

    var deleteDataSupplier = function () {
        $('#tabledatasupplier').on('click', '#btn-hapus-datasupplier', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tabledatasupplier').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menghapus Data Supplier Ini',
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
                        url : "/datasupplier/deletedatasupplier",
                        type : "DELETE",
                        data : delData,
                        success: function(){
                            $('#tabledatasupplier').DataTable().ajax.reload();
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
            getDataSupplier();
            resetData();
            tambahDataSupplier();
            getDataEditDataSupplier();
            editDataSupplier();
            deleteDataSupplier();
        }
    };
}();
$(document).ready(function(){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    datasupplier.init();
});