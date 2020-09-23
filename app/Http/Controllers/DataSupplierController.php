<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Supplier;

class DataSupplierController extends Controller
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
        return view('datasupplier');
    }

    public function getdatasupplier()
    {
        $tablesupplier = DB::table('suppliers')->select('id','id_supplier','name','telp','alamat')->orderBy('id','desc')->get();
        return response()->json(
            $tablesupplier
        );
    }

    public function adddatasupplier(Request $request)
    {
        $this->validate($request, array(
            'id_supplier' => 'required|max:255',
            'name' => 'required|max:255',
            'telp' => 'required|max:255',
            'alamat' => 'required|max:255'
        ));
        if (Supplier::where('id_supplier', '=', $request->id_supplier)->count() > 0) {
            return 'id_suppliererr';
        }else{
            $suppliers = new Supplier;
            $suppliers->id_supplier = $request->id_supplier;
            $suppliers->name = $request->name;
            $suppliers->telp = $request->telp;
            $suppliers->alamat = $request->alamat;
            $suppliers->save();
        }
    }

    public function updatedatasupplier(Request $request)
    {
        $this->validate($request, array(
            'name' => 'required|max:255',
            'telp' => 'required|max:255',
            'alamat' => 'required|max:255'
        ));
        if (Supplier::where('id_supplier', '=', $request->id_supplier)->where('id', '!=', $request->id)->count() > 0) {
            return 'id_suppliererr';
        }else{
            $suppliers = Supplier::find($request->id);
            $suppliers->id_supplier = $request->id_supplier;
            $suppliers->name = $request->name;
            $suppliers->telp = $request->telp;
            $suppliers->alamat = $request->alamat;
            $suppliers->save();
        }
    }

    public function deletedatasupplier(Request $request)
    {
        $delete = \DB::table('suppliers')->select('id')->where('id', $request->input('id'));
        $delete->delete();
    }
}
