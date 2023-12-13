import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import "./trustby.less";

const base = 0;
const page1 = [
    {
        img: `/public/OpenZappellin.svg`,
        href: `${base}zh-cn/g2/3.x/index.html`,
        title: 'G2',
        description: ' 是以数据为驱动，具有高度的易用性和扩展性的可视化图形语法。',
    },
    {
        img: `/public/ORACLE.svg`,
        href: `${base}zh-cn/g2/3.x/index.html`,
        title: 'G2',
        description: ' 是以数据为驱动，具有高度的易用性和扩展性的可视化图形语法。',
    },
    {
        img: `/public/MORPHEUS.svg`,
        href: `${base}zh-cn/g2/3.x/index.html`,
        title: 'G2',
        description: ' 是以数据为驱动，具有高度的易用性和扩展性的可视化图形语法。',
    },
    {
        img: `/public/SAMSUNG.svg`,
        href: `${base}zh-cn/g2/3.x/index.html`,
        title: 'G2',
        description: ' 是以数据为驱动，具有高度的易用性和扩展性的可视化图形语法。',
    },
    {
        img: `/public/monday.svg`,
        href: `${base}zh-cn/g2/3.x/index.html`,
        title: 'G2',
        description: ' 是以数据为驱动，具有高度的易用性和扩展性的可视化图形语法。',
    },
    {
        img: `/public/segment.svg`,
        href: `${base}zh-cn/g2/3.x/index.html`,
        title: 'G2',
        description: ' 是以数据为驱动，具有高度的易用性和扩展性的可视化图形语法。',
    },
    {
        img: `/public/Protonet.svg`,
        href: `${base}zh-cn/g2/3.x/index.html`,
        title: 'G2',
        description: ' 是以数据为驱动，具有高度的易用性和扩展性的可视化图形语法。',
    },
];

export default function Page1() {
    const children = page1.map((card, i) => (
        <Col className="card-wrapper" key={i.toString()} md={3} xs={7}>
            <img src={`${card.img}`} className="h-[30px]" />
        </Col>
    ));

    return (
        <section className="page-wrapper page-trust-by">
            <QueueAnim
                component={Row}
                type="top"
                className="page row text-center"
                delay={3000}
            >
                <Col span={24} className="trustby-heading mb-10" key="trustby-heading">Trusted by the best in B2B</Col>
                <Col span={24} key="trust-companies" className='flex justify-between'>
                    {/* <QueueAnim
                        component={props => <Row type='flex' justify='space-between' {...props} />}
                        type="bottom"
                        className="page"
                        delay={1000}
                        interval={500}
                    > */}
                        {children}
                    {/* </QueueAnim> */}
                </Col>
            </QueueAnim>
        </section>);
}
