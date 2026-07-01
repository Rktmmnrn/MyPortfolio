import '../../styles/styleCube.css';

const Cube3D = () => (
  <div className="cube3D">
    <div className="glow-ring" />
    <div className="scene">
      <div className="cube">
        <div className="face front"><strong>CODE_SLAYER</strong></div>
        <div className="face back">
          <a href="#Contct" className="face-button">PING_ME()</a>
        </div>
        <div className="face right">DIGITAL_ARCHITECT</div>
        <div className="face left">HIDDEN_LAYER</div>
        <div className="face top">STANDBY_MODE</div>
        <div className="face bottom">MISSION_READY</div>
      </div>
    </div>
  </div>
);

export default Cube3D;
