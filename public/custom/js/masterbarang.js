var masterbarang = function () {
    var getMasterBarang = function(){
        var t = $('#tablemasterbarang').DataTable({
            'ajax': {
                'url': '/masterbarang/getmasterbarang',
                'dataSrc': '',
                'complete': function () {
                    $( "#loading" ).hide();
                }
            },
            'columns': [
                { 'data': 'id'},
                { 'data': 'id_barang'},
                { 'data': 'name'},
                { 'data': 'harga' },
                { 'data': 'terjual' },
                { 'data': 'satuan'},
                {
                    'render': function (data, type, full, meta) {
                        var html = '';
                        html += '<div class="text-center">';
                        html += '<div class="btn-group btn-group-solid">';
                        html += '<a href="#edit" class="btn btn-primary btn-raised btn-xs" data-toggle="modal" data-target="#form-edit-masterbarang" id="btn-edit-masterbarang" title="Ubah Data"><i class="fas fa-edit"></i></a>';
                        html += '<a href="#hapus" class="btn btn-danger btn-raised btn-xs" id="btn-hapus-masterbarang" title="Hapus Data"><i class="fas fa-trash"></i></a>';
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
        $('#btn-reset-simpanmasterbarang').click(function(){
            $("#id_barang_error_tambah").html("");
            $("#nama_barang_error_tambah").html("");
            $("#terjual_barang_error_tambah").html("");
            $("#harga_barang_error_tambah").html("");
            $("#satuan_barang_error_tambah").html("");
            $("#id_barang_error").html("");
            $("#nama_barang_error").html("");
            $("#harga_barang_error").html("");
            $("#terjual_barang_error").html("");
            $("#satuan_barang_error").html("");
            $("#id_barang_tambah").val("")
            $("#nama_barang_tambah").val("");
            $("#terjual_barang_tambah").val("");
            $("#harga_barang_tambah").val("");
            $("#satuan_barang_tambah").val("");
            $("#id_barang").val("")
            $("#nama_barang").val("");
            $("#terjual_barang").val("");
            $("#harga_barang").val("");
            $("#satuan_barang").val("");
        });
        $('#btn-reset-editmasterbarang').click(function(){
            $("#id_barang_error_tambah").html("");
            $("#nama_barang_error_tambah").html("");
            $("#terjual_barang_error_tambah").html("");
            $("#harga_barang_error_tambah").html("");
            $("#satuan_barang_error_tambah").html("");
            $("#id_barang_error").html("");
            $("#nama_barang_error").html("");
            $("#harga_barang_error").html("");
            $("#terjual_barang_error").html("");
            $("#satuan_barang_error").html("");
            $("#id_barang_tambah").val("")
            $("#nama_barang_tambah").val("");
            $("#terjual_barang_tambah").val("");
            $("#harga_barang_tambah").val("");
            $("#satuan_barang_tambah").val("");
            $("#id_barang").val("")
            $("#nama_barang").val("");
            $("#terjual_barang").val("");
            $("#harga_barang").val("");
            $("#satuan_barang").val("");
        });
    };

    var tambahMasterBarang = function () {
        $('#btn-simpan-tambahmasterbarang').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Barang Ini',
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
                        id_barang: $('#id_barang_tambah').val(),
                        name: $('#nama_barang_tambah').val(),
                        harga: $('#harga_barang_tambah').val(),
                        terjual: $('#terjual_barang_tambah').val(),
                        satuan: $('#satuan_barang_tambah').val(),
                    };
                    if(addData.id_barang == ""){
                        $("#id_barang_error_tambah").html("<strong>Data ID Barang Kosong</strong>");
                        $("#nama_barang_error_tambah").html("");
                        $("#harga_barang_error_tambah").html("");
                        $("#terjual_barang_error_tambah").html("");
                        $("#satuan_barang_error_tambah").html("");
                    }
                    else if(addData.name == ""){
                        $("#nama_barang_error_tambah").html("<strong>Data Nama Kosong</strong>");
                        $("#id_barang_error_tambah").html("");
                        $("#harga_barang_error_tambah").html("");
                        $("#terjual_barang_error_tambah").html("");
                        $("#satuan_barang_error_tambah").html("");
                    }
                    else if(addData.harga == ""){
                        $("#harga_barang_error_tambah").html("<strong>Data Harga Kosong</strong>");
                        $("#id_barang_error_tambah").html("");
                        $("#nama_barang_error_tambah").html("");
                        $("#terjual_barang_error_tambah").html("");
                        $("#satuan_barang_error_tambah").html("");
                    }
                    else if(addData.harga == ""){
                        $("#terjual_barang_error_tambah").html("<strong>Data Terjual Kosong</strong>");
                        $("#id_barang_error_tambah").html("");
                        $("#nama_barang_error_tambah").html("");
                        $("#harga_barang_error_tambah").html("");
                        $("#satuan_barang_error_tambah").html("");
                    }
                    else if(addData.satuan == ""){
                        $("#satuan_barang_error_tambah").html("<strong>Data Satuan Kosong</strong>");
                        $("#id_barang_error_tambah").html("");
                        $("#nama_barang_error_tambah").html("");
                        $("#terjual_barang_error_tambah").html("");
                        $("#harga_barang_error_tambah").html("");
                    }
                    else{
                        $("#id_barang_error_tambah").html("");
                        $("#nama_barang_error_tambah").html("");
                        $("#terjual_barang_error_tambah").html("");
                        $("#harga_barang_error_tambah").html("");
                        $("#satuan_barang_error_tambah").html("");
                        $.ajax({
                            url : "/masterbarang/addmasterbarang",
                            type : "POST",
                            data : addData,
                            success: function(res){
                                if(res == 'id_barangerr'){
                                    $("#id_barang_error_tambah").html("<strong>Data ID Ada</strong>");
                                }else{
                                    $('#tablemasterbarang').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Ditambahkan",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-tambah-masterbarang').modal('hide');
                                    $("#id_barang_tambah").val("")
                                    $("#nama_barang_tambah").val("");
                                    $("#terjual_barang_tambah").val("");
                                    $("#harga_barang_tambah").val("");
                                    $("#satuan_barang_tambah").val("");
                                }
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-tambah-masterbarang').modal('hide');
                            }
                        })
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-tambah-masterbarang').modal('hide');
                }
            });
        });
    };

    var getDataEditMasterBarang = function(){
        $('#tablemasterbarang').on('click', '#btn-edit-masterbarang', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tablemasterbarang').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            $('#id_barang').val(data.id_barang);
            $('#nama_barang').val(data.name);
            $('#harga_barang').val(data.harga);
            $('#terjual_barang').val(data.terjual);
            $('#satuan_barang').val(data.satuan);
            $('#btn-simpan-editmasterbarang').html('Simpan');
            $('#btn-reset-editmasterbarang').html('Batal');
        });
    };

    var editMasterBarang = function () {
        $('#btn-simpan-editmasterbarang').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Barang Ini',
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
                        id_barang: $('#id_barang').val(),
                        name: $('#nama_barang').val(),
                        harga: $('#harga_barang').val(),
                        terjual: $('#terjual_barang').val(),
                        satuan: $('#satuan_barang').val(),
                    };
                    if(update.id_barang == ""){
                        $("#id_barang_error").html("<strong>Data ID Barang Kosong</strong>");
                        $("#nama_barang_error").html("");
                        $("#harga_barang_error").html("");
                        $("#terjual_barang_error").html("");
                        $("#satuan_barang_error").html("");
                    }
                    else if(update.name == ""){
                        $("#nama_barang_error").html("<strong>Data Nama Kosong</strong>");
                        $("#id_barang_error").html("");
                        $("#harga_barang_error").html("");
                        $("#terjual_barang_error").html("");
                        $("#satuan_barang_error").html("");
                    }
                    else if(update.harga == ""){
                        $("#harga_barang_error").html("<strong>Data Harga Kosong</strong>");
                        $("#id_barang_error").html("");
                        $("#nama_barang_error").html("");
                        $("#terjual_barang_error").html("");
                        $("#satuan_barang_error").html("");
                    }
                    else if(update.terjual == ""){
                        $("#terjual_barang_error").html("<strong>Data Terjual Kosong</strong>");
                        $("#id_barang_error").html("");
                        $("#nama_barang_error").html("");
                        $("#harga_barang_error").html("");
                        $("#satuan_barang_error").html("");
                    }
                    else if(update.satuan == ""){
                        $("#satuan_barang_error").html("<strong>Data Satuan Kosong</strong>");
                        $("#id_barang_error").html("");
                        $("#nama_barang_error").html("");
                        $("#harga_barang_error").html("");
                        $("#terjual_barang_error").html("");
                    }
                    else{
                        $("#id_barang_error").html("");
                        $("#nama_barang_error").html("");
                        $("#harga_barang_error").html("");
                        $("#terjual_barang_error").html("");
                        $("#satuan_barang_error").html("");
                        $.ajax({
                            url : "/masterbarang/updatemasterbarang",
                            type : "POST",
                            data : update,
                            success: function(res){
                                if(res == 'id_barangerr'){
                                    $("#id_barang_error").html("<strong>Data ID Ada</strong>");
                                }else{
                                    $('#tablemasterbarang').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Diubah",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-edit-masterbarang').modal('hide');
                                }
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-edit-masterbarang').modal('hide');
                            }
                        });
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-edit-masterbarang').modal('hide');
                }
            });
        });
    };

    var deleteMasterBarang = function () {
        $('#tablemasterbarang').on('click', '#btn-hapus-masterbarang', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tablemasterbarang').DataTable();
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
                        url : "/masterbarang/deletemasterbarang",
                        type : "DELETE",
                        data : delData,
                        success: function(){
                            $('#tablemasterbarang').DataTable().ajax.reload();
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
            getMasterBarang();
            resetData();
            tambahMasterBarang();
            getDataEditMasterBarang();
            editMasterBarang();
            deleteMasterBarang();
        }
    };
}();
$(document).ready(function(){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    masterbarang.init();
});