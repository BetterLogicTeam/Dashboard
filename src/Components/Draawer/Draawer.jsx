import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Draawer.css";
import { BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import one from '../../Assets/one.png';
import eleven from '../../Assets/eleven.png';
import nine from '../../Assets/nine.png';
import sixteen from '../../Assets/sixteen.png';
import seventeen from '../../Assets/seventeen.png';
import eighteen from '../../Assets/eighteen.png';
import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function Draawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className='drawwer_main'>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar className={`${open? "justifyContent: space-between":"justifyContent: end"}`} style={{ backgroundColor: "rgb(0 4 32)" }} position="fixed" open={open}>
                    <Toolbar >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        
                            <Dropdown>
                                <Dropdown.Toggle className="text-white" variant="" id="dropdown-basic">
                                    Amold Ramsy
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"><BsFillPersonFill /> Profile</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><HiLockClosed /> Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        
                    </Toolbar>
                </AppBar>
                <Drawer style={{ backgroundColor: "currentColor"}} variant="permanent" open={open} >
                    <DrawerHeader style={{ backgroundColor: "rgb(1 5 32 / 94%)"}}>
                    <div>
                        <img className="w-20" src={logo} alt="" />
                        </div>

                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <MdKeyboardArrowLeft className='text-white' />}
                        </IconButton>
                        
                    </DrawerHeader>
                    <Divider />
                    <Link to="/" className="lenk"><div className='dev' style={{ backgroundColor: open ? "rgba(17, 23, 58, 0.94)" : "#fff", color: "#fff" }}><img className="w-20" src={one} alt="" /> Dashboard</div></Link>
                    <Accordion className={`${open?'accordion':"accordion_1"}`} >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="accor_header"><img className="w-20" src={eleven} alt="" /> Mint NFT</Accordion.Header>
                            <Accordion.Body className="accor_body">
                                <Link className="text-white " to="/Mint"><div>Mint</div><br /></Link>
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

                    </Accordion>
                        <Link to="/" className="lenk"><div className='dev' style={{ backgroundColor: open ? "rgba(17, 23, 58, 0.94)" : "#fff", color: "#fff" }}><img className="w-20" src={one} alt="" /> Logout</div></Link>
                </Drawer>
            </Box>
        </div>
    )
}

export default Draawer