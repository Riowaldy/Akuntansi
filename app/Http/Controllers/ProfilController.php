<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use App\User;

class ProfilController extends Controller
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
        return view('profil');
    }

    public function getrole(){
        $user_id = Auth::user()->id;
        $query_role = DB::table('roles')->select('roles.name')
                                        ->join('roleusers', 'roleusers.id_role', 'roles.id')
                                        ->join('users', 'roleusers.id_user', 'users.id')
                                        ->where('users.id',$user_id)
                                        ->get();
        return $query_role;
    }
    public function updateprofiluser(Request $request)
    {
        $this->validate($request, array(
            'name' => 'required|max:255',
            'email' => 'required|unique:users|max:255'
        ));
        $users = User::find($request->id);
        $users->name = $request->name;
        $users->email = $request->email;
        $users->save();
    }
}
