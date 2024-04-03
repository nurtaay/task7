import React, { useState, useEffect } from 'react';

const PerformanceAnalysis = () => {
    const [appLoadTime, setAppLoadTime] = useState(0);
    useEffect(() => {
        const fetchPerformanceData = () => {
            const { loadEventEnd, navigationStart } = window.performance.timing;
            const appLoadTime = loadEventEnd - navigationStart;
            setAppLoadTime(appLoadTime);
        };

        fetchPerformanceData();
    }, []);

    return (
        <div>
            <h1>Load Time</h1>
            <div>
                <h2>Application Load Time: {appLoadTime} milliseconds</h2>
            </div>
        </div>
    );
};

export default PerformanceAnalysis;
