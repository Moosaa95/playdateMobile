import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Welcome from "./home/welcome/Welcome";
// import Play from "./home/listplaydates/PlayDateList";
import PlayDateList from "./home/listplaydates/PlayDateList";
// import Popularjobs from "./home/playdaterequest/PlayDateRequest";
// import PlayDateRequest from "./home/playdaterequests/PlayDateRequest";
import PlayDateRequestCard from "./common/cards/playdaterequests/PlayDateRequestCard";
import PlayDateForm from "./home/playdateform/PlayDateForm";
import PlayDateRequest from "./home/playdaterequest/PlayDateRequest";

// playdate details screen
// import Parent from "./playdateDetails/parent/Parent";
import PlayDateType from "./playdateDetails/playdateType/PlaydateType";
// import Company from "./playdateDetails/parent/Parent";
import { default as PlayTabs } from "./playdateDetails/tabs/Tabs";
import { default as PlayAbout } from "./playdateDetails/about/About";
import { default as PlayFooter } from "./playdateDetails/footer/Footer";
import Specifics from "./playdateDetails/specifics/Specifics";
import { default as PlayRequestFooter } from "./request/requestFooter/RequestFooter";
import { default as PlayRequestDataType } from "./request/playDataType/PlayDataType";
import { default as PlayRequestTabs } from "./request/tabs/Tab";
import { default as PlayRequestAbout } from "./request/about/About";
import { default as PlayRequestSpecific } from "./request/specific/Specific";
import {default as Menu } from "./home/menu/Menu";

// common
// import ListPlayDatesCard from "./common/cards/listplaydates/ListPlayDatesCard";
// import ListPlayDatesCard from "./common/cards/listplaydates/ListPlayDatesCard";
import ListPlayDatesCard from "./common/cards/listplaydates/ListPlayDateCard";

export {
  ScreenHeaderBtn,
  Welcome,
  PlayDateList,
  PlayDateRequestCard,
  PlayDateForm,
  PlayDateType,
  PlayTabs,
  PlayAbout,
  PlayFooter,
  Specifics,
  ListPlayDatesCard,
  PlayDateRequest,
  PlayRequestFooter,
  PlayRequestDataType,
  PlayRequestTabs,
  PlayRequestAbout,
  PlayRequestSpecific,
  Menu,
};
