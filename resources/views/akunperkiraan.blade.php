@extends('layouts.app')

@section('content')
<div id="loading">
    <img id="loading-image" src="{{ asset('custom/img/loading2.gif') }}" alt="Loading..." />
</div>
<div class="main-content" id="main-akunperkiraan">
    <section class="section">
        <div class="section-header">
          <h1>Akun Perkiraan</h1>
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><i class="fas fa-book-open" style="margin: 2px 3px 0 0;"></i>Buku Besar</div>
            <div class="breadcrumb-item"><i class="fas fa-list" style="margin: 2px 3px 0 0;"></i>Akun Perkiraan</div>
          </div>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Tabel Akun Perkiraan</h4>
                        </div>
                        <div class="d-flex flex-row-reverse" style="margin: 0 25px 0 25px;">
                            <a href="#tambah" class="btn btn-primary btn-raised btn-xs col-lg-1" data-toggle="modal" data-target="#form-tambah-akunperkiraan" id="btn-tambah-akunperkiraan"><i class=""></i>Tambah</a>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped" id="tableakunperkiraan">
                                    <thead>
                                        <tr>
                                            <th class="text-center">No</th>
                                            <th class="text-center">ID</th>
                                            <th class="text-center">Nama</th>
                                            <th class="text-center">Tipe</th>
                                            <th class="text-center">Action</th>
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
<div class="main-content" id="main-akunperkiraan-err">
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
<form action="#" class="modal" tabindex="-1" role="dialog" id="form-tambah-akunperkiraan" novalidate="novalidate">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color: rgba(0, 120, 255, 1); color:white;">
            <h5 class="modal-title">Tambah Data Akun Perkiraan</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="id_akunperkiraan_tambah" class="control-label col-lg-2">ID</label>
                <input type="text" name="id_akunperkiraan_tambah" class="form-control" id="id_akunperkiraan_tambah" required autocomplete="off">
                <span class="help-block" id="id_akunperkiraan_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="nama_akunperkiraan_tambah" class="control-label col-lg-2">Nama</label>
                <input type="text" name="nama_akunperkiraan_tambah" class="form-control" id="nama_akunperkiraan_tambah" required autocomplete="off">
                <span class="help-block" id="nama_akunperkiraan_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="tipe_akunperkiraan_tambah" class="control-label col-lg-2">Tipe</label>
                <input type="text" name="tipe_akunperkiraan_tambah" class="form-control" id="tipe_akunperkiraan_tambah" required autocomplete="off">
                <span class="help-block" id="tipe_akunperkiraan_error_tambah"></span>
            </div>
            <div class="form-group text-center">
                <button type="button" class="btn btn-primary" id="btn-simpan-tambahakunperkiraan">Simpan</button>
                <button type="button" class="btn btn-secondary" id="btn-reset-simpanakunperkiraan" data-dismiss="modal">Batal</button>
            </div>
        </div>
      </div>
    </div>
</form>

<form action="#" class="modal" tabindex="-1" role="dialog" id="form-edit-akunperkiraan" novalidate="novalidate">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color: rgba(0, 120, 255, 1); color:white;">
            <h5 class="modal-title">Tambah Data Akun Perkiraan</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="id_akunperkiraan" class="control-label col-lg-2">ID</label>
                <input type="text" name="id_akunperkiraan" class="form-control" id="id_akunperkiraan" required autocomplete="off">
                <span class="help-block" id="id_akunperkiraan_error"></span>
            </div>
            <div class="form-group">
                <label for="nama_akunperkiraan" class="control-label col-lg-2">Nama</label>
                <input type="text" name="nama_akunperkiraan" class="form-control" id="nama_akunperkiraan" required autocomplete="off">
                <span class="help-block" id="nama_akunperkiraan_error"></span>
            </div>
            <div class="form-group">
                <label for="tipe_akunperkiraan" class="control-label col-lg-2">Tipe</label>
                <input type="text" name="tipe_akunperkiraan" class="form-control" id="tipe_akunperkiraan" required autocomplete="off">
                <span class="help-block" id="tipe_akunperkiraan_error"></span>
            </div>
            <div class="form-group text-center">
                <button type="button" class="btn btn-primary" id="btn-simpan-editakunperkiraan">Simpan</button>
                <button type="button" class="btn btn-secondary" id="btn-reset-editakunperkiraan" data-dismiss="modal">Batal</button>
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
        top: 150px;
        left: 600px;
        z-index: 100;
    }
</style>
<script src="{{ asset('custom/js/akunperkiraan.js') }}"></script>
@endsection