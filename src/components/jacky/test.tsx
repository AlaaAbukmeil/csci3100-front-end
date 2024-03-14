import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuantityBtn from "./QuantityBtn";
import Title from "./Title";

function Test(){
    let params = useParams();
    let [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        fetch("https://jackycamera.github.io/react-basic-product.json")
            .then((response) => response.json())
            .then((data) => {
                let productInfo = data.find((element: any) => {
                    return element.id === parseInt(params.id as string);
                });
                setProductDetail(productInfo);
            });
    }, []);
    return (
        <div>
            <Title title="Product Name" />
            <QuantityBtn productInfo={productDetail} />
</div>
    )
}

export default Test;

//Hello Jacky is adding a comment here