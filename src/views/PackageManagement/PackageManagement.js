import React from 'react'
import PackageCard from './PackageCard'
import PackageTable from './PackageTable'
import './Package.css'

const packages = [
  { name: 'Silver', price: '$10', duration: '1 Month', subscribers: 120, revenue: 1200 },
  { name: 'Golden', price: '$25', duration: '3 Months', subscribers: 80, revenue: 2000 },
  { name: 'Premium', price: '$40', duration: '6 Months', subscribers: 60, revenue: 2400 },
  { name: 'VIP', price: '$70', duration: '12 Months', subscribers: 40, revenue: 2800 },
]

const PackageManagement = () => {
  return (
    <div className="package-management">
      <h2 className="title">Package Management</h2>
      <div className="card-container">
        {packages.map((pkg, idx) => (
          <PackageCard key={idx} data={pkg} />
        ))}
      </div>
      <PackageTable packages={packages} />
    </div>
  )
}

export default PackageManagement
