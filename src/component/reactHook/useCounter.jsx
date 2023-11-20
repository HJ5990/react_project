import React, { useState } from 'react';

const useCounter = (initvalue) => {
    const [count, setCount] = useState(initvalue);

    const inceaseCount = setCount((count) => count + 1);
    const decreaseCount = setCount((count) => count - 1);

    return [count, inceaseCount, decreaseCount]
};

export default useCounter;