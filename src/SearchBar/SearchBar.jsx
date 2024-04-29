import React, {useState, useCallback} from 'react'; 
import "./SearchBar.css"


const SearchBar = (props) =>{

    const [term, SetTerm] = useState('');

    const handleTermChange = (event) =>{
    SetTerm(event.target.value); 
};

const search = () =>{
    props.onSearch(term) // < the onSearch prop is the search function passed down from App.js, this takes the term argument (when a use types) once the button is clicked
}
    return(
        <div className='SearchBar'>
            <input placeholder='Enter a song' onChange={handleTermChange}/>
            <button className='SearchButton' onClick={search}>
                Search
            </button>
        </div>
    )

};

export default SearchBar;