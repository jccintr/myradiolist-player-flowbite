import { TextInput} from "flowbite-react";
import { FaSearch } from "react-icons/fa";

const Header = ({setSearchText}) => {
  return (
    <div className="flex-col justify-center items-center ">
        <img src="my-radio-list-logo.png" className="w-[200px] h-[200px] mx-auto" alt="My Radio List Logo" />
        <TextInput className="w-[330px]  mx-auto md:w-[500px] " type="text" icon={FaSearch} placeholder="Pesquisar" onChange={e => setSearchText(e.target.value)} />
    </div>
  )
}

export default Header