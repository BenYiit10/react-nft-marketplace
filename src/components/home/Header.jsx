import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { HiMoon, HiBars3BottomLeft } from "react-icons/hi2";
import HeaderLink from "../../ui/HeaderLink";

export default function Header() {
    const [dropdown, setDropdown] = useState(false);
    const [activeDropdownIdx, setActiveDropdownIdx] = useState();

    const [headerStyle, setHeaderStyle] = useState("block");
    const location = useLocation();
    useEffect(() => {

        switch (location.pathname.toLowerCase()) {
            case "/explore":
            case "/auctions":
                setHeaderStyle("absolute");
                break;
            case "/blogdetail":
            case "/help":
            case "/itemdetail":
                setHeaderStyle("block gradient");
                break;
            case "/":
                setHeaderStyle("block");
                break;
            default:
                setHeaderStyle("gradient");
                break;
        }
        /* if (
            location.pathname.toLowerCase() === "/explore" ||
            location.pathname.toLowerCase() === "/auctions"
        ) {
            setHeaderStyle("absolute");
        } else if ( 
            location.pathname === "/blogdetail" ||
            location.pathname === "/help" ||
            location.pathname === "/itemdetail"
        ) {
            setHeaderStyle("block gradient");
        } else if (location.pathname !== "/") {
            setHeaderStyle("gradient");
        } else {
            setHeaderStyle("block");
        } */
    }, [location]);

    const linksArray = [
        {
            title: "Home",
            hasDropdown: true,
            link:"",
            Comp:"p"
        },
        {
            title: "Explore",
            hasDropdown: true,
            link:"",
            Comp:"p"
        },
        {
            title: "Pages",
            hasDropdown: true,
            link:"",
            Comp:"p"
        },
        {
            title: "Community",
            hasDropdown: true,
            link:"",
            Comp:"p"
        },
        {
            title: "Contacts",
            hasDropdown: false,
            link:"/contact",
            Comp:Link
        },
    ];

    return (
        <header
            /* bg-gradient-to-[62deg] from-[#1A3E92] to-[#661B88] gradient olacak */
            className={`py-8 bg-[#14141F] w-full
                ${
                    headerStyle === "absolute" &&
                    "absolute bg-transparent z-50"
                }
                ${
                    headerStyle === "gradient" &&
                    "absolute bg-gradient-62 from-[#1A3E92] to-[#661B88] z-50"
                }   
                ${
                    headerStyle === "block gradient" &&
                    "block bg-gradient-62 from-[#1A3E92] to-[#661B88] z-50 mb-20"
                }   
                `}
        >
            <div className="px-[85px] max-mdd:px-4 max-xs:px-2 max-[1280px]:px-[42px] max-[1024px]:px-[30px] flex justify-between items-center gap-4 max-lg:gap-2 ">
                <div className="header-start flex gap-4 max-[1440px]:gap-6 max-[1300px]:gap-4 items-center w-2/5 max-[1200px]:w-2/6 max-lg:justify-between max-lg:w-full">
                    <Link
                        to="/"
                        className="text-white text-5xl max-2xl:text-[40px] max-[1200px]:text-[32px] font-bold"
                    >
                        Logo
                    </Link>
                    <form className="search border border-1 rounded-full flex items-center gap-4 py-4 hover:border-slate-300 max-[1200px]:py-3 px-6 w-full">
                        <BsSearch className="text-white text-2xl" />
                        <input
                            type="text"
                            className="bg-transparent w-full focus:outline-none text-white"
                            placeholder="Type to search..."
                        />
                    </form>
                    <button
                        className="text-white text-4xl hidden max-lg:block"
                        onClick={() => setDropdown(!dropdown)}
                    >
                        <HiBars3BottomLeft />
                    </button>
                </div>
                <div className="header-end flex items-center gap-10 text-white max-[1440px]:gap-7 max-lg:hidden ">
                    <div className="links flex gap-5 max-[1440px]:gap-4">
                        {linksArray.map((data, index) => (
                            <HeaderLink
                                dropdown={data.hasDropdown}
                                isDropdownActive={index === activeDropdownIdx}
                                setActiveDropdownIdx={setActiveDropdownIdx}
                                index={index}
                                key={index}
                                link={data.link}
                                Comp={data.Comp}
                            >
                                {data.title}
                            </HeaderLink>
                        ))}
                    </div>
                    <div className="flex gap-6 items-center max-[1440px]:gap-4">
                        <div className="rounded-full bg-[#343444] w-8 h-8 flex justify-center items-center cursor-not-allowed hover:bg-[#2a2a38]">
                            <HiMoon className="text-[19px]" />
                        </div>
                        <Link
                            to="/"
                            className={`wallet px-6 py-4 max-[1440px]:py-3 border border-purple-600 rounded-full cursor-pointer hover:text-slate-300 hover:border-purple-900 max-[1440px]:text-[12px] w-max max-lg:px-5 
                            ${
                                headerStyle !== "block" &&
                                "bg-white border-transparent text-black hover:text-black/80"
                            }
                            `
                        }
                        >
                            Connect Wallet
                        </Link>
                    </div>
                </div>
            </div>
            {dropdown && (
                <div className="fixed top-0 z-30  h-screen bg-[#14141F] w-full">
                    <button
                        className="absolute right-4 top-4 text-5xl"
                        onClick={() => setDropdown(false)}
                    >
                        X
                    </button>
                    <div className="flex justify-center items-center h-full ">
                        <div className="links flex flex-col gap-8">
                            {linksArray.map((data, index) => (
                                <HeaderLink
                                    className="!text-4xl"
                                    dropdown={data.hasDropdown}
                                    isDropdownActive={
                                        index === activeDropdownIdx
                                    }
                                    setActiveDropdownIdx={setActiveDropdownIdx}
                                    index={index}
                                    key={index}
                                >
                                    {data.title}
                                </HeaderLink>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
