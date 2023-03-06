import React from 'react'
import { Drawer,List, Toolbar, Stack, Avatar} from "@mui/material"
import sizeConfigs from 'config/sizeConfigs'
import assets from 'assets'

const Sidebar = () => {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink : 0
      }}
    >
      <List disablePadding>
        <Toolbar />
        <Stack sx={{ width: "100%", }}
          direction="row"
          justifyContent="center"
        >
           <Avatar src={assets.images.logo} />
        </Stack>
      </List>
    </Drawer>
  )
}

export default Sidebar

