import React, { useEffect, useRef, useState } from "react";
import Auctions from "../home/Auctions";
import ImgContainer from "../../ui/ImgContainer";
import itemDetailMainBigImage from "../../assets/itemDetailMainBigImage.png";
import profile from "../../assets/profile.png";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";
import { Eye, Lock } from "../../ui/Icon";
import DetailEqual from "../../ui/DetailEqual";
import DetailTabIndexTabContainer from "./DetailTabIndexTabContainer";
import DetailTabContainer from "./DetailTabContainer";
import DetailCard from "./DetailCard";
import DetailTab from "./DetailTab";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode } from "swiper/modules";

export default function ItemDetailSection() {
    const [like, setLike] = useState(0);
    const [isTouch, setIsTouch] = useState(false);

    const [height, setHeight] = useState(150);

    const item = useRef();

    function swiperSlideHeight() {
        let screen = window.innerWidth;
        const clientHeight = item.current.clientHeight;

        if (screen >= 2200) {
            setHeight(clientHeight * 5);
        } else if (screen >= 1920) {
            setHeight(clientHeight * 4);
        } else {
            setHeight(clientHeight * 3);
        }
    }

    useEffect(() => {
        swiperSlideHeight();

        window.addEventListener("resize", swiperSlideHeight);
        return () => {
            window.removeEventListener("resize", swiperSlideHeight);
        };
    }, []);

    return (
        <section className="itemDetailSection">
            <div className="px-[85px] max-mdd:px-4 max-xs:px-2 max-[1280px]:px-[42px] max-[1024px]:px-[30px]">
                <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:justify-items-center">
                    <ImgContainer
                        src={itemDetailMainBigImage}
                        className="object-cover h-full w-full rounded-xl min-h-[697px] max-lg:min-h-[auto] "
                    />

                    <div className="flex flex-col gap-5">
                        <div className="flex items-baseline justify-between gap-5 max-sm:flex-col">
                            <h1 className="font-rubik max-xs:text-[25px] text-3xl 2xl:text-4xl 5xl:text-5xl">
                                <strong className="font-bold line-clamp-1 max-xs:line-clamp-2">
                                    The Fantasy Flower Bla Bla Bla Bla
                                </strong>
                            </h1>

                            <div className="flex gap-4 text-black font-semibold">
                                <div className="flex gap-2 bg-[#EAEAEA]  rounded-full px-2 py-0.5 items-center 4xl:text-lg 4xl:px-3">
                                    <Eye className="stroke-black" />
                                    100
                                </div>
                                <button
                                    onClick={() => {
                                        !isTouch
                                            ? setLike((like) => like + 1)
                                            : setLike((like) => like - 1);
                                        setIsTouch((isTouch) => !isTouch);
                                    }}
                                    className="likes bg-[#EAEAEA]  rounded-full px-2 py-0.5 items-center 4xl:text-lg 4xl:px-3 cursor-pointer hover:bg-slate-300"
                                >
                                    <div className="flex gap-2 items-center">
                                        {!isTouch ? (
                                            <HiOutlineHeart className="stroke-2" />
                                        ) : (
                                            <HiHeart />
                                        )}
                                        {like}
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-12 max-xl:gap-4 max-xs:grid-cols-1">
                            <div className="card-detail grid gap-6 items-center bg-black p-2 rounded-[10px]">
                                <div className="card-profile w-max">
                                    <ImgContainer
                                        src={profile}
                                        className="w-11 h-11 4xl:w-14 4xl:h-14"
                                    />
                                </div>
                                <div className="justify-between w-full items-center text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg">
                                    <div className="card-name grid gap-2">
                                        <p className="self-start">Owned By</p>
                                        <p className="font-semibold">
                                            Lolla Smith
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-detail grid gap-6 items-center bg-black p-2 rounded-[10px]">
                                <div className="card-profile w-max">
                                    <ImgContainer
                                        src={profile}
                                        className="w-11 h-11 4xl:w-14 4xl:h-14"
                                    />
                                </div>
                                <div className="justify-between w-full items-center text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg">
                                    <div className="card-name grid gap-2">
                                        <p className="self-start">Owned By</p>
                                        <p className="font-semibold">
                                            Lolla Smith
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg leading-5">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic
                        </p>

                        <div className="grid grid-cols-2 gap-12 max-xl:gap-4 max-sm:grid-cols-1 ">
                            <div className="px-7 py-4 bg-black rounded-[10px] max-xl:px-4 max-xl:py-3">
                                <ul className="flex flex-col gap-4">
                                    <DetailEqual
                                        title="artist"
                                        content="Lolla Smith"
                                    />
                                    <DetailEqual
                                        title="size"
                                        content="3000 X 3000"
                                    />
                                    <DetailEqual
                                        title="create"
                                        content="04 April, 2022"
                                    />
                                    <DetailEqual
                                        title="Collection"
                                        content="Cyberpunk City Art"
                                    />
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center h-fit p-4 bg-black rounded-[10px]">
                                    <p className="text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg">
                                        Current Bid
                                    </p>
                                    <div className="flex items-baseline">
                                        <p className="font-semibold 3xl:text-lg 4xl:text-xl 5xl:text-2xl">
                                            4.89 ETH
                                            <span className="text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg font-normal pl-1">
                                                = $12.246
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between px-5 py-3 bg-black rounded-[10px] h-full font-semibold max-lg:justify-center max-lg:gap-4 3xl:text-lg 4xl:text-xl 5xl:text-2xl">
                                    <div className="flex items-center justify-center h-full  bg-purple-700 w-9 3xl:w-10 4xl:w-11 5xl:w-12 rounded-[10px]">
                                        4
                                    </div>
                                    <p className="font-bold text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-7xl">
                                        :
                                    </p>
                                    <div className="flex items-center justify-center h-full bg-purple-700 w-9 3xl:w-10 4xl:w-11 5xl:w-12 rounded-[10px]">
                                        8
                                    </div>
                                    <p className="font-bold text-3xl">:</p>
                                    <div className="flex items-center justify-center h-full bg-purple-700 w-9 3xl:w-10 4xl:w-11 5xl:w-12 rounded-[10px]">
                                        16
                                    </div>
                                    <p className="font-bold text-3xl">:</p>
                                    <div className="flex items-center justify-center h-full bg-purple-700 w-9 3xl:w-10 4xl:w-11 5xl:w-12 rounded-[10px]">
                                        54
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="flex gap-4 justify-center items-center py-2 font-semibold text-purple-600 border-purple-600 bg-purple-200 rounded-[10px] outline-0 hover:bg-purple-100/90 3xl:text-lg 4xl:text-xl 5xl:text-2xl">
                            <Lock fill="#79279F" className="w-4 h-4" />
                            Place a Bid
                        </button>

                        <div>
                            <DetailTab
                                tabText={["Bid History", "Info", "Provenance"]}
                            />

                            <DetailTabIndexTabContainer>
                                <DetailTabContainer>
                                    <Swiper
                                        direction="vertical"
                                        slidesPerView={3}
                                        freeMode={true}
                                        modules={[FreeMode]}
                                        style={{
                                            height: height,
                                        }}
                                    >
                                        <SwiperSlide ref={item}>
                                            <DetailCard />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <DetailCard />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <DetailCard />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <DetailCard />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <DetailCard />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <DetailCard />
                                        </SwiperSlide>
                                    </Swiper>
                                </DetailTabContainer>
                                <DetailTabContainer>
                                    <Swiper
                                        direction="vertical"
                                        slidesPerView={3}
                                    >
                                        <SwiperSlide>
                                            <DetailCard />
                                        </SwiperSlide>
                                    </Swiper>
                                </DetailTabContainer>
                                <DetailTabContainer>
                                    <Swiper
                                        direction="vertical"
                                        slidesPerView={3}
                                    >
                                        <SwiperSlide>
                                            <DetailCard />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <DetailCard />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <DetailCard />
                                        </SwiperSlide>
                                    </Swiper>
                                </DetailTabContainer>
                            </DetailTabIndexTabContainer>
                        </div>
                    </div>
                </div>
            </div>
            <Auctions />
        </section>
    );
}
