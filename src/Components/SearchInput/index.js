import { Fragment } from "react";
import {FaSearch} from "react-icons/fa"

function SearchInput() {
    return (
        <Fragment>
            <div className=" flex mx-auto pl-4 w-11/12 h-10 bg-zinc-100 items-center text-slate-400">
                {
                    <div className="pr-2">
                        <FaSearch/>
                    </div>
                    }
                육회비빔밥? 쌀국수? 육개장?
            </div>
        </Fragment>
    )
}

export default SearchInput;