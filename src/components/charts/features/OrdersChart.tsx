import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { _DeepPartialObject } from "chart.js/dist/types/utils";
import { FC } from "react";
import { Bar } from "react-chartjs-2";
import { ChartOptionsT } from "../../../type/type";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

const options: ChartOptionsT = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "فروش هفتگی",
    },
  },
};

export const OrdersChart: FC<{ chartDate: number[]; title: string }> = ({
  chartDate,
  title,
}) => {
  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: chartDate,
        backgroundColor: "rgba(53, 10, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};
