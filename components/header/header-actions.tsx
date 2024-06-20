import SearchBar from "@/components/search-bar";
import ThemeToggle from "@/components/theme-toggle";

const HeaderActions = async () => {
  return (
    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
      <SearchBar />
      <ThemeToggle />
    </div>
  );
};

export default HeaderActions;
