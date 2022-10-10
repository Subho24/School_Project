export const getStyles = (data, id, month, noOpacity) => {
    return {
        background: data[month] === 50 ? '#feeb8b' : data[month] === 10 ? '#a50027' : '#006837', opacity: noOpacity === id ? '100%' : noOpacity === '' ? null :  '30%'
    }
} 