<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class PembayaranController extends Controller
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
        return view('pembayaran');
    }

    public function getpembayaran()
    {
        $tablepembayaran = DB::table('pembayarans')->select('pembayarans.id','pembayarans.no_transaksi','pembayarans.tanggal','suppliers.name','bahans.name as pesanan','pembayarans.quantity','pembayarans.nilai','pembayarans.invoice')
                                                            ->join('bahans','bahans.id','pembayarans.pesanan')
                                                            ->join('suppliers','suppliers.id','pembayarans.name')
                                                            ->orderBy('pembayarans.id','desc')->get();
        return response()->json(
            $tablepembayaran
        );
    }
}
