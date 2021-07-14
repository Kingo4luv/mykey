const people = [
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'International Passport',
    status:'Approved',
  },
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'Driver’s license',
    status:'Approved',
  },
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'National ID',
    status:'Approved',
  },
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'Passport',
    status:'Rejected',
  },
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'International Passport',
    status:'Approved',
  },
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'Driver’s license',
    status:'Approved',
  },
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'National ID',
    status:'Approved',
  },
  {
    myKeyId: '112233445',
    lastUpdate: 'May 07, 16:31:19',
    dateReviewed: 'May 07, 16:31:19',
    email: 'Oluwolejekodunmi@gmail.com',
    documentType: 'Passport',
    status:'Approved',
  },
]

export default function Table() {
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
                    Date Reviewed
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
                    Status
                  </th>
                
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 text-sm text-hair whitespace-nowrap">
                      {person.myKeyId}
                    </td>
                    <td className="px-6 py-4 text-sm text-hair whitespace-nowrap">
                        {person.lastUpdate}
                    </td>
                    <td className="px-6 py-4 text-sm text-hair whitespace-nowrap">
                        {person.dateReviewed}
                    </td>
                    <td className="px-6 py-4 text-sm text-hair whitespace-nowrap">
                        {person.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-hair whitespace-nowrap">
                        {person.documentType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`w-20 block text-center leading-5 text-xs rounded py-1 border ${person.status === "Approved" ? 'text-[#5CC328] border-[#3DB302] bg-[#F2FCEE]' : 'text-[#FF0606] border-[#FF0606] bg-[#FFF5F5]'}`}>
                        {person.status}
                      </span>
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
