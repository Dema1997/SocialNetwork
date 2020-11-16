import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/Link'

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 38,
      padding: '0 20px',
    },
  });

export default function Home() {

 const classes = useStyles();

  return (
     
    
<Layout home>
      <Head>
        <title>FDM</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p className={utilStyles.intro} style={{color:'black'}}>Hello, I’m <strong>Filippo</strong>. I’m a software engineer for <strong>@LineApp</strong>. You can contact me on <a href="mailto:fil97@hotmail.it">fil97@hotmail.it</a>.</p>
      </section>
      
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
      </Layout>
  )
}