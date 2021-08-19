import Chart from "../Chart"
const data = [
  {
    "id": "calls",
    "color": "hsl(195, 100%, 45%)",
    "data": [
      {
        "x": "Jan 21'",
        "y": 0
      },
      {
        "x": "Feb 21'",
        "y": 2000
      },
      {
        "x": "Mar 21'",
        "y": 100
      },
      {
        "x": "Apr 21'",
        "y": 4000
      },
      {
        "x": "May 21'",
        "y": 800
      },
      {
        "x": "Jun 21'",
        "y": 200
      }
    ]
  }
]
const OverviewChart = () => {
    return(
        <div className="w-full bg-white rounded border border-[#E9E9E9] p-4 md:p-8 space-y-3 mb-32">
            <h3 className="text-base md:text-lg text-hair">Volume of checks</h3>
            <div className="w-full overflow-x-auto h-100">
                <Chart data={data} />
            </div>
        </div>
    )
}

export default OverviewChart