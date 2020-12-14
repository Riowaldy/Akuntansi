var settingmenu = function () {
    var getDataSettingMenu = function(){
        $(".card-body").LoadingOverlay("show", {
            image: "../custom/img/loading2.gif"
        });
        var t = $('#tablesettingmenu').DataTable({
            'ajax': {
                'url': '/settingmenu/getsettingmenu',
                'dataSrc': '',
                'complete': function () {
                    $(".card-body").LoadingOverlay("hide");
                }
            },
            'columns': [
                { 'data': 'id'},
                { 'data': 'name' },
                { 'data': 'master' },
                {
                    'render': function (data, type, full, meta) {
                        var html = '';
                        html += '<div class="text-center">';
                        html += '<div class="btn-group btn-group-solid">';
                        html += '<a href="#edit" class="btn btn-primary btn-raised btn-xs" data-toggle="modal" data-target="#form-edit-settingmenu" id="btn-edit-settingmenu" title="Ubah Data"><i class="fas fa-edit"></i></a>';
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

    var getDataSettingMenurole = function(){
        $(".card-body").LoadingOverlay("show", {
            image: "../custom/img/loading2.gif"
        });
        var t = $('#tablesettingmenurole').DataTable({
            'ajax': {
                'url': '/settingmenu/getsettingmenurole',
                'dataSrc': '',
                'complete': function () {
                    $(".card-body").LoadingOverlay("hide");
                }
            },
            'columns': [
                { 'data': 'id'},
                { 'data': 'mname' },
                { 'data': 'rname' },
                {
                    'render': function (data, type, full, meta) {
                        var html = '';
                        html += '<div class="text-center">';
                        html += '<div class="btn-group btn-group-solid">';
                        if(full.mid == 1){
                            if(full.aktif == "Y"){
                                html += '<a class="badge badge-light">Aktif</a>';
                            }else{
                                html += '<a href="#edit" class="badge badge-danger">Tidak</a>';
                            }
                        }else{
                            if(full.aktif == "Y"){
                                html += '<a href="#edit" class="badge badge-success" data-toggle="modal" data-target="#form-edit-settingmenurole" id="btn-edit-settingmenurole">Aktif</a>';
                            }else{
                                html += '<a href="#edit" class="badge badge-danger" data-toggle="modal" data-target="#form-edit-settingmenurole" id="btn-edit-settingmenurole">Tidak</a>';
                            }
                        }
                        
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
    };

    var resetData = function(){
        $('#btn-reset-editsettingmenu').click(function(){
            $("#nama_menu_error").html("");
            $("#aktif_menurole_error").html("");
        });
        $('#btn-reset-editsettingmenurole').click(function(){
            $("#nama_menu_error").html("");
            $("#aktif_menurole_error").html("");
        });
    }

    var getDataEditSettingMenu = function(){
        $('#tablesettingmenu').on('click', '#btn-edit-settingmenu', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tablesettingmenu').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            $('#nama_menu').val(data.name);
            $('#btn-simpan-editsettingmenu').html('Simpan');
            $('#btn-reset-editsettingmenu').html('Batal');
        });
    };

    var getDataEditSettingMenurole = function(){
        $('#tablesettingmenurole').on('click', '#btn-edit-settingmenurole', function () {
            $('#aktif_menurole').text('');
            var baris = $(this).parents('tr')[0];
            var table = $('#tablesettingmenurole').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            aktif = data.aktif;
            getDropAktif();
            $('#nama_menurole').val(data.mname);
            $('#role_menurole').val(data.rname);
            $('#btn-simpan-editsettingmenurole').html('Simpan');
            $('#btn-reset-editsettingmenurole').html('Batal');
        });
    };

    var getDropAktif = function(){
        $(".aktif_menurole").select2();
        if(aktif == "Y"){
            $('#aktif_menurole').append(
                '<option value="Y" selected="selected">Aktif</option>' +
                '<option value="N">Tidak</option>'
            );
        }else{
            $('#aktif_menurole').append(
                '<option value="N" selected>Tidak</option>' +
                '<option value="Y">Aktif</option>'
            );
        }
    };

    var editDataSettingMenu = function () {
        $('#btn-simpan-editsettingmenu').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Menu Ini',
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
                        name: $('#nama_menu').val(),
                    };
                    if(update.name == ""){
                        $("#nama_menu_error").html("<strong>Data Nama Kosong</strong>");
                    }
                    else{
                        $("#nama_menu_error").html("");
                        $.ajax({
                            url : "/settingmenu/updatesettingmenu",
                            type : "POST",
                            data : update,
                            success: function(){
                                $('#tablesettingmenu').DataTable().ajax.reload();
                                swal({
                                    title: "Success!",
                                    text : "Data Berhasil Diubah",
                                    confirmButtonColor: "#66BB6A",
                                    type : "success",
                                });
                                $('#form-edit-settingmenu').modal('hide');
                                location.reload();
                            },
                            error : function(data){
                                swal({
                                    title: 'Error',
                                    text : data.message,
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-edit-settingmenu').modal('hide');
                            }
                        });
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-edit-settingmenu').modal('hide');
                }
            });
        });
    };

    var editDataSettingMenurole = function () {
        $('#btn-simpan-editsettingmenurole').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Mengubah Data Hak Akses Menu Ini',
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
                        aktif: $('#aktif_menurole').val(),
                    };
                    if(update.aktif == null){
                        $("#aktif_menurole_error").html("<strong>Anda Belum Memilih Status Menu</strong>");
                    }else{
                        $("#aktif_menurole_error").html("");
                        $.ajax({
                            url : "/settingmenu/updatesettingmenurole",
                            type : "POST",
                            data : update,
                            success: function(){
                                $('#tablesettingmenurole').DataTable().ajax.reload();
                                swal({
                                    title: "Success!",
                                    text : "Data Berhasil Diubah",
                                    confirmButtonColor: "#66BB6A",
                                    type : "success",
                                });
                                location.reload();
                            },
                            error : function(data){
                                swal({
                                    title: 'Error',
                                    text : data.message,
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                            }
                        });
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-edit-settingmenurole').modal('hide');
                }
            });
        });
    };

    return {
        init: function () {
            getDataSettingMenu();
            getDataSettingMenurole();
            getDataEditSettingMenu();
            getDataEditSettingMenurole();
            editDataSettingMenu();
            editDataSettingMenurole();
            resetData();
        }
    };
}();
$(document).ready(function(){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    settingmenu.init();
});