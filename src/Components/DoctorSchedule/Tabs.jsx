import * as React from 'react';

import Box from '@mui/material/Box';
import ListItem from './ListItems';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import axios from 'axios';
import styled from 'styled-components';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <>{children}</>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const TabBase = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
    `;

const TabPanelWrapper = styled.div`
        height: 250px;
        overflow-y: auto;
    `;


export default function VerticalTabs(props) {
    const { setNewAppointment, disabledAppointments, schedule, filteredAppointments, userId } = props;

    const [value, setValue] = React.useState(0);
    const [filteredByIdAndStatus, setFilteredByIdAndStatus] = React.useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        const filterIdAndStatus = disabledAppointments.filter(appointment => appointment.doctorId === schedule.doctorId && appointment.appStatus);

        setFilteredByIdAndStatus(filterIdAndStatus)
    }, [])

    return (
        <TabBase>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider", height: "250px" }}
            >
                <Tab label="Monday" {...a11yProps(0)} />
                <Tab label="Tuesday" {...a11yProps(1)} />
                <Tab label="Wednesday" {...a11yProps(2)} />
                <Tab label="Thursday" {...a11yProps(3)} />
                <Tab label="Friday" {...a11yProps(4)} />
            </Tabs>

            <TabPanelWrapper>
                <TabPanel value={value} index={0}>
                    <ListItem
                        day={"Monday"}
                        setNewAppointment={setNewAppointment}
                        filteredByIdAndStatus={filteredByIdAndStatus}
                        filteredAppointments={filteredAppointments}
                        userId={userId}
                    />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ListItem
                        day={"Tuesday"}
                        setNewAppointment={setNewAppointment}
                        filteredByIdAndStatus={filteredByIdAndStatus}
                        filteredAppointments={filteredAppointments}
                        userId={userId}
                    />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ListItem
                        day={"Wednesday"}
                        setNewAppointment={setNewAppointment}
                        filteredByIdAndStatus={filteredByIdAndStatus}
                        filteredAppointments={filteredAppointments}
                        userId={userId}
                    />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ListItem
                        day={"Thursday"}
                        setNewAppointment={setNewAppointment}
                        filteredByIdAndStatus={filteredByIdAndStatus}
                        filteredAppointments={filteredAppointments}
                        userId={userId}
                    />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <ListItem
                        day={"Friday"}
                        setNewAppointment={setNewAppointment}
                        filteredByIdAndStatus={filteredByIdAndStatus}
                        filteredAppointments={filteredAppointments}
                        userId={userId}
                    />
                </TabPanel>
            </TabPanelWrapper>

        </TabBase>
    );
}