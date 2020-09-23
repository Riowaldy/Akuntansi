var Profil = function () {
    var getDataRole = function(){
        $.ajax({
            url : "/profil/getrole",
            success: function(res){
                console.log(res[0].name)
                $("#profilrole").html(res[0].name);
            },
            error : function(res){
                
            }
        });
    };

    var editDataProfilUser = function () {
        $('#btn-simpan-editprofiluser').click(function(){
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
                        id: $('#id_user').val(),
                        name: $('#nama_user').val(),
                        email: $('#email_user').val(),
                    };
                    function validateEmail(dataEmail) {
                        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return re.test(dataEmail);
                    }
                    const email = update.email;
                    if(update.name == ""){
                        $("#nama_error").html("<strong>Data Nama Kosong</strong>");
                    }
                    else if(update.email == ""){
                        $("#email_error").html("<strong>Data Email Kosong</strong>");
                    }
                    else if(!validateEmail(email)){
                        $("#email_error").html("<strong>Data Email Tidak Valid</strong>");
                    }
                    else{
                        $("#nama_error").html("");
                        $("#email_error").html("");
                        $.ajax({
                            url : "/profil/updateprofiluser",
                            type : "POST",
                            data : update,
                            success: function(res){
                                swal({
                                    title: "Success!",
                                    text : "Data Berhasil Diubah",
                                    confirmButtonColor: "#66BB6A",
                                    type : "success",
                                });
                                location.reload();
                            },
                            error : function(res){
                                swal({
                                    title: 'Error',
                                    text : "Data Gagal Ditambahkan",
                                    type : "error",
                                    confirmButtonColor: "#EF5350",
                                });
                            }
                        });
                    }
                } else {
                    swal("Aksi Dibatalkan!");
                }
            });
        });
    };
    return {
        init: function () {
            getDataRole();
            editDataProfilUser();
        }
    };
}();
$(document).ready(function(){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    Profil.init();
});