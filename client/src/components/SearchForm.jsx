import { Input, SearchDiv } from "@/styles/SearchStyle";
import { SearchIcon } from "@/styles/IconStyle";

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
