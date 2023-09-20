import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { candlestickData } from "./source";
import { Chart as ChartJs } from "chart.js/auto";
import { CircularProgress, LinearProgress } from "@mui/material";

const Chart = ({ selectedId }) => {
  const [chartData, setChartData] = useState([]);
  const [days, setDays] = useState(1);
  const [loading, setLoading] = useState(false);

  const url = `https://api.coingecko.com/api/v3/coins/${selectedId}/market_chart?vs_currency=usd&days=${days}`;

  const fetchChart = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      // console.log("this si data:", data);
      setChartData(data.prices);
    } catch (error) {
      // Handle the error here
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const daysData = [
    {
      value: 1,
      text: "1 Hour",
    },
    {
      value: 24,
      text: "1 Day",
    },
    {
      value: 168,
      text: "7 Days",
    },
    {
      value: 720,
      text: "1 Month",
    },
  ];

  // console.log("selectedId:", selectedId);
  // console.log("this is real prices array ", chartData);

  useEffect(() => {
    fetchChart();
  }, [days, selectedId]);

  const kazungu = chartData?.map((coin) => {
    let date = new Date(coin[0]);
    let time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;

    return days === 1 ? time : date;
  });

  // console.log("here is kaxung dat:", kazungu);

  return (
    <div>
      <div
        style={{
          margin: "20px",
          width: "100%ß",
        }}
      >
        {chartData ? (
          <Line
            data={{
              labels: chartData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;

                return days === 1 ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  label: "Price",
                  data: chartData.map((coin) => coin[1]),
                  borderColor: "blue",
                  borderWidth: 2,
                  fill: false,
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
        ) : (
          <p>
            <CircularProgress />
          </p>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {daysData.map((day) => (
          <button
            key={day.value}
            onClick={() => setDays(day.value)}
            style={{
              backgroundColor: days === day.value ? "blue" : "transparent",
              color: days === day.value ? "white" : "black",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "1px 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            {day.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chart;
