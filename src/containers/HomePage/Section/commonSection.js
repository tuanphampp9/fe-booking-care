const cssArrow = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    zIndex: 1,
    borderRadius: '8px',
    boxShadow: 'rgb(201, 236, 240) 2px 2px 5px',
    borderColor: 'rgb(181, 231, 237)',
    backgroundColor: '#fff',
    border: '1px solid rgb(181, 231, 237)',
}
export function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, ...cssArrow }}
            onClick={onClick}
        />
    );
}

export function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, ...cssArrow }}
            onClick={onClick}
        />
    );
}