import React from "react";

interface StateKsiazka {
  title?: String;
  author?: String;
  relDate?: Date;
}
interface PropsKsiazka {
  title: String;
  author: String;
  relDate: Date;
}

export default class Ksiazka extends React.Component<PropsKsiazka> {
  state: StateKsiazka = {
    title: "",
    author: ""
  };
  constructor(props: PropsKsiazka) {
    super(props);

    this.state.title = props.title;
    this.state.author = props.author;
    this.state.relDate = props.relDate;
  }

  render() {
    return (
      <>
        <div className="ksiazka_tile"></div>
      </>
    );
  }
}
