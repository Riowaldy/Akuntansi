<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Pembayaranpembelian;
use App\Bahan;

class PembayaranPembelianController extends Controller
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
        return view('pembayaranpembelian');
    }

    public function getpembayaranpembelian()
    {
        $tablepembayaranpembelian = DB::table('pembayaranpembelians')->select('pembayaranpembelians.id','pembayaranpembelians.no_transaksi','pembayaranpembelians.tanggal','suppliers.name','bahans.name as pesanan','pembayaranpembelians.quantity','pembayaranpembelians.nilai','pembayaranpembelians.invoice')
                                                            ->join('bahans','bahans.id','pembayaranpembelians.pesanan')
                                                            ->join('suppliers','suppliers.id','pembayaranpembelians.name')
                                                            ->orderBy('pembayaranpembelians.id','desc')->get();
        return response()->json(
            $tablepembayaranpembelian
        );
    }
}
