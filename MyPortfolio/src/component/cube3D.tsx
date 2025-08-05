import '../styles/styleCube.css'

const cube3D = () => {
  return (
    <div className="cube3D">
      <div className="glow-ring"></div>
      <div className="scene">
        <div className="cube">
          <div className="face front">⚡ <strong style={{ marginLeft: 8 }}>CODE SLAYER</strong></div>
          <div className="face back"><a href="#"><button>FULL ACCESS</button></a></div>
          <div className="face right">🧠 DIGITAL ARCHITECT</div>
          <div className="face left">👁 HIDDEN LAYER</div>
          <div className="face top">🌐 STANDBY MODE</div>
          <div className="face bottom">📡 MISSION READY</div>
        </div>
      </div>
    </div>
  );
}

export default cube3D;