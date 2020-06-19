import React, { useState } from "react";
import axios from 'axios';
import InputBox from '../components/InputBox';
import HorizontalBarChart from '../components/HorizontalBarChart';

export default function HomePage() {

  const [chart_data, setChartData] = useState({ labels: [], values: [] })

  const uploadBrowserHistory = (body) => {
    axios.post("http://localhost:8000/analytics",
      body,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      if (response.data.chart_data) {
        setChartData(response.data.chart_data);
      }
    });
  }
  return (
    <>
      <h2 className="Title">Web Usage Analyzer</h2>
      <InputBox uploadBrowserHistory={uploadBrowserHistory} />
      <HorizontalBarChart chart_data={chart_data} />
    </>);
}