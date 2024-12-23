import React, { useEffect, useState } from 'react';
import fetchConfig from './utils/fetchConfig'; // Adjust path if needed

const SystemConfig = () => {
    const [systemConfig, setSystemConfig] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSystemConfig = async () => {
            try {
                const config = await fetchConfig('system'); // Fetch 'system' config
                setSystemConfig(config);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchSystemConfig();
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!systemConfig) return <div>Loading...</div>;

    return (
        <div>
            <h1>System Name: {systemConfig.system.name}</h1>
            <p>Protocol: {systemConfig.system.protocol}</p>
            <p>Logging Level: {systemConfig.system.logging_level}</p>
        </div>
    );
};

export default SystemConfig;