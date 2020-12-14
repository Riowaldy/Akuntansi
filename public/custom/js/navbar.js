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
                    $('#main-penerimaan-err').show();
                    $('#main-pembayaran-err').show();
                }else{
                    $('#main-penerimaan').show();
                    $('#main-pembayaran').show();
                }

                if(data.bukubesar.length == 0){
                    $('#nav-bukubesar').hide();
                    $('#main-akunperkiraan-err').show();
                    $('#main-hutangpiutang-err').show();
                    $('#main-jurnal-err').show();
                }else{
                    $('#main-akunperkiraan').show();
                    $('#main-hutangpiutang').show();
                    $('#main-jurnal').show();
                }

                if(data.penjualan.length == 0){
                    $('#nav-penjualan').hide();
                    $('#main-datapelanggan-err').show();
                    $('#main-pesananpenjualan-err').show();
                    $('#main-penerimaanpenjualan-err').show();
                    $('#main-pengirimanpenjualan-err').show();
                }else{
                    $('#main-datapelanggan').show();
                    $('#main-pesananpenjualan').show();
                    $('#main-penerimaanpenjualan').show();
                    $('#main-pengirimanpenjualan').show();
                }

                if(data.pembelian.length == 0){
                    $('#nav-pembelian').hide();
                    $('#main-datasupplier-err').show();
                    $('#main-pesananpembelian-err').show();
                    $('#main-pembayaranpembelian-err').show();
                    $('#main-penerimaanbarang-err').show();
                }else{
                    $('#main-datasupplier').show();
                    $('#main-pesananpembelian').show();
                    $('#main-pembayaranpembelian').show();
                    $('#main-penerimaanbarang').show();
                }

                if(data.persediaan.length == 0){
                    $('#nav-persediaan').hide();
                    $('#main-masterbahan-err').show();
                    $('#main-masterbarang-err').show();
                    $('#main-pemakaian-err').show();
                }else{
                    $('#main-masterbahan').show();
                    $('#main-masterbarang').show();
                    $('#main-pemakaian').show();
                }

                if(data.laporan.length == 0){
                    $('#nav-laporan').hide();
                    $('#main-bukubesar-err').show();
                    $('#main-labarugi-err').show();
                    $('#main-neracasaldo-err').show();
                    $('#main-neraca-err').show();
                }else{
                    $('#main-bukubesar').show();
                    $('#main-labarugi').show();
                    $('#main-neracasaldo').show();
                    $('#main-neraca').show();
                }

                if(data.setting.length == 0){
                    $('#nav-setting').hide();
                    $('#main-settinguser-err').show();
                    $('#main-settingmenu-err').show();
                    $('#main-settingrole-err').show();
                }else{
                    $('#main-settinguser').show();
                    $('#main-settingmenu').show();
                    $('#main-settingrole').show();
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