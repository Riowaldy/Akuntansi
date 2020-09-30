var Home = function () {
    var myChart = function(){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chartUser = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Andi', 'Budi', 'Cika', 'Diko', 'Erman'],
                datasets: [{
                    label: 'Data Pelanggan',
                    data: [3, 7, 10, 12, 15],
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

                $("#penerimaan").html('Rp.'+penerimaan);
                $("#pembayaran").html('Rp.'+pembayaran);
                $("#kasbank").html('Rp.'+kasbank);
                $("#hutang").html('Rp.'+hutang);
                $("#piutang").html('Rp.'+piutang);
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