var ctx = document.getElementById('myChart').getContext('2d');
var labelsValues = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", 
                    "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
// plan plot variables                    
var dataValuesPlan = [100, 120, 110, 130, 200, 300,
                    50, 100, 50, 100, 130, 150];
var i;
var backgroundColorValuesPlan = [];
var borderColorValuesPlan = [];
var hoverBackgroundColorValuesPlan = [];
for(i = 0; i < labelsValues.length; i++) {
    backgroundColorValuesPlan.push('rgba(255, 99, 132, 0.2)')
    borderColorValuesPlan.push('rgba(255, 99, 132, 1)')
    hoverBackgroundColorValuesPlan.push(`rgba(255, 99, 132, ${0.8})`)               
}

// actual plot variables
var dataValuesActual = [110, 100, 105, 110, 100, 200,
                        150, 150, 60, 90, 120, 95];
var i;
var backgroundColorValuesActual = [];
var borderColorValuesActual = [];
var hoverBackgroundColorValuesActual = [];
for(i = 0; i < labelsValues.length; i++) {
backgroundColorValuesActual.push('rgba(0, 0, 156, 0.2)')
borderColorValuesActual.push('rgba(0, 0, 156, 1)')
hoverBackgroundColorValuesActual.push(`rgba(0, 0, 156, ${0.8})`)  
}

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelsValues,
        datasets: [{
            label: 'Gasto Previsto',
            data: dataValuesPlan,
            backgroundColor: backgroundColorValuesPlan,
            borderColor: borderColorValuesPlan,
            borderWidth: 1,
            hoverBackgroundColor: hoverBackgroundColorValuesPlan,
            
        },
        {
            label: 'Gasto Realizado',
            data: dataValuesActual,
            backgroundColor: backgroundColorValuesActual,
            borderColor: borderColorValuesActual,
            borderWidth: 1,
            hoverBackgroundColor: hoverBackgroundColorValuesActual,
            
        }],        
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: "Projeção de Custos Do Projeto",
            fontSize: 20
        },
        legend: {
            position: "bottom",
        },
        
    }
})