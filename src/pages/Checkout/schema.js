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
        .nonempty('Zip Code is required')
        .max(8 ,'Invalid Zip Code')
        .refine(zip=> !isNaN(zip), 'Invalid Zip Code'),
    street: z.string()
      .nonempty('Address is required')
      .transform(street=> capitalize(street))
})

export default schema