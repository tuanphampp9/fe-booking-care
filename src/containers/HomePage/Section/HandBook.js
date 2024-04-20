import React, { Component } from 'react'
import Slider from 'react-slick'
import { CustomNextArrow, CustomPrevArrow } from './commonSection';
import img1 from '../../../assets/handbook/kham-dau-xuong-khop-o-dau.png'
import img2 from '../../../assets/handbook/bac-si-vat-ly-tri-lieu.png'
import img3 from '../../../assets/handbook/kham-dau-xuong-khop-o-dau.png'
import img4 from '../../../assets/handbook/bac-si-vat-ly-tri-lieu.png'
const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
};
export class HandBook extends Component {
    render() {
        return (
            <div className='root-section'>
                <div className="header-section">
                    <h2 className="title-section">Cẩm nang</h2>
                    <p className="watch-add">Xem thêm</p>
                </div>
                <Slider {...settings}>
                    <div className='box-section'>
                        <img src={img1} alt='specialty' className='img-section' />
                        <h3 className='title-item'>1</h3>
                    </div>
                    <div className='box-section'>
                        <img src={img2} alt='specialty' className='img-section' />
                        <h3 className='title-item'>2</h3>
                    </div>
                    <div className='box-section'>
                        <img src={img3} alt='specialty' className='img-section' />
                        <h3 className='title-item'>3</h3>
                    </div>
                    <div className='box-section'>
                        <img src={img4} alt='specialty' className='img-section' />
                        <h3 className='title-item'>4</h3>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default HandBook
