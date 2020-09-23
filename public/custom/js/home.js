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
    return {
        init: function () {
            myChart();
        }
    };
}();
$(document).ready(function(){
    Home.init();
});