"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Home from "./Home/page";
import AOS from "aos";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      duration: 1000,
    });
  }, [])
  return (
    <>
       <Home />
    </>
  );
}
