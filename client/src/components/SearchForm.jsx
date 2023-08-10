import { Input, SearchIcon, SearchDiv } from "@/styles/SearchStyle";

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
