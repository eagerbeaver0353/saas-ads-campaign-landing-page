import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button, Row, Col } from 'antd';
import { Element } from 'rc-scroll-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import BannerImage from '../Banner/BannerImage';
import { assets } from '../data';
import { Input, Icon } from 'antd';
import "./banner1.less"

const { Search } = Input;

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  }
  static defaultProps = {
    className: 'banner1',
  }
  render() {
    const { className, isMobile, navToShadow } = this.props;
    return (
      <OverPack component="section" className={`${className}-wrapper page`}>
        <Row type="flex" justify={"space-between"} className={`${className}`} gutter={1}>
          <Col sm={24} md={15}>
            <QueueAnim
              type={'bottom'}
              className={`${className}-text-wrapper flex-1`}
              delay={1000}
            >
              <h1 key="h1" className="heading-info">Launch, Optimize, and Scale Your Ads with our AI-powered platform.</h1>
              <p className="main-info" key="p">
                Boost your advertising game with our all-in-one platform. Simplify your ad campaigns, generate compelling ad copy, and unlock the power of data to drive more conversions.
              </p>

              <div className="email-box" key="div">
                <input type="email" placeholder='Enter your email' className="form-input flex-1 rounded-l-[30px] pl-[30px] search-placeholder"></input>
                <div className="email-button rounded-r-[30px]">Get Started</div>
              </div>
            </QueueAnim>
          </Col>
          <Col sm={24} md={8}>
            <QueueAnim
              type={'right'}
              delay={2000}
            >
              <div className={`${className}-img-wrapper`} key="beauty">
              </div>
              <div className="trulyamni-img" key="trulyamni"></div>
              <div className="px-[18px] py-[19px] stats-box flex-col items-start h-[106.16px]" key="stats-box">
                <p className="conversion mb-[5.8px]">Conversion</p>
                <p className='flex w-full  mb-[9px]'>
                  <p className='ads-count'>9350</p>
                  <p className='roi-pcnt ml-auto'>
                    <Icon type="arrow-up" />
                    <span>8.46%</span>
                  </p>
                </p>
                <p className="progress-bar bg-[#E8F2FF] h-[11.37px]">
                  <div className='bg-[#FDBC64] w-[70%] h-full'></div>
                </p>
              </div>
            </QueueAnim>
          </Col>
        </Row>
      </OverPack >
    );
  }
}

export default Banner;
