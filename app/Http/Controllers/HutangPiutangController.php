<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class HutangPiutangController extends Controller
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
        return view('hutangpiutang');
    }

    public function gethutangpiutang()
    {
        $tablehutangpiutang = DB::table('hutangpiutangs')->select('hutangpiutangs.id','hutangpiutangs.jenis','hutangpiutangs.no_transaksi','hutangpiutangs.tanggal','pelanggans.name','barangs.name as pesanan','hutangpiutangs.quantity','hutangpiutangs.nilai','hutangpiutangs.invoice')
                                                            ->join('barangs','barangs.id','hutangpiutangs.pesanan')
                                                            ->join('pelanggans','pelanggans.id','hutangpiutangs.name')
                                                            ->orderBy('hutangpiutangs.id','desc')->get();
        return response()->json(
            $tablehutangpiutang
        );
    }
}
