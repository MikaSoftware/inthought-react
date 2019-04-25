import React from 'react'
// import { Link } from "react-router-dom";
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class CanvasJS extends React.Component {
  render() {
    const options1 = {
        theme: "light2",
        animationEnabled: true,
        title: {
            text: "Comparison of Exchange Rates - 2017"
        },
        subtitles: [{
            text: "GBP & USD to INR"
        }],
        axisY: {
            includeZero: false,
            prefix: "₹"
        },
        toolTip: {
            shared: true
        },
        data: [
        {
            type: "area",
            name: "GBP",
            showInLegend: true,
            xValueFormatString: "YYYY/MM/DD",
            yValueFormatString: "₹#,##0.##",
            dataPoints: [
                { x: new Date("2017/01/01"), y: 84.927},
                { x: new Date("2017/02/01"), y: 82.609},
                { x: new Date("2017/03/01"), y: 81.428},
                { x: new Date("2017/04/01"), y: 83.259},
                { x: new Date("2017/05/01"), y: 83.153},
                { x: new Date("2017/06/01"), y: 84.180},
                { x: new Date("2017/07/01"), y: 84.840},
                { x: new Date("2017/08/01"), y: 82.671},
                { x: new Date("2017/09/01"), y: 87.496},
                { x: new Date("2017/10/01"), y: 86.007},
                { x: new Date("2017/11/01"), y: 87.233},
                { x: new Date("2017/12/01"), y: 86.276}
            ]
        },
        {
            type: "area",
            name: "USD",
            showInLegend: true,
            xValueFormatString: "YYYY/MM/DD",
            yValueFormatString: "₹#,##0.##",
            dataPoints: [
                { x: new Date("2017/01/01"), y: 67.515},
                { x: new Date("2017/02/01"), y: 66.725},
                { x: new Date("2017/03/01"), y: 64.86},
                { x: new Date("2017/04/01"), y: 64.29},
                { x: new Date("2017/05/01"), y: 64.51},
                { x: new Date("2017/06/01"), y: 64.62},
                { x: new Date("2017/07/01"), y: 64.2},
                { x: new Date("2017/08/01"), y: 63.935},
                { x: new Date("2017/09/01"), y: 65.31},
                { x: new Date("2017/10/01"), y: 64.75},
                { x: new Date("2017/11/01"), y: 64.49},
                { x: new Date("2017/12/01"), y: 63.84}
            ]
        }
        ]
    }
    const options2 = {
        animationEnabled: true,
        title: {
            text: "Nuclear Electricity Generation in US"
        },
        axisY: {
            title: "Net Generation (in Billion kWh)",
            includeZero: false,
            suffix: " kWh"
        },
        data: [{
            type: "splineArea",
            xValueFormatString: "YYYY",
            yValueFormatString: "#,##0.## bn kW⋅h",
            showInLegend: true,
            legendText: "kWh = one kilowatt hour",
            dataPoints: [
                { x: new Date(2008, 0), y: 70.735 },
                { x: new Date(2009, 0), y: 74.102 },
                { x: new Date(2010, 0), y: 72.569 },
                { x: new Date(2011, 0), y: 72.743 },
                { x: new Date(2012, 0), y: 72.381 },
                { x: new Date(2013, 0), y: 71.406 },
                { x: new Date(2014, 0), y: 73.163 },
                { x: new Date(2015, 0), y: 74.270 },
                { x: new Date(2016, 0), y: 72.525 },
                { x: new Date(2017, 0), y: 73.121 }
            ]
        }]
    }
    const options3 = {
        title: {
            text: "Basic Column Chart"
        },
        animationEnabled: true,
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { label: "Apple",  y: 10  },
                { label: "Orange", y: 15  },
                { label: "Banana", y: 25  },
                { label: "Mango",  y: 30  },
                { label: "Grape",  y: 28  }
            ]
        }
        ]
    }
    const options4 = {
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "Operating Expenses of ACME",
            fontFamily: "verdana"
        },
        axisY: {
            title: "in Eur",
            prefix: "€",
            suffix: "k"
        },
        toolTip: {
            shared: true,
            reversed: true
        },
        legend: {
            verticalAlign: "center",
            horizontalAlign: "right",
            reversed: true,
            cursor: "pointer",
            itemclick: this.toggleDataSeries
        },
        data: [
        {
            type: "stackedColumn",
            name: "General",
            showInLegend: true,
            yValueFormatString: "#,###k",
            dataPoints: [
                { label: "Jan", y: 14 },
                { label: "Feb", y: 12 },
                { label: "Mar", y: 14 },
                { label: "Apr", y: 13 },
                { label: "May", y: 13 },
                { label: "Jun", y: 13 },
                { label: "Jul", y: 14 },
                { label: "Aug", y: 14 },
                { label: "Sept", y: 13 },
                { label: "Oct", y: 14 },
                { label: "Nov", y: 14 },
                { label: "Dec", y: 14 }
            ]
        },
        {
            type: "stackedColumn",
            name: "Marketing",
            showInLegend: true,
            yValueFormatString: "#,###k",
            dataPoints: [
                { label: "Jan", y: 13 },
                { label: "Feb", y: 13 },
                { label: "Mar", y: 15 },
                { label: "Apr", y: 16 },
                { label: "May", y: 17 },
                { label: "Jun", y: 17 },
                { label: "Jul", y: 18 },
                { label: "Aug", y: 18 },
                { label: "Sept", y: 17 },
                { label: "Oct", y: 18 },
                { label: "Nov", y: 18 },
                { label: "Dec", y: 18 }
            ]
        },
        {
            type: "stackedColumn",
            name: "Sales",
            showInLegend: true,
            yValueFormatString: "#,###k",
            dataPoints: [
                { label: "Jan", y: 13 },
                { label: "Feb", y: 13 },
                { label: "Mar", y: 15 },
                { label: "Apr", y: 15 },
                { label: "May", y: 15 },
                { label: "Jun", y: 15 },
                { label: "Jul", y: 16 },
                { label: "Aug", y: 17 },
                { label: "Sept", y: 17 },
                { label: "Oct", y: 18 },
                { label: "Nov", y: 19 },
                { label: "Dec", y: 20 },
        ]
        },
        {
            type: "stackedColumn",
            name: "IT",
            showInLegend: true,
            yValueFormatString: "#,###k",
            dataPoints: [
                { label: "Jan", y: 14 },
                { label: "Feb", y: 8 },
                { label: "Mar", y: 6 },
                { label: "Apr", y: 6 },
                { label: "May", y: 5 },
                { label: "Jun", y: 5 },
                { label: "Jul", y: 6 },
                { label: "Aug", y: 3 },
                { label: "Sept", y: 9 },
                { label: "Oct", y: 5 },
                { label: "Nov", y: 8 },
                { label: "Dec", y: 2 },
            ]
        }]
    }
    const options5 = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Bounce Rate by Week of Year"
        },
        axisY: {
            title: "Bounce Rate",
            includeZero: false,
            suffix: "%"
        },
        axisX: {
            title: "Week of Year",
            prefix: "W",
            interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "Week {x}: {y}%",
            dataPoints: [
                { x: 1, y: 64 },
                { x: 2, y: 61 },
                { x: 3, y: 64 },
                { x: 4, y: 62 },
                { x: 5, y: 64 },
                { x: 6, y: 60 },
                { x: 7, y: 58 },
                { x: 8, y: 59 },
                { x: 9, y: 53 },
                { x: 10, y: 54 },
                { x: 11, y: 61 },
                { x: 12, y: 60 },
                { x: 13, y: 55 },
                { x: 14, y: 60 },
                { x: 15, y: 56 },
                { x: 16, y: 60 },
                { x: 17, y: 59.5 },
                { x: 18, y: 63 },
                { x: 19, y: 58 },
                { x: 20, y: 54 },
                { x: 21, y: 59 },
                { x: 22, y: 64 },
                { x: 23, y: 59 }
            ]
        }]
    }
    const options6 = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Website Traffic Sources"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 18, label: "Direct" },
                { y: 49, label: "Organic Search" },
                { y: 9, label: "Paid Search" },
                { y: 5, label: "Referral" },
                { y: 19, label: "Social" }
            ]
        }]
    }
    const options7 = {
        animationEnabled: true,
        title: {
            text: "Customer Satisfaction"
        },
        subtitles: [{
            text: "71% Positive",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Unsatisfied", y: 5 },
                { name: "Very Unsatisfied", y: 31 },
                { name: "Very Satisfied", y: 40 },
                { name: "Satisfied", y: 17 },
                { name: "Neutral", y: 7 }
            ]
        }]
    }    
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
            <h1 className="border-0">Charting</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-default card">
                            <div className="card-header">
                                React Multi Series Area Chart
                            </div>
                            <div className="card-body">
                                <CanvasJSChart options = {options1} 
                                /* onRef={ref => this.chart = ref} */
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-default card">
                            <div className="card-header">
                                Spline Area Chart
                            </div>
                            <div className="card-body">
                                <CanvasJSChart options = {options2} 
                                    /* onRef={ref => this.chart = ref} */
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-default card">
                            <div className="card-header">
                                React Column Chart
                            </div>
                            <div className="card-body">
                                <CanvasJSChart options = {options3} 
                                    /* onRef={ref => this.chart = ref} */
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-default card">
                            <div className="card-header">
                                React Stacked Column Chart
                            </div>
                            <div className="card-body">
			                    <CanvasJSChart options = {options4} 
				                    onRef={ref => this.chart = ref}
			                    />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-default card">
                            <div className="card-header">
                                React Line Chart
                            </div>
                            <div className="card-body">
                                <CanvasJSChart options = {options5} 
                                    /* onRef={ref => this.chart = ref} */
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-default card">
                            <div className="card-header">
                                React Pie Chart
                            </div>
                            <div className="card-body">
                                <CanvasJSChart options = {options6} 
                                    /* onRef={ref => this.chart = ref} */
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-default card">
                            <div className="card-header">
                                React Doughnut Chart
                            </div>
                            <div className="card-body">
                                <CanvasJSChart options = {options7} 
                                    /* onRef={ref => this.chart = ref} */
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
            </div>
        </div>
    )
  }
}
export default CanvasJS