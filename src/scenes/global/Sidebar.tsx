import {ReactNode, useState} from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme.ts";
import {
    CalendarTodayOutlined,
    ContactsOutlined, HelpOutlineOutlined,
    HomeOutlined,
    MenuOutlined,
    PeopleOutlined,
    PersonOutlined,
    ReceiptOutlined
} from "@mui/icons-material";

type Props = {
    title: string;
    to: string;
    icon: ReactNode;
    selected: string;
    onSelected:  (to: string) => void;
}

const Item = ({ title, to, icon, selected, onSelected }: Props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem active={ selected === title }
                  style={{color: colors.grey[100]}}
                  onClick={() => onSelected(selected)}
                  icon={ icon }
        >
            <Typography>{ title }</Typography>
            <Link to={ to } />
        </MenuItem>
    )
}


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important"
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important"
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important"
            }
        }}>
            <ProSidebar collapsed={ isCollapsed }>
                <Menu iconShape="square">
                {/*  Logo and menu icon  */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={ isCollapsed ? <MenuOutlined /> : undefined }
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    FreeCRM
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlined />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                {/*  USER  */}
                    { !isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="user-profile-picture"
                                    width="100px"
                                    height="100px"
                                    style={{
                                        cursor: "pointer",
                                        borderRadius: "50%"
                                    }}
                                    src={`src/assets/edward-cisneros-_H6wpor9mjs-unsplash.jpg`}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold"
                                    sx={{margin: "10px 0 0 0"}}
                                >Firstname Lastname</Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>Role</Typography>
                            </Box>
                        </Box>
                    )}
                {/*  Menu items  */}
                    <Box paddingLeft={ isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlined />}
                            selected={selected}
                            onSelected={setSelected}
                        />
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlined />}
                            selected={selected}
                            onSelected={setSelected}
                        />
                        <Item
                            title="Contacts Information"
                            to="/contacts"
                            icon={<ContactsOutlined />}
                            selected={selected}
                            onSelected={setSelected}
                        />
                        <Item
                            title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptOutlined />}
                            selected={selected}
                            onSelected={setSelected}
                        />
                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlined />}
                            selected={selected}
                            onSelected={setSelected}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlined />}
                            selected={selected}
                            onSelected={setSelected}
                        />
                        <Item
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutlineOutlined />}
                            selected={selected}
                            onSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
}

export default Sidebar;