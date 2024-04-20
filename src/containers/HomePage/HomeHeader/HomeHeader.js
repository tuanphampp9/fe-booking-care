import React, { Component } from 'react'
import './HomeHeader.scss'
import logo from '../../../assets/logo/care_logo.png'
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils/constant';
import { changeLanguageApp } from '../../../store/actions';
export class HomeHeader extends Component {
    constructor(props) {
        super(props);
    }
    changeLanguage = (lang) => {
        console.log(lang)
        //fire redux event:actions
        this.props.handleChangeLanguageApp(lang);
    }
    render() {
        console.log(this.props.language)
        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className="left-content">
                        <i className="fas fa-bars"></i>
                        <img src={logo} alt="logo" className='header-logo' />
                    </div>
                    <div className="center-content">
                        <div className="child-content">
                            <h5><FormattedMessage id="home-header.specialty" /></h5>
                            <p className='sub-title'><FormattedMessage id="home-header.search-doctor" /></p>
                        </div>
                        <div className="child-content">
                            <h5><FormattedMessage id='home-header.health-facility' /></h5>
                            <p className='sub-title'><FormattedMessage id="home-header.select-room" /></p>
                        </div>
                        <div className="child-content">
                            <h5><FormattedMessage id='home-header.doctor' /></h5>
                            <p className='sub-title'><FormattedMessage id='home-header.select-doctor' /></p>
                        </div>
                        <div className="child-content">
                            <h5><FormattedMessage id='home-header.package' /></h5>
                            <p className='sub-title'><FormattedMessage id='home-header.check-health' /></p>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="support">
                            <i className="fas fa-question-circle"></i>
                            <h5><FormattedMessage id='home-header.support' /></h5>
                        </div>
                        <div className="option-language">
                            <h5 className={this.props.language === LANGUAGES.VI ? 'language active' : 'language'} onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</h5>
                            <h5 className={this.props.language === LANGUAGES.EN ? 'language active' : 'language'} onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</h5>
                        </div>
                    </div>
                </div>
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
        handleChangeLanguageApp: (lang) => dispatch(changeLanguageApp(lang))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
