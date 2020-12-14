@extends('layouts.app')

@section('content')
<div id="loading">
    <img id="loading-image" src="{{ asset('custom/img/loading2.gif') }}" alt="Loading..." />
</div>
<div class="main-content" id="main-pemakaian" style="display:none;">
    <section class="section">
        <div class="section-header">
          <h1>Pemakaian</h1>
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><i class="fas fa-box-open" style="margin: 2px 3px 0 0;"></i>Persediaan</div>
            <div class="breadcrumb-item"><i class="fas fa-list" style="margin: 2px 3px 0 0;"></i>Master Tambahan</div>
          </div>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Tabel Master Tambahan</h4>
                        </div>
                        <div class="d-flex flex-row-reverse" style="margin: 0 25px 0 25px;">
                            <a href="#tambah" class="btn btn-primary btn-raised btn-xs col-lg-1" data-toggle="modal" data-target="#form-tambah-mastertambahan" id="btn-tambah-mastertambahan"><i class=""></i>Tambah</a>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped" id="tablemastertambahan">
                                    <thead>
                                        <tr>
                                            <th class="text-center">No</th>
                                            <th class="text-center">ID</th>
                                            <th class="text-center">Nama</th>
                                            <th class="text-center">Akun Perkiraan</th>
                                            <th class="text-center">Harga</th>
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
<div class="main-content" id="main-pemakaian-err" style="display:none;">
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
<form action="#" class="modal" tabindex="-1" role="dialog" id="form-tambah-mastertambahan" novalidate="novalidate">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color: rgba(0, 120, 255, 1); color:white;">
            <h5 class="modal-title">Tambah Data Master Tambahan</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="id_tambahan_tambah" class="control-label col-lg-12">ID</label>
                <input type="text" name="id_tambahan_tambah" class="form-control" id="id_tambahan_tambah" required autocomplete="off">
                <span class="help-block" id="id_tambahan_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="nama_tambahan_tambah" class="control-label col-lg-12">Nama</label>
                <input type="text" name="nama_tambahan_tambah" class="form-control" id="nama_tambahan_tambah" required autocomplete="off">
                <span class="help-block" id="nama_tambahan_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="akun_tambahan_tambah" class="control-label col-lg-12">Akun Perkiraan</label>
                <select class="akun_tambahan_tambah" id="akun_tambahan_tambah">
                </select>
                <span class="help-block" id="akun_tambahan_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="harga_tambahan_tambah" class="control-label col-lg-12">Harga</label>
                <input type="text" name="harga_tambahan_tambah" class="form-control" id="harga_tambahan_tambah" required autocomplete="off">
                <span class="help-block" id="harga_tambahan_error_tambah"></span>
            </div>
            <div class="form-group text-center">
                <button type="button" class="btn btn-primary" id="btn-simpan-tambahmastertambahan">Simpan</button>
                <button type="button" class="btn btn-secondary" id="btn-reset-simpanmastertambahan" data-dismiss="modal">Batal</button>
            </div>
        </div>
      </div>
    </div>
</form>

<form action="#" class="modal" tabindex="-1" role="dialog" id="form-edit-mastertambahan" novalidate="novalidate">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color: rgba(0, 120, 255, 1); color:white;">
            <h5 class="modal-title">Edit Data Master Tambahan</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="nama_tambahan" class="control-label col-lg-12">Nama</label>
                <input type="text" name="nama_tambahan" class="form-control" id="nama_tambahan" required autocomplete="off">
                <span class="help-block" id="nama_tambahan_error"></span>
            </div>
            <div class="form-group">
                <label for="akun_tambahan" class="control-label col-lg-12">Akun Perkiraan</label>
                <select class="akun_tambahan" id="akun_tambahan">
                </select>
                <span class="help-block" id="akun_tambahan_error"></span>
            </div>
            <div class="form-group">
                <label for="harga_tambahan" class="control-label col-lg-12">Harga</label>
                <input type="text" name="harga_tambahan" class="form-control" id="harga_tambahan" required autocomplete="off">
                <span class="help-block" id="harga_tambahan_error"></span>
            </div>
            <div class="form-group text-center">
                <button type="button" class="btn btn-primary" id="btn-simpan-editmastertambahan">Simpan</button>
                <button type="button" class="btn btn-secondary" id="btn-reset-editmastertambahan" data-dismiss="modal">Batal</button>
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
        top: 40%;
        left: 50%;
        z-index: 100;
    }

    #select2-akun_tambahan_tambah-container{
        margin: 7px 0 0 6px;
    }

    #select2-akun_tambahan-container{
        margin: 7px 0 0 6px;
    }
</style>
<script src="{{ asset('custom/js/tambahan.js') }}"></script>
@endsection