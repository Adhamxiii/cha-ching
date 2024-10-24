"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, Tooltip, Treemap } from "recharts";


const TreeMap = () => {

    const treemapData = [
        {
            name: 'Stocks',
            children: [
                { name: 'Technology', size: 4000 },
                { name: 'Healthcare', size: 3000 },
                { name: 'Finance', size: 2000 },
                { name: 'Consumer Goods', size: 1000 },
            ],
        }, {
            name: "Bonds",
            children: [
                { name: 'Government', size: 3000 },
                { name: 'Corporate', size: 2000 },
                { name: 'Municipal', size: 1000 },
            ],
        },
        {
            name: "Real Estate",
            children: [
                { name: 'Residential', size: 2000 },
                { name: 'Commercial', size: 1500 },
            ],
        },
        {
            name: "Cash",
            children: [
                { name: 'Savings', size: 1000 },
                { name: 'Money Market', size: 500 },
            ],
        },
    ]

    const data = [
        {
            name: 'axis',
            children: [
                { name: 'Axes', size: 1302 },
                { name: 'Axis', size: 24593 },
                { name: 'AxisGridLine', size: 652 },
                { name: 'AxisLabel', size: 636 },
                { name: 'CartesianAxes', size: 6703 },
            ],
        },
        {
            name: 'controls',
            children: [
                { name: 'AnchorControl', size: 2138 },
                { name: 'ClickControl', size: 3824 },
                { name: 'Control', size: 1353 },
                { name: 'ControlList', size: 4665 },
                { name: 'DragControl', size: 2649 },
                { name: 'ExpandControl', size: 2832 },
                { name: 'HoverControl', size: 4896 },
                { name: 'IControl', size: 763 },
                { name: 'PanZoomControl', size: 5222 },
                { name: 'SelectionControl', size: 7862 },
                { name: 'TooltipControl', size: 8435 },
            ],
        },
        {
            name: 'data',
            children: [
                { name: 'Data', size: 20544 },
                { name: 'DataList', size: 19788 },
                { name: 'DataSprite', size: 10349 },
                { name: 'EdgeSprite', size: 3301 },
                { name: 'NodeSprite', size: 19382 },
                {
                    name: 'render',
                    children: [
                        { name: 'ArrowType', size: 698 },
                        { name: 'EdgeRenderer', size: 5569 },
                        { name: 'IRenderer', size: 353 },
                        { name: 'ShapeRenderer', size: 2247 },
                    ],
                },
                { name: 'ScaleBinding', size: 11275 },
                { name: 'Tree', size: 7147 },
                { name: 'TreeBuilder', size: 9930 },
            ],
        },
        {
            name: 'events',
            children: [
                { name: 'DataEvent', size: 7313 },
                { name: 'SelectionEvent', size: 6880 },
                { name: 'TooltipEvent', size: 3701 },
                { name: 'VisualizationEvent', size: 2117 },
            ],
        },
        {
            name: 'legend',
            children: [
                { name: 'Legend', size: 20859 },
                { name: 'LegendItem', size: 4614 },
                { name: 'LegendRange', size: 10530 },
            ],
        },
        {
            name: 'operator',
            children: [
                {
                    name: 'distortion',
                    children: [
                        { name: 'BifocalDistortion', size: 4461 },
                        { name: 'Distortion', size: 6314 },
                        { name: 'FisheyeDistortion', size: 3444 },
                    ],
                },
                {
                    name: 'encoder',
                    children: [
                        { name: 'ColorEncoder', size: 3179 },
                        { name: 'Encoder', size: 4060 },
                        { name: 'PropertyEncoder', size: 4138 },
                        { name: 'ShapeEncoder', size: 1690 },
                        { name: 'SizeEncoder', size: 1830 },
                    ],
                },
                {
                    name: 'filter',
                    children: [
                        { name: 'FisheyeTreeFilter', size: 5219 },
                        { name: 'GraphDistanceFilter', size: 3165 },
                        { name: 'VisibilityFilter', size: 3509 },
                    ],
                },
                { name: 'IOperator', size: 1286 },
                {
                    name: 'label',
                    children: [
                        { name: 'Labeler', size: 9956 },
                        { name: 'RadialLabeler', size: 3899 },
                        { name: 'StackedAreaLabeler', size: 3202 },
                    ],
                },
                {
                    name: 'layout',
                    children: [
                        { name: 'AxisLayout', size: 6725 },
                        { name: 'BundledEdgeRouter', size: 3727 },
                        { name: 'CircleLayout', size: 9317 },
                        { name: 'CirclePackingLayout', size: 12003 },
                        { name: 'DendrogramLayout', size: 4853 },
                        { name: 'ForceDirectedLayout', size: 8411 },
                        { name: 'IcicleTreeLayout', size: 4864 },
                        { name: 'IndentedTreeLayout', size: 3174 },
                        { name: 'Layout', size: 7881 },
                        { name: 'NodeLinkTreeLayout', size: 12870 },
                        { name: 'PieLayout', size: 2728 },
                        { name: 'RadialTreeLayout', size: 12348 },
                        { name: 'RandomLayout', size: 870 },
                        { name: 'StackedAreaLayout', size: 9121 },
                        { name: 'TreeMapLayout', size: 9191 },
                    ],
                },
                { name: 'Operator', size: 2490 },
                { name: 'OperatorList', size: 5248 },
                { name: 'OperatorSequence', size: 4190 },
                { name: 'OperatorSwitch', size: 2581 },
                { name: 'SortOperator', size: 2023 },
            ],
        },
    ];

    return (
        <Card className="bg-purple-50">
            <CardHeader>
                <CardTitle>Asset Allocation Treemap</CardTitle>
                <CardDescription>
                    Hierarchical view of your investment portfolio.
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <Treemap
                        data={data}
                        dataKey="size"
                        aspectRatio={4 / 3}
                        stroke="#fff"
                        fill="#8884d8"
                        width={535}
                        height={300}
                    >
                        <Tooltip content={<CustomTooltip active={false} payload={[]} label={''} />} />
                    </Treemap>

                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

const CustomTooltip = ({ active, payload, label }: {
    active: boolean;
    payload: any[];
    label: string;
}) => {
    if (active && payload && payload.length) {
        return <div className="bg-white border border-gray-300 shadow rounded">
            <p className="font-bold">{`${payload[0].payload.name} : ${payload[0].value}`}</p>
        </div>;
    }
    return null;
};

export default TreeMap;