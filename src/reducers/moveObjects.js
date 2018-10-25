function moveObjects(state, action) {
    if (!action.mousePosition) return state;
    const { x, y } = action.mousePosition;
    return {
        ...state,
        mousePosition: {x, y},
    };
}

export default moveObjects;
