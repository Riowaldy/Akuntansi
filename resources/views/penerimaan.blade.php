@extends('layouts.app')

@section('content')
<div id="loading">
    <img id="loading-image" src="{{ asset('custom/img/loading2.gif') }}" alt="Loading..." />
</div>
<div class="main-content" id="main-penerimaan">
    <section class="section">
        <div class="section-header">
          <h1>Penerimaan</h1>
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><i class="fas fa-money-check-alt" style="margin: 2px 3px 0 0;"></i>Kas Bank</div>
            <div class="breadcrumb-item"><i class="fas fa-list" style="margin: 2px 3px 0 0;"></i>Penerimaan</div>
          </div>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Tabel Penerimaan</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped" id="tablepenerimaan">
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
<div class="main-content" id="main-penerimaan-err">
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

    span.select2-selection__rendered{
        padding:7px 0 0 13px !important;
    }
</style>
<script src="{{ asset('custom/js/penerimaan.js') }}"></script>
@endsection