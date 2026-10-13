import { Box } from "@mui/material";
import { Header } from "../../components";
import { ResponsiveBar } from "@nivo/bar";
import { mockBarData } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="BAR CHART" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <ResponsiveBar
          data={mockBarData}
          theme={{
            axis: {
              domain: { line: { stroke: colors.gray[100] } },
              legend: { text: { fill: colors.gray[100] } },
              ticks: { line: { stroke: colors.gray[100], strokeWidth: 1 }, text: { fill: colors.gray[100] } },
            },
            legends: { text: { fill: colors.gray[100] } },
          }}
          keys={["hot dog", "burger", "kebab", "donut"]}
          indexBy="country"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: "country", legendPosition: "middle", legendOffset: 32 }}
          axisLeft={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: "food", legendPosition: "middle", legendOffset: -40 }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          legends={[{ dataFrom: "keys", anchor: "bottom-right", direction: "column", justify: false, translateX: 120, translateY: 0, itemsSpacing: 2, itemWidth: 100, itemHeight: 20, itemDirection: "left-to-right", itemOpacity: 0.85, symbolSize: 20, effects: [{ on: "hover", style: { itemOpacity: 1 } }] }]}
          role="application"
        />
      </Box>
    </Box>
  );
};

export default Bar;

