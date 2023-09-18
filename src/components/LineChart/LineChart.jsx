import { LineChart as LChart, Line } from "recharts";
const LineChart = () => {
  const studentData = [
    { id: 1, name: "Rahim Ahmed", mark: 85 },
    { id: 2, name: "Fatima Khan", mark: 78 },
    { id: 3, name: "Amina Akhtar", mark: 92 },
    { id: 4, name: "Kabir Rahman", mark: 88 },
    { id: 5, name: "Sadia Islam", mark: 76 },
    { id: 6, name: "Ahmed Ali", mark: 95 },
    { id: 7, name: "Nazia Khanom", mark: 82 },
    { id: 8, name: "Abdul Karim", mark: 90 },
    { id: 9, name: "Nusrat Jahan", mark: 87 },
    { id: 10, name: "Mehnaz Begum", mark: 79 },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto">
      <LChart width={500} height={400} data={studentData}>
        <Line dataKey="mark"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
