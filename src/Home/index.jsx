import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Banner1 from "./Banner1"
import Banner2 from "./Banner2"
import Banner3 from "./Banner3"
import Banner from './Banner';
import PageTrustBy from "./PageTrustBy";
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Footer from './Footer';
import './static/style';


let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});


class Home extends React.PureComponent {
  state = {
    isMobile,
    showShadow: false,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  navToShadow = (e) => {
    this.setState({ showShadow: e.mode === 'leave' });
  }
  render() {
    return (
      <div className="bg-[url('/public/background.png')] bg-cover bg-no-repeat">
        <Header key="header" className={this.state.showShadow ? 'show-shadow' : ''} />,
        <Banner1 key="banner1" isMobile={this.state.isMobile} navToShadow={this.navToShadow} />,
        {/* <Banner key="banner" isMobile={this.state.isMobile} navToShadow={this.navToShadow} />, */}
        <PageTrustBy key="page-trustby" />
        <Banner2 key="banner2" isMobile={this.state.isMobile} navToShadow={this.navToShadow} />,
        <Banner3 key="banner3" isMobile={this.state.isMobile} navToShadow={this.navToShadow} />,
        <Page1 key="page1" />,
        <Page2 key="page2" />,
        <Page3 key="page3" />,
        <Page4 key="page4" isMobile={this.state.isMobile} />,
        <Page5 key="page5" />,
        <Footer key="footer" />,
        <DocumentTitle title="Ant-V" />,
      </div>
    );
  }
}
export default Home;
