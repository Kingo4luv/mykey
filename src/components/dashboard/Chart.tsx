import { ResponsiveLine } from "@nivo/line"

const Chart = ({data}:{data: { id: string; color: string; data: { x: string; y: number; }[]; }[]}) => {
    return(
        <ResponsiveLine
            data={data}
            margin={{ top: 30, right: 20, bottom: 50, left: 50 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            yFormat=" >-.2f"
            curve="cardinal"
            colors="hsl(195, 100%, 45%)"
            axisTop={null}
            axisRight={null}
            enableGridX={false}
            pointSize={18}
            pointColor= 'hsl(195, 100%, 45%)'
            pointBorderWidth={2}
            pointBorderColor='hsl(195, 100%, 45%)'
            pointLabelYOffset={-12}
            useMesh={true}
            theme={{
                "textColor": "#5D5B5B",
                "fontFamily": "Plus Jakarta Sans, sans-serif",
                "fontSize": 12
            }}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default Chart