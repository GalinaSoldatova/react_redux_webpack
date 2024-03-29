export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState) {
      return JSON.parse(serializedState);
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

// saveState to localStorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) { console.log('Error setItem to LocalStorage'); }
};
