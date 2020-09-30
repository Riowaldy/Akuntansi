@extends('layouts.app')

@section('content')
<div class="main-content">
    <section class="section">
      <div class="section-header">
        <h1>Home</h1>
        <div class="section-header-breadcrumb">
          <div class="breadcrumb-item active"><i class="fas fa-home" style="margin: 2px 3px 0 0;"></i>Dashboard</div>
          <div class="breadcrumb-item"><i class="fas fa-list" style="margin: 2px 3px 0 0;"></i>Home</div>
        </div>
      </div>
      <div class="section-body">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="card card-statistic-2">
              <div class="card-icon shadow-primary bg-primary">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <div class="card-wrap">
                <div class="card-header">
                  <h4>Penerimaan</h4>
                </div>
                <div class="card-body" style="margin-top: 12px;">
                  <h5 id="penerimaan">...</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="card card-statistic-2">
              <div class="card-icon shadow-primary bg-primary">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <div class="card-wrap">
                <div class="card-header">
                  <h4>Pembayaran</h4>
                </div>
                <div class="card-body" style="margin-top: 12px;">
                  <h5 id="pembayaran">...</h5>
                </div>
              </div>
            </div> 
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="card card-statistic-2">
              <div class="card-icon shadow-primary bg-primary">
                <i class="fas fa-wallet"></i>
              </div>
              <div class="card-wrap">
                <div class="card-header">
                  <h4>Kas/Bank</h4>
                </div>
                <div class="card-body" style="margin-top: 12px;">
                  <h5 id="kasbank">...</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="card card-statistic-2" style="padding: 45px 0 45px 0;">
              <div class="card-icon shadow-primary bg-primary">
                <i class="fas fa-money-bill-alt"></i>
              </div>
              <div class="card-wrap">
                <div class="card-header">
                  <h4>Hutang</h4>
                </div>
                <div class="card-body" style="margin-top: 12px;">
                  <h5 id="hutang">...</h5>
                </div>
              </div>
              <div class="card-icon shadow-primary bg-primary" style="margin-left: -75px;">
                <i class="fas fa-money-bill-alt"></i>
              </div>
              <div class="card-wrap" style="margin-left: 75px;">
                <div class="card-header">
                  <h4>Piutang</h4>
                </div>
                <div class="card-body" style="margin-top: 12px;">
                  <h5 id="piutang">...</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card">
              <div class="card-header">
                <h4>Top 5 Customers</h4>
                <div class="section-header-breadcrumb">
                  <div class="breadcrumb-item active" style="margin-top:2px;">Periode 01-30 Agustus 2020</div>
                </div>
              </div>
              <div class="card-body">
                <canvas id="myChart" height="86"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h4>Top 5 Products</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-1">

                  </div>
                  <div class="col-lg-2">
                    <div class="product-item pb-3">
                      <div class="product-image">
                        <img alt="image" src="{{ asset('custom/img/products/product-4-50.png') }}" class="img-fluid">
                      </div>
                      <div class="product-details">
                        <div class="product-name">Ayam Goreng</div>
                        <div class="text-muted text-small">65 Kali Dibeli</div>
                        <div class="product-cta">
                          <a href="#" class="btn btn-primary">Detail</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <div class="product-item pb-3">
                      <div class="product-image">
                        <img alt="image" src="{{ asset('custom/img/products/product-4-50.png') }}" class="img-fluid">
                      </div>
                      <div class="product-details">
                        <div class="product-name">Nasi Goreng</div>
                        <div class="text-muted text-small">58 Kali Dibeli</div>
                        <div class="product-cta">
                          <a href="#" class="btn btn-primary">Detail</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <div class="product-item pb-3">
                      <div class="product-image">
                        <img alt="image" src="{{ asset('custom/img/products/product-4-50.png') }}" class="img-fluid">
                      </div>
                      <div class="product-details">
                        <div class="product-name">Ikan Bakar</div>
                        <div class="text-muted text-small">120 Kali Dibeli</div>
                        <div class="product-cta">
                          <a href="#" class="btn btn-primary">Detail</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <div class="product-item pb-3">
                      <div class="product-image">
                        <img alt="image" src="{{ asset('custom/img/products/product-4-50.png') }}" class="img-fluid">
                      </div>
                      <div class="product-details">
                        <div class="product-name">Bakmi Goreng</div>
                        <div class="text-muted text-small">97 Kali Dibeli</div>
                        <div class="product-cta">
                          <a href="#" class="btn btn-primary">Detail</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <div class="product-item pb-3">
                      <div class="product-image">
                        <img alt="image" src="{{ asset('custom/img/products/product-4-50.png') }}" class="img-fluid">
                      </div>
                      <div class="product-details">
                        <div class="product-name">Sate Ayam</div>
                        <div class="text-muted text-small">75 Kali Dibeli</div>
                        <div class="product-cta">
                          <a href="#" class="btn btn-primary">Detail</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-1">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
@endsection

@section('form')

@endsection

@section('script')
<script src="{{ asset('custom/js/home.js') }}"></script>
@endsection
