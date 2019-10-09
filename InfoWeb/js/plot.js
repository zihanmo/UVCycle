$(document).ready(function(){
    var ajax = new XMLHttpRequest();
    var method = "GET";
    var url = "plotdata.php";
    var asynchronous = true;
    ajax.open(method, url, asynchronous);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var dates = [];
            var clicks = [];
            for (date in data) {
                dates.push(date);
                clicks.push(data[date]);
            }
            new Chart(document.getElementById('clicked'), {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{ 
                        data: clicks,
                        label: "Clicks",
                        borderColor: "#3e95cd",
                        fill: false
                      }]
                  },
                  options: {
                    title: {
                      display: true,
                      text: 'Daily number of clicks',
                      fontSize: 20,
                    },
                    legend: {
                        display: true,
                        labels: {
                            boxWidth: 60,
                            fontSize: 16,
                        }
                    },
                    responsive: false,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }],
                    }
                  }
            });
        }
    }
});