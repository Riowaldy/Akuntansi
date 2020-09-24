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
                    $('#main-penerimaan').hide();
                    $('#main-pembayaran').hide();
                }else{
                    $('#main-penerimaan-err').hide();
                    $('#main-pembayaran-err').hide();
                }
                if(data.bukubesar.length == 0){
                    $('#nav-bukubesar').hide();
                    $('#main-akunperkiraan').hide();
                    $('#main-hutangpiutang').hide();
                    $('#main-jurnal').hide();
                }else{
                    $('#main-akunperkiraan-err').hide();
                    $('#main-hutangpiutang-err').hide();
                    $('#main-jurnal-err').hide();
                }
                if(data.penjualan.length == 0){
                    $('#nav-penjualan').hide();
                    $('#main-datapelanggan').hide();
                    $('#main-pesananpenjualan').hide();
                    $('#main-penerimaanpenjualan').hide();
                    $('#main-pengirimanpenjualan').hide();
                }else{
                    $('#main-datapelanggan-err').hide();
                    $('#main-pesananpenjualan-err').hide();
                    $('#main-penerimaanpenjualan-err').hide();
                    $('#main-pengirimanpenjualan-err').hide();
                }
                if(data.pembelian.length == 0){
                    $('#nav-pembelian').hide();
                    $('#main-datasupplier').hide();
                    $('#main-pesananpembelian').hide();
                    $('#main-pembayaranpembelian').hide();
                    $('#main-penerimaanbarang').hide();
                }else{
                    $('#main-datasupplier-err').hide();
                    $('#main-pesananpembelian-err').hide();
                    $('#main-pembayaranpembelian-err').hide();
                    $('#main-penerimaanbarang-err').hide();
                }
                if(data.persediaan.length == 0){
                    $('#nav-persediaan').hide();
                    $('#main-masterbahan').hide();
                    $('#main-masterbarang').hide();
                    $('#main-pemakaian').hide();
                }else{
                    $('#main-masterbahan-err').hide();
                    $('#main-masterbarang-err').hide();
                    $('#main-pemakaian-err').hide();
                }
                if(data.laporan.length == 0){
                    $('#nav-laporan').hide();
                    $('#main-bukubesar').hide();
                    $('#main-labarugi').hide();
                    $('#main-neracasaldo').hide();
                    $('#main-neraca').hide();
                }else{
                    $('#main-bukubesar-err').hide();
                    $('#main-labarugi-err').hide();
                    $('#main-neracasaldo-err').hide();
                    $('#main-neraca-err').hide();
                }
                if(data.setting.length == 0){
                    $('#nav-setting').hide();
                    $('#main-settinguser').hide();
                    $('#main-settingmenu').hide();
                    $('#main-settingrole').hide();
                }else{
                    $('#main-settinguser-err').hide();
                    $('#main-settingmenu-err').hide();
                    $('#main-settingrole-err').hide();
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