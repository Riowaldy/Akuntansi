@extends('layouts.app')

@section('content')
<div class="main-content" id="main-jurnal" style="display:none;">
    <section class="section">
        <div class="section-header">
          <h1>Jurnal</h1>
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><i class="fas fa-book-open" style="margin: 2px 3px 0 0;"></i>Buku Besar</div>
            <div class="breadcrumb-item"><i class="fas fa-list" style="margin: 2px 3px 0 0;"></i>Jurnal</div>
          </div>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Tabel Jurnal</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped" id="table-1">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Nomor Transaksi</th>
                                            <th class="text-center">Kode Akun</th>
                                            <th class="text-center">Nama Akun</th>
                                            <th class="text-center">Tanggal</th>
                                            <th class="text-center">Kas/Bank</th>
                                            <th class="text-center">Keterangan</th>
                                            <th class="text-center">Jumlah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>110101.07.20.1</td>
                                            <td>11041</td>
                                            <td>Persediaan</td>
                                            <td>05/08/2020</td>
                                            <td>Kas</td>
                                            <td>Bahan Baku Terigu 20 kg</td>
                                            <td>520.000</td>
                                        </tr>
                                        <tr>
                                            <td>110101.07.20.1</td>
                                            <td>11041</td>
                                            <td>Persediaan</td>
                                            <td>05/08/2020</td>
                                            <td>Kas</td>
                                            <td>Bahan Baku Terigu 20 kg</td>
                                            <td>520.000</td>
                                        </tr>
                                        <tr>
                                            <td>110101.07.20.1</td>
                                            <td>11041</td>
                                            <td>Persediaan</td>
                                            <td>05/08/2020</td>
                                            <td>Kas</td>
                                            <td>Bahan Baku Terigu 20 kg</td>
                                            <td>520.000</td>
                                        </tr>
                                        <tr>
                                            <td>110101.07.20.1</td>
                                            <td>11041</td>
                                            <td>Persediaan</td>
                                            <td>05/08/2020</td>
                                            <td>Kas</td>
                                            <td>Bahan Baku Terigu 20 kg</td>
                                            <td>520.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<div class="main-content" id="main-jurnal-err" style="display:none;">
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