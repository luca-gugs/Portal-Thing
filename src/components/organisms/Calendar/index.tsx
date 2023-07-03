import React, { useEffect, useState } from "react";
import { useCalendarContext } from "~/contexts/calendarContext";
import { monthArray, monthFullNameArray, weekArray } from "~/utils/helpers";

type Props = {
  value?: Date;
  onChange?: (date: Date) => void;
};

const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
  const {
    year,
    setYear,
    month,
    setMonth,
    date,
    setDate,
    dayOfTheWeek,
    firstDayOfMonth,
    daysInLastMonth,
    lastDayOfMonth,
    daysInCurrentMonth,
  } = useCalendarContext();

  const updateMonth = (month: number) => {
    if (month > 11) {
      setMonth(month - 12);
      setYear(year + 1);
    } else if (month < 0) {
      setMonth(month + 12);
      setYear(year - 1);
    } else {
      setMonth(month);
    }
  };

  const is6Row =
    (firstDayOfMonth || 0) + (daysInCurrentMonth || 0) > 35 ? 6 : 5;

  return (
    <div className="flex h-full flex-col space-y-8">
      <div className="flex w-full ">
        {/* {monthArray.map((localMonth, idx) => {
          return (
            <div
              onClick={() => setMonth(idx)}
              className={`${idx == month ? "font-bold" : ""}`}
            >
              {localMonth}
            </div>
          );
        })} */}
        <button
          className="mr-4 text-2xl"
          onClick={() => updateMonth(month - 1)}
        >
          ⬅️
        </button>

        <h1 className="w-[272px] text-4xl">
          <span>{monthFullNameArray[month]}</span>
          <span className="ml-4">{year}</span>
        </h1>
        <button
          className="ml-4 text-2xl"
          onClick={() => updateMonth(month + 1)}
        >
          ➡️
        </button>
      </div>

      <div
        className={`gr-template-${is6Row} grid h-full grid-cols-7 grid-rows-${is6Row} gap-4`}
      >
        {/* WEEK DAY NAMES */}
        {weekArray.map((weekday, idx) => {
          return (
            <div className="" key={idx}>
              <h2 className="text-3xl">{weekday}</h2>
            </div>
          );
        })}

        {/* LAST MONTH*/}
        {daysInLastMonth &&
          firstDayOfMonth &&
          Array.from(Array(firstDayOfMonth).keys()).map((date, idx) => {
            return (
              <div
                key={idx}
                className="items-center justify-center bg-zinc-100 p-4 text-lg line-through"
              >
                {daysInLastMonth - (firstDayOfMonth - idx)}
              </div>
            );
          })}

        {/* CURRENT MONTH */}
        {Array.from(Array(daysInCurrentMonth).keys()).map((dateNum, idx) => {
          const been = dateNum + 1 < date;
          const is = dateNum + 1 == date;
          return (
            <div key={idx} className={`dream p-4 text-lg`}>
              <div
                className={`flex h-[30px] w-[30px] items-center justify-center ${
                  been ? "line-through" : ""
                } ${
                  is ? "rounded-full border-2 border-solid border-black" : ""
                }`}
              >
                {dateNum + 1}
              </div>
            </div>
          );
        })}

        {/* NEXT MONTH */}
        {lastDayOfMonth &&
          Array.from(Array(6 - lastDayOfMonth).keys()).map((_, idx) => {
            return (
              <div
                key={idx}
                className="items-center justify-center bg-zinc-100 p-4 text-lg underline underline-offset-1"
              >
                {idx + 1}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Calendar;
