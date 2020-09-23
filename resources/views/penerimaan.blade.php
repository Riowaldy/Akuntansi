@extends('layouts.app')

@section('content')
<div class="main-content">
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
@endsection