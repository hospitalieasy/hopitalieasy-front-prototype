import * as React from 'react';

import Box from '@mui/material/Box';
import ListItem from './ListItems';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
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

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const TabBase = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
       /*  @media screen and (max-width: 585px) {
            width: 250px;
        } */
    `;

    const TabPanelWrapper = styled.div`
        height: 250px;
        overflow-y: auto;

        /*  @media screen and (max-width: 585px) {
            width: 250px;
        } */
    `;

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
                    <ListItem />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ListItem />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ListItem />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ListItem />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <ListItem />
                </TabPanel>
            </TabPanelWrapper>

        </TabBase>
    );
}