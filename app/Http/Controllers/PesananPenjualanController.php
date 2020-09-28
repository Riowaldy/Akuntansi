<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Pesananpenjualan;
use App\Hutangpiutang;
use App\Penerimaanpenjualan;
use App\Penerimaan;

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
        if (Pesananpenjualan::where('no_transaksi', '=', $request->no_transaksi)->count() > 0) {
            return 'no_transaksierr';
        }else{
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

    public function updatepesananpenjualan(Request $request)
    {
        $nameVal = DB::table('pelanggans')->select('id')
                                    ->where('name',$request->name)
                                    ->first();
        $barangVal = DB::table('barangs')->select('id')
                                    ->where('name',$request->pesanan)
                                    ->first();
        $name = $nameVal->id;
        $pesanan = $barangVal->id;
        $penerimaanpenjualans = new Penerimaanpenjualan();
        $penerimaanpenjualans->no_transaksi = $request->no_transaksi;
        $penerimaanpenjualans->tanggal = $request->tanggal;
        $penerimaanpenjualans->name = $name;
        $penerimaanpenjualans->pesanan = $pesanan;
        $penerimaanpenjualans->quantity = $request->quantity;
        $penerimaanpenjualans->nilai = $request->nilai;
        $penerimaanpenjualans->invoice = $request->invoice;
        $penerimaanpenjualans->save();

        $penerimaans = new Penerimaan();
        $penerimaans->no_transaksi = $request->no_transaksi;
        $penerimaans->tanggal = $request->tanggal;
        $penerimaans->name = $name;
        $penerimaans->pesanan = $pesanan;
        $penerimaans->quantity = $request->quantity;
        $penerimaans->nilai = $request->nilai;
        $penerimaans->invoice = $request->invoice;
        $penerimaans->save();

        $delete = \DB::table('pesananpenjualans')->select('id')->where('no_transaksi', $request->no_transaksi);
        $delete->delete();
        $delete2 = \DB::table('hutangpiutangs')->select('id')->where('no_transaksi', $request->no_transaksi);
        $delete2->delete();
    }
}
