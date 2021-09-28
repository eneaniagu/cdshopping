import Image from 'next/image'
import { IoGrid } from "react-icons/io5";
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { CgOptions } from "react-icons/cg";




const Nav = (props) => {
    return (
        <nav className="flex justify-between items-center w-full h-[5em]  text-block relative  font-mono navbar">
            <div onClick={props.drawerClicked}  className="md:ml-[12px] ml-[12px] h-[2em] w-[2em] md:h-[3em] md:w-[3em] justify-center items-center flex rounded-full bg-white"  >
                <IoGrid  className=" text-[#f98a8d] w-[1em] h-[1em] md:w-[1.5em] md:h-[1.5em]" />
            </div>
            <div className="absolute md:left-[10em] left-[10em]">
                <h2>DOGIE Mall</h2>
            </div>
            <div className="md:mt-16 md:ml-[26em] flex md:justify-center justify-between absolute inset-y-0 mt-[70px]" >
                <input placeholder="Search for Product" className="text-left text-sm shadow-lg broder-2 ml-[10px] rounded-full md:w-[30em] md:h-[3em] h-[3em] w-[20em] " style={{
                    borderRadius: '10px',
                    outline: 'none',
                }} />
                <span className="absolute inset-y-0 left-[16em] mt-4">
                    <IoSearchOutline className="text-[#d5d5d5]"/>
                </span>
                <span className="text-center  font-bold shadow-lg md:h-[3em] md:w-[3em] inset-y-0 md:left-[48em]  md:top-[14px] h-[2.9em] w-[3em]  ml-[20px] mr-3" style={{

                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',
                    outline: 'none',
                    color: "black",
                    background: "#f98a8d",
                }}>
                    <CgOptions style={{
                        color: "white",
                        height: "2em",
                        marginTop: '10px',
                        marginLeft: '10px',
                        width: "2em",
                    }} />
                </span>


            </div>

            <div className="flex md:mr-[20px] mr-[1px] mt-[8px]">
                <div className=" mt-[10px] mr-2 h-[2em] w-[2em] md:h-[2.8em] md:w-[2.8em] md:ml-6 justify-center items-center flex rounded-full bg-white"
                >
                    <span className="text-white flex justify-center text-center text-xs absolute rounded-full w-[12px] h-[12px] mt-[-3px] ml-[10px] md:w-[13px] md:h-[13px] md:top-17px md:mt-[-6px] md:ml-[8px] bg-[#ed1a52]">3</span>
                    <RiShoppingBasketFill
                        className="md:w-[1.9em] md:h-[1.9em] w-[1.4em] h-[1.4em] text-[#c7c0bf]"

                    />
                </div>


                <div className="md:h-[4em] md:w-[4em] h-[4em] w-[4em]" onMouseOver={props.hover} onMouseOut={props.hoverout}>
                    <Image
                        width={50}
                        height={50}
                        src='/images/user.png'
                        className="rounded-full md:w-16 md:h-16 h-16 w-16"
                    />
                </div>

            </div>

        </nav>
    )
}


export default Nav