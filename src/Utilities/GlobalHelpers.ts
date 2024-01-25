

export const sortElementsById = (element: any[]) => {
    const sortedElements = element.slice().sort((a, b) => a.id - b.id);
    return sortedElements;
}
