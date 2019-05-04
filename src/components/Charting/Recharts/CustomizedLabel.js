/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import moment from 'moment'


import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label
} from 'recharts';

const data = [
  {
    xName: '2013-11-18 11:55', yName: 24, value: 10,
  },
  {
    xName: '2013-11-18 12:55', yName: 54, value: 20,
  },
  {
    xName: '2013-11-18 13:55', yName: 22, value: 30,
  },
  {
    xName: '2013-11-18 14:55', yName: 46, value: 40,
  },
  {
    xName: '2013-11-18 15:55', yName: 74, value: 50,
  },
  {
    xName: '2013-11-18 16:55', yName: 42, value: 60,
  },
  {
    xName: '2013-11-18 17:55', yName: 67, value: 70,
  },
  {
    xName: '2013-11-18 18:55', yName: 88, value: 80,
  },
  {
    xName: '2013-11-18 19:55', yName: 19, value: 90,
  },
  {
    xName: '2013-11-18 20:55', yName: 26, value:10,
  },
  {
    xName: '2013-11-18 21:55', yName: 93, value: 11,
  },
  {
    xName: '2013-11-18 22:55', yName: 80, value: 12,
  }
];
class CustomizedLabel extends PureComponent {
  render() {
      // const { user, instrument, tableData } = this.props;
      // if (tableData === undefined || tableData === null || tableData.results === null || tableData.results === undefined) {
      //     return null;
      // }

      // let tableRows = [];
      // var arrayLength = data.results.length;
      // for (var i = 0; i < arrayLength; i++) {
      //     let rowData =  data.results[i];
      //     tableRows.push({
      //         key: rowData.timestamp,
      //         value: rowData.value,
      //         timestamp: rowData.timestamp
      //     });
      // }

      return (
          <div className="row">
              <div className="col-lg-12">
              <ResponsiveContainer width="100%" height={480}>
                  <LineChart width={640} height={480} data={data} margin={{ top: 50, bottom: 75, left:30, right:50}}>
                      <XAxis
                          angle={-45}
                          textAnchor="end"
                          dataKey='xName'
                          tickFormatter={
                              timeStr => moment(timeStr).tz("2013-11-18 11:55", "America/Toronto").format('h:mm a')
                          }
                          label={{
                              value: "Time",
                              dy: 75
                          }}
                      />
                      <YAxis unit="%" dataKey='yName'>
                          <Label
                              value="Humidity"
                              offset={-20}
                              angle={-90}
                              position='insideLeft'
                          />
                      </YAxis>
                      <Line
                          type="monotone"
                          dataKey="yName"
                          stroke="#001529"
                          activeDot={{r: 5}}
                          isAnimationActive={false}
                      />
                      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                      <Tooltip
                          labelStyle={{ color: "black" }}
                          itemStyle={{ color: "grey" }}
                          formatter={function(value, name) {
                              return `${value}`;
                          }}
                          labelFormatter={function(value) {
                              const localValue = moment(value).tz("2013-11-18 11:55", "America/Toronto").format('DD/MM/YYYY h:mm a');
                              return `timestamp: ${localValue}`;
                          }}
                      />
                  </LineChart>
              </ResponsiveContainer>
              </div>
          </div>
      );
  }
}

export default CustomizedLabel