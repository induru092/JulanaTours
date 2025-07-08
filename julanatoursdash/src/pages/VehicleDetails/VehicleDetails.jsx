import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVehicleDetails } from '../../service/vehicleService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const VehicleDetails = () => {
    const {id} = useParams();

    const [data, setData] = useState({});
    

    useEffect(() => {
        const loadVehicleDetails = async () => {
            try {
                const vehicleData = await fetchVehicleDetails(id);
                setData(vehicleData);
            } catch (error) {
                toast.error('Error displaying vehicle details');
            }
        }
        loadVehicleDetails();
    }, [id]);
  return (
            <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={data.imageUrl} alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">Category: <span className='badge text-bg-warning'>{data.category}</span></div>
                        <h1 className="display-5 fw-bolder">{data.name}</h1>
                        <div className="fs-5 mb-5">
                            <span>Rs.{data.price}</span>
                        </div>
                        <p className="lead">{data.description}</p>
                        <div className="d-flex">
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default VehicleDetails;