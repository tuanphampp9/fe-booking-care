import React, { Component } from 'react'
import Slider from 'react-slick'
import { CustomNextArrow, CustomPrevArrow } from './commonSection';
import img1 from '../../../assets/doctor/si-sac.jpg'
import img2 from '../../../assets/doctor/minh-ha.png'
import img3 from '../../../assets/doctor/van-hien.jpg'
import img4 from '../../../assets/doctor/huu-viet.jpg'
import img5 from '../../../assets/doctor/dieu-van.jpg'
import img6 from '../../../assets/doctor/xuan-son.gif'
import img7 from '../../../assets/doctor/tien-lang.png'
import img8 from '../../../assets/doctor/thanh-xuan.jpg'
import { connect } from 'react-redux';
const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
};
export class Doctor extends Component {
    render() {
        return (
            <div className='root-section'>
                <div className="header-section">
                    <h2 className="title-section">Bác sĩ nổi bật</h2>
                    <p className="watch-add">Xem thêm</p>
                </div>
                <Slider {...settings}>
                    <div className='box-doctor'>
                        <img src={img1} alt='specialty' className='img-doctor' />
                        <h3 className='title-item'>1</h3>
                        <p className='description-doctor'>Tiểu đường - Nội tiết,Tuyến giáp</p>
                    </div>
                    <div className='box-doctor'>
                        <img src={img2} alt='specialty' className='img-doctor' />
                        <h3 className='title-item'>1</h3>
                        <p className='description-doctor'>Tiểu đường - Nội tiết,Tuyến giáp</p>
                    </div>
                    <div className='box-doctor'>
                        <img src={img3} alt='specialty' className='img-doctor' />
                        <h3 className='title-item'>1</h3>
                        <p className='description-doctor'>Tiểu đường - Nội tiết,Tuyến giáp</p>
                    </div>
                    <div className='box-doctor'>
                        <img src={img4} alt='specialty' className='img-doctor' />
                        <h3 className='title-item'>1</h3>
                        <p className='description-doctor'>Tiểu đường - Nội tiết,Tuyến giáp</p>
                    </div>
                    <div className='box-doctor'>
                        <img src={img5} alt='specialty' className='img-doctor' />
                        <h3 className='title-item'>1</h3>
                        <p className='description-doctor'>Tiểu đường - Nội tiết,Tuyến giáp</p>
                    </div>
                    <div className='box-doctor'>
                        <img src={img6} alt='specialty' className='img-doctor' />
                        <h3 className='title-item'>1</h3>
                        <p className='description-doctor'>Tiểu đường - Nội tiết,Tuyến giáp</p>
                    </div>
                    <div className='box-doctor'>
                        <img src={img7} alt='specialty' className='img-doctor' />
                        <h3 className='title-item'>1</h3>
                        <p className='description-doctor'></p>
                    </div>
                    <div className='box-doctor'>
                        <img src={img8} alt='specialty' className='img-doctor' />
                        <h3 className='title-item'>1</h3>
                        <p className='description-doctor'></p>
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

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Doctor)

