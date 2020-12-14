var settingrole = function () {
    var getDataSettingRole = function(){
        $(".card-body").LoadingOverlay("show", {
            image: "../custom/img/loading2.gif"
        });
        var t = $('#tablesettingrole').DataTable({
            'ajax': {
                'url': '/settingrole/getsettingrole',
                'dataSrc': '',
                'complete': function () {
                    $(".card-body").LoadingOverlay("hide");
                }
            },
            'columns': [
                { 'data': 'id'},
                { 'data': 'name' },
                {
                    'render': function (data, type, full, meta) {
                        var html = '';
                        html += '<div class="text-center">';
                        html += '<div class="btn-group btn-group-solid">';
                        html += '<a href="#edit" class="btn btn-primary btn-raised btn-xs" data-toggle="modal" data-target="#form-edit-settingrole" id="btn-edit-settingrole" title="Ubah Data"><i class="fas fa-edit"></i></a>';
                        html += '</div>';
                        html += '</div>';
                        return html;
                    }
                }
            ],
            "order": [],
            "columnDefs": [
                { "orderable": false, "targets": [0,2] }
            ]
        });
        t.on( 'order.dt search.dt', function () {
            t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                cell.innerHTML = i+1;
            } );
        } ).draw();
    };

    var getDataSettingRoleuser = function(){
        var t = $('#tablesettingroleuser').DataTable({
            'ajax': {
                'url': '/settingrole/getsettingroleuser',
                'dataSrc': ''
            },
            'columns': [
                { 'data': 'id'},
                { 'data': 'uname' },
                { 'data': 'rname' },
                {
                    'render': function (data, type, full, meta) {
                        var html = '';
                        html += '<div class="text-center">';
                        html += '<div class="btn-group btn-group-solid">';
                        html += '<a href="#edit" class="btn btn-primary btn-raised btn-xs" data-toggle="modal" data-target="#form-edit-settingroleuser" id="btn-edit-settingroleuser" title="Ubah Data"><i class="fas fa-edit"></i></a>';
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
        $('#btn-reset-editsettingrole').click(function(){
            $("#nama_role_error").html("");
            $("#role_roleuser_error").html("");
        });
        $('#btn-reset-editsettingroleuser').click(function(){
            $("#nama_role_error").html("");
            $("#role_roleuser_error").html("");
        });
    }

    var getDataEditSettingRole = function(){
        $('#tablesettingrole').on('click', '#btn-edit-settingrole', function () {
            var baris = $(this).parents('tr')[0];
            var table = $('#tablesettingrole').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            $('#nama_role').val(data.name);
            $('#btn-simpan-editsettingrole').html('Simpan');
            $('#btn-reset-editsettingrole').html('Batal');
        });
    };

    var getDataEditSettingRoleuser = function(){
        $('#tablesettingroleuser').on('click', '#btn-edit-settingroleuser', function () {
            $('#role_roleuser').text('');
            var baris = $(this).parents('tr')[0];
            var table = $('#tablesettingroleuser').DataTable();
            var data = table.row(baris).data();
            id = data.id;
            rname = data.rname;
            id_role = data.id_role;
            $('#nama_roleuser').val(data.uname);
            getDropRole();
            $('#btn-simpan-editsettingroleuser').html('Simpan');
            $('#btn-reset-editsettingroleuser').html('Batal');
        });
    };

    var getDropRole = function(){
        $(".role_roleuser").select2();
        $.ajax({
            type: 'GET',
            url: '/settingrole/getdroprole',
            contentType: 'application/json;charset=utf-8',
            data: {
                rname : rname
            },
            async: false,
            success: function (data) {
                $('#role_roleuser').append(
                    '<option value="'+ id_role +'" selected>'+ rname +'</option>'
                );
                data.forEach(function(entry) {
                    $('#role_roleuser').append(
                        '<option value="'+ entry.id +'">'+ entry.name +'</option>'
                    );
                });
            }
        })
    };

    var editDataSettingRole = function () {
        $('#btn-simpan-editsettingrole').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Role Ini',
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
                        name: $('#nama_role').val(),
                    };
                    if(update.name == ""){
                        $("#nama_role_error").html("<strong>Data Nama Kosong</strong>");
                    }
                    else{
                        $("#nama_role_error").html("");
                        $.ajax({
                            url : "/settingrole/updatesettingrole",
                            type : "POST",
                            data : update,
                            success: function(){
                                $('#tablesettingrole').DataTable().ajax.reload();
                                $('#tablesettingroleuser').DataTable().ajax.reload();
                                swal({
                                    title: "Success!",
                                    text : "Data Berhasil Diubah",
                                    confirmButtonColor: "#66BB6A",
                                    type : "success",
                                });
                                $('#form-edit-settingrole').modal('hide');
                                location.reload();
                            },
                            error : function(data){
                                swal({
                                    title: 'Error',
                                    text : data.message,
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                                $('#form-edit-settingrole').modal('hide');
                            }
                        });
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-edit-settingrole').modal('hide');
                }
            });
        });
    };

    var editDataSettingRoleuser = function () {
        $('#btn-simpan-editsettingroleuser').click(function(){
            swal({
                title: 'Apakah Anda Yakin?',
                text: 'Menyimpan Data Hak Akses User Ini',
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
                        id_role: $('#role_roleuser').val(),
                    };
                    $.ajax({
                        url : "/settingrole/updatesettingroleuser",
                        type : "POST",
                        data : update,
                        success: function(){
                            $('#tablesettingrole').DataTable().ajax.reload();
                            $('#tablesettingroleuser').DataTable().ajax.reload();
                            swal({
                                title: "Success!",
                                text : "Data Berhasil Diubah",
                                confirmButtonColor: "#66BB6A",
                                type : "success",
                            });
                            $('#form-edit-settingroleuser').modal('hide');
                            location.reload();
                        },
                        error : function(data){
                            swal({
                                title: 'Error',
                                text : data.message,
                                type : "error",
                                confirmButtonColor: "#EF5350",
                            });
                            $('#form-edit-settingroleuser').modal('hide');
                        }
                    });
                } else {
                    swal("Aksi Dibatalkan!");
                    $('#form-edit-settingroleuser').modal('hide');
                }
            });
        });
    };

    return {
        init: function () {
            getDataSettingRole();
            getDataSettingRoleuser();
            getDataEditSettingRole();
            getDataEditSettingRoleuser();
            resetData();
            editDataSettingRole();
            editDataSettingRoleuser();
        }
    };
}();
$(document).ready(function(){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    settingrole.init();
});