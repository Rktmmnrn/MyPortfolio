type VectorProps = {
    nameVector: string;
    style?: React.CSSProperties;
};

const Vector = ({nameVector, style}: VectorProps) =>{
    return (
        <img src={nameVector} alt="vector" style={style} />
    )
}

export default Vector;