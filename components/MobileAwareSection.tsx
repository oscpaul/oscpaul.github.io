"use client";

import { useIsMobile } from "./useIsMobile";

import { useEffect, useRef } from "react";
import  animate  from "@/components/Minimal";



export default function MobileAwareSection() {
  useEffect(() => {
    animate(); // 👈 calling the JS file
  }, []);

  const isMobile = useIsMobile();

  return (
     <section>
    <div className="button-cont">
  <button className="prev">prev</button>
  <button className="toggle">toggle overflow</button>
  <button className="next">next</button>
</div>

<div className="wrapper">
  <div className="box">
    <div className="box__inner">
      <p>1</p>
    </div>
  </div>
  <div className="box">
    <div className="box__inner">
      <h1>2</h1>
    </div>
  </div>
  <div className="box">
    <div className="box__inner">
      <p>3</p>
    </div>
  </div>
  <div className="box">
    <div className="box__inner">
      <p>4</p>
    </div>
  </div>
  <div className="box" >
    <div className="box__inner">
      <p>5</p>
    </div>
  </div>
  <div className="box">
    <div className="box__inner">
      <p>6</p>
    </div>
  </div>
  <div className="box">
    <div className="box__inner">
      <p>7</p>
    </div>
  </div>
  <div className="box">
    <div className="box__inner">
      <p>8</p>
    </div>
  </div>
  <div className="box">
    <div className="box__inner">
      <p>9</p>
    </div>
  </div>
  <div className="box">
    <div className="box__inner">
      <p>10</p>
    </div>
  </div>
  <div className="box">
    <div className="box__inner">
      <p>11</p>
    </div>
  </div>
</div>

</section>
  );
}
