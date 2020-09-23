<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Bahan;

class MasterBahanController extends Controller
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
        return view('masterbahan');
    }

    public function getmasterbahan()
    {
        $tablebahan = DB::table('bahans')->select('id','id_bahan','name','harga','stock','satuan')->orderBy('id','desc')->get();
        return response()->json(
            $tablebahan
        );
    }

    public function addmasterbahan(Request $request)
    {
        $this->validate($request, array(
            'id_bahan' => 'required|max:255',
            'name' => 'required|max:255',
            'harga' => 'required|max:255',
            'stock' => 'required|max:255',
            'satuan' => 'required|max:255'
        ));
        if (Bahan::where('id_bahan', '=', $request->id_bahan)->count() > 0) {
            return 'id_bahanerr';
        }else{
            $bahans = new Bahan;
            $bahans->id_bahan = $request->id_bahan;
            $bahans->name = $request->name;
            $bahans->harga = $request->harga;
            $bahans->stock = $request->stock;
            $bahans->satuan = $request->satuan;
            $bahans->save();
        }
    }

    public function updatemasterbahan(Request $request)
    {
        $this->validate($request, array(
            'id_bahan' => 'required|max:255',
            'name' => 'required|max:255',
            'harga' => 'required|max:255',
            'stock' => 'required|max:255',
            'satuan' => 'required|max:255'
        ));
        if (Bahan::where('id_bahan', '=', $request->id_bahan)->where('id', '!=', $request->id)->count() > 0) {
            return 'id_bahanerr';
        }else{
            $bahans = Bahan::find($request->id);
            $bahans->id_bahan = $request->id_bahan;
            $bahans->name = $request->name;
            $bahans->harga = $request->harga;
            $bahans->stock = $request->stock;
            $bahans->satuan = $request->satuan;
            $bahans->save();
        }
    }

    public function deletemasterbahan(Request $request)
    {
        $delete = \DB::table('bahans')->select('id')->where('id', $request->input('id'));
        $delete->delete();
    }
}
