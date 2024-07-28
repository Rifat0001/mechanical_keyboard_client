import React, { useState, useEffect } from 'react';
import '../../../style.css'
import { Fade } from 'react-awesome-reveal';
const Offer: React.FC = () => {
    // Set initial countdown in seconds (e.g., 1 hour = 3600 seconds)
    const [totalTime, setTotalTime] = useState<number>(152600); // Example: 1 hour

    const getTimeUnits = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return { hrs, mins, secs };
    };

    const [time, setTime] = useState(getTimeUnits(totalTime));

    useEffect(() => {
        // Update countdown every second
        const interval = setInterval(() => {
            setTotalTime((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(interval); // Stop interval if time runs out
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setTime(getTimeUnits(totalTime));
    }, [totalTime]);

    return (
        <section className=' flex flex-col offer-background justify-center items-center'>
            <div>
                <h2 className="lg:text-4xl text-2xl font-bold text-center text-white mb-8">Our Grand Sale <span className="" >Will be Start in</span> </h2>
            </div>
            <Fade delay={1e2} cascade damping={1e-1}>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-4 bg-violet-500 rounded-box text-white">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": time.hrs }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-4 bg-violet-500 rounded-box text-white">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": time.mins }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-4 bg-violet-500 rounded-box text-white">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": time.secs }}></span>
                        </span>
                        sec
                    </div>
                </div></Fade>
        </section>
    );
};

export default Offer;
