import React from 'react'
import SimpleLineChart from './Recharts/SimpleLineChart';
import SimpleAreaChart from './Recharts/SimpleAreaChart';
import SimpleBarChart from './Recharts/SimpleBarChart';
import LineBarAreaComposedChart from './Recharts/LineBarAreaComposedChart';
import SimpleScatterChart from './Recharts/SimpleScatterChart';
import SimpleRadarChart from './Recharts/SimpleRadarChart';
import TwoLevelPieChart from './Recharts/TwoLevelPieChart';
import SimpleTreemap from './Recharts/SimpleTreemap';
import CustomizedLabel from './Recharts/CustomizedLabel';
// import { Link } from "react-router-dom";


class Recharts extends React.Component {
  render() {  
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
            <h1 className="border-0">Charting</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-default card chart">
                            <div className="card-header">
                                Simple Line Chart
                            </div>
                            <div className="card-body">
                                <SimpleLineChart></SimpleLineChart>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-default card chart">
                            <div className="card-header">
                                Simple Area Chart
                            </div>
                            <div className="card-body">
                                <SimpleAreaChart></SimpleAreaChart>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-default card chart">
                            <div className="card-header">
                                Simple Bar Chart
                            </div>
                            <div className="card-body">
                                <SimpleBarChart></SimpleBarChart>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-default card chart">
                            <div className="card-header">
                                Line Bar Area Composed Chart
                            </div>
                            <div className="card-body">
			                    <LineBarAreaComposedChart></LineBarAreaComposedChart>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-default card chart">
                            <div className="card-header">
                                Simple Scatter Chart
                            </div>
                            <div className="card-body">
                                <SimpleScatterChart></SimpleScatterChart>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-default card chart">
                            <div className="card-header">
                                Two Level Pie Chart
                            </div>
                            <div className="card-body">
                                <TwoLevelPieChart></TwoLevelPieChart>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-default card chart">
                            <div className="card-header">
                                Simple Radar Chart
                            </div>
                            <div className="card-body">
                                <SimpleRadarChart></SimpleRadarChart>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-default card chart">
                            <div className="card-header">
                                Simple Treemap
                            </div>
                            <div className="card-body">
                                <SimpleTreemap></SimpleTreemap>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-default card chart">
                            <div className="card-header">
                                Time Series Chart
                            </div>
                            <div className="card-body">
                                <CustomizedLabel></CustomizedLabel>
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
export default Recharts