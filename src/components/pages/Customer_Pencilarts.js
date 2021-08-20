import React from 'react';
import '../css/Pencilarts.css';
import RegCusNavbar from '../RegCusNavbar';
import { Link } from 'react-router-dom';
export default function Pencilarts() {


      return (



            <div className="A">
                  <RegCusNavbar />
                  <center>
                        <h1>De'lart PencilArts</h1></center>




                  <div className='C'>
                        <center><img className="Photo" src={require('../../assests/custom.png').default} alt="" width="1300"></img>
                        </center>

                        <center><Link to='/customizeart'>
                              <button className="button">Customize Pencile arts</button>


                        </Link> </center>
                        <center><Link to='/customizeart'>


                              <button className="button">Choose Artist</button>
                        </Link> </center>

                  </div>

                  <table className="status">
                        <tr>
                              <th>Artist</th>
                              <th>More Info</th>
                              <th>Start Price</th>
                              <th>Artworks</th>

                        </tr>
                        <tr>
                              <td>Nimaya</td>
                              <td><h2>More Info</h2><p>Hello!



                                    I am a freelance artist and I do any kind of illustration including digital pencil sketches. I can sketch anything you want me to, from people, to animals, to nature, etc.



                                    I will deliver work according to the package you choose for this gig. You will get a 3000px x 3000px image in 300 dpi, printable resolution.



                                    Please message me first for inquiries before placing an order.



                                    Thanks!</p></td>
                              <td className="B">2000LKR</td>
                              <td><button className="notavailable">Show Artist Artworks</button></td>



                        </tr>
                        <tr>
                              <td>Dilini</td>
                              <td><h2>More Info</h2><p>Pencile Art Exhibition.Available Arts:100</p></td>
                              <td className="B">2000LKR</td>

                              <td><button className="notavailable">Show Artist Artworks</button></td>


                        </tr>
                        <tr>
                              <td>Amasha</td>
                              <td><h2>More Info</h2><p>Illustrators Art Exhibition.Available Arts:2000</p></td>
                              <td className="B">2000LKR</td>

                              <td><button className="notavailable">Show Artist Artworks</button></td>


                        </tr>




                  </table>


            </div>
      );

}