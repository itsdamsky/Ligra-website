"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

// Fresh weight (g) — edit these to match the exact experiment values.
const data = [
  { name: "Control A", value: 36.54, fill: "#4C8FE8" },
  { name: "Control B", value: 53.56, fill: "#F2A649" },
  { name: "T1", value: 60.95, fill: "#5FA857" },
  { name: "T2", value: 64.14, fill: "#D9534F" },
];

export default function LigraChart() {
  return (
    <div className="h-[220px] w-full sm:h-[270px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: 4, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eef2e6" />
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#606060" }} axisLine={{ stroke: "#dcecc8" }} tickLine={false} />
          <YAxis
            domain={[0, 70]}
            ticks={[0, 10, 20, 30, 40, 50, 60, 70]}
            tick={{ fontSize: 11, fill: "#606060" }}
            axisLine={false}
            tickLine={false}
            label={{
              value: "Fresh Weight (gm)",
              angle: -90,
              position: "insideLeft",
              offset:10,
              style: { textAnchor: "middle", fontSize: 12, fill: "#606060" },
            }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={60} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
