import { Input } from "@/styles/InputStyle";
import { SearchDiv } from "@/styles/SearchDivStyle";
import { SearchIcon } from "@/styles/SearchIconStyle";

const SearchForm = () => {
  return (
    <SearchDiv>
      <SearchIcon />
      <Input
        type="text"
        role="combobox"
        placeholder="Search..."
        maxlength="240"
      />
    </SearchDiv>
  );
};

export default SearchForm;
