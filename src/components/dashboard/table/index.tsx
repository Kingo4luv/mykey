const people = [
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    name:" Oluwole Jekodunmin",
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'International Passport',
    status:'Approved',
  },
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    name:" Oluwole Jekodunmin",
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'Driver’s license',
    status:'Approved',
  },
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    name:" Oluwole Jekodunmin",
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'National ID',
    status:'Approved',
  },
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    name:" Oluwole Jekodunmin",
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'Passport',
    status:'Rejected',
  },
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    name:" Oluwole Jekodunmin",
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'International Passport',
    status:'Approved',
  },
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    name:" Oluwole Jekodunmin",
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'Driver’s license',
    status:'Approved',
  },
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    name:" Oluwole Jekodunmin",
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'National ID',
    status:'Approved',
  },
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    name:" Oluwole Jekodunmin",
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'Passport',
    status:'Approved',
  },
]

export default function Table({handleClick}: {handleClick:() => void}) {
  return (
    <div className="flex flex-col w-full mt-6">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-[#E9E9E9]">
            <table className="min-w-full divide-y divide-[#F0F0F0]">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-5 text-left text-sm font-medium text-black"
                  >
                    MyKey ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-left text-sm font-medium text-black"
                  >
                    Last update
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-left text-sm font-medium text-black"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-left text-sm font-medium text-hair"
                  >
                    Email address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-left text-sm font-medium text-hair"
                  >
                    Document uploaded
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-left text-sm font-medium text-hair"
                  >
                    Action
                  </th>
                
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person, i) => (
                  <tr key={i} onClick={handleClick} className="cursor-pointer">
                    <td className="px-6 py-4 text-sm text-hair whitespace-nowrap">
                      {person.myKeyId}
                    </td>
                    <td className="px-6 py-4 text-sm text-hair whitespace-nowrap">
                        {person.lastUpdate}
                    </td>
                    <td className="px-6 py-4 text-sm text-hair whitespace-nowrap">
                        {person.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-hair whitespace-nowrap">
                        {person.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-hair whitespace-nowrap">
                        {person.documentType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="flex text-xs space-x-1 items-center bg-light-shade-blue px-3 py-2 rounded-full">
                        <span>
                          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.33366 9.50133V10.8947C6.73027 10.6813 6.08451 10.6159 5.45059 10.7039C4.81668 10.7918 4.21312 11.0306 3.69061 11.4001C3.1681 11.7697 2.74189 12.2592 2.44777 12.8276C2.15365 13.396 2.0002 14.0267 2.00033 14.6667L0.666992 14.666C0.666785 13.8519 0.85294 13.0486 1.21119 12.3176C1.56944 11.5866 2.09028 10.9473 2.7338 10.4487C3.37732 9.95009 4.12644 9.60542 4.92376 9.44109C5.72108 9.27677 6.54543 9.29781 7.33366 9.50133ZM6.00033 8.66666C3.79033 8.66666 2.00033 6.87666 2.00033 4.66666C2.00033 2.45666 3.79033 0.666664 6.00033 0.666664C8.21033 0.666664 10.0003 2.45666 10.0003 4.66666C10.0003 6.87666 8.21033 8.66666 6.00033 8.66666ZM6.00033 7.33333C7.47366 7.33333 8.66699 6.14 8.66699 4.66666C8.66699 3.19333 7.47366 2 6.00033 2C4.52699 2 3.33366 3.19333 3.33366 4.66666C3.33366 6.14 4.52699 7.33333 6.00033 7.33333ZM10.667 11.724L12.081 10.3093L13.0243 11.2527L11.6097 12.6667L13.0243 14.0807L12.081 15.024L10.667 13.6093L9.25299 15.024L8.30966 14.0807L9.72433 12.6667L8.30966 11.2527L9.25299 10.3093L10.667 11.724Z" fill="black"/>
                          </svg>
                        </span>
                        <span>Unlink</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="pagination w-full py-4 flex justify-center items-center space-x-1">
          <button className="h-8 w-8 rounded text-white bg-hair font-bold">1</button>
          <button className="h-8 w-8 rounded text-black bg-white font-bold">2</button>
          <button className="h-8 w-8 rounded text-black bg-white font-bold">3</button>
      </div>
    </div>
  )
}
