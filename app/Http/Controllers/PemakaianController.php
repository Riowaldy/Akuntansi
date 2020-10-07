<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Tambahan;

class PemakaianController extends Controller
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
        return view('pemakaian');
    }

    public function getmastertambahan()
    {
        $tabletambahan = DB::table('tambahans')->select('tambahans.id','tambahans.id_tambahan','akunperkiraans.name as akunperkiraan','tambahans.name','tambahans.harga')
                                    ->join('akunperkiraans', 'akunperkiraans.id', '=', 'tambahans.akunperkiraan')
                                    ->orderBy('tambahans.id','desc')->get();
        return response()->json(
            $tabletambahan
        );
    }

    public function addmastertambahan(Request $request)
    {
        $this->validate($request, array(
            'id_tambahan' => 'required|max:255',
            'name' => 'required|max:255',
            'harga' => 'required|max:255'
        ));
        if (Tambahan::where('id_tambahan', '=', $request->id_tambahan)->count() > 0) {
            return 'id_tambahanerr';
        }else{
            $tambahans = new Tambahan;
            $tambahans->id_tambahan = $request->id_tambahan;
            $tambahans->name = $request->name;
            $tambahans->akunperkiraan = $request->akunperkiraan;
            $tambahans->harga = $request->harga;
            $tambahans->save();
        }
    }

    public function getdropakunperkiraan(Request $request)
    {
        $akunperkiraans = DB::table('akunperkiraans')->select('id','name')
                                    ->orderBy('id','asc')
                                    ->get();
        return $akunperkiraans;
    }
}
