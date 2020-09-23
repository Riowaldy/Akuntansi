var settinguser = function () {
    var getDataSettingUser = function(){
        var t = $('#tablesettinguser').DataTable({
            'ajax': {
                'url': '/settinguser/getsettinguser',
                'dataSrc': '',
                'complete': function () {
                    $( "#loading" ).hide();
                }
            },
            'columns': [
                { 'data': 'id'},
                { 'data': 'name' },
                { 'data': 'email' },
                {
                    'render': function (data, type, full, meta) {
                        var html = '';
                        html += '<div class="text-center">';
                        html += '<div class="btn-group btn-group-solid">';
                        html += '<a href="#edit" class="btn btn-primary btn-raised btn-xs" data-toggle="modal" data-target="#form-edit-settinguser" id="btn-edit-settinguser" title="Ubah Data"><i class="fas fa-edit"></i></a>';
                        //html += '<a href="#hapus" class="btn btn-danger btn-raised btn-xs" id="btn-hapus-settinguser" title="Hapus Data"><i class="fas fa-trash"></i></a>';
                        html += '</div>';
                        html += '</div>';
                        return html;
                    }
                }
            ],
            "order": [],
            "columnDefs": [
                { "orderable": false, "targets": [0,3] }
            ]
        });
        t.on( 'order.dt search.dt', function () {
            t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                cell.innerHTML = i+1;
            } );
        } ).draw();
    };

    var resetData = function(){
        $('#btn-reset-simpansettinguser').click(function(){
            $("#nama_user_error_tambah").html("");
            $("#email_user_error_tambah").html("");
            $("#password_user_error_tambah").html("");
            $("#nama_user_error").html("");
            $("#email_user_error").html("");
        });
        $('#btn-reset-editsettinguser').click(function(){
            $("#nama_user_error_tambah").html("");
            $("#email_user_error_tambah").html("");
            $("#password_user_error_tambah").html("");
            $("#nama_user_error").html("");
            $("#email_user_error").html("");
        });
    };

    var tambahDataSettingUser = function () {
        $('#btn-simpan-tambahsettinguser').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data User Ini',
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
                        name: $('#nama_user_tambah').val(),
                        email: $('#email_user_tambah').val(),
                        password: $('#password_user_tambah').val(),
                    };
                    function validateEmail(dataEmail) {
                        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return re.test(dataEmail);
                    }
                    const email = addData.email;
                    if(addData.name == ""){
                        $("#nama_user_error_tambah").html("<strong>Data Nama Kosong</strong>");
                        $("#email_user_error_tambah").html("");
                        $("#password_user_error_tambah").html("");
                    }
                    else if(addData.email == ""){
                        $("#email_user_error_tambah").html("<strong>Data Email Kosong</strong>");
                        $("#nama_user_error_tambah").html("");
                        $("#password_user_error_tambah").html("");
                    }
                    else if(!validateEmail(email)){
                        $("#email_user_error_tambah").html("<strong>Data Email Tidak Valid</strong>");
                        $("#nama_user_error_tambah").html("");
                        $("#password_user_error_tambah").html("");
                    }
                    else if(addData.password == ""){
                        $("#password_user_error_tambah").html("<strong>Data Password Kosong</strong>");
                        $("#nama_user_error_tambah").html("");
                        $("#email_user_error_tambah").html("");
                    }
                    else if((addData.password).length < 6){
                        $("#password_user_error_tambah").html("<strong>Data Password Kurang Dari 6</strong>");
                        $("#nama_user_error_tambah").html("");
                        $("#email_user_error_tambah").html("");
                    }
                    else{
                        $("#nama_user_error_tambah").html("");
                        $("#email_user_error_tambah").html("");
                        $("#password_user_error_tambah").html("");
                        $.ajax({
                            url : "/settinguser/addsettinguser",
                            type : "POST",
                            data : addData,
                            success: function(res){
                                if(res == 'emailerr'){
                                    $("#email_user_error_tambah").html("<strong>Data Email Sudah Ada</strong>");
                                }else{
                                    $('#tablesettinguser').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Ditambahkan",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-tambah-settinguser').modal('hide');
                                }
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-tambah-settinguser').modal('hide');
                            }
                        })
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-tambah-settinguser').modal('hide');
                }
            });
        });
    };

    var getDataEditSettingUser = function(){
        $('#tablesettinguser').on('click', '#btn-edit-settinguser', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tablesettinguser').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            $('#nama_user').val(data.name);
            $('#email_user').val(data.email);
            $('#btn-simpan-editsettinguser').html('Simpan');
            $('#btn-reset-editsettinguser').html('Batal');
        });
    };

    var editDataSettingUser = function () {
        $('#btn-simpan-editsettinguser').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data User Ini',
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
                        name: $('#nama_user').val(),
                        email: $('#email_user').val(),
                    };
                    function validateEmail(dataEmail) {
                        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return re.test(dataEmail);
                    }
                    const email = update.email;
                    if(update.name == ""){
                        $("#nama_user_error").html("<strong>Data Nama Kosong</strong>");
                    }
                    else if(update.email == ""){
                        $("#email_user_error").html("<strong>Data Email Kosong</strong>");
                    }
                    else if(!validateEmail(email)){
                        $("#email_user_error").html("<strong>Data Email Tidak Valid</strong>");
                    }
                    else{
                        $("#nama_user_error").html("");
                        $("#email_user_error").html("");
                        $.ajax({
                            url : "/settinguser/updatesettinguser",
                            type : "POST",
                            data : update,
                            success: function(res){
                                if(res == 'emailerr'){
                                    $("#email_user_error").html("<strong>Data Email Sudah Ada</strong>");
                                }
                                else{
                                    $('#tablesettinguser').DataTable().ajax.reload();
                                    swal({
                                        title: "Success!",
                                        text : "Data Berhasil Diubah",
                                        confirmButtonColor: "#66BB6A",
                                        type : "success",
                                    });
                                    $('#form-edit-settinguser').modal('hide');
                                }
                            },
                            error : function(res){
                                swal({
                                    title: "Error!",
                                    text : "Data Tidak Valid",
                                    confirmButtonColor: "#EF5350",
                                    type : "error",
                                });
                                $('#form-edit-settinguser').modal('hide');
                            }
                        });
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-edit-settinguser').modal('hide');
                }
            });
        });
    };

    var deleteDataSettingUser = function () {
        $('#tablesettinguser').on('click', '#btn-hapus-settinguser', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tablesettinguser').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menghapus Data User Ini',
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
                        url : "/settinguser/deletesettinguser",
                        type : "DELETE",
                        data : delData,
                        success: function(){
                            $('#tablesettinguser').DataTable().ajax.reload();
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
            getDataSettingUser();
            resetData();
            tambahDataSettingUser();
            getDataEditSettingUser();
            editDataSettingUser();
            deleteDataSettingUser();
        }
    };
}();
$(document).ready(function(){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    settinguser.init();
});