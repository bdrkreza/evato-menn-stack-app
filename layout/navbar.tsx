import { useGetCategoryQuery } from "../redux/reducers/productApi";
import NavbarNav from "./components/navbar-nav";
import SearchBar from "./components/searchBar";
import TopBar from "./components/topbar";

export default function Navbar() {
  const { data, error, isLoading } = useGetCategoryQuery();

  return (
    <div>
      <TopBar />
      <SearchBar />
      <NavbarNav data={data} />
    </div>
  );
}
