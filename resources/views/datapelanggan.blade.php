@extends('layouts.app')

@section('content')
<div class="main-content" id="main-datapelanggan" style="display:none;">
    <section class="section">
        <div class="section-header">
          <h1>Data Pelanggan</h1>
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><i class="fas fa-balance-scale" style="margin: 2px 3px 0 0;"></i>Penjualan</div>
            <div class="breadcrumb-item"><i class="fas fa-list" style="margin: 2px 3px 0 0;"></i>Data Pelanggan</div>
          </div>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Tabel Data Pelanggan</h4>
                        </div>
                        <div class="d-flex flex-row-reverse" style="margin: 0 25px 0 25px;">
                            <a href="#tambah" class="btn btn-primary btn-raised btn-xs col-lg-1" data-toggle="modal" data-target="#form-tambah-datapelanggan" id="btn-tambah-datapelanggan"><i class=""></i>Tambah</a>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped" id="tabledatapelanggan">
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
<div class="main-content" id="main-datapelanggan-err" style="display:none;">
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
<form action="#" class="modal" tabindex="-1" role="dialog" id="form-tambah-datapelanggan" novalidate="novalidate">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color: rgba(0, 120, 255, 1); color:white;">
            <h5 class="modal-title">Tambah Data Pelanggan</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="id_pelanggan_tambah" class="control-label col-lg-2">ID</label>
                <input type="text" name="id_pelanggan_tambah" class="form-control" id="id_pelanggan_tambah" required autocomplete="off">
                <span class="help-block" id="id_pelanggan_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="nama_pelanggan_tambah" class="control-label col-lg-2">Nama</label>
                <input type="text" name="nama_pelanggan_tambah" class="form-control" id="nama_pelanggan_tambah" required autocomplete="off">
                <span class="help-block" id="nama_pelanggan_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="telp_pelanggan_tambah" class="control-label col-lg-2">Telp</label>
                <input type="text" name="telp_pelanggan_tambah" class="form-control" id="telp_pelanggan_tambah" required autocomplete="off">
                <span class="help-block" id="telp_pelanggan_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="alamat_pelanggan_tambah" class="control-label col-lg-2">Alamat</label>
                <input type="text" name="alamat_pelanggan_tambah" class="form-control" id="alamat_pelanggan_tambah" required autocomplete="off">
                <span class="help-block" id="alamat_pelanggan_error_tambah"></span>
            </div>
            <div class="form-group text-center">
                <button type="button" class="btn btn-primary" id="btn-simpan-tambahdatapelanggan">Simpan</button>
                <button type="button" class="btn btn-secondary" id="btn-reset-simpandatapelanggan" data-dismiss="modal">Batal</button>
            </div>
        </div>
      </div>
    </div>
</form>

<form action="#" class="modal" tabindex="-1" role="dialog" id="form-edit-datapelanggan" novalidate="novalidate">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color: rgba(0, 120, 255, 1); color:white;">
            <h5 class="modal-title">Edit Data Pelanggan</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="id_pelanggan" class="control-label col-lg-2">ID</label>
                <input type="text" name="id_pelanggan" class="form-control" id="id_pelanggan" required autocomplete="off">
                <span class="help-block" id="id_pelanggan_error"></span>
            </div>
            <div class="form-group">
                <label for="nama_pelanggan" class="control-label col-lg-2">Name</label>
                <input type="text" name="nama_pelanggan" class="form-control" id="nama_pelanggan" required autocomplete="off">
                <span class="help-block" id="nama_pelanggan_error"></span>
            </div>
            <div class="form-group">
                <label for="telp_pelanggan" class="control-label col-lg-2">Telp</label>
                <input type="text" name="telp_pelanggan" class="form-control" id="telp_pelanggan" required autocomplete="off">
                <span class="help-block" id="telp_pelanggan_error"></span>
            </div>
            <div class="form-group">
                <label for="alamat_pelanggan" class="control-label col-lg-2">Alamat</label>
                <input type="text" name="alamat_pelanggan" class="form-control" id="alamat_pelanggan" required autocomplete="off">
                <span class="help-block" id="alamat_pelanggan_error"></span>
            </div>
            <div class="form-group text-center">
                <button type="button" class="btn btn-primary" id="btn-simpan-editdatapelanggan">Simpan</button>
                <button type="button" class="btn btn-secondary" id="btn-reset-editdatapelanggan" data-dismiss="modal">Batal</button>
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
</style>
<script src="{{ asset('custom/js/datapelanggan.js') }}"></script>
@endsection