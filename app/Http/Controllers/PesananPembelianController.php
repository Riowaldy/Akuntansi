<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Pesananpembelian;
use App\Hutangpiutang;
// use App\Penerimaanpenjualan;
// use App\Penerimaan;

class PesananPembelianController extends Controller
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
        return view('pesananpembelian');
    }

    public function getpesananpembelian()
    {
        $tablepesananpembelian = DB::table('pesananpembelians')->select('pesananpembelians.id','pesananpembelians.no_transaksi','pesananpembelians.tanggal','suppliers.name','bahans.name as pesanan','pesananpembelians.quantity','pesananpembelians.nilai','pesananpembelians.invoice')
                                                            ->join('bahans','bahans.id','pesananpembelians.pesanan')
                                                            ->join('suppliers','suppliers.id','pesananpembelians.name')
                                                            ->orderBy('pesananpembelians.id','desc')->get();
        return response()->json(
            $tablepesananpembelian
        );
    }

    public function getdropnama(Request $request)
    {
        $namas = DB::table('suppliers')->select('id','name')
                                    ->orderBy('id','asc')
                                    ->get();
        return $namas;
    }

    public function getdroppesanan(Request $request)
    {
        $pesanans = DB::table('bahans')->select('id','name')
                                    ->orderBy('id','asc')
                                    ->get();
        return $pesanans;
    }

    public function addpesananpembelian(Request $request)
    {
        $this->validate($request, array(
            'no_transaksi' => 'required|max:255',
            'tanggal' => 'required|max:255',
            'name' => 'required|max:255',
            'pesanan' => 'required|max:255',
            'quantity' => 'required|max:255',
            'invoice' => 'required|max:255'
        ));
        
        $pesanans = DB::table('bahans')->select('harga')
                                    ->where('id',$request->pesanan)
                                    ->first();
        $harga = $pesanans->harga;
        $hargaTot = $harga * $request->quantity;

        $pesananpembelians = new Pesananpembelian();
        $pesananpembelians->no_transaksi = $request->no_transaksi;
        $pesananpembelians->tanggal = $request->tanggal;
        $pesananpembelians->name = $request->name;
        $pesananpembelians->pesanan = $request->pesanan;
        $pesananpembelians->quantity = $request->quantity;
        $pesananpembelians->nilai = $hargaTot;
        $pesananpembelians->invoice = $request->invoice;
        $pesananpembelians->save();

        $hutangpiutangs = new Hutangpiutang();
        $hutangpiutangs->no_transaksi = $request->no_transaksi;
        $hutangpiutangs->jenis = 'Hutang';
        $hutangpiutangs->tanggal = $request->tanggal;
        $hutangpiutangs->name = $request->name;
        $hutangpiutangs->pesanan = $request->pesanan;
        $hutangpiutangs->quantity = $request->quantity;
        $hutangpiutangs->nilai = $hargaTot;
        $hutangpiutangs->invoice = $request->invoice;
        $hutangpiutangs->save();
    }
}
