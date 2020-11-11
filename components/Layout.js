import React,{useState} from 'react'
import Head from 'next/head'
import styles from './layout.module.css'
import Toolbar  from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/Link';
import Typography from '@material-ui/core/Typography'
import utilStyles from '../styles/utils.module.css'
import { makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  inputRoot: {
    color: 'white',
    borderRadius: 5,
    border:'2px solid orange',
    background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const name = 'Filippo De Marco'

export const data=[
  {
    titolo: 'Covid 19 Analytics ',
    link: 'Covid19Data'
  },
  {
    titolo: 'Your first React App',
    link: 'firstPost'
  },
  {
    titolo: 'MongoDB, React Js and Typescript all in one single web application',
    link: 'MongoDBApp'
  },
]
export const siteTitle = 'Next.js Sample Website'

/* 
 *
*/
export default function Layout({ children, home }) {
  const classes = useStyles();
  const [search,setSearch]=useState('')

  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap" rel="stylesheet"></link>
    <AppBar style={{backgroundColor: '#131417'}} position="static">
      <Toolbar style={{paddingTop:12,paddingLeft:25,paddingRight:25, paddingBottom:12, height: 85}}>

        <IconButton  aria-label= "" style={{background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',color:"black" }}>
          <Menu />
        </IconButton>
        
        <IconButton style={{width:65,height:65}}>
           <img src="/images/react.png"/>
        </IconButton>

        <IconButton style={{width:60,height:60}}>
           <img src="/images/tsLogo.png"/>
        </IconButton>

        <IconButton style={{width:70,height:70,marginRight:11}}>
           <img src="/images/material.png"/>
        </IconButton>

        <Typography variant="h6" className={classes.title}>
            
        </Typography>
        
        <Button href="/Signin" style={{ marginLeft:20,height:56, background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',fontSize:14,textTransform:'capitalize', marginRight:2}}>Sign in</Button>
        <Button href="/Login" style={{ marginLeft:20,height:56, backgroundImage: 'linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)', backgroundColor:'#7ee8fa', fontSize:14, textTransform:'capitalize', marginRight:2}}> Log in </Button>

      </Toolbar> 
    </AppBar>

    {search.length>0 &&
    <ul style={{backgroundColor:'#131417', marginTop:0, paddingBottom:20,borderRadius:10}}>
          { 
            data.map( (sugg,i) => {
              return ( sugg.titolo.toLowerCase().includes(search))
                &&  <><li key={i} ><a href= {`/posts/${sugg.link}`} >{sugg.titolo}</a> </li></>
            })
          }
    </ul>
    }

    <div className={styles.container}>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/logo.jpg" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        { home ? (
          <>
            <img
              src="/images/logo.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              name='search'
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange = { (e) => { setSearch(e.target.value) } }
            /> 
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/logo.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.poppins}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      { !home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
    </>
  )
}
