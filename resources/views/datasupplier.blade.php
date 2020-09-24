@extends('layouts.app')

@section('content')
<div id="loading">
    <img id="loading-image" src="{{ asset('custom/img/loading2.gif') }}" alt="Loading..." />
</div>
<div class="main-content" id="main-datasupplier">
    <section class="section">
        <div class="section-header">
          <h1>Data Supplier</h1>
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><i class="fas fa-shopping-bag" style="margin: 2px 3px 0 0;"></i>Pembelian</div>
            <div class="breadcrumb-item"><i class="fas fa-list" style="margin: 2px 3px 0 0;"></i>Data Supplier</div>
          </div>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Tabel Data Supplier</h4>
                        </div>
                        <div class="d-flex flex-row-reverse" style="margin: 0 25px 0 25px;">
                            <a href="#tambah" class="btn btn-primary btn-raised btn-xs col-lg-1" data-toggle="modal" data-target="#form-tambah-datasupplier" id="btn-tambah-datasupplier"><i class=""></i>Tambah</a>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped" id="tabledatasupplier">
                                    <thead>
                                        <tr>
                                            <th class="text-center">No</th>
                                            <th class="text-center">ID</th>
                                            <th class="text-center">Nama</th>
                                            <th class="text-center">Telp</th>
                                            <th class="text-center">Alamat</th>
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
<div class="main-content" id="main-datasupplier-err">
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
<form action="#" class="modal" tabindex="-1" role="dialog" id="form-tambah-datasupplier" novalidate="novalidate">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color: rgba(0, 120, 255, 1); color:white;">
            <h5 class="modal-title">Tambah Data Supplier</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="id_supplier_tambah" class="control-label col-lg-2">ID</label>
                <input type="text" name="id_supplier_tambah" class="form-control" id="id_supplier_tambah" required autocomplete="off">
                <span class="help-block" id="id_supplier_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="nama_supplier_tambah" class="control-label col-lg-2">Nama</label>
                <input type="text" name="nama_supplier_tambah" class="form-control" id="nama_supplier_tambah" required autocomplete="off">
                <span class="help-block" id="nama_supplier_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="telp_supplier_tambah" class="control-label col-lg-2">Telp</label>
                <input type="text" name="telp_supplier_tambah" class="form-control" id="telp_supplier_tambah" required autocomplete="off">
                <span class="help-block" id="telp_supplier_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="alamat_supplier_tambah" class="control-label col-lg-2">Alamat</label>
                <input type="text" name="alamat_supplier_tambah" class="form-control" id="alamat_supplier_tambah" required autocomplete="off">
                <span class="help-block" id="alamat_supplier_error_tambah"></span>
            </div>
            <div class="form-group text-center">
                <button type="button" class="btn btn-primary" id="btn-simpan-tambahdatasupplier">Simpan</button>
                <button type="button" class="btn btn-secondary" id="btn-reset-simpandatasupplier" data-dismiss="modal">Batal</button>
            </div>
        </div>
      </div>
    </div>
</form>

<form action="#" class="modal" tabindex="-1" role="dialog" id="form-edit-datasupplier" novalidate="novalidate">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color: rgba(0, 120, 255, 1); color:white;">
            <h5 class="modal-title">Edit Data Supplier</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="id_supplier" class="control-label col-lg-2">ID</label>
                <input type="text" name="id_supplier" class="form-control" id="id_supplier" required autocomplete="off">
                <span class="help-block" id="id_supplier_error"></span>
            </div>
            <div class="form-group">
                <label for="nama_supplier" class="control-label col-lg-2">Name</label>
                <input type="text" name="nama_supplier" class="form-control" id="nama_supplier" required autocomplete="off">
                <span class="help-block" id="nama_supplier_error"></span>
            </div>
            <div class="form-group">
                <label for="telp_supplier" class="control-label col-lg-2">Telp</label>
                <input type="text" name="telp_supplier" class="form-control" id="telp_supplier" required autocomplete="off">
                <span class="help-block" id="telp_supplier_error"></span>
            </div>
            <div class="form-group">
                <label for="alamat_supplier" class="control-label col-lg-2">Alamat</label>
                <input type="text" name="alamat_supplier" class="form-control" id="alamat_supplier" required autocomplete="off">
                <span class="help-block" id="alamat_supplier_error"></span>
            </div>
            <div class="form-group text-center">
                <button type="button" class="btn btn-primary" id="btn-simpan-editdatasupplier">Simpan</button>
                <button type="button" class="btn btn-secondary" id="btn-reset-editdatasupplier" data-dismiss="modal">Batal</button>
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
<script src="{{ asset('custom/js/datasupplier.js') }}"></script>
@endsection