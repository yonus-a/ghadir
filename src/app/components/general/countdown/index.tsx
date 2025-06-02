"use client";

import { useTimer } from "react-timer-hook";

interface Props {
  expiryTimestamp: Date;
}

export default function CountDown({ expiryTimestamp }: Props) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    interval: 20,
  });

  return (
    <div>
      {days} روز {hours} ساعت {minutes} دقیقه {seconds} ثانیه
    </div>
  );
}
