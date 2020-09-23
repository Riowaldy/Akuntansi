<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;
use App\Role;
use App\Roleuser;

class SettingRoleController extends Controller
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
        return view('settingrole');
    }

    public function getsettingrole()
    {
        $tablerole = DB::table('roles')->select('id','name')->orderBy('id','asc')->get();
        return response()->json(
            $tablerole
        );
    }

    public function getsettingroleuser()
    {
        $tablerole = DB::table('roleusers')->select('roleusers.id', 'roleusers.id_role', 'roleusers.id_user', 'users.name as uname', 'roles.name as rname')
                                           ->join('users', 'roleusers.id_user', 'users.id')
                                           ->join('roles', 'roleusers.id_role', 'roles.id')
                                           ->orderBy('roleusers.id','asc')
                                           ->get();
        return response()->json(
            $tablerole
        );
    }

    public function getdroprole(Request $request)
    {
        $roles = DB::table('roles')->select('id','name')
                                    ->where('name','!=',$request->rname)
                                    ->orderBy('id','asc')
                                    ->get();
        return $roles;
    }

    public function updatesettingrole(Request $request)
    {
        $this->validate($request, array(
            'name' => 'required|max:255'
        ));
        $roles = Role::find($request->id);
        $roles->name = $request->name;
        $roles->save();
    }

    public function updatesettingroleuser(Request $request)
    {
        $roles = Roleuser::find($request->id);
        $roles->id_role = $request->id_role;
        $roles->save();
    }
}
