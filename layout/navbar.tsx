import ScrollTop from "./components/scrollTop";
import SearchBar from "./components/searchBar";
import TopBar from "./components/topbar";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div>
      <TopBar />
      <SearchBar />
      <ScrollTop />
    </div>
  );
}
