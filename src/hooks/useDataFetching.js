import { useState, useEffect } from 'react';

function useDataFetching( dataSource ) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    
    return [];
}

export default useDataFetching;