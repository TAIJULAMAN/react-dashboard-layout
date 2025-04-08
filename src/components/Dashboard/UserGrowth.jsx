import { useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const UserGrowth = () => {
  const [chartHeight, setChartHeight] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setChartHeight(250);
      } else {
        setChartHeight(300);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    { month: 'Jan', users: 100 },
    { month: 'Feb', users: 250 },
    { month: 'Mar', users: 380 },
    { month: 'Apr', users: 450 },
    { month: 'May', users: 620 },
    { month: 'Jun', users: 750 },
    { month: 'Jul', users: 890 },
    { month: 'Aug', users: 1020 },
    { month: 'Sep', users: 1150 },
    { month: 'Oct', users: 1280 },
    { month: 'Nov', users: 1400 },
    { month: 'Dec', users: 1550 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#202020] text-white p-3 rounded-lg shadow-lg border border-[#0B704E]">
          <p className="font-medium">{`Month: ${label}`}</p>
          <p className="font-medium text-[#0B704E]">{`Users: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height={chartHeight}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="month"
            tick={{ fill: '#666' }}
            tickLine={{ stroke: '#666' }}
          />
          <YAxis
            tick={{ fill: '#666' }}
            tickLine={{ stroke: '#666' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="users"
            fill="#0B704E"
            radius={[4, 4, 0, 0]}
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowth;
