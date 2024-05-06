import React from 'react'
import AdminHeader from '../../components/Admin/Header'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <>
      <AdminHeader/>
      <Outlet/>
    </>
  )
}

export default AdminLayout
