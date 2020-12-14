@extends('layouts.app')

@section('content')
<div id="loading">
    <img id="loading-image" src="{{ asset('custom/img/loading2.gif') }}" alt="Loading..." />
</div>
<div class="main-content" id="main-pesananpembelian" style="display:none;">
    <section class="section">
        <div class="section-header">
          <h1>Pesanan Pembelian</h1>
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><i class="fas fa-shopping-bag" style="margin: 2px 3px 0 0;"></i>Pembelian</div>
            <div class="breadcrumb-item"><i class="fas fa-list" style="margin: 2px 3px 0 0;"></i>Pesanan Pembelian</div>
          </div>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Tabel Pesanan Pembelian</h4>
                        </div>
                        <div class="d-flex flex-row-reverse" style="margin: 0 25px 0 25px;">
                            <a href="#tambah" class="btn btn-primary btn-raised btn-xs col-lg-1" data-toggle="modal" data-target="#form-tambah-pesananpembelian" id="btn-tambah-pesananpembelian"><i class=""></i>Tambah</a>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped" id="tablepesananpembelian">
                                    <thead>
                                        <tr>
                                            <th class="text-center">No</th>
                                            <th class="text-center">Nomor Transaksi</th>
                                            <th class="text-center">Tanggal</th>
                                            <th class="text-center">Nama Supplier</th>
                                            <th class="text-center">Pesanan</th>
                                            <th class="text-center">Kuantitas</th>
                                            <th class="text-center">Nilai Transaksi</th>
                                            <th class="text-center">Invoice</th>
                                            <th class="text-center">Status</th>
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
<div class="main-content" id="main-pesananpembelian-err" style="display:none;">
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
<form action="#" class="modal" tabindex="-1" role="dialog" id="form-tambah-pesananpembelian" novalidate="novalidate">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color: rgba(0, 120, 255, 1); color:white;">
            <h5 class="modal-title">Tambah Data Pesanan Pembelian</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="notrans_pesananpembelian_tambah" class="control-label col-lg-12">No Transaksi</label>
                <input type="text" name="notrans_pesananpembelian_tambah" class="form-control" id="notrans_pesananpembelian_tambah" required autocomplete="off">
                <span class="help-block" id="notrans_pesananpembelian_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="tanggal_pesananpembelian_tambah" class="control-label col-lg-2">Tanggal</label>
                <input type="text" name="tanggal_pesananpembelian_tambah" id="tanggal_pesananpembelian_tambah" class="form-control datepicker">
                <span class="help-block" id="tanggal_pesananpembelian_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="nama_pesananpembelian_tambah" class="control-label col-lg-12">Nama Supplier</label>
                <select class="nama_pesananpembelian_tambah" id="nama_pesananpembelian_tambah">
                </select>
                <span class="help-block" id="nama_pesananpembelian_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="pesanan_pesananpembelian_tambah" class="control-label col-lg-2">Pesanan</label>
                <select class="pesanan_pesananpembelian_tambah" id="pesanan_pesananpembelian_tambah">
                </select>
                <span class="help-block" id="pesanan_pesananpembelian_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="quantity_pesananpembelian_tambah" class="control-label col-lg-2">Kuantitas</label>
                <input type="text" name="quantity_pesananpembelian_tambah" class="form-control" id="quantity_pesananpembelian_tambah" required autocomplete="off">
                <span class="help-block" id="quantity_pesananpembelian_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="invoice_pesananpembelian_tambah" class="control-label col-lg-2">Invoice</label>
                <input type="text" name="invoice_pesananpembelian_tambah" class="form-control" id="invoice_pesananpembelian_tambah" required autocomplete="off">
                <span class="help-block" id="invoice_pesananpembelian_error_tambah"></span>
            </div>
            <div class="form-group text-center">
                <button type="button" class="btn btn-primary" id="btn-simpan-tambahpesananpembelian">Simpan</button>
                <button type="button" class="btn btn-secondary" id="btn-reset-simpanpesananpembelian" data-dismiss="modal">Batal</button>
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
</style>
<script src="{{ asset('custom/js/pesananpembelian.js') }}"></script>
@endsection