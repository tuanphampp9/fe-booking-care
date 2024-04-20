import React, { Component } from 'react'
import HomeHeader from './HomeHeader/HomeHeader';
import './HomePage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../../assets/banner/banner1.png'
import banner2 from '../../assets/banner/banner2.png'
import banner3 from '../../assets/banner/banner3.jpg'
import banner4 from '../../assets/banner/banner4.png'
import iconSpecialist from '../../assets/examination/iconkham-chuyen-khoa.png'
import iconRemote from '../../assets/examination/iconkham-tu-xa.png'
import iconGeneral from '../../assets/examination/iconkham-tong-quan.png'
import iconTest from '../../assets/examination/iconxet-nghiem-y-hoc.png'
import iconSpirit from '../../assets/examination/iconsuc-khoe-tinh-than.png'
import iconDental from '../../assets/examination/iconkham-nha-khoa.png'
import iconSurgical from '../../assets/examination/icongoi-phau-thuat.png'
import iconDiabetes from '../../assets/examination/iconsong-khoe-tieu-duong.png'
import iconHealth from '../../assets/examination/iconbai-test-suc-khoe.png'
import iconNearHome from '../../assets/examination/icony-te-gan-ban.png'
import { Input } from 'reactstrap';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import Specialty from './Section/Specialty';
import { CustomNextArrow, CustomPrevArrow } from './Section/commonSection';
import MedicalFacility from './Section/MedicalFacility';
import Doctor from './Section/DoctorFamous'
import HandBook from './Section/HandBook';
import About from './Section/AboutInfo';
import Footer from './Footer';
const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
};
export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleScrollTop: false
        }
    }
    handleScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            this.setState({
                visibleScrollTop: true
            })
        }
        else if (scrolled <= 300) {
            this.setState({
                visibleScrollTop: false
            })
        }
    }
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    render() {
        return (
            <div className='root'>
                <div className="full-width">
                    <HomeHeader />
                </div>
                <div className='container'>
                    <Slider {...settings}>
                        <div>
                            <img src={banner1} className="banner-content" alt='banner' />
                        </div>
                        <div>
                            <img src={banner2} className="banner-content" alt='banner' />
                        </div>
                        <div>
                            <img src={banner3} className="banner-content" alt='banner' />
                        </div>
                        <div>
                            <img src={banner4} className="banner-content" alt='banner' />
                        </div>
                    </Slider>

                    <div className="box-search">
                        <Input placeholder='Tìm chuyên khoa khám bệnh' />
                        <i className="fas fa-search"></i>
                    </div>
                    <h3> <FormattedMessage id='service-examination.title' /></h3>
                    <div className="service-component">
                        <div className="box-service">
                            <img src={iconSpecialist} className='icon-service' alt="Dịch vụ" />
                            <h5 className='title-service'><FormattedMessage id='service-examination.specialty' /></h5>
                        </div>
                        <div className="box-service">
                            <img src={iconRemote} className='icon-service' alt="Dịch vụ" />
                            <h5 className='title-service'><FormattedMessage id='service-examination.remote-examination' /></h5>
                        </div>
                        <div className="box-service">
                            <img src={iconGeneral} className='icon-service' alt="Dịch vụ" />
                            <h5 className='title-service'><FormattedMessage id='service-examination.general-health' /></h5>
                        </div>
                        <div className="box-service">
                            <img src={iconTest} className='icon-service' alt="Dịch vụ" />
                            <h5 className='title-service'><FormattedMessage id='service-examination.test-medical' /></h5>
                        </div>
                        <div className="box-service">
                            <img src={iconSpirit} className='icon-service' alt="Dịch vụ" />
                            <h5 className='title-service'><FormattedMessage id='service-examination.health-spirit' /></h5>
                        </div>
                        <div className="box-service">
                            <img src={iconDental} className='icon-service' alt="Dịch vụ" />
                            <h5 className='title-service'><FormattedMessage id='service-examination.dental-examination' /></h5>
                        </div>
                        <div className="box-service">
                            <img src={iconSurgical} className='icon-service' alt="Dịch vụ" />
                            <h5 className='title-service'><FormattedMessage id='service-examination.package-surgery' /></h5>
                        </div>
                        <div className="box-service">
                            <img src={iconDiabetes} className='icon-service' alt="Dịch vụ" />
                            <h5 className='title-service'><FormattedMessage id='service-examination.diabetes-examination' /></h5>
                        </div>
                        <div className="box-service">
                            <img src={iconHealth} className='icon-service' alt="Dịch vụ" />
                            <h5 className='title-service'><FormattedMessage id='service-examination.test-health' /></h5>
                        </div>
                        <div className="box-service">
                            <img src={iconNearHome} className='icon-service' alt="Dịch vụ" />
                            <h5 className='title-service'><FormattedMessage id='service-examination.near-medical' /></h5>
                        </div>
                    </div>
                    <Specialty />
                    <MedicalFacility />
                </div>
                <div className='box-container'>
                    <div className='box-item'>
                        <Doctor />
                    </div>
                </div>
                <div className="container">
                    <HandBook />
                </div>
                <div className='box-container'>
                    <div className='box-item'>
                        <About />
                    </div>
                </div>
                <Footer />
                {this.state.visibleScrollTop && <div className='icon-scroll' onClick={this.scrollToTop}><i className="fas fa-arrow-up"></i></div>}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};
const mapDispatchToProps = dispatch => {
    return {

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
