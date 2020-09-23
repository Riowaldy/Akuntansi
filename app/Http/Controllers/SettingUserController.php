<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use DB;
use App\User;
use App\Roleuser;

class SettingUserController extends Controller
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
        return view('settinguser');
    }

    public function getsettinguser()
    {
        $tableuser = DB::table('users')->select('id','name','email')->orderBy('id','desc')->get();
        return response()->json(
            $tableuser
        );
    }

    public function addsettinguser(Request $request)
    {
        $this->validate($request, array(
            'name' => 'required|max:255',
            'email' => 'required|max:255',
            'password' => 'required'
        ));
        if (User::where('email', '=', $request->email)->count() > 0) {
            return 'emailerr';
        }else{
            $users = new User;
            $users->name = $request->name;
            $users->email = $request->email;
            $users->password = Hash::needsRehash($request->password) ? Hash::make($request->password) : $request->password;
            $users->save();

            $id_role = 3;
            $roleusers = new Roleuser;
            $roleusers->id_user = $users->id;
            $roleusers->id_role = $id_role;
            $roleusers->save();
        } 
    }

    public function updatesettinguser(Request $request)
    {
        $this->validate($request, array(
            'name' => 'required|max:255',
            'email' => 'required|max:255'
        ));
        if (User::where('email', '=', $request->email)->where('id', '!=', $request->id)->count() > 0) {
            return 'emailerr';
        }else{
            $users = User::find($request->id);
            $users->name = $request->name;
            $users->email = $request->email;
            $users->save();
        }
    }

    public function deletesettinguser(Request $request)
    {
        $delete = \DB::table('users')->select('id')->where('id', $request->input('id'));
        $delete2 = \DB::table('roleusers')->select('id')->where('id_user', $request->input('id'));
        $delete->delete();
        $delete2->delete();
    }
}
