<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Bahan;

class PenerimaanBarangController extends Controller
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
        return view('penerimaanbarang');
    }

    public function getpenerimaanbarang()
    {
        $tablepenerimaanbarang = DB::table('penerimaanbarangs')->select('penerimaanbarangs.id','penerimaanbarangs.no_transaksi','penerimaanbarangs.tanggal','suppliers.name','bahans.name as pesanan','penerimaanbarangs.quantity','penerimaanbarangs.nilai','penerimaanbarangs.invoice')
                                                            ->join('bahans','bahans.id','penerimaanbarangs.pesanan')
                                                            ->join('suppliers','suppliers.id','penerimaanbarangs.name')
                                                            ->orderBy('penerimaanbarangs.id','desc')->get();
        return response()->json(
            $tablepenerimaanbarang
        );
    }
}
