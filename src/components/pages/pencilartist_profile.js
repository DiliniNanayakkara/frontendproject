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
                <img className="pencilartistpro" src="https://www.creativeboom.com/uploads/articles/a4/a40eeac492a143d5bb34412dfe8f275a8834e41c_810.jpg"></img>
            </div>
            <div class="pencilartistname">
                <h2>Nimaya Perera</h2>
                <h3>Bio</h3>
                <p>I am a artist and I do any kind of illustration including digital pencil sketches. I can sketch anything you want me to, from people, to animals, to nature, etc.



                    I will deliver work according to the package you choose for this gig. You will get a 3000px x 3000px image in 300 dpi, printable resolution.



                    Please message me first for inquiries before placing an order.</p>
            </div>







        </div >
    );

}