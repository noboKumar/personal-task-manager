"use client";
import React, { useState } from "react";
import { Calendar } from "./ui/calendar";

const Calender = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const weekday = date?.toLocaleDateString("en-US", { weekday: "long" });
  const formattedDate = date?.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="mt-10 space-y-5">
      <h1 className="text-4xl font-bold text-[#F87777]">{weekday}</h1>
      <h1 className="text-4xl font-semibold">{formattedDate}</h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />
    </div>
  );
};

export default Calender;
