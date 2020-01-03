import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Sidebar from './Components/Sidebar/sidebar'
import Home from "./Components/Home/home";
import Team from "./Components/Team/team";
import SpeechToText from "./Components/SpeechToText/speechtotext";
import HomeIcon from "@material-ui/icons/Home";
import AccountTree from "@material-ui/icons/AccountTree";
import EmojiPeople from "@material-ui/icons/EmojiPeople";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

const items = [
  {
    name: "home",
    label: "Home",
    navLink: "/",
    component: Home,
    isExact: true,
    Icon: HomeIcon
  },
  {
    name: "speechtotext",
    label: "Speech to text",
    navLink: "/speechtotext",
    component: SpeechToText,
    Icon: AccountTree,
    items: [
      {
        name: "audiototext",
        label: "Audio to text",
        Icon: RecordVoiceOver
      }
    ]
  },
  "divider",
  {
    name: "team",
    label: "Team",
    navLink: "/team",
    component: Team,
    Icon: EmojiPeople
  }
];

function RouterRoute({navLink, isExact, component}){
  if(!navLink){
    return null;
  }
  if(isExact){
    return (
      <Route exact path={navLink} component={component} />
    );
  }
  return (
    <Route path={navLink} component={component} />
  );
}

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Sidebar items={items} />
        <div className="app-content">
          <h1>Simple SPA</h1>
          {items
            .filter((subItem) => subItem.navLink)
              .map((subItem, index) => (
                <React.Fragment key={`${subItem.name}${index}`}>
                  <RouterRoute navLink={subItem.navLink} isExact={subItem.isExact} component={subItem.component} />
                </React.Fragment>
              ))}
        </div>
      </div>
    </HashRouter>
  );
}

export default App;