import React from 'react'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import allItems from './item.json'


function InfoComponent({price, content, narrate}) {
    const contentItem = content.map((item, index) =>
        <li key={index}><strong>{item}</strong></li>
    );
    return (
        <Tabs
            defaultValue="price"
            values={[
                {label: '價格', value: 'price'},
                {label: '內容', value: 'content'},
                {label: '介紹', value: 'narrate'}
            ]}>
            <TabItem value="price"> <strong>N T：{ price } </strong></TabItem>
            <TabItem value="content">
                <ul>
                    { contentItem }
                </ul>
            </TabItem>
            <TabItem value="narrate">
                <h4><strong>{ narrate }</strong></h4>
            </TabItem>
        </Tabs>
    )
};
function OrderBtn (){
    const fontStyle = {
        color: 'white',
    };
    const buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '18px',
        borderRadius: '10px',
        cursor: 'pointer',
        padding: '5px 20px 5px 20px'
    }
    const aStyle = {
        textDecoration: 'none'
    }
    return (
        <>
            <button style={buttonStyle}>
                <a  style={aStyle}
                    href="https://reurl.cc/vg074l"
                    target="https://reurl.cc/vg074l"
                >
                    <strong style={fontStyle}>點餐去</strong>
                </a>
            </button>
        </>
    )
}

export const PublicLayout = function (prop){
    return (
        <>
            <InfoComponent
                price={prop.price}
                content={prop.content}
                narrate={prop.narrate}
            />
            <hr />
            <OrderBtn />
        </>
    )
}


// 輪播區
export const CarouselPic = function() {
  const itemList = allItems.items.map((item, index)=>
    <div key={index}>
      <img src={item.link} />
    </div>
  );
  return (
    <Carousel autoPlay infiniteLoop interval="2000" showStatus={false} showThumbs={false} >
      {itemList}
    </Carousel>
  );
}
