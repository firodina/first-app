"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Login from "@/app/Login";
import Link from "next/link";
// import About from "./About/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>hello world</h1>
      <Page name="frist" />
      <Login />
      <Link href="/About">About page</Link>
    </div>
  );
}

function Page(props) {
  const [num, setNum] = useState(0);
  function increment() {
    setNum((numer) => numer + 1);
  }
  useEffect(() => {
    alert("icnrement the num");
  }, [num]);
  return (
    <>
      <div> The {props.name} page</div>
      <div onClick={increment}>increment: {num}</div>
    </>
  );
}
