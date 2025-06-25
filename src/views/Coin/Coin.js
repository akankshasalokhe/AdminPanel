import React from 'react';
import './Coin.css';
// import { FaUser, FaCrown, FaStar, FaGem, FaCoins, FaUsers } from 'react-icons/fa';

const cardData = [
  { title: 'Total Revenue', image:<img src="../src/assets/icons/Frame278.png" alt=''/>, total: '₹5,00,000', month: '+12%' },
  { title: 'VIP User', image:<img src="../src/assets/icons/Frame278(1).png" alt=''/>, total: '120', month: '+10%' },
  { title: 'Premium User', image:<img src="../src/assets/icons/Frame278(2).png" alt=''/>, total: '300', month: '+20.00%' },
  { title: 'Golden User',image:<img src="../src/assets/icons/Frame278(3).png" alt=''/>, total: '80', month: '+5%' },
  { title: 'Silver User', image:<img src="../src/assets/icons/Frame278(4).png" alt=''/>, total: '120', month: '-20.3%' },
  { title: 'Other User', image:<img src="../src/assets/icons/Frame278(5).png" alt=''/>, total: '50', month: '+2.4%' },
];

const data = [
  {
    id: 'TX12345',
    user: 'John Doe',
    coins: 500,
    amount: '₹250',
    method: 'UPI',
    status: 'Complete',
    date: '2025-06-20',
  },
  {
    id: 'TX12346',
    user: 'Jane Smith',
    coins: 200,
    amount: '₹100',
    method: 'Credit Card',
    status: 'Pending',
    date: '2025-06-21',
  },
  {
    id: 'TX12347',
    user: 'Aman Raj',
    coins: 100,
    amount: '₹50',
    method: 'PayPal',
    status: 'Failed',
    date: '2025-06-22',
  },
];

const Data1 = [
  {
    user:"John Doe",
    current:100,
    purchased:200,
    spent:500,
    Category:"Inactive",
    withdraw:800,
    date:'2025-06-22 16:30'
  },
   {
    user:"John Doe",
    current:100,
    purchased:200,
    spent:500,
    Category:"Medium Spender",
    withdraw:800,
    date:'2025-06-22 16:30'
  }
]

const getStatusClass = (status) => {
  switch (status) {
    case 'Complete': return 'status-badge complete';
    case 'Pending': return 'status-badge pending';
    case 'Failed': return 'status-badge failed';
    default: return 'status-badge';
  }
};
const getCategoryClass = (Category) => {
  switch (Category) {
    case 'High Spender': return 'category-badge high';
    case 'Medium Spender': return 'category-badge medium';
    case 'Inactive': return 'category-badge inactive';
    default: return 'category-badge';
  }
};

const Coin = () => {
  return (
    <>
        <div className="d-flex justify-content-between">
            {cardData.map((card, index) => (
                <div className="summary-card" key={index}>
                <div className='d-flex flex-row'>
                    <div className="card-icon">{card.image}</div>
                    <div className="card-loss">{card.month}</div>
                </div>
                <div className="card-title">{card.title}</div>
                <div className="card-total">{card.total}</div>
                <div className="card-month">This Month</div>
                </div>
            ))}
        </div>

        <div className="coin-card">
      <h5 className="coin-card-title">Coin Transaction</h5>
      <div className="table-responsive">
        <table className="table text-center">
          <thead className="table-light">
            <tr>
              <th>Transaction ID</th>
              <th>User</th>
              <th>Coins</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((tx, index) => (
              <tr key={index}>
                <td>{tx.id}</td>
                <td>{tx.user}</td>
                <td>{tx.coins}</td>
                <td>{tx.amount}</td>
                <td>{tx.method}</td>
                <td>
                  <span className={getStatusClass(tx.status)}>
                    {tx.status}
                  </span>
                </td>
                <td>{tx.date}</td>
                <td>
                  <button className="view-btn">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

      <div className="coin-card mb-3">
      <h5 className="coin-card-title">User Coin Balance</h5>
      <div className="table-responsive">
        <table className="table text-center">
          <thead className="table-light">
            <tr>
              <th>User</th>
              <th>Current Balance</th>
              <th>Total Purchased</th>
              <th>Total Spent</th>
              <th>Category</th>
              <th>Withdraw</th>
              <th>Last Activity</th>
            </tr>
          </thead>
          <tbody>
            {Data1.map((tx, index) => (
              <tr key={index}>
                {/* <td>{tx.id}</td> */}
                <td>{tx.user}</td>
                <td>{tx.current}</td>
                <td>{tx.purchased}</td>
                <td>{tx.spent}</td>
                <td>
                  <span className={getCategoryClass(tx.Category)}>
                    {tx.Category}
                  </span>
                </td>
                <td>{tx.withdraw}</td>
                <td>{tx.date}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Coin;
