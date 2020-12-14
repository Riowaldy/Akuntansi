@extends('layouts.app')

@section('content')
<div class="main-content" id="main-hutangpiutang" style="display:none;">
    <section class="section">
        <div class="section-header">
          <h1>Hutang Piutang</h1>
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><i class="fas fa-book-open" style="margin: 2px 3px 0 0;"></i>Buku Besar</div>
            <div class="breadcrumb-item"><i class="fas fa-list" style="margin: 2px 3px 0 0;"></i>Hutang Piutang</div>
          </div>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Hutang Piutang</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped" id="tablehutangpiutang">
                                    <thead>
                                        <tr>
                                            <th class="text-center">No</th>
                                            <th class="text-center">Jenis</th>
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
<div class="main-content" id="main-hutangpiutang-err" style="display:none;">
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
    span.select2-selection__rendered{
        padding:7px 0 0 13px !important;
    }
</style>
<script src="{{ asset('custom/js/hutangpiutang.js') }}"></script>
@endsection