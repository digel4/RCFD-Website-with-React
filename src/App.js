// import React from 'react';
import { useCallback, useEffect } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/partials/Header';
import Landing from './components/Landing';
import Footer from './components/partials/Footer';
import EmailSubscribe from './components/partials/EmailSubscribe';
import Events from './components/events/Events';
import Coaches from './components/Coaches';
import ShowEvent from './components/events/ShowEvent';
import EditEvent from './components/admin/EditEvent';
import CreateEvent from './components/admin/CreateEvent';
import { verifyUser } from './actions';
import './App.css';
import history from './history';
import Login from './components/admin/Login';
import AdminHome from './components/admin/AdminHome';
import { connect } from 'react-redux';
// import API from '../../APIS/events';



const App = (props) => {
  // console.log("app props:")
  // console.log(props)
  const { verifyUser, token } = props
  const verifyUserInApp = useCallback(() => {
    verifyUser()
  }, [verifyUser])

  useEffect( () => {
    verifyUserInApp()
  }, [verifyUserInApp])

  return (
    <div>
      
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<ShowEvent />} />
            <Route path="/pastevents" element={<Events />} />
            <Route path="/coaches" element={<Coaches />} />
            {/* Admin Routes */}
            <Route path="/adminHome" element={ !token ? <Login /> : <AdminHome/> } />
            <Route path="/admin/createEvent" element={ !token ? <Login /> : <CreateEvent/> } />
            <Route path="/admin/editEvent/:id" element={ !token ? <Login /> : <EditEvent/> } />

          </Routes>
        </BrowserRouter>
        <EmailSubscribe />
        <Footer />
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
      token: state.admin.token,
      pastEvents: state.events.pastEvents,
      state

  }
}

export default connect(
  mapStateToProps,
  { 
      verifyUser
  }
)(App);

