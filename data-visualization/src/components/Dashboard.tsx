import { useState } from "react";
import { salesData, SalesProp } from "../data/salesData";
import DataFilter from "./DataFilter";
import Sales from "./Sales";
import "../style.css";

const Dashboard = () => {
  const [filterData, setFilterData] = useState<SalesProp[]>(salesData);
  const [metric, setMetric] = useState<string>("dailySales");

  const handleFilterChange = ({ dateRange, selectedMetric }: any) => {
    const { startDate, endDate } = dateRange;
    let filter = salesData;

    if (startDate && endDate) {
      filter = filter?.filter(
        (val) =>
          new Date(val?.date) >= new Date(startDate) &&
          new Date(val?.date) <= new Date(endDate)
      );
    }
    setFilterData(filter);
    setMetric(selectedMetric);
  };

  return (
    <div className="dashboard">
      <DataFilter onFilterChange={handleFilterChange} />
      <Sales data={filterData} selectMetric={metric} />
    </div>
  );
};

export default Dashboard;
