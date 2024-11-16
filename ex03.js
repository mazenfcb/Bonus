const setOne = arr => [...new Set(arr)];

const getRidOf = (tab, ...val) => tab.filter(item => !val.includes(item));