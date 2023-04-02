import * as React from 'react';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styled from 'styled-components';

const ListItemBase = styled.div`
       width: 100%;
       height: 100%;
    `;

export default function ListItem(props) {
    const { day, filteredByIdAndStatus, setNewAppointment, filteredAppointments, userId } = props;

    const [selectedIndex, setSelectedIndex] = React.useState();
    const [filteredDisabled, setFilteredDisabled] = React.useState([]);
    const [disabledByDay, setDisabledByDay] = React.useState([]);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        const hours = ["10:00", "11:00", "13:00", "14:00", "15:00"];

        setNewAppointment(prevState => ({
            ...prevState,
            day: day,
            hour: hours[index]
        }));
    };

    React.useEffect(() => {
        const filterDisableDays = filteredByIdAndStatus.filter(
            (appointment) => appointment.appDay === day
        );
        setFilteredDisabled(filterDisableDays);
    }, [day, filteredByIdAndStatus]);

    const isDisabled = (hour) => {
        const isThatDayGotAppointment = filteredAppointments.filter((appointment) => (
            appointment.patientId === userId &&
            appointment.appDay === day
        ));

        if (isThatDayGotAppointment.length > 0) {
            return true
        } else {
            return filteredDisabled.findIndex((item) => item.appHour === hour) !== -1;
        }
    }

    return (
        <ListItemBase>
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItemButton
                    disabled={isDisabled("10:00")}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemText primary="10:00" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    disabled={isDisabled("11:00")}
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemText primary="11:00" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    disabled={isDisabled("13:00")}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText primary="13:00" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    disabled={isDisabled("14:00")}
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemText primary="14:00" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    disabled={isDisabled("15:00")}
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemText primary="15:00" />
                </ListItemButton>
                <Divider />
            </List>
        </ListItemBase>
    );
}
