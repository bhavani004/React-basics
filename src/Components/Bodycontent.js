import React, { useState } from 'react'
import '../css/Bodycontent.css'
export default function Bodycontent() {
    const [showHide, setShowHide] = useState(true)

    let sample = [
        { img: "https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1", des: "sample" },
        { img: "https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1", des: "sample" },
        { img: "https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1", des: "sample" },
        { img: "https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1", des: "sample" },
        { img: "https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1", des: "sample" },
        { img: "https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1", des: "sample" },
        { img: "https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1", des: "sample" },
        { img: "https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1", des: "sample" }

    ]

    let cards = [];
    for (let j = 0; j < sample.length; j++) {
     
        cards.push(<div class="col-lg-3 col-12">
          
            <div class="image-styling ">
                <img src={sample[j].img} class="img-fluid"></img>
            </div>
        </div>);

    }

  

    return (

        <div class="body-content">

            <div class="images-block">
               
                <div class="row">

                    {cards}

                        {/* // sample.map((item) => { */}
                        {/* //     return <div class="col-lg-3 col-12">
                        //         <div class="image-styling">
                        //             <img src={item.img} class="img-fluid"></img>
                        //         </div>
                        //     </div>

                        // }) */}

                    











                    {/* 
                    <div class="col-lg-3 col-12">
                        <div class="image-styling">
                            <img src="https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1" class="img-fluid"></img>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div class="image-styling">
                            <img src="https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1" class="img-fluid"></img>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div class="image-styling">
                            <img src="https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1" class="img-fluid"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div class="images-block">
                <div class="row">

                    <div class="col-lg-3 col-12">
                        <div class="image-styling">
                            <img src="https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1" class="img-fluid"></img>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div class="image-styling">
                            <img src="https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1" class="img-fluid"></img>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div class="image-styling">
                            <img src="https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1" class="img-fluid"></img>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div class="image-styling">
                            <img src="https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1" class="img-fluid"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div class="images-block">
                <div class="row">

                    <div class="col-lg-3 col-12">
                        <div class="image-styling">
                            <img src="https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1" class="img-fluid"></img>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div class="image-styling">
                            <img src="https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1" class="img-fluid"></img>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div class="image-styling">
                            <img src="https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1" class="img-fluid"></img>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div class="image-styling">
                            <img src="https://th.bing.com/th/id/OIP.p8WeobXHej3muhyVBvzd2wHaEo?pid=ImgDet&rs=1" class="img-fluid"></img>
                        </div>
                    </div>*/}
                </div>
            </div>
        </div >

    )
}
