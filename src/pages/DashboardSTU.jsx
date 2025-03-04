import React from "react";

//component imports
import Topbar from "../components/Topbar";
import ViewGroupsList from "./ViewGroupsList";
import ViewProject from "./ViewProject";

import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";

function DashboardSTU() {
  return (
    <>
      <Topbar />
      <Stack spacing={2} paddingInline={3} paddingTop={1} direction={"column"} width={"100%"}>
        <Outlet />
      </Stack>
    </>
  );
}

export default DashboardSTU;
