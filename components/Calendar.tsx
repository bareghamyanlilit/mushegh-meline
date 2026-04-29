"use client";

import { anim, icons } from "@/data/data";
import { FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export function Calendar({
  year = 2025,
  month = 9,
  highlightDay = 25,
  startDay = 20, // որ օրից սկսի
}) {
  const monthNames = [
    "Հունվար",
    "Փետրվար",
    "Մարտ",
    "Ապրիլ",
    "Մայիս",
    "Հունիս",
    "Հուլիս",
    "Օգոստոս",
    "Սեպտեմբեր",
    "Հոկտեմբեր",
    "Նոյեմբեր",
    "Դեկտեմբեր",
  ];

  const weekDays = ["Կիր", "Երկ", "Երք", "Չրք", "Հնգ", "Ուրք", "Շբթ"];

  const daysInMonth = new Date(year, month, 0).getDate();

  // 👉 ՄԻԱՅՆ 14 օր (2 տող)
  const visibleDays = 14;
  const calendarDays = [];

  for (let i = startDay; i < startDay + visibleDays; i++) {
    if (i <= daysInMonth) {
      calendarDays.push(i);
    }
  }

  return (
    <div className="FontArmHmk">
      <div className="py-10 rounded-[20px] text-center">
        <motion.h2
          {...anim}
          className="text-2xl font-bold text-vrayi tracking-[15%] mb-1"
        >
          {monthNames[month - 1]}
        </motion.h2>

        <motion.p
          {...anim}
          className="text-2xl text-vrayi tracking-[10%] font-bold mb-4"
        >
          {year}
        </motion.p>

        {/* շաբաթվա օրեր */}
        <div className=" p-2 grid grid-cols-7 mb-2 text-sm font-medium text-vrayi">
          {weekDays.map((day) => (
            <motion.div {...anim} className="font-bold" key={day}>
              {day}
            </motion.div>
          ))}
        </div>

        {/* օրեր (միշտ 2 տող) */}
        <div className="grid grid-cols-7 font-bold px-5 gap-2 text-base">
          {calendarDays.map((day, idx) => (
            <div
              key={`day-${day}`}
              className="relative py-2 flex items-center justify-center"
            >
              {/* ❤️ highlight */}
              {day === highlightDay && (
                <Image
                  src={icons[3]}
                  width={40}
                  height={40}
                  alt="cal"
                  className="absolute text-vrayi text-3xl"
                />
              )}

              <motion.span
                {...anim}
                className={`relative z-10 ${day != highlightDay ? "text-vrayi" : "text-white"} text-lg`}
              >
                {day}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
