import React from 'react'
import { Drawer } from "@mui/material"
import sizeConfigs from 'config/sizeConfigs'

const Sidebar = () => {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink : 0
      }}
    >
      Sidebar
    </Drawer>
  )
}

export default Sidebar

