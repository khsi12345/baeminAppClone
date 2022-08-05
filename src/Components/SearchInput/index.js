import { Fragment } from "react";
import {FaSearch} from "react-icons/fa"

function SearchInput() {
    return (
        <Fragment>
            <div className="px-4 relative">
                <i className="absolute ml-4 mt-4">{<FaSearch/>}</i>
               <input  className="w-full h-11 pl-12" placeholder="찾아라! 맛있는 음식과 맛집"/>
            </div>
        </Fragment>
    )
}

export default SearchInput;