import React from 'react';
import {Image} from 'antd';
import pic10 from "../img/10.jpg";
import pic3 from "../img/3.jpg";
import pic4 from "../img/4.jpg";
import pic5 from "../img/5.jpg";
import pic6 from "../img/6.jpg";
import pic7 from "../img/7.jpg";
import pic8 from "../img/8.jpg";
import pic9 from "../img/9.jpg";
import pic2 from "../img/2.png";
import pic12 from "../img/12.png";
import pic13 from "../img/13.png";
import pic14 from "../img/14.png";
import pic15 from "../img/15.png";
import pic16 from "../img/16.png";


const imageStyle = {
    width: '300px',
    margin: '15px',
    height: '360px'
}

const Photos = () => {
    return(
        <div className="block-container" id="t2">
            <h2 className="nameTitle">Photos</h2>
            <p className="text-block">
                We have already traveled to many destroyed villages and cities in order to deliver food to our little friends.
                Animals that are left alone, we provide assistance and take them to a shelter. We transfer animals to their families or look for new families.
            </p>
            <div className="photoBlock">
                <Image.PreviewGroup>
                    <Image style={imageStyle} src={pic10} />
                    <Image style={imageStyle} src={pic3} />
                    <Image style={imageStyle} src={pic4} />
                    <Image style={imageStyle} src={pic5} />
                    <Image style={imageStyle} src={pic6} />
                    <Image style={imageStyle} src={pic7} />
                    <Image style={imageStyle} src={pic8} />
                    <Image style={imageStyle} src={pic9} />
                    <Image style={imageStyle} src={pic2} />
                    <Image style={imageStyle} src={pic12} />
                    <Image style={imageStyle} src={pic13} />
                    <Image style={imageStyle} src={pic14} />
                    <Image style={imageStyle} src={pic15} />
                    <Image style={imageStyle} src={pic16} />
                </Image.PreviewGroup>
            </div>

        </div>

    )
}

export default Photos;
