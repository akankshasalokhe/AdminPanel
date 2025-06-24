import { element } from 'prop-types'
import React from 'react'
// import PackageManagement from './views/PackageManagement/PackageManagement'
// import AttributeValues from './views/usermanagement/attributeValues/AttributeValues'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Wallet = React.lazy(()=>import('./views/wallet/Wallet'))

// Base
const User = React.lazy(() => import('./views/usermanagement/user/User'))
const ProfilePage = React.lazy(() => import('./views/usermanagement/user/ProfilePage'))
const UserCategory = React.lazy(()=>import('./views/usermanagement/userCategories/UserCategories'))
const AttributeValues = React.lazy(()=>import('./views/usermanagement/attributeValues/AttributeValues'))
const Cards = React.lazy(() => import('./views/usermanagement/cards/Cards'))
const PackageManagement = React.lazy(()=>import('./views/PackageManagement/PackageManagement'))
const Coin = React.lazy(()=>import('./views/Coin/Coin'))

// Buttons
const Gift=React.lazy(()=>import('./views/Engagement/gifts/gift'))
const GiftCategory= React.lazy(()=>import('./views/Engagement/giftCategory/GiftCategory'))
const Dropdowns = React.lazy(() => import('./views/Engagement/dropdowns/Dropdowns'))

//Forms
const ChatInterection = React.lazy(()=>import('./views/ChatAndIntereaction/chatInteraction'))
// const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
// const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
// const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
// const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
// const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
// const Range = React.lazy(() => import('./views/forms/range/Range'))
// const Select = React.lazy(() => import('./views/forms/select/Select'))
// const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

// const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

// const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  
  { path: '/usermanagement', name: 'User Management', element: Cards, exact: true },
  { path: '/usermanagement/user', name: 'User', element: User },
  { path: '/usermanagement/user/:userId', name: 'User Profile', element: ProfilePage },
  { path: '/usermanagement/userCategories', name: 'User Category',element: UserCategory},
  { path: '/usermanagement/attributeValues', name:'Attribute Values',element:AttributeValues},
  // { path: '/usermanagement/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  // { path: '/usermanagement/cards', name: 'Cards', element: Cards },
  // { path: '/usermanagement/carousels', name: 'Carousel', element: Carousels },
  // { path: '/usermanagement/collapses', name: 'Collapse', element: Collapses },
  // { path: '/usermanagement/list-groups', name: 'List Groups', element: ListGroups },
  // { path: '/usermanagement/navs', name: 'Navs', element: Navs },
  // { path: '/usermanagement/paginations', name: 'Paginations', element: Paginations },
  // { path: '/usermanagement/placeholders', name: 'Placeholders', element: Placeholders },
  // { path: '/usermanagement/popovers', name: 'Popovers', element: Popovers },
  // { path: '/usermanagement/progress', name: 'Progress', element: Progress },
  // { path: '/usermanagement/spinners', name: 'Spinners', element: Spinners },
  // { path: '/usermanagement/tabs', name: 'Tabs', element: Tabs },
  // { path: '/usermanagement/tables', name: 'Tables', element: Tables },
  // { path: '/usermanagement/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/engagement', name: 'Engagement', element: Cards, exact: true },
  // <Gift/>,
  { path: '/engagement/gifts', name: 'Gift', element: Gift },
  { path: '/engagement/giftCategory', name: 'Gift Category', element: GiftCategory},
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/wallet', name:'Wallet',element:Wallet},
  { path: '/PackageManagement', name:'PackageManagement', element:PackageManagement},
  { path: '/coin',name:'Coin',element:Coin},
  // { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  // { path: '/charts', name: 'Charts', element: Charts },
  { path: '/chatInteraction', name: 'Chat & Intereaction', element: ChatInterection },
  // { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  // { path: '/forms/select', name: 'Select', element: Select },
  // { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  // { path: '/forms/range', name: 'Range', element: Range },
  // { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  // { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  // { path: '/forms/layout', name: 'Layout', element: Layout },
  // { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  // { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
