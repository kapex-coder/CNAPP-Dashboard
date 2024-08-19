import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DashboardCategory from "./DashboardCategory";
import DashboardOptions from "./DashboardOptions";
import { Container } from "@mui/material";

export default function Dashboard() {
  const categories = useSelector((state) => state.categories.value);
  const searchValue = useSelector((state) => state.search.value);
  const [filteredArray, setFilteredArray] = useState([]);

  const getFilteredArray = () => {
    if (!searchValue) {
      setFilteredArray(categories);
      return;
    }

    const filteredArray = categories.map((cat) => ({
      ...cat,
      widgets: cat.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(searchValue.toLowerCase())
      ),
    }));

    setFilteredArray(filteredArray);
  };

  useEffect(() => {
    getFilteredArray();
  }, [searchValue, categories]);

  return (
    <Container
      maxWidth="xl"
      sx={{ padding: "1rem 0" }}>
      <DashboardOptions />
      {filteredArray &&
        filteredArray.map((category) => (
          <DashboardCategory
            category={category}
            key={category.id}
          />
        ))}
    </Container>
  );
}
