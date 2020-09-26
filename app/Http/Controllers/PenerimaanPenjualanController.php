<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class PenerimaanPenjualanController extends Controller
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
        return view('penerimaanpenjualan');
    }

    public function getpenerimaanpenjualan()
    {
        $tablepenerimaanpenjualan = DB::table('penerimaanpenjualans')->select('penerimaanpenjualans.id','penerimaanpenjualans.no_transaksi','penerimaanpenjualans.tanggal','pelanggans.name','barangs.name as pesanan','penerimaanpenjualans.quantity','penerimaanpenjualans.nilai','penerimaanpenjualans.invoice')
                                                            ->join('barangs','barangs.id','penerimaanpenjualans.pesanan')
                                                            ->join('pelanggans','pelanggans.id','penerimaanpenjualans.name')
                                                            ->orderBy('penerimaanpenjualans.id','desc')->get();
        return response()->json(
            $tablepenerimaanpenjualan
        );
    }
}
