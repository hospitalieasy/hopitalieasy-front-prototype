import * as React from 'react';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styled from 'styled-components';

export default function ListItem() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const ListItemBase = styled.div`
       width: 100%;
       height: 100%;
    `;

    return (
        <ListItemBase>
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemText primary="10:00" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemText primary="11:00" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText primary="13:00" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemText primary="14:00" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemText primary="15:00" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                >
                    <ListItemText primary="16:00" />
                </ListItemButton>
            </List>
        </ListItemBase >
    );
}