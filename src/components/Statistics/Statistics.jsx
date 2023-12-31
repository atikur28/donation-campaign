import { PieChart, Pie, Cell, Legend } from "recharts";

const Statistics = () => {
  const allDataOFLocalStorage = () => {
    const donationsData = localStorage.getItem("donation");
    if (donationsData) {
      return JSON.parse(donationsData);
    } else {
      return [];
    }
  };

  let donated = 0;
  const allData = allDataOFLocalStorage();
  let remainDonation = 0;
  if (allData) {
    for (let item of allData) {
      donated += item.price;
    }
    remainDonation = 283.88 - donated;
  }

  const data = [
    { name: "Total Donation", value: remainDonation },
    { name: "My Donation", value: donated },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };
  return (
    <div className="flex justify-center md:my-28">
      <PieChart width={320} height={320}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend></Legend>
      </PieChart>
    </div>
  );
};

export default Statistics;
