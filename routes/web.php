<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect(route('login'));
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/home/getmenu', 'HomeController@getMenu')->name('getmenu');

Route::get('/penerimaan', 'PenerimaanController@index')->name('penerimaan');

Route::get('/pembayaran', 'PembayaranController@index')->name('pembayaran');

Route::get('/akunperkiraan', 'AkunPerkiraanController@index')->name('akunperkiraan');

Route::get('/hutangpiutang', 'HutangPiutangController@index')->name('hutangpiutang');

Route::get('/jurnal', 'JurnalController@index')->name('jurnal');

Route::get('/datapelanggan', 'DataPelangganController@index')->name('datapelanggan');
Route::get('/datapelanggan/getdatapelanggan', 'DataPelangganController@getdatapelanggan')->name('getdatapelanggan');
Route::post('/datapelanggan/adddatapelanggan', 'DataPelangganController@adddatapelanggan')->name('adddatapelanggan');
Route::post('/datapelanggan/updatedatapelanggan', 'DataPelangganController@updatedatapelanggan')->name('updatedatapelanggan');
Route::delete('/datapelanggan/deletedatapelanggan', 'DataPelangganController@deletedatapelanggan')->name('deletedatapelanggan');

Route::get('/pesananpenjualan', 'PesananPenjualanController@index')->name('pesananpenjualan');

Route::get('/penerimaanpenjualan', 'PenerimaanPenjualanController@index')->name('penerimaanpenjualan');

Route::get('/pengirimanpenjualan', 'PengirimanPenjualanController@index')->name('pengirimanpenjualan');

Route::get('/datasupplier', 'DataSupplierController@index')->name('datasupplier');
Route::get('/datasupplier/getdatasupplier', 'DataSupplierController@getdatasupplier')->name('getdatasupplier');
Route::post('/datasupplier/adddatasupplier', 'DataSupplierController@adddatasupplier')->name('adddatasupplier');
Route::post('/datasupplier/updatedatasupplier', 'DataSupplierController@updatedatasupplier')->name('updatedatasupplier');
Route::delete('/datasupplier/deletedatasupplier', 'DataSupplierController@deletedatasupplier')->name('deletedatasupplier');

Route::get('/pesananpembelian', 'PesananPembelianController@index')->name('pesananpembelian');

Route::get('/pembayaranpembelian', 'PembayaranPembelianController@index')->name('pembayaranpembelian');

Route::get('/penerimaanbarang', 'PenerimaanBarangController@index')->name('penerimaanbarang');

Route::get('/masterbahan', 'MasterBahanController@index')->name('masterbahan');

Route::get('/masterbarang', 'MasterBarangController@index')->name('masterbarang');

Route::get('/pemakaian', 'PemakaianController@index')->name('pemakaian');

Route::get('/bukubesar', 'BukuBesarController@index')->name('bukubesar');

Route::get('/labarugi', 'LabaRugiController@index')->name('labarugi');

Route::get('/neracasaldo', 'NeracaSaldoController@index')->name('neracasaldo');

Route::get('/neraca', 'NeracaController@index')->name('neraca');

Route::get('/settinguser', 'SettingUserController@index')->name('settinguser');
Route::get('/settinguser/getsettinguser', 'SettingUserController@getsettinguser')->name('getsettinguser');
Route::post('/settinguser/addsettinguser', 'SettingUserController@addsettinguser')->name('addsettinguser');
Route::post('/settinguser/updatesettinguser', 'SettingUserController@updatesettinguser')->name('updatesettinguser');
Route::delete('/settinguser/deletesettinguser', 'SettingUserController@deletesettinguser')->name('deletesettinguser');

Route::get('/settingmenu', 'SettingMenuController@index')->name('settingmenu');
Route::get('/settingmenu/getsettingmenu', 'SettingMenuController@getsettingmenu')->name('getsettingmenu');
Route::get('/settingmenu/getsettingmenurole', 'SettingMenuController@getsettingmenurole')->name('getsettingmenurole');
Route::post('/settingmenu/updatesettingmenu', 'SettingMenuController@updatesettingmenu')->name('updatesettingmenu');
Route::post('/settingmenu/updatesettingmenurole', 'SettingMenuController@updatesettingmenurole')->name('updatesettingmenurole');

Route::get('/settingrole', 'SettingRoleController@index')->name('settingrole');
Route::get('/settingrole/getsettingrole', 'SettingRoleController@getsettingrole')->name('getsettingrole');
Route::get('/settingrole/getsettingroleuser', 'SettingRoleController@getsettingroleuser')->name('getsettingroleuser');
Route::get('/settingrole/getdroprole', 'SettingRoleController@getdroprole')->name('getdroprole');
Route::post('/settingrole/updatesettingrole', 'SettingRoleController@updatesettingrole')->name('updatesettingrole');
Route::post('/settingrole/updatesettingroleuser', 'SettingRoleController@updatesettingroleuser')->name('updatesettingroleuser');

Route::get('/profil', 'ProfilController@index')->name('profil');
Route::get('/profil/getrole', 'ProfilController@getrole')->name('getrole');
Route::post('/profil/updateprofiluser', 'ProfilController@updateprofiluser')->name('updateprofiluser');