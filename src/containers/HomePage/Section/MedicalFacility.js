import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './section.scss'
import { CustomNextArrow, CustomPrevArrow } from './commonSection';
import img1 from '../../../assets/medical/lo-go-viet-duc.jpg'
import img2 from '../../../assets/medical/logo-bvcr-moi.jpg'
import img3 from '../../../assets/medical/doctor-check.jpg'
import img4 from '../../../assets/medical/logo-y-duoc-1.jpg'
import img5 from '../../../assets/medical/logo-hung-viet.jpg'
import img6 from '../../../assets/medical/med-247.jpg'
import img7 from '../../../assets/medical/logo-diag.png'
import { connect } from 'react-redux';
const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
};
export class MedicalFacility extends Component {
    render() {
        return (
            <div className='root-section'>
                <div className="header-section">
                    <h2 className="title-section">Cơ sở y tế</h2>
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
                    <div className='box-section'>
                        <img src={img5} alt='specialty' className='img-section' />
                        <h3 className='title-item'>5</h3>
                    </div>
                    <div className='box-section'>
                        <img src={img6} alt='specialty' className='img-section' />
                        <h3 className='title-item'>6</h3>
                    </div>
                    <div className='box-section'>
                        <img src={img7} alt='specialty' className='img-section' />
                        <h3 className='title-item'>7</h3>
                    </div>
                </Slider>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility)
