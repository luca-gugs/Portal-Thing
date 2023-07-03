import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ExampleContextType {
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
  month: number;
  setMonth: Dispatch<SetStateAction<number>>;
  date: number;
  setDate: Dispatch<SetStateAction<number>>;
  dayOfTheWeek: number | null;
  firstDayOfMonth: number | null;
  daysInLastMonth: number | null;
  lastDayOfMonth: number | null;
  daysInCurrentMonth: number | null;
  //
  currentYear: number;
  currentMonth: number;

  currentDay: number;
}

const CalendarContext = createContext<ExampleContextType>({
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  date: new Date().getDate(),
  setYear: () => null,
  setMonth: () => null,
  setDate: () => null,
  dayOfTheWeek: null,
  firstDayOfMonth: null,
  daysInLastMonth: null,
  lastDayOfMonth: null,
  daysInCurrentMonth: null,
  currentYear: new Date().getFullYear(),
  currentMonth: new Date().getMonth(),
  currentDay: new Date().getDate(),
});

export const CalendarProvider: React.FC<{
  value?: Date;
  children: ReactNode;
}> = ({ value = new Date(), children }) => {
  //todays state
  const currentYear = value.getFullYear();
  const currentMonth = value.getMonth();
  const currentDay = value.getDate();

  //To View State
  const [year, setYear] = useState<number>(value.getFullYear());
  const [month, setMonth] = useState<number>(value.getMonth());
  const [date, setDate] = useState<number>(value.getDate());

  const dayOfTheWeek = new Date(year, month, date).getDay();
  const firstDayOfMonth = new Date(year, month).getDay();
  const daysInCurrentMonth = 32 - new Date(year, month, 32).getDate();
  const daysInLastMonth = 32 - new Date(year, month, 32).getDate();
  const lastDayOfMonth = new Date(year, month, daysInCurrentMonth).getDay();

  return (
    <CalendarContext.Provider
      value={{
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
        //
        currentYear,
        currentMonth,
        currentDay,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContext = () => useContext(CalendarContext);
