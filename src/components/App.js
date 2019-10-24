import React from "react";
import UserCreate from "./UserCreate";
import LanguangeContext from "../contexts/LanguangeContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  state = {
    language: "english"
  };

  onLanguageChange = language => {
    this.setState({
      language
    });
  };
  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <LanguangeContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguangeContext.Provider>
      </div>
    );
  }
}

export default App;
