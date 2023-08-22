const inputConfig = {
    shipping: [
        {
            placeholder: 'First Name',
            id: 'firstName',
            type: 'text',
        },
        {
            placeholder: 'Last Name',
            id: 'lastName',
            type: 'text',
        },
        {
            placeholder: 'Email Address',
            id: 'email',
            type: 'email',
        },
        {
            placeholder: 'Zip/Postal Code',
            id: 'zipCode',
            type: 'text',
            mask: '99999-999'
        },
        {
            placeholder: 'Street Address',
            id: 'street',
            type: 'text',
        },
        {
            placeholder: 'State/Province',
            id: 'state',
            type: 'text',
        },
        {
            placeholder: 'City',
            id: 'city',
            type: 'text',
        },
        {
            placeholder: 'Phone',
            id: 'phone',
            type: 'tel',
            mask: '99 99999-9999'
        }
    ]
}

export default inputConfig