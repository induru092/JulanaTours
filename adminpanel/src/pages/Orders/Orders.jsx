// import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filterStatus, setFilterStatus] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');

//   // Mock data for demonstration - replace with actual API call
//   const mockOrders = [
//     {
//       id: 'ORD-001',
//       customerName: 'John Doe',
//       customerEmail: 'john@example.com',
//       customerPhone: '+94 77 123 4567',
//       vehicleName: 'Toyota Camry',
//       vehicleCategory: 'Sedan',
//       pickupDate: '2025-01-15',
//       dropDate: '2025-01-20',
//       pickupLocation: 'Airport Terminal 1',
//       dropLocation: 'Hotel Hilton',
//       totalAmount: 25000,
//       status: 'Confirmed',
//       createdAt: '2025-01-10T10:30:00',
//       days: 5
//     },
//     {
//       id: 'ORD-002',
//       customerName: 'Jane Smith',
//       customerEmail: 'jane@example.com',
//       customerPhone: '+94 71 987 6543',
//       vehicleName: 'Honda CR-V',
//       vehicleCategory: 'SUV',
//       pickupDate: '2025-01-18',
//       dropDate: '2025-01-22',
//       pickupLocation: 'City Center',
//       dropLocation: 'Airport Terminal 2',
//       totalAmount: 32000,
//       status: 'Pending',
//       createdAt: '2025-01-12T14:15:00',
//       days: 4
//     },
//     {
//       id: 'ORD-003',
//       customerName: 'Mike Johnson',
//       customerEmail: 'mike@example.com',
//       customerPhone: '+94 75 456 7890',
//       vehicleName: 'Ford Transit',
//       vehicleCategory: 'Van',
//       pickupDate: '2025-01-25',
//       dropDate: '2025-01-30',
//       pickupLocation: 'Hotel Grand',
//       dropLocation: 'Railway Station',
//       totalAmount: 45000,
//       status: 'Completed',
//       createdAt: '2025-01-08T09:20:00',
//       days: 5
//     }
//   ];

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       // Simulate API call
//       setTimeout(() => {
//         setOrders(mockOrders);
//         setLoading(false);
//       }, 1000);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//       toast.error('Failed to fetch orders');
//       setLoading(false);
//     }
//   };

//   const updateOrderStatus = async (orderId, newStatus) => {
//     try {
//       // Simulate API call
//       setOrders(orders.map(order => 
//         order.id === orderId ? { ...order, status: newStatus } : order
//       ));
//       toast.success(`Order ${orderId} status updated to ${newStatus}`);
//     } catch (error) {
//       console.error('Error updating order status:', error);
//       toast.error('Failed to update order status');
//     }
//   };

//   const getStatusBadgeClass = (status) => {
//     switch (status) {
//       case 'Pending':
//         return 'bg-warning text-dark';
//       case 'Confirmed':
//         return 'bg-primary';
//       case 'Completed':
//         return 'bg-success';
//       case 'Cancelled':
//         return 'bg-danger';
//       default:
//         return 'bg-secondary';
//     }
//   };

//   const filteredOrders = orders.filter(order => {
//     const matchesStatus = filterStatus === 'All' || order.status === filterStatus;
//     const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          order.id.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesStatus && matchesSearch;
//   });

//   if (loading) {
//     return (
//       <div className="container-fluid py-4">
//         <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
//           <div className="text-center">
//             <div className="spinner-border text-primary mb-3" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <p className="text-muted">Loading orders...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container-fluid py-4">
//       <div className="row">
//         <div className="col-12">
//           <div className="card shadow-sm">
//             <div className="card-header bg-primary text-white">
//               <div className="row align-items-center">
//                 <div className="col">
//                   <h4 className="mb-0">
//                     <i className="bi bi-cart-check me-2"></i>
//                     Vehicle Booking Orders
//                   </h4>
//                   <small>Manage customer vehicle bookings</small>
//                 </div>
//                 <div className="col-auto">
//                   <span className="badge bg-light text-primary fs-6">
//                     {filteredOrders.length} Orders
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="card-body">
//               {/* Filters and Search */}
//               <div className="row mb-4">
//                 <div className="col-md-6">
//                   <div className="input-group">
//                     <span className="input-group-text">
//                       <i className="bi bi-search"></i>
//                     </span>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Search by customer name, email, or order ID..."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-3">
//                   <select
//                     className="form-select"
//                     value={filterStatus}
//                     onChange={(e) => setFilterStatus(e.target.value)}
//                   >
//                     <option value="All">All Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Confirmed">Confirmed</option>
//                     <option value="Completed">Completed</option>
//                     <option value="Cancelled">Cancelled</option>
//                   </select>
//                 </div>
//                 <div className="col-md-3">
//                   <button 
//                     className="btn btn-outline-primary"
//                     onClick={fetchOrders}
//                   >
//                     <i className="bi bi-arrow-clockwise me-1"></i>
//                     Refresh
//                   </button>
//                 </div>
//               </div>

