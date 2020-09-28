<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Penerimaanbarang;
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

    public function updatepembayaranpembelian(Request $request)
    {
        $nameVal = DB::table('suppliers')->select('id')
                                    ->where('name',$request->name)
                                    ->first();
        $bahanVal = DB::table('bahans')->select('id','stock')
                                    ->where('name',$request->pesanan)
                                    ->first();
        $name = $nameVal->id;
        $pesanan = $bahanVal->id;
        $stock = $bahanVal->stock;
        $stock = $stock + $request->quantity;
        
        $penerimaanbarangs = new Penerimaanbarang();
        $penerimaanbarangs->no_transaksi = $request->no_transaksi;
        $penerimaanbarangs->tanggal = $request->tanggal;
        $penerimaanbarangs->name = $name;
        $penerimaanbarangs->pesanan = $pesanan;
        $penerimaanbarangs->quantity = $request->quantity;
        $penerimaanbarangs->nilai = $request->nilai;
        $penerimaanbarangs->invoice = $request->invoice;
        $penerimaanbarangs->save();

        $bahans = Bahan::find($pesanan);
        $bahans->stock = $stock;
        $bahans->save();

        $delete = \DB::table('pembayaranpembelians')->select('id')->where('no_transaksi', $request->no_transaksi);
        $delete->delete();
    }
}
