import { z } from "zod"

function capitalize(string){
    string = string
      .trim().split(' ')
      .filter(str=> str != '')
      .map(item=>{
        return item.charAt(0).toUpperCase() 
              + item.slice(1).toLowerCase()
      }).join(' ')
    return string
  }
  
const schema = z.object({
    firstName: z.string()
        .nonempty('This field is required')
        .transform(firstName => capitalize(firstName)),
    lastName: z.string()
        .nonempty('This field is required') 
        .transform(lastName=> capitalize(lastName)),
    email: z.string()
        .nonempty('Email is required')
        .email('Invalid email format'),
    zipCode: z.string()
        .nonempty('Zip Code is required'),
    street: z.string()
      .nonempty('Address is required')
      .transform(street=> capitalize(street)),
    state:z.string()
        .nonempty('State is required'),
    city: z.string()
        .nonempty('City is required'),
    phone: z.string()
        .nonempty('Phone number is required'),
    methodRadio: z.string(),
    paymentRadio: z.string(),
    cardNumber: z.string()
        .nonempty('Card number is required'),
    cardExpirationDate: z.string()
        .nonempty('Expiration date is required'),
    cardCVV: z.string()
        .nonempty('Security code is required'),
    comment: z.string().optional(),
    terms: z.boolean()
        .refine(terms=> terms, 'You need to accept the terms')
})

export default schema