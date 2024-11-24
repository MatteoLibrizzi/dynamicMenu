"use client";
import styles from "../styles/Home.module.css";
import { useABTestPool } from "../hooks/useABTestPool";
import { useEffect } from "react";

const formALink =
  "https://docs.google.com/forms/d/e/1FAIpQLSdHYPyfGS7iXfXr1Qb1ovd03vbPDslxPajOavZI5TJlXGu2qA/viewform";
const formBLink = "";

export default function Home() {
  const isPoolA = useABTestPool();
  useEffect(() => {
    window.location.assign(isPoolA ? formALink : formBLink);
  }, []);
  return <div className={styles.container}></div>;
}