//               {/* Orders Table */}
//               {filteredOrders.length === 0 ? (
//                 <div className="text-center py-5">
//                   <i className="bi bi-inbox display-1 text-muted"></i>
//                   <h4 className="text-muted mt-3">No Orders Found</h4>
//                   <p className="text-muted">No orders match your current filter criteria.</p>
//                 </div>
//               ) : (
//                 <div className="table-responsive">
//                   <table className="table table-hover">
//                     <thead className="table-light">
//                       <tr>
//                         <th>Order ID</th>
//                         <th>Customer</th>
//                         <th>Vehicle</th>
//                         <th>Rental Period</th>
//                         <th>Amount</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filteredOrders.map((order) => (
//                         <tr key={order.id}>
//                           <td>
//                             <strong className="text-primary">{order.id}</strong>
//                             <br />
//                             <small className="text-muted">
//                               {new Date(order.createdAt).toLocaleDateString()}
//                             </small>
//                           </td>
//                           <td>
//                             <div>
//                               <strong>{order.customerName}</strong>
//                               <br />
//                               <small className="text-muted">{order.customerEmail}</small>
//                               <br />
//                               <small className="text-muted">{order.customerPhone}</small>
//                             </div>
//                           </td>
//                           <td>
//                             <div>
//                               <strong>{order.vehicleName}</strong>
//                               <br />
//                               <span className="badge bg-secondary">{order.vehicleCategory}</span>
//                             </div>
//                           </td>
//                           <td>
//                             <div>
//                               <strong>{order.days} days</strong>
//                               <br />
//                               <small className="text-muted">
//                                 {order.pickupDate} to {order.dropDate}
//                               </small>
//                               <br />
//                               <small className="text-muted">
//                                 <i className="bi bi-geo-alt"></i> {order.pickupLocation}
//                               </small>
//                               <br />
//                               <small className="text-muted">
//                                 <i className="bi bi-geo-alt-fill"></i> {order.dropLocation}
//                               </small>
//                             </div>
//                           </td>
//                           <td>
//                             <strong className="text-success">
//                               Rs.{order.totalAmount.toLocaleString()}
//                             </strong>
//                           </td>
//                           <td>
//                             <span className={`badge ${getStatusBadgeClass(order.status)}`}>
//                               {order.status}
//                             </span>
//                           </td>
//                           <td>
//                             <div className="dropdown">
//                               <button
//                                 className="btn btn-sm btn-outline-secondary dropdown-toggle"
//                                 type="button"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                               >
//                                 Actions
//                               </button>
//                               <ul className="dropdown-menu">
//                                 <li>
//                                   <button 
//                                     className="dropdown-item"
//                                     onClick={() => updateOrderStatus(order.id, 'Confirmed')}
//                                     disabled={order.status === 'Confirmed'}
//                                   >
//                                     <i className="bi bi-check-circle me-2"></i>
//                                     Confirm
//                                   </button>
//                                 </li>
//                                 <li>
//                                   <button 
//                                     className="dropdown-item"
//                                     onClick={() => updateOrderStatus(order.id, 'Completed')}
//                                     disabled={order.status === 'Completed'}
//                                   >
//                                     <i className="bi bi-check-all me-2"></i>
//                                     Complete
//                                   </button>
//                                 </li>
//                                 <li>
//                                   <button 
//                                     className="dropdown-item text-danger"
//                                     onClick={() => updateOrderStatus(order.id, 'Cancelled')}
//                                     disabled={order.status === 'Cancelled'}
//                                   >
//                                     <i className="bi bi-x-circle me-2"></i>
//                                     Cancel
//                                   </button>
//                                 </li>
//                                 <li><hr className="dropdown-divider" /></li>
//                                 <li>
//                                   <button className="dropdown-item">
//                                     <i className="bi bi-eye me-2"></i>
//                                     View Details
//                                   </button>
//                                 </li>
//                                 <li>
//                                   <button className="dropdown-item">
//                                     <i className="bi bi-printer me-2"></i>
//                                     Print Invoice
//                                   </button>
//                                 </li>
//                               </ul>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>

