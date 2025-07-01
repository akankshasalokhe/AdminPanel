import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
   
  },
  // {
  //   component: CNavTitle,
  //   name: 'Colors',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Gifts',
  //   to: '/gifts',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  //   items:[
  //        {
  //       component: CNavItem,
  //       name: 'gift',
  //       to: '/Gifts/gift',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'category',
  //       to: '/Gifts/category',
  //     }
  //   ]
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'User Management',
    to: '/usermanagement',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User',
        to: '/usermanagement/user',
      },
      {
        component: CNavItem,
        name: 'User Attributes',
        to: '/usermanagement/userCategories',
      },
       {
        component: CNavItem,
        name: 'Attribute Values',
        to: '/usermanagement/attributeValues',
      },
      // {
      //   component: CNavItem,
      //   name: 'Breadcrumb',
      //   to: '/usermanagement/breadcrumbs',
      // },
      // {
      //   component: CNavItem,
      //   name: (
      //     <React.Fragment>
      //       {'Calendar'}
      //       <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
      //     </React.Fragment>
      //   ),
      //   href: 'https://coreui.io/react/docs/components/calendar/',
      //   badge: {
      //     color: 'danger',
      //     text: 'PRO',
      //   },
      // },
      // {
      //   component: CNavItem,
      //   name: 'Cards',
      //   to: '/usermanagement/cards',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Carousel',
      //   to: '/usermanagement/carousels',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Collapse',
      //   to: '/usermanagement/collapses',
      // },
      // {
      //   component: CNavItem,
      //   name: 'List group',
      //   to: '/usermanagement/list-groups',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Navs & Tabs',
      //   to: '/usermanagement/navs',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Pagination',
      //   to: '/usermanagement/paginations',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Placeholders',
      //   to: '/usermanagement/placeholders',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Popovers',
      //   to: '/usermanagement/popovers',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Progress',
      //   to: '/usermanagement/progress',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Smart Pagination',
      //   href: 'https://coreui.io/react/docs/components/smart-pagination/',
      //   badge: {
      //     color: 'danger',
      //     text: 'PRO',
      //   },
      // },
      // {
      //   component: CNavItem,
      //   name: (
      //     <React.Fragment>
      //       {'Smart Table'}
      //       <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
      //     </React.Fragment>
      //   ),
      //   href: 'https://coreui.io/react/docs/components/smart-table/',
      //   badge: {
      //     color: 'danger',
      //     text: 'PRO',
      //   },
      // },
      // {
      //   component: CNavItem,
      //   name: 'Spinners',
      //   to: '/usermanagement/spinners',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tables',
      //   to: '/usermanagement/tables',
      // },
     
      
      // {
      //   component: CNavItem,
      //   name: (
      //     <React.Fragment>
      //       {'Virtual Scroller'}
      //       <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
      //     </React.Fragment>
      //   ),
      //   href: 'https://coreui.io/react/docs/components/virtual-scroller/',
      //   badge: {
      //     color: 'danger',
      //     text: 'PRO',
      //   },
      // },
    ],
  },
 
  {
    component: CNavItem,
    name: 'Chat & Interaction',
    to:'/chatInteraction',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    // items: [
    //   {
    //     component: CNavItem,
    //     name: 'Audio Call',
    //     to: '/forms/form-control',
    //   },
    //   {
    //     component: CNavItem,
    //     name: 'Video Call',
    //     to: '/forms/select',
    //   },
      
      // {
      //   component: CNavItem,
      //   name: 'Reactions',
      //   to: '/forms/checks-radios',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Block',
      //   to: '/forms/range',
      // },
      // {
      //   component: CNavItem,
      //   name: (
      //     <React.Fragment>
      //       {'Range Slider'}
      //       <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
      //     </React.Fragment>
      //   ),
      //   href: 'https://coreui.io/react/docs/forms/range-slider/',
      //   badge: {
      //     color: 'danger',
      //     text: 'PRO',
      //   },
      // },
      // {
      //   component: CNavItem,
      //   name: (
      //     <React.Fragment>
      //       {'Rating'}
      //       <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
      //     </React.Fragment>
      //   ),
      //   href: 'https://coreui.io/react/docs/forms/rating/',
      //   badge: {
      //     color: 'danger',
      //     text: 'PRO',
      //   },
      // },
      // {
      //   component: CNavItem,
      //   name: 'Input Group',
      //   to: '/forms/input-group',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Floating Labels',
      //   to: '/forms/floating-labels',
      // },
      // {
      //   component: CNavItem,
      //   name: (
      //     <React.Fragment>
      //       {'Date Picker'}
      //       <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
      //     </React.Fragment>
      //   ),
      //   href: 'https://coreui.io/react/docs/forms/date-picker/',
      //   badge: {
      //     color: 'danger',
      //     text: 'PRO',
      //   },
      // },
      // {
      //   component: CNavItem,
      //   name: 'Date Range Picker',
      //   href: 'https://coreui.io/react/docs/forms/date-range-picker/',
      //   badge: {
      //     color: 'danger',
      //     text: 'PRO',
      //   },
      // },
      // {
      //   component: CNavItem,
      //   name: (
      //     <React.Fragment>
      //       {'Time Picker'}
      //       <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
      //     </React.Fragment>
      //   ),
      //   href: 'https://coreui.io/react/docs/forms/time-picker/',
      //   badge: {
      //     color: 'danger',
      //     text: 'PRO',
      //   },
      // },
      // {
      //   component: CNavItem,
      //   name: 'Layout',
      //   to: '/forms/layout',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Validation',
      //   to: '/forms/validation',
      // },
    // ],
  },
  {
    component: CNavItem,
    name: 'Event & Management',
    to: '/eventManagement',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    // items: [
    //   {
    //     component: CNavItem,
    //     name: 'Event RSVP Stats',
    //     to: '/charts/eventStats',
    //   },
    //   {
    //     component: CNavItem,
    //     name: 'Participant List',
    //     to: '/charts/eventStats',
    //   },
    //   {
    //     component: CNavItem,
    //     name: 'Feedback collection',
    //     to: '/charts/eventStats',
    //   },
    //   {
    //     component: CNavItem,
    //     name: 'Event moderators panel',
    //     to: '/charts/eventStats',
    //   },
    // ]
  },
  {
    component: CNavGroup,
    name: 'Financial',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Payout Method',
        to: '/icons/coreui-icons',
      },
      {
        component: CNavItem,
        name: 'Payment Request',
        to: '/icons/flags',
      },
      // {
      //   component: CNavItem,
      //   name: 'CoreUI Brands',
      //   to: '/icons/brands',
      // },
    ],
  },
   {
    component: CNavGroup,
    name: 'Gift & Coins',
    to: '/engagement',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Gift',
        to: '/engagement/gifts',
      },
      {
        component: CNavItem,
        name: 'Gift Category',
        to: '/engagement/giftCategory',
      },
      // {
      //   component: CNavItem,
      //   name: 'Dropdowns',
      //   to: '/buttons/dropdowns',
      // },
      // {
      //   component: CNavItem,
      //   name: (
      //     <React.Fragment>
      //       {'Loading Button'}
      //       <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
      //     </React.Fragment>
      //   ),
      //   href: 'https://coreui.io/react/docs/components/loading-button/',
      //   badge: {
      //     color: 'danger',
      //     text: 'PRO',
      //   },
      // },
    ],
  },

   {
    component: CNavItem,
    name: 'PackageManagement',
    to: '/PackageManagement',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
   
  },
  {
    component: CNavItem,
    name: 'Coin',
    to: '/coin',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
   
  },

   {
    component: CNavItem,
    name: 'Wallet',
    to: '/wallet',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
   
  },

  {
    component: CNavGroup,
    name: 'Analytics & report',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'New Signup',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Match Signup',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Gender ratio Report',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Engagement Time',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Crossing',
    to: '/crossing',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    // item:[
    //   {
    //     component: CNavItem,
    //     name: 'Recent Crossing',
    //     to: '/notifications/alerts',
    //   },
    //    {
    //     component: CNavItem,
    //     name: 'Repeat Crossing',
    //     to: '/notifications/alerts',
    //   },
    //    {
    //     component: CNavItem,
    //     name: 'First Crossing',
    //     to: '/notifications/alerts',
    //   },
    // ]
    
  },
  
  {
    component: CNavItem,
    name: 'Privacy Policy',
    to: '/privacy-policy',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
   
  },
  {
    component: CNavItem,
    name: 'Terms and Conditions',
    to: '/terms-and-conditions',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Refund Policy',
    to: '/refund-policy',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Package',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Gold',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Silver',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Premium',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'VIP',
        to: '/500',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Support & Reporting',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Help',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Report',
        to: '/login',
      },
    ]
  },
]

export default _nav
