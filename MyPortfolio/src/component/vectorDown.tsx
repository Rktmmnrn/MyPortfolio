import { hover, motion } from 'framer-motion'

type VectorProps = {
    nameVector: string;
    style?: React.CSSProperties;
};

const VectorDown = ({nameVector, style}: VectorProps) =>{
    return (
        <motion.img
        src={nameVector}
        alt="vector"
        variants={{
            hover: {
                rotateY: 360,
                y: 5,
                transition: { duration: 0.3 },
            },
        }}
        style={style}
        />
    )
}

export default VectorDown;