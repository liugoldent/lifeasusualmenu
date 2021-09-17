import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import useThemeContext from '@theme/hooks/useThemeContext'; //docs: https://v2.docusaurus.io/docs/2.0.0-alpha.69/theme-classic#usethemecontext


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Menu
          </Link>
        </div>
      </div>
    </header>
  );
}

function SelfHome(){
    const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
    const imgString = isDarkTheme ? 'img/logosvg_darkmode.svg' : 'img/logo.svg'
    return (
        <div className={styles.selfHome}>
            <img src={imgString} />
        </div>
    )
}
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title='如常 朝午食'
      description="中山區早午餐，行天宮早午餐，中山區美食，如常朝午食，如常朝午食菜單">
        <main>
            <SelfHome />
        </main>
    </Layout>
  );
}
