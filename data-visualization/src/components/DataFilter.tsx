import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style.css";
import { format } from "date-fns";

const DataFilter = ({
  onFilterChange
}: {
  onFilterChange: (filters: any) => void;
}) => {
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
  const [selectMetric, setSelectMetric] = useState("dailySales");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateDivRef = useRef<HTMLDivElement | null>(null);
  const datePickerRef = useRef<HTMLDivElement | null>(null);

  const options = [
    { value: "dailySales", label: "Daily Sales" },
    { value: "monthlySales", label: "Monthly Sales" },
    { value: "noTransactions", label: "Transactions" },
    { value: "totalRevenue", label: "Revenue" },
    { value: "avg", label: "AVG" }
  ];

  const handleMetricChange = (selectedOption: any) => {
    const newMetric = selectedOption?.value || "dailySales";
    setSelectMetric(newMetric);
    onFilterChange({ dateRange: range, selectedMetric: newMetric });
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    setRange(dates);
    onFilterChange({ dateRange: dates, selectedMetric: selectMetric });
  };

  const handleClickOutside = (e: any) => {
    if (
      dateDivRef.current &&
      !dateDivRef.current?.contains(e.target) &&
      datePickerRef.current &&
      !datePickerRef.current?.contains(e.target)
    ) {
      setShowDatePicker(false);
    }
  };

  const formattedDate =
    range[0] && range[1]
      ? `${format(range[0], "yyyy/MM/dd")} - ${format(range[1], "yyyy/MM/dd")}`
      : "Select a Date";

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="filters">
      <div className="metric-selector">
        <Select
          options={options}
          onChange={handleMetricChange}
          value={options?.find((val) => val?.value === selectMetric)}
        />
      </div>
      <div className="date-range-picker">
        <div
          ref={dateDivRef}
          className="custom-date-display"
          onClick={() => setShowDatePicker(true)}
        >
          {formattedDate}
        </div>
        {showDatePicker && (
          <div ref={datePickerRef} className="datepicker-container">
            <DatePicker
              selected={range[0]}
              onChange={handleDateChange}
              startDate={range[0]}
              endDate={range[1]}
              selectsRange
              inline
              dateFormat="yyyy/MM/dd"
              selectsStart
              selectsEnd
              customInput={<input className="custom-input" />}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DataFilter;
