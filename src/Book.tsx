import React from "react";

interface StateBook {
  title?: String;
  author?: String;
  relDate?: number;
}
export interface PropsBook {
  title: String;
  author: String;
  relDate: number;
}

export default class Book extends React.Component<PropsBook> {
  state: StateBook = {
    title: "",
    author: ""
  };
  constructor(props: PropsBook) {
    super(props);

    this.state.title = props.title;
    this.state.author = props.author;
    this.state.relDate = props.relDate;
  }

  render() {
    return (
      <>
        <div className="ksiazka_tile">
          <p>{this.state.author}</p>
        </div>
      </>
    );
  }
}
