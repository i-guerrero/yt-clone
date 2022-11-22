import React from "react";

export default function Home() {
  function handleSearch() {}
  return (
    <div>
      <form>
        <input></input>
        <button onClick={() => handleSearch}>Search</button>
      </form>
    </div>
  );
}

// return (
// 	<dix classname="search">
// 		<form onSubmit={handdleSumit}>
// 			<label htmlFor="Search"></label>
// 			<input
// 				value={search}
// 				type="text"
// 				id="search"
// 				onChange={(e) => setSearch(e.target.value)}
// 			></input>
// 			<button>Search</button>
// 		</form>
// 	</dix>
// )
