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
        $tabletambahan = DB::table('tambahans')->select('id','id_tambahan','akunperkiraan','name','harga')->orderBy('id','desc')->get();
        return response()->json(
            $tabletambahan
        );
    }
}
