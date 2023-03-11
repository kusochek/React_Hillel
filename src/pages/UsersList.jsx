import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
    styled,
    Box,
} from "@mui/material";
import UserItem from "../components/UserItem";


const MainWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  boxSizing: 'border-box',
  backgroundColor: 'none',
  padding: '10px',
}));

export default function UsersList() {
    let [users, setUsers] = useState([]);
    let [counter, setCounter] = useState(0);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get("https://63ed161bf1ec53805dd8d642.mockapi.io/users");
            setUsers(data);
        })();
    }, []);

    const handleSetCounter = () => {
        setCounter(++counter);
        console.log(counter);
    };

    return (
        <MainWrapper>
            {/* <button onClick={handleSetCounter}>Set counter</button> */}
            {users.map((user, index) => (
                <UserItem
                    key={index}
                    user={user}
                    id={index}
                    handleButtonClick={handleSetCounter}
                />
            ))}
        </MainWrapper>
    )
}
