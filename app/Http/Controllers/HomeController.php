<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function getMenu() {
        $user_id = Auth::user()->id;
        $query_roleuser = DB::table('roleusers')->select('id_role')
                                                ->where('id_user',$user_id)
                                                ->first();
        $val_roleuser = response()->json($query_roleuser->id_role)->getContent();
        $menus['dashboard'] = DB::select("
            select menus.id, menus.href, menus.master, menus.name from menuroles
            join menus, roles
            where menuroles.id_menu = menus.id 
            and menuroles.id_role = roles.id
            and menuroles.id_role = $val_roleuser
            and menuroles.aktif = 'Y'
            and menus.master = 'Dashboard'
        ");
        $menus['kasbank'] = DB::select("
            select menus.id, menus.href, menus.master, menus.name from menuroles
            join menus, roles
            where menuroles.id_menu = menus.id 
            and menuroles.id_role = roles.id
            and menuroles.id_role = $val_roleuser
            and menuroles.aktif = 'Y'
            and menus.master = 'Kas/Bank'
        ");
        $menus['bukubesar'] = DB::select("
            select menus.id, menus.href, menus.master, menus.name from menuroles
            join menus, roles
            where menuroles.id_menu = menus.id 
            and menuroles.id_role = roles.id
            and menuroles.id_role = $val_roleuser
            and menuroles.aktif = 'Y'
            and menus.master = 'Buku Besar'
        ");
        $menus['penjualan'] = DB::select("
            select menus.id, menus.href, menus.master, menus.name from menuroles
            join menus, roles
            where menuroles.id_menu = menus.id 
            and menuroles.id_role = roles.id
            and menuroles.id_role = $val_roleuser
            and menuroles.aktif = 'Y'
            and menus.master = 'Penjualan'
        ");
        $menus['pembelian'] = DB::select("
            select menus.id, menus.href, menus.master, menus.name from menuroles
            join menus, roles
            where menuroles.id_menu = menus.id 
            and menuroles.id_role = roles.id
            and menuroles.id_role = $val_roleuser
            and menuroles.aktif = 'Y'
            and menus.master = 'Pembelian'
        ");
        $menus['persediaan'] = DB::select("
            select menus.id, menus.href, menus.master, menus.name from menuroles
            join menus, roles
            where menuroles.id_menu = menus.id 
            and menuroles.id_role = roles.id
            and menuroles.id_role = $val_roleuser
            and menuroles.aktif = 'Y'
            and menus.master = 'Persediaan'
        ");
        $menus['laporan'] = DB::select("
            select menus.id, menus.href, menus.master, menus.name from menuroles
            join menus, roles
            where menuroles.id_menu = menus.id 
            and menuroles.id_role = roles.id
            and menuroles.id_role = $val_roleuser
            and menuroles.aktif = 'Y'
            and menus.master = 'Laporan'
        ");
        $menus['setting'] = DB::select("
            select menus.id, menus.href, menus.master, menus.name from menuroles
            join menus, roles
            where menuroles.id_menu = menus.id 
            and menuroles.id_role = roles.id
            and menuroles.id_role = $val_roleuser
            and menuroles.aktif = 'Y'
            and menus.master = 'Setting'
        ");
        return $menus;
    }

    public function getData() {
        $data['penerimaan'] = DB::select("
            select sum(nilai) as nilai from penerimaans
        ");
        $data['pembayaran'] = DB::select("
            select sum(nilai) as nilai from pembayarans
        ");
        $data['hutang'] = DB::select("
            select sum(nilai) as nilai from hutangpiutangs where jenis = 'Hutang'
        ");
        $data['piutang'] = DB::select("
            select sum(nilai) as nilai from hutangpiutangs where jenis = 'Piutang'
        ");
        $data['terjual'] = DB::select("
            select name, terjual from barangs order by terjual desc limit 5
        ");
        $data['pelanggan'] = DB::select("
            select pelanggans.name, sum(pengirimanpenjualans.nilai) as nilai from pengirimanpenjualans 
            join pelanggans on pelanggans.id = pengirimanpenjualans.name
            group by pelanggans.name 
            order by nilai desc
        ");
        return $data;
    }
}
