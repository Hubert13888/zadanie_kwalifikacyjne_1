import React from "react";

interface MonthSelectProps {
  callback?: () => void;
}

export const months = [
  { name: "Styczeń", cel: "stycznia", i: 0 },
  { name: "Luty", cel: "lutego", i: 1 },
  { name: "Marzec", cel: "marca", i: 2 },
  { name: "Kwiecień", cel: "kwietnia", i: 3 },
  { name: "Maj", cel: "maja", i: 4 },
  { name: "Czerwiec", cel: "czerwca", i: 5 },
  { name: "Lipiec", cel: "lipca", i: 6 },
  { name: "Sierpień", cel: "sierpnia", i: 7 },
  { name: "Wrzesień", cel: "września", i: 8 },
  { name: "Październik", cel: "października", i: 9 },
  { name: "Listopad", cel: "litopada", i: 10 },
  { name: "Grudzień", cel: "grudnia", i: 11 }
];

export default class MonthSelect extends React.Component<MonthSelectProps> {
  state = {};

  constructor(props: MonthSelectProps) {
    super(props);
    this.state["callback"] = props.callback;
  }
  render() {
    return (
      <select name="month" id="">
        <option value="base">Miesiąc</option>;
        {months.map((month) => {
          return (
            <option key={month.name} value={month.name}>
              {month.name}
            </option>
          );
        })}
      </select>
    );
  }
}
