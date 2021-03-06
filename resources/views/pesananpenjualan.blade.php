@extends('layouts.app')

@section('content')
<div class="main-content" id="main-pesananpenjualan" style="display:none;">
    <section class="section">
        <div class="section-header">
          <h1>Pesanan Penjualan</h1>
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><i class="fas fa-balance-scale" style="margin: 2px 3px 0 0;"></i>Penjualan</div>
            <div class="breadcrumb-item"><i class="fas fa-list" style="margin: 2px 3px 0 0;"></i>Pesanan Penjualan</div>
          </div>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Tabel Pesanan Penjualan</h4>
                        </div>
                        <div class="d-flex flex-row-reverse" style="margin: 0 25px 0 25px;">
                            <a href="#tambah" class="btn btn-primary btn-raised btn-xs col-lg-1" data-toggle="modal" data-target="#form-tambah-pesananpenjualan" id="btn-tambah-pesananpenjualan"><i class=""></i>Tambah</a>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped" id="tablepesananpenjualan">
                                    <thead>
                                        <tr>
                                            <th class="text-center">No</th>
                                            <th class="text-center">Nomor Transaksi</th>
                                            <th class="text-center">Tanggal</th>
                                            <th class="text-center">Nama Pelanggan</th>
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
<div class="main-content" id="main-pesananpenjualan-err" style="display:none;">
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
<form action="#" class="modal" tabindex="-1" role="dialog" id="form-tambah-pesananpenjualan" novalidate="novalidate">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color: rgba(0, 120, 255, 1); color:white;">
            <h5 class="modal-title">Tambah Data Pesanan Penjualan</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="notrans_pesananpenjualan_tambah" class="control-label col-lg-12">No Transaksi</label>
                <input type="text" name="notrans_pesananpenjualan_tambah" class="form-control" id="notrans_pesananpenjualan_tambah" required autocomplete="off">
                <span class="help-block" id="notrans_pesananpenjualan_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="tanggal_pesananpenjualan_tambah" class="control-label col-lg-2">Tanggal</label>
                <input type="text" name="tanggal_pesananpenjualan_tambah" id="tanggal_pesananpenjualan_tambah" class="form-control datepicker">
                <span class="help-block" id="tanggal_pesananpenjualan_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="nama_pesananpenjualan_tambah" class="control-label col-lg-12">Nama Pelanggan</label>
                <select class="nama_pesananpenjualan_tambah" id="nama_pesananpenjualan_tambah">
                </select>
                <span class="help-block" id="nama_pesananpenjualan_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="pesanan_pesananpenjualan_tambah" class="control-label col-lg-2">Pesanan</label>
                <select class="pesanan_pesananpenjualan_tambah" id="pesanan_pesananpenjualan_tambah">
                </select>
                <span class="help-block" id="pesanan_pesananpenjualan_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="quantity_pesananpenjualan_tambah" class="control-label col-lg-2">Kuantitas</label>
                <input type="text" name="quantity_pesananpenjualan_tambah" class="form-control" id="quantity_pesananpenjualan_tambah" required autocomplete="off">
                <span class="help-block" id="quantity_pesananpenjualan_error_tambah"></span>
            </div>
            <div class="form-group">
                <label for="invoice_pesananpenjualan_tambah" class="control-label col-lg-2">Invoice</label>
                <input type="text" name="invoice_pesananpenjualan_tambah" class="form-control" id="invoice_pesananpenjualan_tambah" required autocomplete="off">
                <span class="help-block" id="invoice_pesananpenjualan_error_tambah"></span>
            </div>
            <div class="form-group text-center">
                <button type="button" class="btn btn-primary" id="btn-simpan-tambahpesananpenjualan">Simpan</button>
                <button type="button" class="btn btn-secondary" id="btn-reset-simpanpesananpenjualan" data-dismiss="modal">Batal</button>
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
        padding:7px 0 0 13px !important;
    }
</style>
<script src="{{ asset('custom/js/pesananpenjualan.js') }}"></script>
@endsection