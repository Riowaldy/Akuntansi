@extends('layouts.app')

@section('content')
<div class="main-content">
    <section class="section">
        <div class="section-header">
            <h1>Profil</h1>
            <div class="section-header-breadcrumb">
                <div class="breadcrumb-item active">Profil</div>
            </div>
        </div>
        <div class="section-body">
            <h2 class="section-title">Hi, {{ Auth::user()->name }}!</h2>
            <p class="section-lead">
                Ganti informasi akunmu di sini.
            </p>
            <div class="row mt-sm-4">
                <div class="col-lg-5">
                    <div class="card author-box card-primary">
                        <div class="card-body">
                            <div class="author-box-left">
                                <img alt="image" src="{{ asset('custom/img/avatar/avatar-1.png') }}" class="rounded-circle author-box-picture">
                            </div>
                            <div class="author-box-details" style="margin-top: 20px;">
                                <div class="author-box-name">
                                    <h3 style="font-size: 25px; color:rgb(55, 129, 226);">{{ Auth::user()->name }}</h3>
                                </div>
                                <div class="author-box-job"><h3 style="font-size: 15px;" id="profilrole"></h3></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="card">
                        <form action="#" class="needs-validation" novalidate="">
                            <div class="card-header">
                                <h4>Edit Profile</h4>
                            </div>
                            <div class="card-body">
                                <div class="row" style="margin-top:-30px;">
                                    <div class="form-group col-12">
                                        <label>Name</label>
                                        <input type="text" class="form-control" id="id_user" value="{{ Auth::user()->id }}" hidden>
                                        <input type="text" class="form-control" id="nama_user" value="{{ Auth::user()->name }}" required="">
                                        <span class="help-block" id="nama_error"></span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-12">
                                        <label>Email</label>
                                        <input type="email" class="form-control" id="email_user" value="{{ Auth::user()->email }}" required="">
                                        <span class="help-block" id="email_error"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-left" style="margin-top:-40px;">
                                <button class="btn btn-primary" id="btn-simpan-editprofiluser">Simpan</button>
                            </div>
                        </form>
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
<script src="{{ asset('custom/js/profil.js') }}"></script>
@endsection