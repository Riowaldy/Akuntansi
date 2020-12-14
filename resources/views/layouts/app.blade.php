<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    {{-- Style Custom --}}
    <link href="{{ asset('custom/library/bootstrap4/dist/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('custom/library/fontawesome/css/all.css') }}" rel="stylesheet">
    <link href="{{ asset('custom/css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('custom/css/components.css') }}" rel="stylesheet">
    <link href="{{ asset('custom/library/datatables/datatables.css') }}" rel="stylesheet">
    <link href="{{ asset('custom/library/datatables/DataTables-1.10.21/css/dataTables.bootstrap4.css') }}" rel="stylesheet">
    <link href="{{ asset('custom/library/sweetalert2/sweetalert2.min.css') }}" rel="stylesheet">
    <link href="{{ asset('custom/library/select2/dist/css/select2.min.css') }}" rel="stylesheet">
    <link href="{{ asset('custom/library/datepicker/datepicker.css') }}" rel="stylesheet">
    
  </head>
<body>
    <div id="app">
        <div class="main-wrapper">
            <div class="navbar-bg"></div>
            <nav class="navbar navbar-expand-lg main-navbar">
                <form class="form-inline mr-auto">
                  <ul class="navbar-nav mr-3">
                    <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg"><i class="fas fa-bars"></i></a></li>
                    <li><a href="#" data-toggle="search" class="nav-link nav-link-lg d-sm-none"><i class="fas fa-search"></i></a></li>
                  </ul>
                </form>
                <ul class="navbar-nav navbar-right">
                  <li class="dropdown"><a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                    <img alt="image" src="{{ asset('custom/img/avatar/avatar-1.png') }}" class="rounded-circle mr-1">
                    <div class="d-sm-none d-lg-inline-block">Hi, {{ Auth::user()->name }}</div></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a href="{{ route('profil') }}" class="dropdown-item has-icon">
                        <i class="far fa-user"></i> Profile
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="{{ route('logout') }}" onclick="event.preventDefault();
                      document.getElementById('logout-form').submit();" class="dropdown-item has-icon text-danger">
                        <i class="fas fa-sign-out-alt"></i> Logout
                      </a>
                      <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        {{ csrf_field() }}
                      </form>
                    </div>
                  </li>
                </ul>
              </nav>
              <div class="main-sidebar">
                <aside id="sidebar-wrapper">
                  <div class="sidebar-brand">
                    <a href="index.html">AKUNTANSI</a>
                  </div>
                  <div class="sidebar-brand sidebar-brand-sm">
                    <a href="index.html">Ak</a>
                  </div>
                  <ul class="sidebar-menu">
                      <li class="nav-item dropdown" id="nav-dashboard">
                        <a href="#" class="nav-link has-dropdown"><i class="fas fa-home"></i><span>Dashboard</span></a>
                        <ul class="dropdown-menu" id="menu-dashboard"></ul>
                      </li>
                      <li class="nav-item dropdown" id="nav-kasbank">
                        <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-money-check-alt"></i> <span>Kas/Bank</span></a>
                        <ul class="dropdown-menu" id="menu-kasbank"></ul>
                      </li>
                      <li class="nav-item dropdown" id="nav-bukubesar">
                        <a href="#" class="nav-link has-dropdown"><i class="fas fa-book"></i> <span>Buku Besar</span></a>
                        <ul class="dropdown-menu" id="menu-bukubesar"></ul>
                      </li>
                      <li class="nav-item dropdown" id="nav-penjualan">
                        <a href="#" class="nav-link has-dropdown"><i class="fas fa-balance-scale"></i> <span>Penjualan</span></a>
                        <ul class="dropdown-menu" id="menu-penjualan"></ul>
                      </li>
                      <li class="nav-item dropdown" id="nav-pembelian">
                        <a href="#" class="nav-link has-dropdown"><i class="fas fa-shopping-bag"></i> <span>Pembelian</span></a>
                        <ul class="dropdown-menu" id="menu-pembelian"></ul>
                      </li>
                      <li class="nav-item dropdown" id="nav-persediaan">
                        <a href="#" class="nav-link has-dropdown"><i class="fas fa-box-open"></i> <span>Persediaan</span></a>
                        <ul class="dropdown-menu" id="menu-persediaan"></ul>
                      </li>
                      <li class="nav-item dropdown" id="nav-laporan">
                        <a href="#" class="nav-link has-dropdown"><i class="fas fa-book-open"></i> <span>Laporan</span></a>
                        <ul class="dropdown-menu" id="menu-laporan"></ul>
                      </li>
                      <li class="nav-item dropdown" id="nav-setting">
                        <a href="#" class="nav-link has-dropdown"><i class="fas fa-cogs"></i> <span>Setting</span></a>
                        <ul class="dropdown-menu" id="menu-setting"></ul>
                      </li>
                    </ul>
                </aside>
              </div>
      
            <!-- Main Content -->
            @yield('content')
            @yield('form')

            <footer class="main-footer">
              <div class="footer-left">
                Copyright &copy; 2020 <div class="bullet"></div>By Riowaldy Indrawan;
              </div>
              <div class="footer-right">
                1.0.0
              </div>
            </footer>
        </div>
    </div>

    <script src="{{ asset('custom/library/jquery/jquery.js') }}"></script>
    <script src="{{ asset('custom/library/jquery/validate.js') }}"></script>
    <script src="{{ asset('custom/library/pooper/pooper.js') }}"></script>
    <script src="{{ asset('custom/library/bootstrap4/dist/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('custom/library/chartjs/dist/chart.min.js') }}"></script>
    <script src="{{ asset('custom/library/loader/loader.js') }}"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.2/Chart.min.js"></script>
    <script src="{{ asset('custom/library/moment/moment.js') }}"></script>
    <script src="{{ asset('custom/library/datatables/datatables.js') }}"></script>
    <script src="{{ asset('custom/library/datatables/DataTables-1.10.21/js/dataTables.bootstrap4.js') }}"></script>
    <script src="{{ asset('custom/library/sweetalert2/sweetalert2.min.js') }}"></script>
    <script src="{{ asset('custom/library/nicescroll/nicescroll.js') }}"></script>
    <script src="{{ asset('custom/library/select2/dist/js/select2.min.js') }}"></script>
    <script src="{{ asset('custom/library/datepicker/datepicker.js') }}"></script>
    
    <script src="{{ asset('custom/js/stisla.js') }}"></script>
    <script src="{{ asset('custom/js/scripts.js') }}"></script>
    <script src="{{ asset('custom/js/custom.js') }}"></script>
    <script src="{{ asset('custom/js/navbar.js') }}"></script>
    
    @yield('script')
    
</body>
</html>
