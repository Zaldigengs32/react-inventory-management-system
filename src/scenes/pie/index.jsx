import { Box } from "@mui/material";
import { Header } from "../../components";
import { ResponsivePie } from "@nivo/pie";
import { mockPieData } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Pie = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="PIE CHART" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <ResponsivePie
          data={mockPieData}
          theme={{
            axis: { domain: { line: { stroke: colors.gray[100] } }, legend: { text: { fill: colors.gray[100] } }, ticks: { line: { stroke: colors.gray[100], strokeWidth: 1 }, text: { fill: colors.gray[100] } } },
            legends: { text: { fill: colors.gray[100] } },
          }}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={colors.gray[100]}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          legends={[{ anchor: "bottom", direction: "row", justify: false, translateX: 0, translateY: 56, itemsSpacing: 0, itemWidth: 100, itemHeight: 18, itemTextColor: "#999", itemDirection: "left-to-right", itemOpacity: 1, symbolSize: 18, symbolShape: "circle", effects: [{ on: "hover", style: { itemTextColor: "#000" } }] }]}
        />
      </Box>
    </Box>
  );
};

export default Pie;

