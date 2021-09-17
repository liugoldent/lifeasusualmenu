import React from 'react'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

function InfoComponent({price, content, narrate}) {
    const contentItem = content.map((item, index) =>
        <li key={index}><strong>{item}</strong></li>
    );
    return (
        <Tabs
            defaultValue="price"
            values={[
                {label: '價錢', value: 'price'},
                {label: '內容', value: 'content'},
                {label: '敘述', value: 'narrate'}
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
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeMokkzZRT7WjBYrssqX_Y6X5oSn3EIk6JVa0bjzzhVKJdj8w/viewform"
                    target="https://docs.google.com/forms/d/e/1FAIpQLSeMokkzZRT7WjBYrssqX_Y6X5oSn3EIk6JVa0bjzzhVKJdj8w/viewform"
                >
                    <strong style={fontStyle}>點餐去</strong>
                </a>
            </button>
        </>
    )
}

export default function PublicLayout (prop){
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