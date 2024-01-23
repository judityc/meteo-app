import { Box, Heading } from "@chakra-ui/react";
import SelectCity from "./components/SelectCity";
import DataTable from "./components/DataTable";
import { useState } from "react";
import { useCityForecast } from "./hooks/useCityForecast";

function App() {
  const [city, setCity] = useState("vilnius");

  const { data: cityForecast, error } = useCityForecast(city);

  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      gap={10}
      alignItems="center"
      padding={20}
    >
      <SelectCity onSelectCity={(cityCode) => setCity(cityCode)} />
      {error ? <Heading>{error}</Heading> : <DataTable data={cityForecast} />}
    </Box>
  );
}

export default App;
