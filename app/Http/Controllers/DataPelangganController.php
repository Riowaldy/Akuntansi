<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Pelanggan;

class DataPelangganController extends Controller
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
        return view('datapelanggan');
    }

    public function getdatapelanggan()
    {
        $tablepelanggan = DB::table('pelanggans')->select('id','id_pelanggan','name','telp','alamat')->orderBy('id','desc')->get();
        return response()->json(
            $tablepelanggan
        );
    }

    public function adddatapelanggan(Request $request)
    {
        $this->validate($request, array(
            'id_pelanggan' => 'required|max:255',
            'name' => 'required|max:255',
            'telp' => 'required|max:255',
            'alamat' => 'required|max:255'
        ));
        if (Pelanggan::where('id_pelanggan', '=', $request->id_pelanggan)->count() > 0) {
            return 'id_pelangganerr';
        }else{
            $pelanggans = new Pelanggan;
            $pelanggans->id_pelanggan = $request->id_pelanggan;
            $pelanggans->name = $request->name;
            $pelanggans->telp = $request->telp;
            $pelanggans->alamat = $request->alamat;
            $pelanggans->save();
        }
    }

    public function updatedatapelanggan(Request $request)
    {
        $this->validate($request, array(
            'id_pelanggan' => 'required|max:255',
            'name' => 'required|max:255',
            'telp' => 'required|max:255',
            'alamat' => 'required|max:255'
        ));
        if (Pelanggan::where('id_pelanggan', '=', $request->id_pelanggan)->where('id', '!=', $request->id)->count() > 0) {
            return 'id_pelangganerr';
        }else{
            $pelanggans = Pelanggan::find($request->id);
            $pelanggans->id_pelanggan = $request->id_pelanggan;
            $pelanggans->name = $request->name;
            $pelanggans->telp = $request->telp;
            $pelanggans->alamat = $request->alamat;
            $pelanggans->save();
        }
    }

    public function deletedatapelanggan(Request $request)
    {
        $delete = \DB::table('pelanggans')->select('id')->where('id', $request->input('id'));
        $delete->delete();
    }
}
