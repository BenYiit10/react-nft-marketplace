import React from 'react'
import CategoryItem from './CategoryItem'

import handsVert from "../../assets/handsHorizontal.png"
import bitcoinVert from "../../assets/bitcoinHorizontal.png"
import nftVert from "../../assets/nftHorizontal.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SectionTitle from '../../ui/SectionTitle'
import { Link } from 'react-router-dom'

export default function Category() {
    
    const swiperSetinngs = {
        breakpoints: {
            420: {
              slidesPerView: 1.9,
            },
            769: {
              slidesPerView: 2.9,
            },

            1025: {
              slidesPerView: 3.9,
            },

            2200: {
              slidesPerView: 4.9,
            },
        }
    }

  return (
    
    <section className='bg-[#19191D] pt-24 pb-[88px]'>
        <div className='page-container'>
            <SectionTitle title="Brow By Category" />        
        </div>
        <div className='relative ml-auto w-[90%] max-1xl:w-[92%] max-mdd:w-[97%]'>
            <Swiper /* !ml-[10%] max-1xl:!ml-[8%] max-mdd:!ml-[2.5%] */
            
                slidesPerView={1.4}
                spaceBetween={32}
                
                {...swiperSetinngs}
                
            >
                <SwiperSlide>
                    <Link to="/explore">
                        <CategoryItem src={nftVert} title="Music" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/explore">
                    <CategoryItem src={handsVert} title="Domain Name" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/explore">
                    <CategoryItem src={nftVert} title="Music" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/explore">
                    <CategoryItem src={bitcoinVert} title="Arts" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/explore">
                    <CategoryItem src={nftVert} title="Utility" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/explore">
                    <CategoryItem src={nftVert} title="Music" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/explore">
                    <CategoryItem src={handsVert} title="zort" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/explore">
                    <CategoryItem src={nftVert} title="Music" />
                    </Link>
                </SwiperSlide>

                {/* <SwiperNavigate left />
                <SwiperNavigate right /> */}

            </Swiper>
       
        </div>
    </section>
  )
}
