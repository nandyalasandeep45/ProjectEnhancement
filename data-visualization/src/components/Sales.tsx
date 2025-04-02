import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface SalesProp {
  data: any[];
  selectMetric: string;
}

const Sales = ({ data, selectMetric }: SalesProp) => {
  const graphData = {
    labels: data?.map((val) => val?.date),
    datasets: [
      {
        label: selectMetric,
        data: data?.map((val) => val[selectMetric]),
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false
      }
    ]
  };
  return <Line data={graphData} />;
};

export default Sales;
