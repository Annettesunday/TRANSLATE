import React from "react";
import UserCreate from "./UserCreate";
import LanguangeContext from "../contexts/LanguangeContext";

class App extends React.Component {
  state = {
    language: "English"
  };

  onLanguageChange = language => {
    this.setState({
      language
    });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <LanguangeContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguangeContext.Provider>
      </div>
    );
  }
}

export default App;
