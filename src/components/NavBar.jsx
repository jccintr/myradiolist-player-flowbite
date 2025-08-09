import { Navbar, NavbarBrand, NavbarCollapse, TextInput, NavbarToggle } from "flowbite-react";
//import SearchInput from "./inputs/SearchInput";
import { FaSearch } from "react-icons/fa";

function NavBar({setSearchText}) {
  return (
   <Navbar fluid rounded >
      <NavbarBrand >
        <img src="my-radio-list-logo.png" className="w-[120px] h-[120px]" alt="My Radio List Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Rádio Player</span>
      </NavbarBrand>
      <NavbarToggle />
     
      <NavbarCollapse>
        <TextInput  type="text" icon={FaSearch} placeholder="Pesquisar" onChange={e => setSearchText(e.target.value)} />
      </NavbarCollapse>
    </Navbar>
  )
}

export default NavBar