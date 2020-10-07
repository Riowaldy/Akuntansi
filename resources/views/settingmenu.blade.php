@extends('layouts.app')

@section('content')
<div id="loading">
    <img id="loading-image" src="{{ asset('custom/img/loading2.gif') }}" alt="Loading..." />
</div>
<div class="main-content" id="main-settingmenu">
    <section class="section">
        <div class="section-header">
          <h1>Setting Menu</h1>
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><i class="fas fa-cogs" style="margin: 2px 3px 0 0;"></i>Setting</div>
            <div class="breadcrumb-item"><i class="fas fa-list" style="margin: 2px 3px 0 0;"></i>Menu</div>
          </div>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Tabel Setting Menu</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped" id="tablesettingmenu">
                                    <thead>
                                        <tr>
                                            <th class="text-center">No</th>
                                            <th class="text-center">Nama Menu</th>
                                            <th class="text-center">Master Menu</th>
                                            <th class="text-center">Action</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Tabel Hak Akses Menu</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped" id="tablesettingmenurole">
                                    <thead>
                                        <tr>
                                            <th class="text-center">No</th>
                                            <th class="text-center">Nama Menu</th>
                                            <th class="text-center">Nama Role</th>
                                            <th class="text-center">Aktif / Tidak</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<div class="main-content" id="main-settingmenu-err">
    <section class="section">
        <div class="section-header">
            <h1>404</h1>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <section class="section">
                        <div class="container">
                            <div class="page-error">
                                <div class="page-inner">
                                    <h1>404</h1>
                                        <div class="page-description">
                                        Anda tidak memiliki akses pada halaman ini.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection

@section('form')
<form action="#" class="modal" tabindex="-1" role="dialog" id="form-edit-settingmenu" novalidate="novalidate">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color: rgba(0, 120, 255, 1); color:white;">
            <h5 class="modal-title">Edit Data Setting Menu</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="nama_menu" class="control-label col-lg-2">Name</label>
                <input type="text" name="nama_menu" class="form-control" id="nama_menu" required autocomplete="off">
                <span class="help-block" id="nama_menu_error"></span>
            </div>
            <div class="form-group text-center">
                <button type="button" class="btn btn-primary" id="btn-simpan-editsettingmenu">Simpan</button>
                <button type="button" class="btn btn-secondary" id="btn-reset-editsettingmenu" data-dismiss="modal">Batal</button>
            </div>
        </div>
      </div>
    </div>
</form>

<form action="#" class="modal" tabindex="-1" role="dialog" id="form-edit-settingmenurole" novalidate="novalidate">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color: rgba(0, 120, 255, 1); color:white;">
            <h5 class="modal-title">Edit Hak Akses Menu</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="nama_menurole" class="control-label col-lg-4">Nama Menu</label>
                <input type="text" name="nama_menurole" class="form-control" id="nama_menurole" readonly autocomplete="off">
            </div>
            <div class="form-group">
                <label for="role_menurole" class="control-label col-lg-4">Nama Role</label>
                <input type="text" name="role_menurole" class="form-control" id="role_menurole" readonly autocomplete="off">
            </div>
            <div class="form-group">
                <label for="aktif_menurole" class="control-label col-lg-4">Status</label>
                <select class="aktif_menurole" id="aktif_menurole">
                </select>
                <span class="help-block" id="aktif_menurole_error"></span>
            </div>
            <div class="form-group text-center">
                <button type="button" class="btn btn-primary" id="btn-simpan-editsettingmenurole">Simpan</button>
                <button type="button" class="btn btn-secondary" id="btn-reset-editsettingmenurole" data-dismiss="modal">Batal</button>
            </div>
        </div>
      </div>
    </div>
</form>
@endsection

@section('script')
<style>
    .dataTables_filter{
        margin-top:4px;
    }
    span.select2-selection__rendered{
        padding:7px 20px 0 15px !important;
    }
    span.select2-selection.select2-selection--single{
        border-color:#daedf2;
    }
    #loading {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: fixed;
        display: block;
        opacity: 0.7;
        background-color: #fff;
        z-index: 99;
        text-align: center;
    }

    #loading-image {
        position: absolute;
        top: 40%;
        left: 50%;
        z-index: 100;
    }
</style>
<script src="{{ asset('custom/js/settingmenu.js') }}"></script>
@endsection