"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-11-01T00:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      <div className="bg-white/10 p-8 rounded-2xl text-center">
        <h3 className="text-5xl font-bold text-yellow-400">
          {timeLeft.days}
        </h3>
        <p>Days</p>
      </div>

      <div className="bg-white/10 p-8 rounded-2xl text-center">
        <h3 className="text-5xl font-bold text-yellow-400">
          {timeLeft.hours}
        </h3>
        <p>Hours</p>
      </div>

      <div className="bg-white/10 p-8 rounded-2xl text-center">
        <h3 className="text-5xl font-bold text-yellow-400">
          {timeLeft.minutes}
        </h3>
        <p>Minutes</p>
      </div>

      <div className="bg-white/10 p-8 rounded-2xl text-center">
        <h3 className="text-5xl font-bold text-yellow-400">
          {timeLeft.seconds}
        </h3>
        <p>Seconds</p>
      </div>

    </div>
  );
}