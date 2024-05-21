import { PieChart } from "@mui/x-charts";

const Paichat = () => {
  return (
    <div>
      <h1 className="p-4 text-xl text-center mb-5 font-bold">
        well come to dashboard
      </h1>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={600}
        height={300}
      />
    </div>
  );
};

export default Paichat;
