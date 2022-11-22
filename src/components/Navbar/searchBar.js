import React, {useState} from 'react'


const searchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const searchResult = [



];

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    countries.filter((searchResult) => {
    return country.name.match(searchInput);
});
}

return <div>

<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />

<table>
  <tr>
    <th></th>
    <th></th>
  </tr>

{searchResult.map((country, *index*) => {

<div>
  <tr>
    <td>{}</td>
    <td>{}</td>
  </tr>
</div>

})}
</table>

</div>


};

export default searchBar;