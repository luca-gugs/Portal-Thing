import React from "react";
import { monthArray } from "~/utils/helpers";

type Props = {
  value?: Date;
  onChange?: (date: Date) => void;
};

const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
  const [year, setYear] = React.useState<number>(value.getFullYear());
  const [month, setMonth] = React.useState<number>(value.getMonth());

  console.log("YEAR: ", year);
  console.log("MONTH: ", month);

  //   let firstDayOfTheMonth = new Date(year, month).getDay();
  //   let daysInMonth = 32 - new Date(year, month, 32).getDate();

  //   console.log(days);
  console.log("VALUE: ", value);

  return (
    <div>
      <div className="flex w-full justify-between">
        {monthArray.map((localMonth, idx) => {
          return (
            <div className={`${idx == month ? "font-bold" : ""}`}>
              {localMonth}
            </div>
          );
        })}
      </div>
      <div className="dream w-full bg-white">Day</div>
    </div>
  );
};

export default Calendar;
