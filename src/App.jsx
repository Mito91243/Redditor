import { useState } from "react";
import SearchBar from "./searchBar";
import Table from "./table";
function App() {
  const [query, setQuery] = useState("");
  console.log(query)
  return (
    <>
      <SearchBar setQuery={setQuery}/>
      <Table />
    </>
  );
}

export default App;
