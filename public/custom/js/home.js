var Home = function () {
    var myChart = function(){
        $('#chart-year').html('Periode '+new Date().getFullYear());
        $.ajax({
            url : "/home/getdata",
            type : "GET",
            success: function(res){
                console.log();
                var ctx = document.getElementById('myChart').getContext('2d');
                var chartUser = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: [
                            (res.pelanggan[0] != undefined ? res.pelanggan[0].name : '-'), 
                            (res.pelanggan[1] != undefined ? res.pelanggan[1].name : '-'),
                            (res.pelanggan[2] != undefined ? res.pelanggan[2].name : '-'),
                            (res.pelanggan[3] != undefined ? res.pelanggan[3].name : '-'), 
                            (res.pelanggan[4] != undefined ? res.pelanggan[4].name : '-')
                        ],
                        datasets: [{
                            label: 'Data Pelanggan',
                            data: [
                                (res.pelanggan[0] != undefined ? res.pelanggan[0].nilai : '-'),  
                                (res.pelanggan[1] != undefined ? res.pelanggan[1].nilai : '-'),  
                                (res.pelanggan[2] != undefined ? res.pelanggan[2].nilai : '-'), 
                                (res.pelanggan[3] != undefined ? res.pelanggan[3].nilai : '-'), 
                                (res.pelanggan[4] != undefined ? res.pelanggan[4].nilai : '-')
                            ],
                            backgroundColor: [
                                'rgba(0, 120, 255, 1)',
                                'rgba(0, 120, 255, 1)',
                                'rgba(0, 120, 255, 1)',
                                'rgba(0, 120, 255, 1)',
                                'rgba(0, 120, 255, 1)'
                            ]
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            },
            error : function(res){
                
            }
        });
    };

    var dataNilai = function(){
        $.ajax({
            url : "/home/getdata",
            type : "GET",
            success: function(res){
                var penerimaan = res.penerimaan[0].nilai == null ? 0 : parseInt(res.penerimaan[0].nilai);
                var pembayaran = res.pembayaran[0].nilai == null ? 0 : parseInt(res.pembayaran[0].nilai);
                var kasbank = parseInt(penerimaan) + parseInt(pembayaran);
                var kasbank = kasbank == null ? 0 : parseInt(kasbank);
                var hutang = res.hutang[0].nilai == null ? 0 : parseInt(res.hutang[0].nilai);
                var piutang = res.piutang[0].nilai == null ? 0 : parseInt(res.piutang[0].nilai);

                $("#penerimaan").html('Rp'+penerimaan.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "1."));
                $("#pembayaran").html('Rp'+pembayaran.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "1."));
                $("#kasbank").html('Rp'+kasbank.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "1."));
                $("#hutang").html('Rp'+hutang.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "1."));
                $("#piutang").html('Rp'+piutang.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "1."));

                $('#terjual').append(
                    '<div class="col-lg-1"></div>'
                );
                res.terjual.forEach(function(entry, count) {
                    count = count+1;
                    $('#terjual').append(
                        '<div class="col-lg-2">' +
                        '<div class="product-item pb-3">' +
                          '<div class="product-image">' +
                            '<h1>'+ count +'</h1>' +
                          '</div>' +
                          '<div class="product-details">' +
                            '<div class="product-name">'+ entry.name +'</div>' +
                            '<div class="text-muted text-small">'+ entry.terjual +' Kali Dibeli</div>' +
                            '<div class="product-cta">' +
                              '<a href="#" class="btn btn-primary">Detail</a>' +
                            '</div>' +
                          '</div>' +
                        '</div>' +
                      '</div>'
                    );
                });
                $('#terjual').append(
                    '<div class="col-lg-1"></div>'
                );
            },
            error : function(res){
                
            }
        })
    }
    return {
        init: function () {
            myChart();
            dataNilai();
        }
    };
}();
$(document).ready(function(){
    Home.init();
});