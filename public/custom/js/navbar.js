var Navbar = function () {
    var dataMenu = function () {
        $.ajax({
            type: 'GET',
            url: '/home/getmenu',
            contentType: 'application/json;charset=utf-8',
            data: [],
            async: false,
            success: function (data) {
                if(data.kasbank.length == 0){
                    $('#nav-kasbank').hide();
                }
                if(data.bukubesar.length == 0){
                    $('#nav-bukubesar').hide();
                }
                if(data.penjualan.length == 0){
                    $('#nav-penjualan').hide();
                }
                if(data.pembelian.length == 0){
                    $('#nav-pembelian').hide();
                }
                if(data.persediaan.length == 0){
                    $('#nav-persediaan').hide();
                }
                if(data.laporan.length == 0){
                    $('#nav-laporan').hide();
                }
                if(data.setting.length == 0){
                    $('#nav-setting').hide();
                }
                data.dashboard.forEach(function(entry) {
                    $('#menu-dashboard').append(
                        '<li><a class="nav-link" href="'+ entry.href +'">'+ entry.name +'</a></li>'
					);
                });
                
                data.kasbank.forEach(function(entry) {
                    $('#menu-kasbank').append(
                        '<li><a class="nav-link" href="'+ entry.href +'">'+ entry.name +'</a></li>'
					);
                });
                data.bukubesar.forEach(function(entry) {
                    $('#menu-bukubesar').append(
                        '<li><a class="nav-link" href="'+ entry.href +'">'+ entry.name +'</a></li>'
					);
                });
                data.penjualan.forEach(function(entry) {
                    $('#menu-penjualan').append(
                        '<li><a class="nav-link" href="'+ entry.href +'">'+ entry.name +'</a></li>'
					);
                });
                data.pembelian.forEach(function(entry) {
                    $('#menu-pembelian').append(
                        '<li><a class="nav-link" href="'+ entry.href +'">'+ entry.name +'</a></li>'
					);
                });
                data.persediaan.forEach(function(entry) {
                    $('#menu-persediaan').append(
                        '<li><a class="nav-link" href="'+ entry.href +'">'+ entry.name +'</a></li>'
					);
                });
                data.laporan.forEach(function(entry) {
                    $('#menu-laporan').append(
                        '<li><a class="nav-link" href="'+ entry.href +'">'+ entry.name +'</a></li>'
					);
                });
                data.setting.forEach(function(entry) {
                    $('#menu-setting').append(
                        '<li><a class="nav-link" href="'+ entry.href +'">'+ entry.name +'</a></li>'
					);
                });
            },
            error: function(data){
                console.log(data);
            }
        });
    }
    return {
        init: function () {
            dataMenu();
        }
    };
}();
$(document).ready(function(){
    Navbar.init();
});