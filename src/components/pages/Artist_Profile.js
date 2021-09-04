import React, { useEffect, useState } from 'react';
import images from './data';
import { SRLWrapper } from 'simple-react-lightbox';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../css/Profile.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import '../css/Profile.css';
import ArtistNavbar from '../ArtistNavbar';
import { HorizontalSplit } from '@material-ui/icons';
import { yellow } from '@material-ui/core/colors';

const options = {
	// settings: {
	// 	overlayColor: 'rgb(25, 136, 124)',
	// 	autoplaySpeed: 1500,
	// 	transitionSpeed: 900
	// },
	// buttons: {
	// 	backgroundColor: 'red',
	// 	iconColor: 'rgba(126, 172, 139, 0.8)'
	// },
	// caption: {
	// 	captionColor: '#a6cfa5',
	// 	captionFontFamily: 'Raleway, sans-serif',
	// 	captionFontWeight: '300',
	// 	captionTextTransform: 'uppercase'
	// },
	// progressBar: {
	// 	height: '20px',
	// 	fillColor: 'blue',
	// 	backgroundColor: 'white'
	// }
};

const useStyles = makeStyles((theme) => ({
    root_main: {
        
        justifyContent: 'center',
        justifyItems: 'center',
        paddingTop: '8px',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(1000),
            height: theme.spacing.auto,
        },
    },

    root_card1: {
        maxWidth: 345,
    },
    media_card1: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        // paddingTop: '10px',
        // paddingTop: theme.spacing(4),
    },

    root_paper: {
        
        justifyContent: 'center',
        paddingTop: '100px',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(),
            height: theme.spacing(30),
        },
    },

    paper2: {
        // paddingTop: '10px',
        // paddingBottom: '20px',
        // paddingLeft: '23px',
        // paddingRight: '23px',
       
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        justifyContent: 'center',
        justifyItems: 'center',
        // outlineStyle: '20px',
      },

      root_font1: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '600px',
         
        },
      },

      root_button: {
        '& > *': {
          margin: theme.spacing(1),
          
        },
      },
}));


export default function Artist_Profile (){

    const classes = useStyles();
    const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);


    return (
        <div className="A">
               <ArtistNavbar/>
               <div className="profiledata">
                <center>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" style={{width:'100px', marginTop:'20px', marginBottom:'50px', height:'auto'}}>

</img>
<h1>Dilini Nanayakkara</h1>
<p>⭐⭐⭐⭐⭐ 5.0 (827 reviews)</p>
<h3>Hi! 👻 I am a professional artist who comes to show my artwork. You can see my portfolio and I hope you will 
                                        enjoy it! If you have any questions do not hesitate to ask, I will answer immediately! 👻</h3>
                </center>
                <div className="btn">
                                    <Button variant="contained">
                                        Edit Profile Info
                                    </Button>
                                </div>
                               
                                <p className="profiletext">Do you Want to register as a customized potrait artist?</p>
                                <div className="btn">
                                    <Button variant="contained" >
                                        Register As Pencile Artist
                                    </Button>
                                </div>
                                

               </div>
               <div className="profiledetails">
              <center>
                                <h2>USER PROFILE</h2>
                                <TextField
                                className="feild"
                                    id="standard-read-only-input"
                                    label="UserID:"
                                    defaultValue="12345"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                  className="feild"
                                    id="standard-read-only-input"
                                    label="Name:"
                                    defaultValue="Dilini Nanayakkara"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                  className="feild"
                                    id="standard-read-only-input"
                                    label="Email address:"
                                    defaultValue="dilinin@gmail.com"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                  className="feild"
                                    id="standard-read-only-input"
                                    label="Phone:"
                                    defaultValue="0711111111"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                  className="feild"
                                    id="standard-read-only-input"
                                    label="Location:"
                                    defaultValue="Kandy, Sri Lanka"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                  className="feild"
                                    id="standard-read-only-input"
                                    label="Customized Artist (Yes / No):"
                                    defaultValue="No"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                               
                               
                       
                               </center>
                               <div className="btn">
                                    <Button variant="contained" >
                                        Edit Profile
                                    </Button>
                                </div>
                                <div className="btn">
                                    <Button variant="contained">
                                        View Orders
                                    </Button>
                                </div>

               </div>
               <div className="ArtistPortfolio">
                   

</div>
<div className="uploadArts">
    <div className="artpagedata">
        <center>
            <h1>Art Work Gallery</h1>
            <Button variant="contained">
                                    Upload Works
                                    </Button>
        </center>
       
      
    </div>

</div>

<div className="Appw">
          
			<div className="tags">
				<TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="oil" tagActive={tag === 'oil' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="water" tagActive={tag === 'water' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="pencile" tagActive={tag === 'pencile' ? true : false} handleSetTag={setTag} />
			</div>
			<SRLWrapper options={options}>
				<div className="containerx">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a href={`/images/${image.imageName}`}>
								<img className="image" src={ require(`../../assests/${image.imageName}`).default} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
		</div>

        </div>

    );
  
}
const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};