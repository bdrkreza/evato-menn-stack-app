import NavbarNav from "./components/navbar-nav";
import SearchBar from "./components/searchBar";
import TopBar from "./components/topbar";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div>
      <TopBar />
      <SearchBar />
      <NavbarNav />
    </div>
  );
}
