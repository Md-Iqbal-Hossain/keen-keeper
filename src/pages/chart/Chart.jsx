
import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { CallFriendsContext } from "../../components/context/CallFriendsContext";

const Chart = () => {
    const { timelineEvents } = useContext(CallFriendsContext);

    const counts = {
        Text: 0,
        Call: 0,
        Video: 0
    };

    timelineEvents.forEach(event => {
        if (counts[event.type] !== undefined) {
            counts[event.type]++;
        }
    });

    const chartData = [
        { name: 'Call', value: counts.Call, color: '#244D3F' },
        { name: 'Text', value: counts.Text, color: '#8B5CF6' },
        { name: 'Video', value: counts.Video, color: '#34A853' }
    ];

    const hasData = timelineEvents.length > 0;

    return (
        <div className="w-full bg-slate-50 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-slate-800 mb-6">Friendship Analytics</h1>
                
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 min-h-[400px]">
                    <h3 className="text-emerald-800 font-semibold mb-4">By Interaction Type</h3>
                    
                    {!hasData ? (
                        <div className="h-64 flex items-center justify-center text-slate-400 italic">
                            No data available yet. Start checking in with friends!
                        </div>
                    ) : (
                        <div className="h-80 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        paddingAngle={8}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                        contentStyle={{ borderRadius: '10px', border: 'none' }}
                                    />
                                    <Legend 
                                        verticalAlign="bottom" 
                                        height={36} 
                                        iconType="circle"
                                        formatter={(value) => <span className="text-slate-500 font-medium ml-1">{value}</span>}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Chart;