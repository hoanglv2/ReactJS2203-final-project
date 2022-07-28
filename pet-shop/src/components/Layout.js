import React from "react";
import {Layout} from 'antd';
import FooterShopping from './partials/Footer'
import './style.css'

// const {Content} = Layout;
const LayoutShopping = () => {
    return (
        <Layout>
            {/* <FooterShopping /> */}
            <h1>Hello</h1>
        </Layout>
    )
}
export default React.memo(LayoutShopping)