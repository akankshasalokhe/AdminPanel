import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Wallet = React.lazy(() => import('./views/wallet/Wallet'))

// User Management
const User = React.lazy(() => import('./views/usermanagement/user/User'))
const ProfilePage = React.lazy(() => import('./views/usermanagement/user/ProfilePage'))
const UserCategory = React.lazy(() => import('./views/usermanagement/userCategories/UserCategories'))
const AttributeValues = React.lazy(() => import('./views/usermanagement/attributeValues/AttributeValues'))
const Cards = React.lazy(() => import('./views/usermanagement/cards/Cards'))

// Packages, Coins, Events
const PackageManagement = React.lazy(() => import('./views/PackageManagement/PackageManagement'))
const Coin = React.lazy(() => import('./views/Coin/Coin'))
const EventManagement = React.lazy(() => import('./views/EventManagement/Event'))
const EventInfoPage = React.lazy(() => import('./views/EventManagement/EventInfoPage'))

// Gifts
const Gift = React.lazy(() => import('./views/Engagement/gifts/Gift'))
const GiftCategory = React.lazy(() => import('./views/Engagement/giftCategory/GiftCategory'))
const Dropdowns = React.lazy(() => import('./views/Engagement/dropdowns/Dropdowns'))

// Chat
const ChatInterection = React.lazy(() => import('./views/ChatAndIntereaction/chatInteraction'))
// const LogsPage = React.lazy(()=>import('./views/ChatAndIntereaction/LogsPage'))
const ChatLogPage = React.lazy(()=>import('./views/ChatAndIntereaction/ChatLogPage'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // User Management
  { path: '/usermanagement', name: 'User Management', element: Cards, exact: true },
  { path: '/usermanagement/user', name: 'User', element: User },
  { path: '/usermanagement/user/:userId', name: 'User Profile', element: ProfilePage },
  { path: '/usermanagement/userCategories', name: 'User Category', element: UserCategory },
  { path: '/usermanagement/attributeValues', name: 'Attribute Values', element: AttributeValues },

  // Engagement
  { path: '/engagement', name: 'Engagement', element: Cards, exact: true },
  { path: '/engagement/gifts', name: 'Gift', element: Gift },
  { path: '/engagement/giftCategory', name: 'Gift Category', element: GiftCategory },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },

  // Wallet & Packages
  { path: '/wallet', name: 'Wallet', element: Wallet },
  { path: '/PackageManagement', name: 'Package Management', element: PackageManagement },
  { path: '/coin', name: 'Coin', element: Coin },

  // Events
  { path: '/eventManagement', name: 'Event Management', element: EventManagement },
  { path: '/eventInfo/:eventId', name: 'Event InfoPage', element: EventInfoPage },

  // Chat
  { path: '/chatInteraction', name: 'Chat & Interaction', element: ChatInterection },
  // { path:'/chatInteraction/logsPage',name:"Logs Page",element:LogsPage},
  { path:'/chatInteraction/chatLogPage',name:'ChatLog Page',element:ChatLogPage},

  // Icons
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },

  // Notifications
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
]

export default routes
