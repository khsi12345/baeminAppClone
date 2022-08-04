import { Fragment } from "react";
import {AiFillCaretDown} from "react-icons/ai"
import {BsGrid} from "react-icons/bs"
import {RiNotification3Line} from "react-icons/ri"
import {MdOutlineSentimentSatisfied} from "react-icons/md"

function TopNavigate() {
    return (
        <Fragment>
            <section className="flex sticky top-0 z-50 items-center bg-cyan-500" >
                <div className="flex-1 w-4/5 p-4">
                    충남 아산시 신창면 남성길
                </div>
                <div className="p-2">
                    <AiFillCaretDown/>
                </div>
                <div className="p-2">
                    <BsGrid/>
                </div>
                <div className="p-2">
                    <RiNotification3Line/>
                </div>
                <div className="p-2">
                    <MdOutlineSentimentSatisfied/>
                </div>
            </section>

        </Fragment>
    )
}

export default TopNavigate;