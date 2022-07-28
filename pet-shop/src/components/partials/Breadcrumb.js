import React from "react";
import {BreadCrumb} from 'antd';

const BreadCrumbShopping = (props) => {
    return (
        <BreadCrumb style={{margin: "16px 0"}}>
            <BreadCrumb.Item>{props.sub_1}</BreadCrumb.Item>
            <BreadCrumb.Item>{props.sub_2}</BreadCrumb.Item>
            <BreadCrumb.Item>{props.sub_3}</BreadCrumb.Item>
        </BreadCrumb>
    )
}
export default React.memo(BreadCrumbShopping)