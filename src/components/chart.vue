<template>
    <div id="">
        <ClientOnly>
            <div id="chart" class="chart">
                <div class="toolbar">

                    </div>
                
                    <div id="chart-timeline">
                    <apexchart ref="chartRef" type="area" height="340" :options="chartOptions" :series="series"></apexchart>
                </div>
            </div>
        </ClientOnly>
    </div>
  </template>
  
  <script setup>
//   import VueApexCharts from 'vue3-apexcharts';
  import { ref } from 'vue';
  
  const series = ref([{
            data: [
              [1327359600000,30.95],
              [1327446000000,31.34],
              [1327532400000,31.18],
              [1327618800000,31.05],
              [1327878000000,31.00],
              [1327964400000,30.95],
              [1328050800000,31.24],
              [1328137200000,31.29],
              [1328223600000,31.85],
              [1328482800000,31.86],
              [1328569200000,32.28],
              [1328655600000,32.10],
              [1328742000000,32.65],
              [1328828400000,32.21],
              [1329087600000,32.35],
              [1329174000000,32.44],
              [1329260400000,32.46],
              [1329346800000,32.86],
              [1329433200000,32.75],
              [1329778800000,32.54],
              [1329865200000,32.33],
              [1329951600000,32.97],
              [1330038000000,33.41],
              [1330297200000,33.27],
              [1330383600000,33.27],
              [1330470000000,32.89],
              [1330556400000,33.10],
              [1330642800000,33.73],
              [1330902000000,33.22],
              [1330988400000,31.99],
              [1331074800000,32.41],
              [1331161200000,33.05],
              [1331247600000,33.64],
              [1331506800000,33.56],
              [1331593200000,34.22],
              [1331679600000,33.77],
              [1331766000000,34.17],
              [1331852400000,33.82],
              [1332111600000,34.51],
              [1332198000000,33.16],
              [1332284400000,33.56],
              [1332370800000,33.71],
              [1332457200000,33.81],
              [1332712800000,34.40],
              [1332799200000,34.63],
              [1332885600000,34.46],
              [1332972000000,34.48],
              [1333058400000,34.31],
              [1333317600000,34.70],
              [1333404000000,34.31],
              [1333490400000,33.46],
              [1333576800000,33.59],
              [1333922400000,33.22],
              [1334008800000,32.61],
              [1334095200000,33.01],
              [1334181600000,33.55],
              [1334268000000,33.18],
              [1334527200000,32.84],
              [1334613600000,33.84],
              [1334700000000,33.39],
              [1334786400000,32.91],
              [1334872800000,33.06],
              [1335132000000,32.62],
              [1335218400000,32.40],
              [1335304800000,33.13],
              [1335391200000,33.26],
              [1335477600000,33.58],
              [1335736800000,33.55],
              [1335823200000,33.77],
              [1335909600000,33.76],
              [1335996000000,33.32],
              [1336082400000,32.61],
              [1336341600000,32.52],
              [1336428000000,32.67],
              [1336514400000,32.52],
              [1336600800000,31.92],
              [1336687200000,32.20],
              [1336946400000,32.23],
              [1337032800000,32.33],
              [1337119200000,32.36],
              [1337205600000,32.01],
              [1337292000000,31.31],
              [1337551200000,32.01],
              [1337637600000,32.01],
              [1337724000000,32.18],
              [1337810400000,31.54],
              [1337896800000,31.60],
              [1338242400000,32.05],
              [1338328800000,31.29],
              [1338415200000,31.05],
              [1338501600000,29.82],
              [1338760800000,30.31],
              [1338847200000,30.70],
         
            ]
          }]);

  const selection = ref("one_year");
  
  const chartOptions = ref({
    chart: {
        id: 'area-datetime',
        type: 'area',
        height: 400,
        zoom: {
        autoScaleYaxis: true
        }
    },
    
    annotations: {
        yaxis: [{
        y: 30,
        borderColor: '#242D39',
        label: {
            show: true,
            text: 'Support',
            style: {
            color: "#fff",
            background: '#161D26'
            }
        }
        }],
        xaxis: [{
        x: new Date('14 Nov 2012').getTime(),
        borderColor: '#161D26',
        yAxisIndex: 0,
        label: {
            show: true,
            text: 'Rally',
            style: {
            color: "#161D26",
            background: '#161D26',
            }
        }
        }]
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0,
        style: 'hollow',
    },
    xaxis: {
        type: 'datetime',
        min: new Date('01 Mar 2012').getTime(),
        tickAmount: 16,
    },
    tooltip: {
        x: {
        format: 'dd MMM yyyy'
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
        shadeIntensity: 0.2,
        opacityFrom: 0.2,
        opacityTo: 0.4,
        stops: [0, 100]
        }
    },
  
  });
  
  const chartRef = ref(null);
  
  const updateData = (timeline) => {
    selection.value = timeline;

  //   switch (timeline) {
  //     case 'one_month':
  //       chartRef.value.zoomX(new Date('28 Jan 2013').getTime(), new Date('27 Feb 2013').getTime());
  //       break;
  //     case 'six_months':
  //       chartRef.value.zoomX(new Date('27 Sep 2012').getTime(), new Date('27 Feb 2013').getTime());
  //       break;
  //     case 'one_year':
  //       chartRef.value.zoomX(new Date('27 Feb 2012').getTime(), new Date('27 Feb 2013').getTime());
  //       break;
  //     case 'ytd':
  //       chartRef.value.zoomX(new Date('01 Jan 2013').getTime(), new Date('27 Feb 2013').getTime());
  //       break;
  //     case 'all':
  //       chartRef.value.zoomX(new Date('23 Jan 2012').getTime(), new Date('27 Feb 2013').getTime());
  //       break;
  //     default:
  //   }
   };
  </script>

<style scoped>
.chart :deep(.apexcharts-toolbar){
    display: none !important;
}
.apexcharts-tooltip.apexcharts-theme-light {
    border: 1px solid #e3e3e3;
    background: #12181F;
}

.chart :deep(.apexcharts-grid-borders){
  display: none !important;
}
.chart :deep(.apexcharts-toolbar){
  display: none !important;
}
/* .chart :deep(.apexcharts-yaxis){
  display: none !important;
} */
/* .chart :deep(.apexcharts-xaxis-texts-g){
  display: none !important;
} */
.chart :deep(.apexcharts-xaxis-tick){
  display: none !important;
}
/* .chart :deep(.apexcharts-yaxis-annotations .apexcharts-hidden-element-shown){
  display: none !important;
} */
/* .chart :deep(.apexcharts-yaxis-annotations){
  display: none !important;
} */
/* .chart :deep(.apexcharts-gridlines-horizontal){
  display: none !important;
} */
/* .chart :deep(.apexcharts-grid-borders){
  display: none !important;
} */
/* .apexcharts-tooltip.apexcharts-theme-light {
  border: 1px solid #e3e3e3;
  background: #12181F;
} */
</style>