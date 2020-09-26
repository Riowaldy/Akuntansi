<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Barang;

class MasterBarangController extends Controller
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
        return view('masterbarang');
    }

    public function getmasterbarang()
    {
        $tablebarang = DB::table('barangs')->select('id','id_barang','name','harga','terjual','satuan')->orderBy('id','desc')->get();
        return response()->json(
            $tablebarang
        );
    }

    public function addmasterbarang(Request $request)
    {
        $this->validate($request, array(
            'id_barang' => 'required|max:255',
            'name' => 'required|max:255',
            'harga' => 'required|max:255',
            'satuan' => 'required|max:255'
        ));
        if (Barang::where('id_barang', '=', $request->id_barang)->count() > 0) {
            return 'id_barangerr';
        }else{
            $barangs = new Barang;
            $barangs->id_barang = $request->id_barang;
            $barangs->name = $request->name;
            $barangs->harga = $request->harga;
            $barangs->terjual = 0;
            $barangs->satuan = $request->satuan;
            $barangs->save();
        }
    }

    public function updatemasterbarang(Request $request)
    {
        $this->validate($request, array(
            'id_barang' => 'required|max:255',
            'name' => 'required|max:255',
            'harga' => 'required|max:255',
            'satuan' => 'required|max:255'
        ));
        if (Barang::where('id_barang', '=', $request->id_barang)->where('id', '!=', $request->id)->count() > 0) {
            return 'id_barangerr';
        }else{
            $barangs = Barang::find($request->id);
            $barangs->id_barang = $request->id_barang;
            $barangs->name = $request->name;
            $barangs->harga = $request->harga;
            $barangs->satuan = $request->satuan;
            $barangs->save();
        }
    }

    public function deletemasterbarang(Request $request)
    {
        $delete = \DB::table('barangs')->select('id')->where('id', $request->input('id'));
        $delete->delete();
    }
}