//             {/* Summary Footer */}
//             <div className="card-footer bg-light">
//               <div className="row text-center">
//                 <div className="col-md-3">
//                   <strong className="text-warning">
//                     {orders.filter(o => o.status === 'Pending').length}
//                   </strong>
//                   <br />
//                   <small className="text-muted">Pending</small>
//                 </div>
//                 <div className="col-md-3">
//                   <strong className="text-primary">
//                     {orders.filter(o => o.status === 'Confirmed').length}
//                   </strong>
//                   <br />
//                   <small className="text-muted">Confirmed</small>
//                 </div>
//                 <div className="col-md-3">
//                   <strong className="text-success">
//                     {orders.filter(o => o.status === 'Completed').length}
//                   </strong>
//                   <br />
//                   <small className="text-muted">Completed</small>
//                 </div>
//                 <div className="col-md-3">
//                   <strong className="text-success">
//                     Rs.{orders.reduce((sum, order) => sum + order.totalAmount, 0).toLocaleString()}
//                   </strong>
//                   <br />
//                   <small className="text-muted">Total Revenue</small>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;

// import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { 
//   fetchOrders, 
//   fetchOrdersWithFilter, 
//   updateOrderStatus, 
//   fetchOrderStats,
//   deleteOrder 
// } from '../../services/vehicleService';

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filterStatus, setFilterStatus] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [stats, setStats] = useState({
//     pending: 0,
//     confirmed: 0,
//     completed: 0,
//     cancelled: 0,
//     totalRevenue: 0
//   });
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     fetchOrdersList();
//     fetchStatistics();
//   }, []);

//   useEffect(() => {
//     // Debounce search and filter
//     const timeoutId = setTimeout(() => {
//       if (searchTerm || filterStatus !== 'All') {
//         fetchFilteredOrders();
//       } else {
//         fetchOrdersList();
//       }
//     }, 300);

//     return () => clearTimeout(timeoutId);
//   }, [searchTerm, filterStatus]);

//   const fetchOrdersList = async () => {
//     try {
//       setLoading(true);
//       const data = await fetchOrders();
//       console.log('Received orders data:', data);
//       setOrders(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//       handleApiError(error);
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchFilteredOrders = async () => {
//     try {
//       setLoading(true);
//       const data = await fetchOrdersWithFilter(
//         filterStatus !== 'All' ? filterStatus : null,
//         searchTerm || null
//       );
//       setOrders(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error('Error fetching filtered orders:', error);
//       handleApiError(error);
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchStatistics = async () => {
//     try {
//       const statsData = await fetchOrderStats();
//       setStats(statsData || stats);
//     } catch (error) {
//       console.error('Error fetching stats:', error);
//       // Calculate stats from current orders if API fails
//       calculateStatsFromOrders();
//     }
//   };

//   const calculateStatsFromOrders = () => {
//     const newStats = {
//       pending: orders.filter(o => o.status === 'Pending').length,
//       confirmed: orders.filter(o => o.status === 'Confirmed').length,
//       completed: orders.filter(o => o.status === 'Completed').length,
//       cancelled: orders.filter(o => o.status === 'Cancelled').length,
//       totalRevenue: orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0)
//     };
//     setStats(newStats);
//   };

//   const handleUpdateOrderStatus = async (orderId, newStatus) => {
//     try {
//       setUpdating(true);
//       await updateOrderStatus(orderId, newStatus);
      
//       // Update local state
//       setOrders(orders.map(order => 
//         order.id === orderId ? { ...order, status: newStatus } : order
//       ));
      
//       toast.success(`Order ${orderId} status updated to ${newStatus}`);
      
//       // Refresh stats
//       fetchStatistics();
//     } catch (error) {
//       console.error('Error updating order status:', error);
//       handleApiError(error, 'Failed to update order status');
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const handleDeleteOrder = async (orderId) => {
//     if (window.confirm('Are you sure you want to delete this order?')) {
//       try {
//         setUpdating(true);
//         await deleteOrder(orderId);
        
//         // Remove from local state
//         setOrders(orders.filter(order => order.id !== orderId));
//         toast.success(`Order ${orderId} deleted successfully`);
        
//         // Refresh stats
//         fetchStatistics();
//       } catch (error) {
//         console.error('Error deleting order:', error);
//         handleApiError(error, 'Failed to delete order');
//       } finally {
//         setUpdating(false);
//       }
//     }
//   };

//   const handleApiError = (error, defaultMessage = 'An error occurred') => {
//     if (error.response?.status === 401) {
//       toast.error('Session expired. Please login again.');
//     } else if (error.response?.status === 403) {
//       toast.error('Access denied. You may not have permission to perform this action.');
//     } else if (error.response?.status === 404) {
//       toast.error('Orders not found.');
//     } else if (error.response?.status >= 500) {
//       toast.error('Server error. Please try again later.');
//     } else if (!error.response) {
//       toast.error('Network error. Please check your connection.');
//     } else {
//       toast.error(error.response?.data?.message || error.message || defaultMessage);
//     }
//   };

//   const getStatusBadgeClass = (status) => {
//     switch (status) {
//       case 'Pending':
//         return 'bg-warning text-dark';
//       case 'Confirmed':
//         return 'bg-primary';
//       case 'Completed':
//         return 'bg-success';
//       case 'Cancelled':
//         return 'bg-danger';
//       default:
//         return 'bg-secondary';
//     }
//   };

//   const formatDate = (dateString) => {
//     try {
//       return new Date(dateString).toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric'
//       });
//     } catch {
//       return 'Invalid Date';
//     }
//   };

//   const formatCurrency = (amount) => {
//     return `Rs.${(amount || 0).toLocaleString()}`;
//   };

//   const getFieldValue = (order, field, fallback = 'N/A') => {
//     // Handle nested object properties
//     if (field.includes('.')) {
//       const keys = field.split('.');
//       let value = order;
//       for (const key of keys) {
//         value = value?.[key];
//         if (value === undefined || value === null) return fallback;
//       }
//       return value;
//     }
//     return order[field] || fallback;
//   };

//   if (loading) {
//     return (
//       <div className="container-fluid py-4">
//         <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
//           <div className="text-center">
//             <div className="spinner-border text-primary mb-3" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <p className="text-muted">Loading orders...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container-fluid py-4">
//       <div className="row">
//         <div className="col-12">
//           <div className="card shadow-sm">
//             <div className="card-header bg-primary text-white">
//               <div className="row align-items-center">
//                 <div className="col">
//                   <h4 className="mb-0">
//                     <i className="bi bi-cart-check me-2"></i>
//                     Vehicle Booking Orders
//                   </h4>
//                   <small>Manage customer vehicle bookings</small>
//                 </div>
//                 <div className="col-auto">
//                   <span className="badge bg-light text-primary fs-6">
//                     {orders.length} Orders
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="card-body">
//               {/* Filters and Search */}
//               <div className="row mb-4">
//                 <div className="col-md-6">
//                   <div className="input-group">
//                     <span className="input-group-text">
//                       <i className="bi bi-search"></i>
//                     </span>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Search by customer name, email, or order ID..."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-3">
//                   <select
//                     className="form-select"
//                     value={filterStatus}
//                     onChange={(e) => setFilterStatus(e.target.value)}
//                   >
//                     <option value="All">All Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Confirmed">Confirmed</option>
//                     <option value="Completed">Completed</option>
//                     <option value="Cancelled">Cancelled</option>
//                   </select>
//                 </div>
//                 <div className="col-md-3">
//                   <button 
//                     className="btn btn-outline-primary"
//                     onClick={() => {
//                       setSearchTerm('');
//                       setFilterStatus('All');
//                       fetchOrdersList();
//                       fetchStatistics();
//                     }}
//                     disabled={updating}
//                   >
//                     <i className="bi bi-arrow-clockwise me-1"></i>
//                     Refresh
//                   </button>
//                 </div>
//               </div>

//               {/* Orders Table */}
//               {orders.length === 0 ? (
//                 <div className="text-center py-5">
//                   <i className="bi bi-inbox display-1 text-muted"></i>
//                   <h4 className="text-muted mt-3">No Orders Found</h4>
//                   <p className="text-muted">
//                     {searchTerm || filterStatus !== 'All' 
//                       ? 'No orders match your current filter criteria.' 
//                       : 'No orders have been placed yet.'}
//                   </p>
//                 </div>
//               ) : (
//                 <div className="table-responsive">
//                   <table className="table table-hover">
//                     <thead className="table-light">
//                       <tr>
//                         <th>Order ID</th>
//                         <th>Customer</th>
//                         <th>Vehicle</th>
//                         <th>Rental Period</th>
//                         <th>Amount</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {orders.map((order) => (
//                         <tr key={order.id}>
//                           <td>
//                             <strong className="text-primary">
//                               {getFieldValue(order, 'id') || getFieldValue(order, 'orderId')}
//                             </strong>
//                             <br />
//                             <small className="text-muted">
//                               {formatDate(getFieldValue(order, 'createdAt') || getFieldValue(order, 'orderDate'))}
//                             </small>
//                           </td>
//                           <td>
//                             <div>
//                               <strong>
//                                 {getFieldValue(order, 'customerName') || 
//                                  getFieldValue(order, 'customer.name') || 
//                                  getFieldValue(order, 'user.name')}
//                               </strong>
//                               <br />
//                               <small className="text-muted">
//                                 {getFieldValue(order, 'customerEmail') || 
//                                  getFieldValue(order, 'customer.email') || 
//                                  getFieldValue(order, 'user.email')}
//                               </small>
//                               <br />
//                               <small className="text-muted">
//                                 {getFieldValue(order, 'customerPhone') || 
//                                  getFieldValue(order, 'customer.phone') || 
//                                  getFieldValue(order, 'user.phone')}
//                               </small>
//                             </div>
//                           </td>
//                           <td>
//                             <div>
//                               <strong>
//                                 {getFieldValue(order, 'vehicleName') || 
//                                  getFieldValue(order, 'vehicle.name')}
//                               </strong>
//                               <br />
//                               <span className="badge bg-secondary">
//                                 {getFieldValue(order, 'vehicleCategory') || 
//                                  getFieldValue(order, 'vehicle.category') || 
//                                  getFieldValue(order, 'vehicle.type')}
//                               </span>
//                             </div>
//                           </td>
//                           <td>
//                             <div>
//                               <strong>
//                                 {getFieldValue(order, 'days') || 
//                                  getFieldValue(order, 'rentalDays') || 
//                                  getFieldValue(order, 'duration')} days
//                               </strong>
//                               <br />
//                               <small className="text-muted">
//                                 {formatDate(getFieldValue(order, 'pickupDate') || getFieldValue(order, 'startDate'))} to {formatDate(getFieldValue(order, 'dropDate') || getFieldValue(order, 'endDate'))}
//                               </small>
//                               <br />
//                               <small className="text-muted">
//                                 <i className="bi bi-geo-alt"></i> {getFieldValue(order, 'pickupLocation') || getFieldValue(order, 'pickup')}
//                               </small>
//                               <br />
//                               <small className="text-muted">
//                                 <i className="bi bi-geo-alt-fill"></i> {getFieldValue(order, 'dropLocation') || getFieldValue(order, 'dropoff')}
//                               </small>
//                             </div>
//                           </td>
//                           <td>
//                             <strong className="text-success">
//                               {formatCurrency(getFieldValue(order, 'totalAmount') || getFieldValue(order, 'total') || getFieldValue(order, 'amount'))}
//                             </strong>
//                           </td>
//                           <td>
//                             <span className={`badge ${getStatusBadgeClass(order.status)}`}>
//                               {order.status}
//                             </span>
//                           </td>
//                           <td>
//                             <div className="dropdown">
//                               <button
//                                 className="btn btn-sm btn-outline-secondary dropdown-toggle"
//                                 type="button"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                                 disabled={updating}
//                               >
//                                 Actions
//                               </button>
//                               <ul className="dropdown-menu">
//                                 <li>
//                                   <button 
//                                     className="dropdown-item"
//                                     onClick={() => handleUpdateOrderStatus(order.id, 'Confirmed')}
//                                     disabled={order.status === 'Confirmed' || updating}
//                                   >
//                                     <i className="bi bi-check-circle me-2"></i>
//                                     Confirm
//                                   </button>
//                                 </li>
//                                 <li>
//                                   <button 
//                                     className="dropdown-item"
//                                     onClick={() => handleUpdateOrderStatus(order.id, 'Completed')}
//                                     disabled={order.status === 'Completed' || updating}
//                                   >
//                                     <i className="bi bi-check-all me-2"></i>
//                                     Complete
//                                   </button>
//                                 </li>
//                                 <li>
//                                   <button 
//                                     className="dropdown-item text-danger"
//                                     onClick={() => handleUpdateOrderStatus(order.id, 'Cancelled')}
//                                     disabled={order.status === 'Cancelled' || updating}
//                                   >
//                                     <i className="bi bi-x-circle me-2"></i>
//                                     Cancel
//                                   </button>
//                                 </li>
//                                 <li><hr className="dropdown-divider" /></li>
//                                 <li>
//                                   <button className="dropdown-item">
//                                     <i className="bi bi-eye me-2"></i>
//                                     View Details
//                                   </button>
//                                 </li>
//                                 <li>
//                                   <button className="dropdown-item">
//                                     <i className="bi bi-printer me-2"></i>
//                                     Print Invoice
//                                   </button>
//                                 </li>
//                                 <li>
//                                   <button 
//                                     className="dropdown-item text-danger"
//                                     onClick={() => handleDeleteOrder(order.id)}
//                                     disabled={updating}
//                                   >
//                                     <i className="bi bi-trash me-2"></i>
//                                     Delete
//                                   </button>
//                                 </li>
//                               </ul>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>

//             {/* Summary Footer */}
//             <div className="card-footer bg-light">
//               <div className="row text-center">
//                 <div className="col-md-2">
//                   <strong className="text-warning">
//                     {stats.pending || orders.filter(o => o.status === 'Pending').length}
//                   </strong>
//                   <br />
//                   <small className="text-muted">Pending</small>
//                 </div>
//                 <div className="col-md-2">
//                   <strong className="text-primary">
//                     {stats.confirmed || orders.filter(o => o.status === 'Confirmed').length}
//                   </strong>
//                   <br />
//                   <small className="text-muted">Confirmed</small>
//                 </div>
//                 <div className="col-md-2">
//                   <strong className="text-success">
//                     {stats.completed || orders.filter(o => o.status === 'Completed').length}
//                   </strong>
//                   <br />
//                   <small className="text-muted">Completed</small>
//                 </div>
//                 <div className="col-md-2">
//                   <strong className="text-danger">
//                     {stats.cancelled || orders.filter(o => o.status === 'Cancelled').length}
//                   </strong>
//                   <br />
//                   <small className="text-muted">Cancelled</small>
//                 </div>
//                 <div className="col-md-4">
//                   <strong className="text-success">
//                     {formatCurrency(stats.totalRevenue || orders.reduce((sum, order) => sum + (order.totalAmount || order.total || order.amount || 0), 0))}
//                   </strong>
//                   <br />
//                   <small className="text-muted">Total Revenue</small>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { 
  fetchOrders, 
  fetchOrdersWithFilter, 
  updateOrderStatus, 
  fetchOrderStats,
  deleteOrder 
} from '../../services/vehicleService';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [stats, setStats] = useState({
    pending: 0,
    confirmed: 0,
    completed: 0,
    cancelled: 0,
    totalRevenue: 0
  });
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchOrdersList();
    fetchStatistics();
  }, []);

  useEffect(() => {
    // Debounce search and filter
    const timeoutId = setTimeout(() => {
      if (searchTerm || filterStatus !== 'All') {
        fetchFilteredOrders();
      } else {
        fetchOrdersList();
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, filterStatus]);

  const fetchOrdersList = async () => {
    try {
      setLoading(true);
      const data = await fetchOrders();
      console.log('Received orders data:', data);
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching orders:', error);
      handleApiError(error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchFilteredOrders = async () => {
    try {
      setLoading(true);
      const data = await fetchOrdersWithFilter(
        filterStatus !== 'All' ? filterStatus : null,
        searchTerm || null
      );
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching filtered orders:', error);
      handleApiError(error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchStatistics = async () => {
    try {
      const statsData = await fetchOrderStats();
      setStats(statsData || stats);
    } catch (error) {
      console.error('Error fetching stats:', error);
      // Calculate stats from current orders if API fails
      calculateStatsFromOrders();
    }
  };

  const calculateStatsFromOrders = () => {
    const newStats = {
      pending: orders.filter(o => o.status === 'Pending').length,
      confirmed: orders.filter(o => o.status === 'Confirmed').length,
      completed: orders.filter(o => o.status === 'Completed').length,
      cancelled: orders.filter(o => o.status === 'Cancelled').length,
      totalRevenue: orders.reduce((sum, order) => sum + (order.total || 0), 0)
    };
    setStats(newStats);
  };

  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    try {
      setUpdating(true);
      await updateOrderStatus(orderId, newStatus);
      
      // Update local state
      setOrders(orders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      ));
      
      toast.success(`Order ${orderId} status updated to ${newStatus}`);
      
      // Refresh stats
      fetchStatistics();
    } catch (error) {
      console.error('Error updating order status:', error);
      handleApiError(error, 'Failed to update order status');
    } finally {
      setUpdating(false);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        setUpdating(true);
        await deleteOrder(orderId);
        
        // Remove from local state
        setOrders(orders.filter(order => order.id !== orderId));
        toast.success(`Order ${orderId} deleted successfully`);
        
        // Refresh stats
        fetchStatistics();
      } catch (error) {
        console.error('Error deleting order:', error);
        handleApiError(error, 'Failed to delete order');
      } finally {
        setUpdating(false);
      }
    }
  };

  const handleApiError = (error, defaultMessage = 'An error occurred') => {
    if (error.response?.status === 401) {
      toast.error('Session expired. Please login again.');
    } else if (error.response?.status === 403) {
      toast.error('Access denied. You may not have permission to perform this action.');
    } else if (error.response?.status === 404) {
      toast.error('Orders not found.');
    } else if (error.response?.status >= 500) {
      toast.error('Server error. Please try again later.');
    } else if (!error.response) {
      toast.error('Network error. Please check your connection.');
    } else {
      toast.error(error.response?.data?.message || error.message || defaultMessage);
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-warning text-dark';
      case 'Confirmed':
        return 'bg-primary';
      case 'Completed':
        return 'bg-success';
      case 'Cancelled':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return 'Invalid Date';
    }
  };

  const formatDateTime = (dateString) => {
    try {
      return new Date(dateString).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Invalid Date';
    }
  };

  const formatCurrency = (amount) => {
    return `Rs.${(amount || 0).toLocaleString()}`;
  };

  const getVehicleInfo = (order) => {
    if (order.items && order.items.length > 0) {
      const firstItem = order.items[0];
      return {
        name: firstItem.vehicleName || 'Unknown Vehicle',
        category: firstItem.vehicleCategory || 'N/A',
        count: order.items.length,
        allItems: order.items
      };
    }
    return {
      name: 'No vehicles',
      category: 'N/A',
      count: 0,
      allItems: []
    };
  };

  const getRentalPeriod = (order) => {
    if (order.pickupDateTime && order.returnDateTime) {
      const pickup = new Date(order.pickupDateTime);
      const returnDate = new Date(order.returnDateTime);
      const diffTime = Math.abs(returnDate - pickup);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      return {
        days: diffDays,
        pickup: order.pickupDateTime,
        return: order.returnDateTime,
        pickupLocation: order.pickupLocation || 'N/A',
        dropLocation: order.dropoffLocation || 'N/A'
      };
    }
    return {
      days: 'N/A',
      pickup: null,
      return: null,
      pickupLocation: order.pickupLocation || 'N/A',
      dropLocation: order.dropoffLocation || 'N/A'
    };
  };

  if (loading) {
    return (
      <div className="container-fluid py-4">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
          <div className="text-center">
            <div className="spinner-border text-primary mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-muted">Loading orders...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <div className="row align-items-center">
                <div className="col">
                  <h4 className="mb-0">
                    <i className="bi bi-cart-check me-2"></i>
                    Vehicle Booking Orders
                  </h4>
                  <small>Manage customer vehicle bookings</small>
                </div>
                <div className="col-auto">
                  <span className="badge bg-light text-primary fs-6">
                    {orders.length} Orders
                  </span>
                </div>
              </div>
            </div>

            <div className="card-body">
              {/* Filters and Search */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by customer name, email, phone, or order ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="All">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => {
                      setSearchTerm('');
                      setFilterStatus('All');
                      fetchOrdersList();
                      fetchStatistics();
                    }}
                    disabled={updating}
                  >
                    <i className="bi bi-arrow-clockwise me-1"></i>
                    Refresh
                  </button>
                </div>
              </div>

              {/* Orders Table */}
              {orders.length === 0 ? (
                <div className="text-center py-5">
                  <i className="bi bi-inbox display-1 text-muted"></i>
                  <h4 className="text-muted mt-3">No Orders Found</h4>
                  <p className="text-muted">
                    {searchTerm || filterStatus !== 'All' 
                      ? 'No orders match your current filter criteria.' 
                      : 'No orders have been placed yet.'}
                  </p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Vehicle(s)</th>
                        <th>Rental Period</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => {
                        const vehicleInfo = getVehicleInfo(order);
                        const rentalInfo = getRentalPeriod(order);

                        return (
                          <tr key={order.id}>
                            <td>
                              <strong className="text-primary">{order.id}</strong>
                              <br />
                              <small className="text-muted">
                                {formatDate(order.createdAt)}
                              </small>
                            </td>
                            <td>
                              <div>
                                <strong>{order.userName || 'N/A'}</strong>
                                <br />
                                <small className="text-muted">{order.userEmail || 'N/A'}</small>
                                <br />
                                <small className="text-muted">{order.customerPhone || 'N/A'}</small>
                              </div>
                            </td>
                            <td>
                              <div>
                                <strong>{vehicleInfo.name}</strong>
                                {vehicleInfo.count > 1 && (
                                  <span className="badge bg-info ms-2">+{vehicleInfo.count - 1} more</span>
                                )}
                                <br />
                                <span className="badge bg-secondary">{vehicleInfo.category}</span>
                                {vehicleInfo.allItems.length > 0 && (
                                  <div className="mt-1">
                                    <small className="text-muted">
                                      {vehicleInfo.allItems.map(item => item.vehicleName).join(', ')}
                                    </small>
                                  </div>
                                )}
                              </div>
                            </td>
                            <td>
                              <div>
                                <strong>{rentalInfo.days} days</strong>
                                <br />
                                {rentalInfo.pickup && (
                                  <small className="text-muted">
                                    {formatDateTime(rentalInfo.pickup)}
                                  </small>
                                )}
                                <br />
                                {rentalInfo.return && (
                                  <small className="text-muted">
                                    to {formatDateTime(rentalInfo.return)}
                                  </small>
                                )}
                                <br />
                                <small className="text-muted">
                                  <i className="bi bi-geo-alt"></i> {rentalInfo.pickupLocation}
                                </small>
                                {rentalInfo.dropLocation !== rentalInfo.pickupLocation && (
                                  <>
                                    <br />
                                    <small className="text-muted">
                                      <i className="bi bi-geo-alt-fill"></i> {rentalInfo.dropLocation}
                                    </small>
                                  </>
                                )}
                              </div>
                            </td>
                            <td>
                              <strong className="text-success">
                                {formatCurrency(order.total)}
                              </strong>
                              {order.subtotal && (
                                <div>
                                  <small className="text-muted">
                                    Subtotal: {formatCurrency(order.subtotal)}
                                  </small>
                                </div>
                              )}
                              {order.discountAmount > 0 && (
                                <div>
                                  <small className="text-success">
                                    Discount: -{formatCurrency(order.discountAmount)}
                                  </small>
                                </div>
                              )}
                            </td>
                            <td>
                              <span className={`badge ${getStatusBadgeClass(order.status)}`}>
                                {order.status}
                              </span>
                              {order.paymentStatus && (
                                <div className="mt-1">
                                  <small className="text-muted">
                                    Payment: {order.paymentStatus}
                                  </small>
                                </div>
                              )}
                            </td>
                            <td>
                              <div className="dropdown">
                                <button
                                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  disabled={updating}
                                >
                                  Actions
                                </button>
                                <ul className="dropdown-menu">
                                  <li>
                                    <button 
                                      className="dropdown-item"
                                      onClick={() => handleUpdateOrderStatus(order.id, 'Confirmed')}
                                      disabled={order.status === 'Confirmed' || updating}
                                    >
                                      <i className="bi bi-check-circle me-2"></i>
                                      Confirm
                                    </button>
                                  </li>
                                  <li>
                                    <button 
                                      className="dropdown-item"
                                      onClick={() => handleUpdateOrderStatus(order.id, 'Completed')}
                                      disabled={order.status === 'Completed' || updating}
                                    >
                                      <i className="bi bi-check-all me-2"></i>
                                      Complete
                                    </button>
                                  </li>
                                  <li>
                                    <button 
                                      className="dropdown-item text-danger"
                                      onClick={() => handleUpdateOrderStatus(order.id, 'Cancelled')}
                                      disabled={order.status === 'Cancelled' || updating}
                                    >
                                      <i className="bi bi-x-circle me-2"></i>
                                      Cancel
                                    </button>
                                  </li>
                                  <li><hr className="dropdown-divider" /></li>
                                  <li>
                                    <button className="dropdown-item">
                                      <i className="bi bi-eye me-2"></i>
                                      View Details
                                    </button>
                                  </li>
                                  <li>
                                    <button className="dropdown-item">
                                      <i className="bi bi-printer me-2"></i>
                                      Print Invoice
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Summary Footer */}
            <div className="card-footer bg-light">
              <div className="row text-center">
                <div className="col-md-2">
                  <strong className="text-warning">
                    {stats.pending || orders.filter(o => o.status === 'Pending').length}
                  </strong>
                  <br />
                  <small className="text-muted">Pending</small>
                </div>
                <div className="col-md-2">
                  <strong className="text-primary">
                    {stats.confirmed || orders.filter(o => o.status === 'Confirmed').length}
                  </strong>
                  <br />
                  <small className="text-muted">Confirmed</small>
                </div>
                <div className="col-md-2">
                  <strong className="text-success">
                    {stats.completed || orders.filter(o => o.status === 'Completed').length}
                  </strong>
                  <br />
                  <small className="text-muted">Completed</small>
                </div>
                <div className="col-md-2">
                  <strong className="text-danger">
                    {stats.cancelled || orders.filter(o => o.status === 'Cancelled').length}
                  </strong>
                  <br />
                  <small className="text-muted">Cancelled</small>
                </div>
                <div className="col-md-4">
                  <strong className="text-success">
                    {formatCurrency(stats.totalRevenue || orders.reduce((sum, order) => sum + (order.total || 0), 0))}
                  </strong>
                  <br />
                  <small className="text-muted">Total Revenue</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;