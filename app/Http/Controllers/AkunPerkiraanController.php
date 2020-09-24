<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Akunperkiraan;

class AkunPerkiraanController extends Controller
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
        return view('akunperkiraan');
    }

    public function getakunperkiraan()
    {
        $tableakunperkiraan = DB::table('akunperkiraans')->select('id','id_akunperkiraan','name','tipe')->orderBy('id','desc')->get();
        return response()->json(
            $tableakunperkiraan
        );
    }

    public function addakunperkiraan(Request $request)
    {
        $this->validate($request, array(
            'id_akunperkiraan' => 'required|max:255',
            'name' => 'required|max:255',
            'tipe' => 'required|max:255'
        ));
        if (Akunperkiraan::where('id_akunperkiraan', '=', $request->id_akunperkiraan)->count() > 0) {
            return 'id_akunperkiraanerr';
        }else{
            $akunperkiraans = new Akunperkiraan();
            $akunperkiraans->id_akunperkiraan = $request->id_akunperkiraan;
            $akunperkiraans->name = $request->name;
            $akunperkiraans->tipe = $request->tipe;
            $akunperkiraans->save();
        }
    }

    public function updateakunperkiraan(Request $request)
    {
        $this->validate($request, array(
            'id_akunperkiraan' => 'required|max:255',
            'name' => 'required|max:255',
            'tipe' => 'required|max:255'
        ));
        if (Akunperkiraan::where('id_akunperkiraan', '=', $request->id_akunperkiraan)->where('id', '!=', $request->id)->count() > 0) {
            return 'id_akunperkiraanerr';
        }else{
            $akunperkiraans = Akunperkiraan::find($request->id);
            $akunperkiraans->id_akunperkiraan = $request->id_akunperkiraan;
            $akunperkiraans->name = $request->name;
            $akunperkiraans->tipe = $request->tipe;
            $akunperkiraans->save();
        }
    }

    public function deleteakunperkiraan(Request $request)
    {
        $delete = \DB::table('akunperkiraans')->select('id')->where('id', $request->input('id'));
        $delete->delete();
    }
}
