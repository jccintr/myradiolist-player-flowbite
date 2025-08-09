import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="max-w-md">
        <TextInput  type="text" icon={FaSearch} placeholder="Pesquisar" required />
    </div>
  )
}

export default SearchInput