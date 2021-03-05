import React, { useState } from 'react'
import BlogList from '../container/BlogsContainer'
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import AppsIcon from '@material-ui/icons/Apps'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Link from 'next/link'

interface IPropsSideMenu {
  openHandler: () => void
}
const SideMenu: React.FC<IPropsSideMenu> = (props) => {

  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <ArrowBack
            onClick={props.openHandler}
          />
        </ListItemIcon>
        <ListItem>
          <ListItemText>
            <Link
              href={{
                pathname: '/edit',
              }}
            >
            編集リスト
            </Link>
          </ListItemText>
        </ListItem>
      </ListItem>
    </List>
  )
}

const Home: React.FC = () => {

  const [ open, setOpen ] = useState(false)

  return (
    <React.Fragment>
      <Drawer
        open={open}
      >
        <SideMenu openHandler={() => {setOpen(!open)}} />
      </Drawer>
      <div id="main">
        <div style={{
          margin: '40px'
        }}>
          <button
            className="pickUpBtn"
            onClick={() => {setOpen(!open)}}
          >
          <AppsIcon
              style={{
                alignContent: 'center',
                justifyContent: 'center',
              fontSize: '30px'
              }}
          />
          </button>
        </div>
        <BlogList />
      </div>
      <style jsx>
      {`
        #main {
          display: flex;
          background-color: #F4F4F4;
        }
        h1 {
          margin-top: 60px;
          float: right;
          transform: rotate(90deg);
          -moz-transform: rotate(90deg);
          -webkit-transform: rotate(90deg);
          font-size: 45px;
        }
        .pickUpBtn {
          display: block;
          width: 60px;
          height: 60px;
          text-align: center;
          font-size: 25px;
          border-radius: 150px;
          background: #F4F4F4;
          box-shadow:  6px 6px 12px #d4d4d4,
                      -6px -6px 12px #ffffff;
        }
        .flex {
          display: flex;
        }
        .padding {
          padding: 20px;
        }
        .height100vh {
          height: 100vh;
        }

      `}
      </style>
    </React.Fragment>
  )
}

export default Home
