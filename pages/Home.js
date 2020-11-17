import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import { Divider,Button, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';


const useStyles = makeStyles({
    root1: {
      flexGrow:1
    },
    post: {
      letterSpacing:1.3,
      color:'white',
      fontSize:11,
      fontFamily:'Poppins',
      borderRadius:20,
      float:'right',
      background:'green'
    },
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 38,
      padding: '0 20px',
    },
    home: {
      marginBottom:15,
      border:'1px solid gray',
      borderRadius:4
    },
    writePost: {
      marginBottom:15
    },
    container: {
      border:'1px solid #d9d9d9',
      borderRadius:2
    },
    textField: {
      
    },
    card: {
      borderRadius:20,
      background:'#f2f2f2',
      maxWidth: 345,
    }
  });

export default function Home() {

 const classes = useStyles();

  return (
     
    
<Layout home>
      <Head>
        <title>FDM</title>
      </Head>


      <div className={classes.root1}>
      <Grid container spacing={3}>
        

        <Grid  item xs>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/images/logow.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>

        <Grid item xs={7}>
        <div align="center" style={{marginLeft:10}}>
          <img 
        src="/images/me.jpg"
        className={` ${utilStyles.borderCircle}`}
        alt=""
      /> 
      <h2 style={{fontFamily:'Poppins'}}>Home</h2>
      </div>

      <div className={classes.writePost}>
      <TextField
      
      multiline
      rows={1}
      rowsMax={20}
        className={classes.textField}
        fullWidth
        variant="outlined"
        placeholder="What's appening ?"
      />
      <br/><br/>
      <EmojiEmotionsOutlinedIcon style={{float:'right',marginRight:5}}/>
      <ImageOutlinedIcon  style={{float:'right',marginRight:5,marginLeft:10}}/>
      <Button  className={classes.post}>Post</Button>
      </div>
      <br/><br/>

      <Divider/>

      <div className={utilStyles.blogContainer}>
      <section className={utilStyles.headingMd}>
       <h1 className={utilStyles.headingLgB} style={{color:'black'}}>Blog</h1>
       <ul className={utilStyles.list}>

          <li className={utilStyles.listItem}>
             <Link href="/Users"><a>Users</a></Link>
             <br/>
             <small>
               <time className={utilStyles.headingSm} dateTime="">Up-to-date</time>
             </small>
          </li>
        
          <li className={utilStyles.listItem}>
             <Link href="/posts/Covid19Data"><a >Covid-19 Analitycs and Statistics </a></Link>
             <br/>
             <small>
               <time className={utilStyles.headingSm} dateTime="2020-11-09">November 9, 2020</time>
             </small>
          </li>

           <li className={utilStyles.listItem}>
             <Link href="/posts/firstPost"><a>Your first React App </a></Link>
             <br/>
             <small>
               <time className={utilStyles.headingSm} dateTime="2020-01-02">January 2, 2020</time>
             </small>
          </li>

          <li className={utilStyles.listItem}>
             <Link href="/posts/MongoDBApp"><a>Mongo DB, React js and Typescript all in one single web application </a></Link>
             <br/>
             <small>
               <time className={utilStyles.headingSm} dateTime="2020-05-12">May 12, 2020</time>
             </small>
          </li>

       </ul>
      </section>
      </div>
    </Grid>

    <Grid  item xs>
    <Card className={classes.card}>
      <CardActionArea>
        
          <h2 style={{fontSize:28, fontFamily:'Poppins',marginLeft:35,lineHeight:1}}>Trends</h2>
          <ul>
            <h4 style={{fontFamily:'Poppins'}}>Chiellini</h4>
            <p style={{color:'black'}}>cshdcbbsknksdmklsmc</p>

            <h4 style={{fontFamily:'Poppins'}}>As Roma</h4>
            <p style={{color:'black'}}>cshdcbbsknksdmklsmc</p>

            <h4 style={{fontFamily:'Poppins'}}>Chiara Ferragni</h4>
            <p style={{color:'black'}}>cshdcbbsknksdmklsmc</p>

            <h4 style={{fontFamily:'Poppins'}}>Chiellini</h4>
            <p style={{color:'black'}}>cshdcbbsknksdmklsmc</p>

            <h4 style={{fontFamily:'Poppins'}}>As Roma</h4>
            <p style={{color:'black'}}>cshdcbbsknksdmklsmc</p>

            <h4 style={{fontFamily:'Poppins'}}>Chiara Ferragni</h4>
            <p style={{color:'black'}}>cshdcbbsknksdmklsmc</p>
          </ul>
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>

    </Grid>
    </div>

  </Layout>
  )
}