/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'


import { NoticesSection } from "../../const";


import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const CarouselNotices = () => {
  return (
    <>
      <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
        "delay": 5000,
        "disableOnInteraction": false,
        
      }} pagination={{
        "clickable": true
      }} navigation={false} className="mySwiper">
        {
          NoticesSection &&
          NoticesSection.map((item, index) => {
            console.log("item", item, index)
            return (
              <>
                <SwiperSlide key={index}>
                  <div className='wrapper'>
                    <a className="redirec_slider"
                      href={item?.url}
                      target="_parent"
                    >
                      <div className="SliderTitle">
                        <h2 className="title-principal">{item?.title}</h2>
                        <div className="SliderSubtitle">
                          <h5 className="subtitle">{item?.bajada}</h5>
                        </div>
                      </div>
                      <img
                        className="imgSlider slide_img"
                        src={item?.image}
                        alt={'slider' + index}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              </>
            )
          })
        }
      </Swiper>
      <style jsx>{`
      .wrapper{
        height: auto;
      }
      .redirec_slider {
        height: 100%;
      }
      .SliderTitle {
        align-items: center;
        background: rgba(0,0,0,.48);
        display: flex;
        height: 145%;
        padding-left: 25px;
        position: absolute;
        z-index: 10;
        width: 100%
      }
      .SliderTitle h2 {
        width: 96%;
        color: #fff;
        font-family: Lato, sans-serif;
        font-size: 40px;
        font-weight: 800;
        text-transform: uppercase;
        text-align: start;
        text-shadow: rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em;
      }
      .title-principal {
        margin-bottom: 30px;
      }
      .SliderSubtitle {
        display: flex;
        justify-content: center;
        position: absolute;
        width: 100%;
        align-items: center;
        z-index: 10;
        align-items: center;
        max-width: 94%;
        margin: -54px 0px;
      }
      .subtitle {
        color: white;
        font-family: Lato, sans-serif;
        font-size: 19px;
        font-weight: 300;
        text-align: start;
        width: 100%;
        line-height: 1.3;
        text-shadow: rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em;
        margin-top: 11%;
      }
      .imgSlider {
        height: 100%;
        width: 100%;
      }
      @media only screen and (min-width: 1376px) {
        .subtitle {
          margin-top: 14%;
        }
        .SliderTitle h2 {
          margin-bottom: 15px;
        }
      }
      @media only screen and (max-width: 1291px) {
        .SliderTitle h2 {
          font-size: 32px;
          margin-bottom: 15px;
        }
        .subtitle {
          font-size: 15px;
          margin-top: 15%;
        }
      }
      @media only screen and (max-width: 1348px) {
        .subtitle {
          margin-top: 17%;
        }
      }
      @media only screen and (min-width: 1348px) {
        .subtitle {
          margin-top: 17%;
        }
        .title-principal {
          margin-bottom: 40px;
        }
      }
      @media only screen and (min-width: 1291px) {
        .SliderTitle h2 {
          font-size: 36px;
        }
      }
      @media only screen and (max-width: 1011px) {
        .SliderTitle h2 {
          font-size: 28px;
        }
      }
      @media only screen and (max-width: 900px) {
        .subtitle {
          display: none ;
        }
        .SliderTitle {
          height: 145%;
        }
        .SliderTitle h2 {
          font-size: 28px;
        }
      }
      @media only screen and (max-width: 620px) {
        .SliderTitle h2 {
          font-size: 24px;
        }
      }
      @media only screen and (max-width: 530px) {
        .SliderTitle {
          height: 130%;
        }
        .SliderTitle h2 {
          font-size: 19px;
        }
      }
      @media only screen and (max-width: 430px) {
        .SliderTitle {
          height: 145%;
        }
        .SliderTitle h2 {
          font-size: 17px;
        }
      }
      `}</style>
    </>
  )
}

export default CarouselNotices