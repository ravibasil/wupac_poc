import React, { useState, useEffect } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

export default function HorizontalBarChart({ chart_data }) {

  const [data, setData] = useState(setBarChartData(chart_data))

  useEffect(() => {
    setData(setBarChartData(chart_data));

  }, [chart_data])

  return (
    <div>
      {data.labels.length > 0 && <HorizontalBar data={data} />}
    </div>
  );
}

const setBarChartData = (chart_data) => {
  return {
    labels: chart_data.labels,
    datasets: [
      {
        label: 'Visits',
        backgroundColor: 'rgba(33,150,243)',
        borderColor: 'rgba(33,150,243)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: chart_data.values
      }
    ]
  }
}