import React from "react";
import { Container } from "react-bootstrap";
import NavbarSearch from "../../component/navbar/NavbarSearch";
import NavbarSide from "../../component/navbar/NavbarSide";
import DashboardCard from "./component/DashboardCard";
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <NavbarSide />
      <div style={{ width: '100%' }}>
        <NavbarSearch />
        <Container style={{ marginTop: '3em', marginBottom: '2em', color: 'var(--fontColorPrimary)' }}>
          <h1>Your book</h1>
        </Container>
        <Container style={{ display: 'flex', gap: '1em', flexDirection: 'column' }}>
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />

        </Container>
      </div>
    </div>
  )
}
