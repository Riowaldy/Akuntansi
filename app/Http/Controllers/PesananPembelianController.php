<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Pesananpembelian;
use App\Hutangpiutang;
// use App\Penerimaanpenjualan;
// use App\Penerimaan;

class PesananPembelianController extends Controller
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
        return view('pesananpembelian');
    }

    public function getpesananpembelian()
    {
        $tablepesananpembelian = DB::table('pesananpembelians')->select('pesananpembelians.id','pesananpembelians.no_transaksi','pesananpembelians.tanggal','suppliers.name','barangs.name as pesanan','pesananpembelians.quantity','pesananpembelians.nilai','pesananpembelians.invoice')
                                                            ->join('barangs','barangs.id','pesananpembelians.pesanan')
                                                            ->join('suppliers','suppliers.id','pesananpembelians.name')
                                                            ->orderBy('pesananpembelians.id','desc')->get();
        return response()->json(
            $tablepesananpembelian
        );
    }
}
