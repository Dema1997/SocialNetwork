import React,{useState} from 'react'
import Head from 'next/head'
import styles from './Layout.module.css'
import Toolbar  from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/Link';
import Typography from '@material-ui/core/Typography'
import utilStyles from '../styles/utils.module.css'
import { makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import SportsGolfIcon from '@material-ui/icons/SportsGolf';
import SportsRugbyIcon from '@material-ui/icons/SportsRugby';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 5,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flex:1,
    padding:theme.spacing(3),
  },
  img: {
    marginLeft:15,
    maxWidth:'90%',
    maxHeight:'100%',
    objectFit:'contain',
    backgroundSize:'cover'
  },
  imgToolbar: {
    marginLeft:0
  },
  colorToolbar: {
    backgroundColor:'#006666'
  },
  inputRoot: {
    border:'2px solid green',
    background: 'linear-gradient(135deg, orange 60%, cyan)',
    color:'white',
    borderRadius:5
  },
  inputInput: {
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
const drawerWidth = 240;

export const data=[
  {
    titolo: 'Users',
    link: 'Users'
  },
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
/**
 * Return the site name
 */
export const siteTitle = 'Next.js Sample Website'

/* 
 *
*/
export default function Layout({ children, home }) {
  const [titleToolbar,setTitleToolbar]=useState(true)
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (e,sport) => {
    setSelectedIndex(sport);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    setTitleToolbar(!titleToolbar)
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setTitleToolbar(!titleToolbar)
  };

  const [search, setSearch] = useState('')

  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap" rel="stylesheet"></link>
    <CssBaseline />
      <AppBar
        position="sticky"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar  className={classes.colorToolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            
          </Typography>
          { titleToolbar ? <div><img alt="" src = "/images/logow.png" className={classes.imgToolbar}></img></div>: <></>}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <div><img alt="" src="/images/logow.png" className={classes.img}></img></div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          
            <Link href="/Calcio"><ListItem button selected={selectedIndex === 'Calcio'} onClick={ (e) => handleListItemClick(e, 'Calcio') }>
              <ListItemIcon><SportsSoccerIcon /></ListItemIcon>
              <ListItemText primary='Calcio' />
            </ListItem></Link>

            <Link href="/"><ListItem button selected={selectedIndex === 'Pallavvolo'} onClick={ (e) => handleListItemClick(e, 'Pallavvolo')}>
              <ListItemIcon><SportsVolleyballIcon /></ListItemIcon>
              <ListItemText primary='Pallavvolo' />
            </ListItem></Link>
            
            <Link href="/"><ListItem button selected={selectedIndex === 'Basket'} onClick={ (e) => handleListItemClick(e, 'Basket') }>
              <ListItemIcon><SportsBasketballIcon /></ListItemIcon>
              <ListItemText primary='Basket' />
            </ListItem></Link>

            <Link href="/"><ListItem button selected={selectedIndex === 'Rugby'} onClick={ (e) => handleListItemClick(e, 'Rugby')}>
              <ListItemIcon><SportsRugbyIcon /></ListItemIcon>
              <ListItemText primary='Rugby' />
            </ListItem></Link>

            <Link href="/"><ListItem button selected={selectedIndex === 'Football Americano'} onClick={(e) => handleListItemClick(e, 'Football Americano')}>
              <ListItemIcon><SportsFootballIcon /></ListItemIcon>
              <ListItemText primary='Football Americano' />
            </ListItem></Link>
            
            <Link href="/Tennis"><ListItem button selected={selectedIndex === 'Tennis'} onClick={ (e) => handleListItemClick(e, 'Tennis')}>
              <ListItemIcon><SportsTennisIcon /></ListItemIcon>
              <ListItemText primary='Tennis' />
            </ListItem></Link>

            <Link href="/"><ListItem button selected={selectedIndex === 'Paddle'} onClick={ (e) => handleListItemClick(e, 'Paddle')}>
              <ListItemIcon><SportsTennisIcon /></ListItemIcon>
              <ListItemText primary='Paddle' />
            </ListItem></Link>

            <Link href="/"><ListItem button selected={selectedIndex === 'Golf'} onClick={ (e) => handleListItemClick(e, 'Golf')}>
              <ListItemIcon><SportsGolfIcon /></ListItemIcon>
              <ListItemText primary='Golf' />
            </ListItem></Link>
        </List>

        <Divider />

        <List>
          
            <ListItem button>
              <ListItemIcon> <MailIcon /></ListItemIcon>
              <ListItemText primary='Contacts' />
            </ListItem>
            <ListItem button>
              <ListItemIcon> <RecentActorsIcon /></ListItemIcon>
              <ListItemText primary='About' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText primary='Log out' />
            </ListItem>
          
        </List>
      </Drawer>

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
            <h1 className={utilStyles.heading2Xl} style={{color:"black"}}>{name}</h1>
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
          <>  <br/>
              <Link href="/">
                <a><img src="/images/logow.png"></img></a>
              </Link><br/><br/>
          </>
            )
        }
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
