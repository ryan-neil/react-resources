# Fetching Data Logic

- Using local storage to store API data
- Rendering the data being returned from local storage
- Using custom `useFetch` hook
- Using custom `useLocalStorage` hook

### useState vs. useMemo vs. useEffect

**useState** is causing a re-render on the call of the setState method (second element in the array returned). It does not have any dependencies like useMemo or useEffect.

**useMemo** only recalculates a value if the elements in its dependency array change (if there are no dependencies - i.e. the array is empty, it will recalculate only once). If the array is left out, it will recalculate on every render. Calling the function does not cause a re-render. Also it runs during the render of the component and not before.

**useEffect** is called after each render, if elements in its dependency array have changed or the array is left out. If the array is empty, it will only be run once on the initial mount (and unmount if you return a cleanup function).

### 2 Common Use Cases of useMemo:

1. When you want to make a slow function wrap inside `useMemo` so that doesn't re-compute every single time you render your component and it only computed when you actually need the value from that function since the inputs actually change.

2. Whenever you want to make sure the reference of an object or an array is exactly the same as it was the last time you rendered if none of the internal workings changed, you're gonna want to use `useMemo` here to make sure that you only update the reference of that object whenever the actual contents of the object change instead of updating every single time you render.
