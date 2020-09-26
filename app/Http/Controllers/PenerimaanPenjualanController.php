<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Pengirimanpenjualan;
use App\Barang;

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

    public function updatepenerimaanpenjualan(Request $request)
    {
        $nameVal = DB::table('pelanggans')->select('id')
                                    ->where('name',$request->name)
                                    ->first();
        $barangVal = DB::table('barangs')->select('id','terjual')
                                    ->where('name',$request->pesanan)
                                    ->first();
        $name = $nameVal->id;
        $pesanan = $barangVal->id;
        $terjual = $barangVal->terjual;
        $terjual = $terjual + $request->quantity;
        
        $pengirimanpenjualans = new Pengirimanpenjualan();
        $pengirimanpenjualans->no_transaksi = $request->no_transaksi;
        $pengirimanpenjualans->tanggal = $request->tanggal;
        $pengirimanpenjualans->name = $name;
        $pengirimanpenjualans->pesanan = $pesanan;
        $pengirimanpenjualans->quantity = $request->quantity;
        $pengirimanpenjualans->nilai = $request->nilai;
        $pengirimanpenjualans->invoice = $request->invoice;
        $pengirimanpenjualans->save();

        $barangs = Barang::find($pesanan);
        $barangs->terjual = $terjual;
        $barangs->save();

        $delete = \DB::table('penerimaanpenjualans')->select('id')->where('no_transaksi', $request->no_transaksi);
        $delete->delete();
    }
}
