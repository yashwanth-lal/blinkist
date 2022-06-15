import { Box, Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  selectedTab: {
    color: "#22C870 !important"
  },
}));

export const TabsComponent = () => {
  const [value, setValue] = useState("1");
  const [color, setColor] = useState("#22C870");
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setColor(color);
  };

  let classes = useStyles();

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: 912 }}>
          <TabList
            onChange={handleChange}
            >
            <Tab
              classes={{ selected: classes.selectedTab }}
              label="Currently Reading"
              value="1"
              sx={{
                width: 304,
                alignItems: "flex-start",
              }}
            />
            <Tab
              classes={{ selected: classes.selectedTab }}
              label="Finished"
              value="2"
              sx={{
                width: 304,
                alignItems: "flex-start",
              }}
            />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
};
