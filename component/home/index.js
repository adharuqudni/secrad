import styles from '../styles/Home.module.css'
import React, { Fragment, useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import SignOutButton from '../component/auth/SignOut'
import TabPanel from '../component/TabPanel'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Home(props) {
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [listMessage, setListMessage] = useState([
    {
      text: 'test1',
    },
    {
      text: 'test2',
    },
    {
      text: 'test3',
    }
  ]);

  useEffect(() => {
    fetchMessage();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const fetchMessage = () => {
    setLoading(true)
    axios.get('/api/landing').then((response) => {
      setListMessage(response.data || [])
    }).finally(() => {
      setLoading(false)
    });
  }

  const handleClick = async () => {
    const response = await axios.post('/api/landing', { message });
    fetchMessage();
  }

  return (
    <div className={styles.container}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="PLAY" {...a11yProps(0)} />
          <Tab label="INBOX" {...a11yProps(1)} />
        </Tabs>
        <SignOutButton/>
      </Box>

      {
        isLoading
        && <CircularProgress />
      }
      {!isLoading ?
        <TabPanel value={value} index={0}>
          <div className={styles.main}>
            <div className={styles.grid}>
              <div className={styles.card} style={{ backgroundImage: 'linear-gradient(to bottom right, whitesmoke, lightblue)', color: 'black' }}>
                <Avatar>A</Avatar>
                <Typography >Send Me Anonymouse Message</Typography>
                <TextField
                  id="outlined-multiline-flexible"
                  label="send me anonymouse message"
                  variant="filled"
                  multiline
                  maxRows={10}
                  minRows={4}
                  value={message}
                  onChange={handleMessage}
                  style={{ width: '100%', marginBottom: '10px' }}
                />
                {message?.length > 0 ? <Button variant="contained" onClick={() => handleClick()}>Send!</Button> : <></>}
              </div>
            </div>
          </div>
        </TabPanel>
        : <></>}
      {!isLoading ?
        <TabPanel value={value} index={1}>
          <div className={styles.main}>
            <div className={styles.grid}>
              {listMessage.map((item, index) => (
                <Card key={index} className={styles.card} style={{ backgroundImage: 'linear-gradient(to bottom right, whitesmoke, lightblue)', color: 'black' }}>
                  {item?.text.length > 0 ? <Typography variant="h1">{item.text}</Typography> : <></>}
                </Card>
              ))}
            </div>
          </div>

        </TabPanel>
        : <></>}
    </div>
  )
}


