import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import { Outlet } from 'react-router-dom'

const Profile = () => {
  return <>
     <ProfileHeader/>
     <Outlet/>
  </>
}

export default Profile