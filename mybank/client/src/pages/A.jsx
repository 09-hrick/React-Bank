import React from 'react'


const A = (props) => {
  return (
    <div style={{display:'flex'}}>
                 <tr className="bg-white border-b">
              <td style={{width:'25vw',textAlign:'center'}} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {props.from}
              </td>
              <td style={{width:'25vw',textAlign:'center'}} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {props.to}
              </td>
              <td style={{width:'25vw',textAlign:'center'}} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {props.amount}
              </td>
              <td style={{width:'25vw',textAlign:'center'}} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {props.date}
              </td>
            </tr>
    </div>
  )
}

export default A
