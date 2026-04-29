"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import {
  anim,
  date,
  envelop,
  firstTxt1,
  firstTxt2,
  forCalendar,
  icons,
  images,
  name,
  rotateTxt,
  txt1,
  txt1Title,
  txt2,
  txt3,
  txt4,
  txt5,
  txt6,
  vazoxTox1,
  vazoxTox2,
} from "@/data/data";
import { motion } from "framer-motion";
import { Program } from "./Program";
import { Footer } from "./footer";
import { Calendar } from "./Calendar";
import { TimeBox } from "./TimeBox";
import AttendanceGuests from "./RSVP";
import { FaRegHeart } from "react-icons/fa";

export function Home() {
  const [openEnvelope, setOpenEnvelope] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (openEnvelope) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [openEnvelope]);

  return (
    <div
      className={` ${openEnvelope ? "" : "relative h-dvh"} tracking-[20%] text-center overflow-hidden  FontArmHmk text-vrayi `}
    >
      <div
        className={` ${openEnvelope ? "animate-bounceYT" : ""} rounded-4xl absolute z-55 triangleT -top-[45%] left-1/2 -translate-x-1/2 bgC w-[85dvh] h-[85dvh] border border-guyn`}
      ></div>
      <div
        className={` ${openEnvelope ? "animate-bounceYB" : ""} rounded-4xl absolute z-53 triangleB -bottom-1/2 left-1/2 -translate-x-1/2 bgC w-[90dvh] h-[90dvh] border border-guyn`}
      ></div>
      <div
        className={` ${openEnvelope ? "animate-bounceXL" : ""} rounded-4xl absolute z-50 triangleL right-[80%] bgC w-dvh h-dvh border border-guyn`}
      ></div>
      <div
        className={` ${openEnvelope ? "animate-bounceXR" : ""} rounded-4xl absolute z-50 triangleR left-[80%] bgC w-dvh h-dvh border border-guyn`}
      ></div>
      <p className={` ${openEnvelope ? "opacity-0" : ""} z-60 absolute top-20 text-vrayi left-1/2 -translate-x-1/2 `}>Հարսանեկան հրավիրատոմս</p>
      <p className={` ${openEnvelope ? "opacity-0" : ""} z-60 absolute bottom-20 text-vrayi font-bold left-1/2 -translate-x-1/2 `}>Սիրով <br /> Մուշեղ և Մելինե</p>
      <img
        src={envelop[1]}
        alt="envelop"
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "opacity-0" : ""} transition-all duration-100  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  cursor-pointer  md:w-50 md:h-50 z-60 w-30 h-30 `}
      />

      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-2xl bg-[#5800001f]  right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src={icons[1]}
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div className="mx-auto max-w-md ">
        {/* arajin mas */}
        <div className="px-3">
          <motion.h2
            {...anim}
            className="text-center text-3xl tracking-[5%] font-fold mt-25"
          >
            {name[1]} և {name[0]}
          </motion.h2>
          <div className=" my-20">
              <Image
                src={images[0]}
                alt="icon1"
                width={500}
                height={500}
                className=" object-cover w-full"
              />
          </div>
        </div>


        {/* 2rd mas teqster */}
        <div className=" mb-20  ">
          <div className=" leading-10 px-5 mt-10">
            <motion.h3 {...anim} className=" font-bold text-sovorakan text-2xl">
              {txt1Title}
            </motion.h3>
            <motion.p {...anim} className=" text-sovorakan  text-lg mt-10 ">
              {txt1}
            </motion.p>
          </div>
          <div className="relative mb-40 mt-20">
            <Image
              src={images[2]}
              alt="icon1"
              width={500}
              height={500}
              className="m-auto object-cover w-[60vw] h-70 "
            />
            <motion.div
              {...anim}
              className="-z-2 absolute w-full h-40 bg-guyn -bottom-20"
            ></motion.div>
            <motion.div
              {...anim}
              className="-z-1 absolute  w-[65vw] h-75 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            ></motion.div>
          </div>
        </div>

        <Calendar
          year={forCalendar[0]}
          month={forCalendar[1]}
          highlightDay={forCalendar[2]}
        />
        <Program />

        {/* errord mas vazox tox + nkar */}
        <div className=" mt-20 relative w-full font-bold  text-2xl text-vrayi ">
          <div className=" whitespace-nowrap animate-marquee-2  rotate-2  -translate-x-full">
            {vazoxTox1}
          </div>
          <div className=" whitespace-nowrap animate-marquee my-15  -translate-x-full">
            {vazoxTox1}
          </div>
          <div className=" whitespace-nowrap animate-marquee-2  -rotate-2 -translate-x-full">
            {vazoxTox1}
          </div>

          <div className="relative my-15">
            <Image
              src="/img3.jpg"
              width={500}
              height={500}
              alt="jamanak"
              className="w-[70vw] h-[80vw] mx-auto relative z-2 rounded-tl-[220px] object-cover "
            />

            <Image
              src={icons[1]}
              width={40}
              height={40}
              alt="cal"
              className="absolute object-contain text-vrayi w-15 h-15 top-0 left-10"
            />
            <span className="absolute ml-4 -mt-24 z-0 w-[70vw] h-[80vw] rounded-tl-[220px] bg-guyn left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "></span>

            <p className=" font-normal mt-15 text-2xl tracking-[25%] text-center ">
              {" "}
              {txt3}
            </p>
          </div>

          <div className=" whitespace-nowrap animate-marquee-2  rotate-2  -translate-x-full">
            {vazoxTox1}
          </div>
          <div className=" whitespace-nowrap animate-marquee my-15  -translate-x-full">
            {vazoxTox1}
          </div>
          <div className=" whitespace-nowrap animate-marquee-2  -rotate-2 -translate-x-full">
            {vazoxTox1}
          </div>
        </div>

        {/* hethashxvark */}
        <motion.p {...anim} className=" text-2xl  mt-20">
          {txt2}
        </motion.p>

        <TimeBox />

        <AttendanceGuests />

        <motion.p {...anim} className=" text-2xl  mt-20">
          {txt4}
        </motion.p>

        {/* dress code */}
        <div className=" text-vrayi">
          <motion.h3
            {...anim}
            className="FontSHK_Dzeragir font-bold text-3xl my-20 "
          >
            Dress Code
          </motion.h3>

          <motion.p
            {...anim}
            className="FontSHK_Dzeragir text-2xl tracking-widest mb-20"
          >
            {txt5}
          </motion.p>
          <Image
            src="/img3.jpg"
            width={500}
            height={500}
            alt="jamanak"
            className="w-[70%] mx-auto "
          />
        </div>

        <motion.p {...anim} className=" text-2xl my-10 ">
          {txt6}
        </motion.p>
      </div>
      <Footer />
    </div>
  );
}
