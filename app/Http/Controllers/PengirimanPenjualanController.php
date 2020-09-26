<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class PengirimanPenjualanController extends Controller
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
        return view('pengirimanpenjualan');
    }

    public function getpengirimanpenjualan()
    {
        // $tablepengirimanpenjualan = DB::table('pengirimanpenjualans')->get();
        $tablepengirimanpenjualan = DB::table('pengirimanpenjualans')->select('pengirimanpenjualans.id','pengirimanpenjualans.no_transaksi','pengirimanpenjualans.tanggal','pelanggans.name','barangs.name as pesanan','pengirimanpenjualans.quantity','pengirimanpenjualans.nilai','pengirimanpenjualans.invoice')
                                                            ->join('barangs','barangs.id','pengirimanpenjualans.pesanan')
                                                            ->join('pelanggans','pelanggans.id','pengirimanpenjualans.name')
                                                            ->orderBy('pengirimanpenjualans.id','desc')->get();
        return response()->json(
            $tablepengirimanpenjualan
        );
    }
}
