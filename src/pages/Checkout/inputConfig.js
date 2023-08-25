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
    ],
    shipMethods:[
        {
            price: 4.99,
            name: 'USPS 1st Class With Tracking',
            minDays: 5,
            maxDays: 13,
            id: 'm1'
        },
        {
            price: 9.00,
            name: 'USPS PRIORITY With Tracking',
            minDays: 5,
            maxDays: 10,
            id: 'm2'
        },
    ],
    payment: [
        {
            placeholder: 'Card Number',
            id: 'cardNumber',
            type: 'text',
            mask: '9999 9999 9999 9999'
        },
        {
            placeholder: 'Card Expiration Date',
            id: 'cardExpirationDate',
            type: 'text',
            mask: '99/99'
        },
        {
            placeholder: 'Card Security Code',
            id: 'cardCVV',
            type: 'password',
            mask: '999'
        },
    ]
}

export default inputConfig