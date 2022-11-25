import logo from './logo.svg';
import './App.css';
import Dashboard_landing from './Components/Dashboard/Dashboard';
import Draawer from './Components/Draawer/Draawer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Index_main from './Components/Index_main';
import Mint from './Components/Mint/Mint';
import Collection from './Components/Collection/Collection';
import Mint_history from './Components/Mint_history/Mint_history';
import My_referral from './Components/My_referral/My_referral';
import My_team from './Components/My_team/My_team';
import Matching_tree from './Components/Matching_tree/Matching_tree';
import Level_details from './Components/Level_details/Level_details';
import Direct_business from './Components/Direct_business/Direct_business';
import Referral_income from './Components/Referral_income/Referral_income';
import Quick_starter from './Components/Quick_starter/Quick_starter';
import Team_bonus from './Components/Team_bonus/Team_bonus';
import Matching_level from './Components/Matching_level/Matching_level';
import Withdrawal_share from './Components/Withdrawal_share/Withdrawal_share';
import Reward_income from './Components/Reward_income/Reward_income';
import Lag_token from './Components/Lag_token/Lag_token';
import Sports_bonus from './Components/Sports_bonus/Sports_bonus';
import Lar_token from './Components/Lar_token/Lar_token';
import Lar_history from './Components/Lar_history/Lar_history';
import Lag_withdrawal from './Components/Lag_withdrawal/Lag_withdrawal';
import Lag_history from './Components/Lag_history/Lag_history';
import Self_address from './Components/Self_address/Self_address';
import Governance_token from './Components/Governance_token/Governance_token';
import Nft from './Components/Nft/Nft';
import Header from './Components/Header/Header';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Draawer />
      <Routes>
      <Route exact path="/" element={<Index_main />} />
      <Route exact path="/Mint" element={<Mint />} />
      <Route exact path="/Collection" element={<Collection />} />
      <Route exact path="/Mint_history" element={<Mint_history />} />
      <Route exact path="/My_referral" element={<My_referral />} />
      <Route exact path="/My_team" element={<My_team />} />
      <Route exact path="/Matching_tree" element={<Matching_tree />} />
      <Route exact path="/Level_details" element={<Level_details />} />
      <Route exact path="/Direct_business" element={<Direct_business />} />
      <Route exact path="/Referral_income" element={<Referral_income />} />
      <Route exact path="/Quick_starter" element={<Quick_starter />} />
      <Route exact path="/Team_bonus" element={<Team_bonus />} />
      <Route exact path="/Matching_level" element={<Matching_level />} />
      <Route exact path="/Withdrawal_share" element={<Withdrawal_share />} />
      <Route exact path="/Reward_income" element={<Reward_income />} />
      <Route exact path="/Lag_token" element={<Lag_token />} />
      <Route exact path="/Sports_bonus" element={<Sports_bonus />} />
      <Route exact path="/Lar_token" element={<Lar_token />} />
      <Route exact path="/Lar_history" element={<Lar_history />} />
      <Route exact path="/Lag_withdrawal" element={<Lag_withdrawal />} />
      <Route exact path="/Lag_history" element={<Lag_history />} />
      <Route exact path="/Self_address" element={<Self_address />} />
      <Route exact path="/Governance_token" element={<Governance_token />} />
      <Route exact path="/Nft" element={<Nft />} />
      </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
