import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Header.css";
import logo_header from '../../Assets/logo_header.png';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import one from '../../Assets/one.png';
import eleven from '../../Assets/eleven.png';
import nine from '../../Assets/nine.png';
import sixteen from '../../Assets/sixteen.png';
import seventeen from '../../Assets/seventeen.png';
import eighteen from '../../Assets/eighteen.png';


function Header() {
  return (
    <div>
        {[false].map((expand) => (
        <Navbar key={expand} bg="#4d9cf8" expand={expand} className="mb-3 nev">
          <Container fluid>
            <Navbar.Brand href="#"><img src={logo_header} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={logo_header} alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Link className="text-white" to="/"><div className='dev'><img className="w-20" src={one} alt="" /> Dashboard</div></Link>
                    <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="accor_header"><img className="w-20" src={eleven} alt="" /> Mint NFT</Accordion.Header>
                            <Accordion.Body className="accor_body">
                                <Link className="text-white" to="/Mint"><div>Mint</div><br /></Link>
                                <Link className="text-white" to="/Collection"><div>Collection</div><br /></Link>
                                <Link className="text-white" to="/Mint_history"><div>Minting History</div></Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="accor_header"><img className="w-20" src={nine} alt="" /> Team Details</Accordion.Header>
                            <Accordion.Body className="accor_body">
                                <Link className="text-white" to="/My_referral"><div>My Referral</div><br /></Link>
                                <Link className="text-white" to="/My_team"><div>My Team</div><br /></Link>
                                <Link className="text-white" to="/Matching_tree"><div>Matching Tree</div><br /></Link>
                                <Link className="text-white" to="/Level_details"><div>Level Details</div><br /></Link>
                                <Link className="text-white" to="/Direct_business"><div>Direct Leg Business</div></Link>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="accor_header"><img className="w-20" src={sixteen} alt="" /> All Income</Accordion.Header>
                            <Accordion.Body className="accor_body">
                                <Link className="text-white" to="/Referral_income"><div>Referral Income</div><br /></Link>
                                <Link className="text-white" to="/Quick_starter"><div>Quick Starter Bonus</div><br /></Link>
                                <Link className="text-white" to="/Team_bonus"><div>Team Bonus</div><br /></Link>
                                <Link className="text-white" to="/Matching_level"><div>Matching Level Income</div><br /></Link>
                                <Link className="text-white" to="/Withdrawal_share"><div>Withdrawal Share Bonus</div><br /></Link>
                                <Link className="text-white" to="/Reward_income"><div>Reward Income</div><br /></Link>
                                <Link className="text-white" to="/Lag_token"><div>LAG Token</div><br /></Link>
                                <Link className="text-white" to="/Sports_bonus"><div>Sports Bonus</div></Link>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header className="accor_header"><img className="w-20" src={seventeen} alt="" /> Withdrawal</Accordion.Header>
                            <Accordion.Body className="accor_body">
                                <Link className="text-white" to="/Lar_token"><div>LAR Token</div><br /></Link>
                                <Link className="text-white" to="/Lar_history"><div>LAR Token History</div><br /></Link>
                                <Link className="text-white" to="/Lag_withdrawal"><div>LAG Token</div><br /></Link>
                                <Link className="text-white" to="/Lag_history"><div>LAG Token History</div></Link>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header className="accor_header"><img className="w-20" src={eighteen} alt="" /> Address</Accordion.Header>
                            <Accordion.Body className="accor_body">
                                <Link className="text-white" to="/Self_address"><div>Self Address</div><br /></Link>
                                <Link className="text-white" to="/Governance_token"><div>Governance Token Address</div><br /></Link>
                                <Link className="text-white" to="/Nft"><div>NFT</div></Link>
                            </Accordion.Body>
                        </Accordion.Item>

                        <div className='dev text-white'><img className="w-20" src={one} alt="" /> Logout</div>
                    </Accordion>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  )
}

export default Header