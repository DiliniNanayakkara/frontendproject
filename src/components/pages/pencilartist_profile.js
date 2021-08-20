import React from 'react';
import '../css/pencilartistprofile.css';
import RegCusNavbar from '../RegCusNavbar';
import { Link } from 'react-router-dom';
export default function Pencilarts() {


    return (



        <div className="A">
            <RegCusNavbar />

            <h1>Nimaya Perera</h1>
            <div className="pencilartistpro1">
                <img className="pencilartistpro" src="https://i.ebayimg.com/images/g/p0UAAOSwJZBddPj~/s-l300.jpg"></img>
            </div>
            <div class="pencilartistname">
                <h2>Nimaya Perera</h2>
                <h3>Bio</h3>
                <p>I am a artist and I do any kind of illustration including digital pencil sketches. I can sketch anything you want me to, from people, to animals, to nature, etc.



                    I will deliver work according to the package you choose for this gig. You will get a 3000px x 3000px image in 300 dpi, printable resolution.



                    Please message me first for inquiries before placing an order.</p>
                <Link to='/customizeart'>
                    <button className="button">Customize Pencile arts</button>


                </Link>
            </div>

            <div className="pencilartwork">
                <h2>Artist Artworks</h2>

            </div>
            <center>
                <div className="pencilartworkphoto">
                    <div className="pencilartphotoz">
                        <center>
                            <img className="pencilartphoto" src="https://live.staticflickr.com/8116/8708154984_426d5d12b6_z.jpg"></img>
                        </center>
                    </div>
                    <div className="pencilartphotoz">
                        <center>
                            <img className="pencilartphoto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc57600b-6213-41a4-aaa9-c28f49861807/d5mf3nu-f07e4024-5f81-4ef2-9c3b-a0852d51c58a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNTc2MDBiLTYyMTMtNDFhNC1hYWE5LWMyOGY0OTg2MTgwN1wvZDVtZjNudS1mMDdlNDAyNC01ZjgxLTRlZjItOWMzYi1hMDg1MmQ1MWM1OGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.y1G5ZV82ZwviiGGV2HMeBBtfYf2UI1TT3VUajnip5js"></img>
                        </center>
                    </div>
                    <div className="pencilartphotoz">
                        <center>
                            <img className="pencilartphoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPzCh5TtGfHHuaqfHSkqnu4emtDubyA295o-XAsFRkv1iSiLOqWwJMX3vKHGRJV4ABXE&usqp=CAU"></img>
                        </center>
                    </div>
                    <div className="pencilartphotoz">
                        <center>
                            <img className="pencilartphoto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/33a5623d-18ac-4f5e-aaca-bc575948e546/d5yupfj-408686c7-bdc7-48e3-a1be-2de8fee22af8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMzYTU2MjNkLTE4YWMtNGY1ZS1hYWNhLWJjNTc1OTQ4ZTU0NlwvZDV5dXBmai00MDg2ODZjNy1iZGM3LTQ4ZTMtYTFiZS0yZGU4ZmVlMjJhZjguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-fz1WSyjlQ3pCRMSIdcWUvUoxVW27wEkmXubcUk_3CA"></img>
                        </center>
                    </div>
                    <div className="pencilartphotoz">
                        <center>
                            <img className="pencilartphoto" src="https://images.template.net/wp-content/uploads/2014/12/3D-Pencil-Drawing-by-Ramon-Bruin2.jpg"></img>
                        </center>
                    </div>
                    <div className="pencilartphotoz">
                        <center>
                            <img className="pencilartphoto" src="http://webtoolfeed.files.wordpress.com/2012/09/aragorn_by_esteljf-d2b0db61.jpg"></img>
                        </center>
                    </div>

                </div>
            </center>





        </div >
    );

}