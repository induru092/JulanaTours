import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVehicle } from '../../services/vehicleService';

const AddVehicle = () => {
    const [image, setImage] = useState(false); // Changed from false to null
    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Sedan' // Changed from 'Briyani' to vehicle category
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (!image) {
            toast.error('Please select an image.');
            return;
        }
        try {
            await addVehicle(data, image);
            toast.success('Vehicle added successfully.');
            setData({
                name: '',
                description: '',
                category: 'Sedan',
                price: ''
            });
            setImage(null);
        } catch (error) {
            toast.error('Error adding vehicle.');
            console.error(error);
        }
    }

    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-4">
                    <div className="card-body">
                        <h2 className="mb-4">Add Vehicle</h2>
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    <img 
                                        src={image ? URL.createObjectURL(image) : assets.upload} 
                                        alt="Vehicle preview" 
                                        width={98} 
                                        style={{ cursor: 'pointer' }}
                                    />
                                </label>
                                <input 
                                    type="file" 
                                    className="form-control" 
                                    id="image" 
                                    hidden 
                                    onChange={(e) => setImage(e.target.files[0])} 
                                    accept="image/*"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    placeholder='sedan'
                                    className="form-control" 
                                    id="name" 
                                    required 
                                    name='name' 
                                    onChange={onChangeHandler} 
                                    value={data.name}
                                />
                            </div>        
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea 
                                    className="form-control" 
                                    placeholder='write content here...'
                                    id="description" 
                                    rows="5" 
                                    required 
                                    name='description' 
                                    onChange={onChangeHandler} 
                                    value={data.description}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <select 
                                    name="category" 
                                    id="category" 
                                    className='form-control' 
                                    onChange={onChangeHandler} 
                                    value={data.category}
                                >
                                    <option value="Sedan">Sedan</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Truck">Truck</option>
                                    <option value="Motorcycle">Motorcycle</option>
                                    <option value="Van">Van</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input 
                                    type="number" 
                                    name="price" 
                                    id="price" 
                                    placeholder='Rs.'
                                    className='form-control' 
                                    onChange={onChangeHandler} 
                                    value={data.price}
                                    min="0"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddVehicle;