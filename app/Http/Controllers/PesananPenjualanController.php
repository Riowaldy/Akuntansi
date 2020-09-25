<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Pesananpenjualan;
use App\Hutangpiutang;

class PesananPenjualanController extends Controller
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
        return view('pesananpenjualan');
    }

    public function getpesananpenjualan()
    {
        $tablepesananpenjualan = DB::table('pesananpenjualans')->select('pesananpenjualans.id','pesananpenjualans.no_transaksi','pesananpenjualans.tanggal','pelanggans.name','barangs.name as pesanan','pesananpenjualans.quantity','pesananpenjualans.nilai','pesananpenjualans.invoice')
                                                            ->join('barangs','barangs.id','pesananpenjualans.pesanan')
                                                            ->join('pelanggans','pelanggans.id','pesananpenjualans.name')
                                                            ->orderBy('pesananpenjualans.id','desc')->get();
        return response()->json(
            $tablepesananpenjualan
        );
    }

    public function getdropnama(Request $request)
    {
        $namas = DB::table('pelanggans')->select('id','name')
                                    ->orderBy('id','asc')
                                    ->get();
        return $namas;
    }

    public function getdroppesanan(Request $request)
    {
        $pesanans = DB::table('barangs')->select('id','name')
                                    ->orderBy('id','asc')
                                    ->get();
        return $pesanans;
    }

    public function addpesananpenjualan(Request $request)
    {
        $this->validate($request, array(
            'no_transaksi' => 'required|max:255',
            'tanggal' => 'required|max:255',
            'name' => 'required|max:255',
            'pesanan' => 'required|max:255',
            'quantity' => 'required|max:255',
            'invoice' => 'required|max:255'
        ));
        
        $pesanans = DB::table('barangs')->select('harga')
                                    ->where('id',$request->pesanan)
                                    ->first();
        $harga = $pesanans->harga;
        $hargaTot = $harga * $request->quantity;

        $pesananpenjualans = new Pesananpenjualan();
        $pesananpenjualans->no_transaksi = $request->no_transaksi;
        $pesananpenjualans->tanggal = $request->tanggal;
        $pesananpenjualans->name = $request->name;
        $pesananpenjualans->pesanan = $request->pesanan;
        $pesananpenjualans->quantity = $request->quantity;
        $pesananpenjualans->nilai = $hargaTot;
        $pesananpenjualans->invoice = $request->invoice;
        $pesananpenjualans->save();

        $hutangpiutangs = new Hutangpiutang();
        $hutangpiutangs->no_transaksi = $request->no_transaksi;
        $hutangpiutangs->jenis = 'Piutang';
        $hutangpiutangs->tanggal = $request->tanggal;
        $hutangpiutangs->name = $request->name;
        $hutangpiutangs->pesanan = $request->pesanan;
        $hutangpiutangs->quantity = $request->quantity;
        $hutangpiutangs->nilai = $hargaTot;
        $hutangpiutangs->invoice = $request->invoice;
        $hutangpiutangs->save();
    }
}
