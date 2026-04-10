import { useEffect, useState } from "react";
import CountdownItem from "./CountdownItem";

function CountdownTimer({ targetDate, variant = "default", className = "" }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

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
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (
      updatedTimeLeft.days === 0 &&
      updatedTimeLeft.hours === 0 &&
      updatedTimeLeft.minutes === 0 &&
      updatedTimeLeft.seconds === 0
    ) {
      clearInterval(interval);
    }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <CountdownItem
      days={timeLeft.days}
      hours={timeLeft.hours}
      minutes={timeLeft.minutes}
      seconds={timeLeft.seconds}
      variant={variant}
      className={className}
    />
  );
}

export default CountdownTimer;