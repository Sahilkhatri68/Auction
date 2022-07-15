import React from 'react'
import "./Nav.css";
import p from "../img/p.png"
import iop from "../img/iop.png";
import car from "../img/car.png";
import watch from "../img/watch.png";
import shoe from "../img/shoe.png";
import stampp from "../img/stampp.png";
import ww from "../img/ww.jpg";
import camera from "../img/camera.jpg";
import xbox from "../img/xbox.jpg";
import xbox2 from "../img/xbox2.gif";
import bag from "../img/bag.jpg";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
const ariaLabel = { 'aria-label': 'description' };


export default function Navbar() {
    const myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }

    }

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <div className='cnt'>
                <div className="nav">
                    <input type="checkbox" id="nav-check" />
                    <div className="nav-header">
                        <div className="nav-title">
                            Auction
                        </div>
                    </div>
                    <div className="nav-btn">
                        <label htmlFor="nav-check">
                            <span />
                            <span />
                            <span />
                        </label>
                    </div>

                    <div className="nav-links">
                        <a href="#" target="_blank">Home</a>
                        <div class="dropdown">
                            <button class="dropbtn">Elements
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Pages
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Services
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                        <button className='Sbtn'>Signup</button>
                        <button className='Lbtn'>Login</button>

                    </div>

                </div>
                <div className='space'></div>
                <div className='wrappp'>
                    <div className='headd'>
                        <h1 className='wrapHead'>Join our Next Auction! Find your Equipment</h1>
                    </div>

                    <div className='cat'>
                        <div className='leftcat'>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small">Age</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >

                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='midcat'>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1 },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Input placeholder='Am looking for...' inputProps={ariaLabel} />

                            </Box>
                        </div>
                        <div className='rightcat'>
                            <Button variant="contained" size="small">
                                Search
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='midSectionn'>
                <div className='MidHeading'>
                    <h1>Explore more categories</h1>
                </div>
                <div className='outside'>
                    <div className='MidItems'>
                        <div className='conttt'>
                            <div className='productMid'>
                                <div className='imgMid'>
                                    <img src={p} className="imageInside" alt="img"></img>
                                </div>

                            </div>
                            <div className='lowerHead'><p className='para'>Antiques</p></div>
                        </div>

                        <div className='conttt'>
                            <div className='productMidtwo'>
                                <div className='imgMid'>
                                    <img src={iop} className="imageInside" alt="img"></img>
                                </div>

                            </div>
                            <div className='lowerHead'><p className='para'>Electronics</p></div>
                        </div>
                        <div className='conttt'>
                            <div className='productMidthree'>
                                <div className='imgMid'>
                                    <img src={car} className="imageInside" alt="img"></img>
                                </div>

                            </div>
                            <div className='lowerHead'><p className='para'>Cars</p></div>
                        </div>
                        <div className='conttt'>
                            <div className='productMidfour'>
                                <div className='imgMid'>
                                    <img src={watch} className="imageInside" alt="img"></img>
                                </div>

                            </div>
                            <div className='lowerHead'><p className='para'>Watch</p></div>
                        </div>
                        <div className='conttt'>
                            <div className='productMidfive'>
                                <div className='imgMid'>
                                    <img src={shoe} className="imageInside" alt="img"></img>
                                </div>

                            </div>
                            <div className='lowerHead'><p className='para'>Shoes</p></div>
                        </div>
                        <div className='conttt'>
                            <div className='productMidsix'>
                                <div className='imgMid'>
                                    <img src={stampp} className="imageInside" alt="img"></img>
                                </div>

                            </div>
                            <div className='lowerHead'><p className='para'>Stamp</p></div>
                        </div>
                    </div></div>
            </div>
            <div className='bottomSection'>
                <div className='bottmhead'>
                    <h1>Trending Auctions</h1>
                    <p className='parabottom'>See what's popular across thousand of items </p>
                </div>
                <div className='itemsbottoms'>
                    <div className='leftbottom'>
                        <div className='inisidebottom'>
                            <img src={ww} alt="img" className='wwwatch'></img>
                        </div>
                        <div className='descdiv'>
                            <h2 className='headwrap'>Watches</h2>
                            <h3>Starting Bid</h3>
                            <span className='spannn'><h3>$350.00</h3></span>
                            <div>
                                <button className='bidBtn'>Bid Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='rightbottom'>
                        <div className='toprightitem'>
                            <div className='leftrightitem  '>
                                <img src={camera} alt="camera" className='cameraimg'></img>
                                <div className="description">
                                    <h3>Photo</h3>
                                    <h4>$450</h4>
                                    <button className='bnow'>Bid Now</button>
                                </div>
                            </div>
                            <div className='leftrightitem  '>
                                <img src={xbox} alt="camera" className='cameraimg'></img>
                                <div className="description">
                                    <h3>Gaming</h3>
                                    <h4>$250</h4>
                                    <button className='bnow'>Bid Now</button>
                                </div>
                            </div>


                        </div>


                        <div className='bottomrightitem'>


                            <div className='toprightitem'>
                                <div className='leftrightitem  '>
                                    <img src={xbox2} alt="camera" className='cameraimg'></img>
                                    <div className="description">
                                        <h3>Controller</h3>
                                        <h4>$400</h4>
                                        <button className='bnow'>Bid Now</button>
                                    </div>
                                </div>
                                <div className='leftrightitem  '>
                                    <img src={bag} alt="camera" className='cameraimg'></img>
                                    <div className="description">
                                        <h3>Bag</h3>
                                        <h4>$150</h4>
                                        <button className='bnow'>Bid Now</button>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}