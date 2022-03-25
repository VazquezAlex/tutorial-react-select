import React, { useState } from 'react';
import Select from 'react-select';

import './Supplier.css'

const suppliers = [
    { label: 'Facebook', value: 'Facebook' },
    { label: 'Instagram', value: 'Instagram' },
    { label: 'YouTube', value: 'YouTube' },
]

const DBSuppliers = ['Facebook', 'Instagram', 'YouTube'];

const DBSuppliers2 = [
    { id: 123, name: 'Facebook', adress: 'FB Address' },
    { id: 124, name: 'Instagram', adress: 'IG Address' },
    { id: 125, name: 'Youtube', adress: 'YT Address' },
]

export const Suppliers = () => {

    const handleSelectChange = ( event ) => {
        console.log(event);
    }

    return (
        <div className = " Suppliers-container ">
            <Select
                // defaultValue = { suppliers[0] }
                options = { DBSuppliers2.map(sup => ({ label: sup.name, value: sup.id })) }
                onChange = { handleSelectChange }
            />
        </div>
    )
}
