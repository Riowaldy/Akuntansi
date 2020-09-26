<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class PenerimaanController extends Controller
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
        return view('penerimaan');
    }

    public function getpenerimaan()
    {
        $tablepenerimaan = DB::table('penerimaans')->select('penerimaans.id','penerimaans.no_transaksi','penerimaans.tanggal','pelanggans.name','barangs.name as pesanan','penerimaans.quantity','penerimaans.nilai','penerimaans.invoice')
                                                            ->join('barangs','barangs.id','penerimaans.pesanan')
                                                            ->join('pelanggans','pelanggans.id','penerimaans.name')
                                                            ->orderBy('penerimaans.id','desc')->get();
        return response()->json(
            $tablepenerimaan
        );
    }
}
