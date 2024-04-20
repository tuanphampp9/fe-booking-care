import React, { Component } from 'react'
import vtv1 from '../../../assets/social/vtv1.png'
import vietnamnet from '../../../assets/social/ictnews.png'
import vnexpress from '../../../assets/social/vnexpress.png'
import vtcnews from '../../../assets/social/vtcnewslogosvg.png'
import infonet from '../../../assets/social/infonet.png'
import boyte from '../../../assets/social/cuc-cong-nghe-thong-tin-bo-y-te-2.png'
import './about.scss'
import { connect } from 'react-redux'
export class About extends Component {
    render() {
        return (
            <div className='box-parent'>
                <h2 className='title-about'>Truyền thông nói về copy right</h2>
                <div className="section-about">
                    <div className="video-left">
                        <iframe width="588" height="330"
                            src="https://www.youtube.com/embed/FyDQljKtWnI"
                            title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="link-social">
                        <a href="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm" target="_blank" rel="noopener noreferrer">
                            <img src={vtv1} alt="vtv1" className='img-social' />
                        </a>
                        <a href="https://vietnamnet.vn/thong-tin-truyen-thong" target="_blank" rel="noopener noreferrer">
                            <img src={vietnamnet} alt="vietnamnet" className='img-social' />
                        </a>
                        <a href="https://video.vnexpress.net/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html" target="_blank" rel="noopener noreferrer">
                            <img src={vnexpress} alt="vnexpress" className='img-social' />
                        </a>
                        <a href="https://vtcnews.vn/dat-kham-chuyen-khoa-va-hanh-trinh-ho-tro-cac-benh-vien-qua-tai-ar434101.html" target="_blank" rel="noopener noreferrer">
                            <img src={vtcnews} alt="vtcnews" className='img-social' />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={boyte} alt="Bộ y tế" className='img-social' />
                        </a>
                        <a href="https://infonet.vietnamnet.vn/da-co-hon-20000-luot-benh-nhan-dat-lich-kham-qua-bookingcare-175080.html" target="_blank" rel="noopener noreferrer">
                            <img src={infonet} alt="infonet" className='img-social' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(About)

