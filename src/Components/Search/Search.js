import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SearchPeopel } from "../../Redux/Action/SearchAction"
import Profile from "../Profile/Profile"
import "./Search.css"
import SearchCard from "./SearchCard"
function Search(){
    const dispatch=useDispatch()
    const [search,setSearch]=useState('')
    const {searchuser}=useSelector((state)=>state.search)
    const SendSearchData=(text)=>{
        setSearch(text)
        dispatch(SearchPeopel(text))
    }
    
    return <Profile>
        <div className="search">
            <div className="SearchTitle">
                <h1>Search</h1>
            </div>
            <div className="searchDiv">
                <div className="searchInput">
                    <input value={search} placeholder="Search..." onChange={(e)=>{SendSearchData(e.target.value)}}></input>
                    {/* <button>Search</button> */}
                </div>
                <div className="searchPeople">
                        {
                            searchuser[0]!==null && Object.keys(searchuser).length!==0 &&
                            Object.values(searchuser[0]).map((elm,i)=>{
                                return <SearchCard searchuser={elm} key={i}></SearchCard>
                            
                            })
                        }
                        {search!=='' && searchuser[0]===null &&
                            <h1 className="nouser">No user</h1>
                        }
                </div>
            </div>
        </div>
    </Profile>
}
export default Search