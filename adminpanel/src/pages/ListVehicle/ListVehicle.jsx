import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './ListVehicle.css';
import { deleteVehicle, getVehicleList } from '../../services/vehicleService';

const ListVehicle = () => {
  const [list, setList] = useState([]);
  const fetchList = async() => {
    try {
      const data = await getVehicleList();
      setList(data);
    } catch (error) {
      toast.error('Error while reading the foods.');
    }
  }

  const removeVehicle = async (vehicleId) => {
    try {
      const success = await deleteVehicle(vehicleId);
      if (success) {
        toast.success('Vehicle removed.');
        await fetchList();
      } else {
        toast.error('Error occred while removing the vehicle.');
      }
    } catch (error) {
      toast.error('Error occred while removing the vehicle.');
    }
    console.log(error,'remove vehicle error');
  }

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="py-5 row justify-content-center">
      <div className="col-11 card">
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.imageUrl} alt="" height={48} width={48} />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>Rs.{item.price}</td>
                    <td className='text-danger'>
                      <i className='bi bi-x-circle-fill' onClick={() => removeVehicle(item.id)}></i>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListVehicle;