<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;
use App\Menu;
use App\Menurole;

class SettingMenuController extends Controller
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
        return view('settingmenu');
    }

    public function getsettingmenu()
    {
        $tablemenu = DB::table('menus')->select('id','master','name')->orderBy('id','asc')->get();
        return response()->json(
            $tablemenu
        );
    }

    public function getsettingmenurole()
    {
        $tablerole = DB::table('menuroles')->select('menuroles.id', 'menus.name as mname', 'menus.id as mid', 'roles.name as rname', 'roles.id as rid', 'menuroles.aktif')
                                           ->join('menus', 'menuroles.id_menu', 'menus.id')
                                           ->join('roles', 'menuroles.id_role', 'roles.id')
                                           ->orderBy('menuroles.id','asc')
                                           ->get();
        return response()->json(
            $tablerole
        );
    }

    public function updatesettingmenu(Request $request)
    {
        $this->validate($request, array(
            'name' => 'required|max:255'
        ));
        $menus = Menu::find($request->id);
        $menus->name = $request->name;
        $menus->save();
    }

    public function updatesettingmenurole(Request $request)
    {
        $menus = Menurole::find($request->id);
        $menus->aktif = $request->aktif;
        $menus->save();
    }
}
