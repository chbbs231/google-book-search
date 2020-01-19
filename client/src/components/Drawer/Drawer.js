import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DrawerContext from '../../utils/DrawerContext'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import SaveIcon from '@material-ui/icons/Save'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

const Drawer = () => {
  const classes = useStyles()

  const { isOpen, toggleDrawer } = useContext(DrawerContext)

  const redirect = page => event => window.location.href = `http://${window.location.host}${page}`

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key={'Home'} onClick={redirect('/')}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button key={'Search'} onClick={redirect('/search')}>
          <ListItemIcon><SearchIcon /></ListItemIcon>
          <ListItemText primary={'Search'} />
        </ListItem>
        <ListItem button key={'Saved'} onClick={redirect('/saved')}>
          <ListItemIcon><SaveIcon /></ListItemIcon>
          <ListItemText primary={'Saved'} />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <SwipeableDrawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  )
}

export default Drawer
