import React,{useState,useEffect} from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";


export function Yes() {
  return (<div className="bg-pink-500 text-white p-12">You did a thing!</div>)
}

export function No() {
  return (<div className="bg-gray-100 text-blue-500 p-12">You have time!</div>)
}

export default function Home() {
  let streakArray = 
  [
    "7-9-2022",
    "7-10-2022",
    "7-11-2022",
  ];

  /*
  7-9: Comic page
  7-10: This app, comic page, goose egg log, tinker bell
  7-11: Comic page
  */

  let currentTime = new Date();
  let month = 1+currentTime.getMonth();
  let day = currentTime.getDate();
  let year = currentTime.getFullYear();

  let dateString = month+"-"+day+"-"+year;
  // console.log(dateString);

  const lastItem = streakArray[streakArray.length - 1];
  // console.log(lastItem);

  

  return (

    <div className={styles.container}>
      <Head>
        <title>Do the thing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        {dateString == lastItem ? <Yes /> : <No />}
      </div>

    </div>
  );
}
