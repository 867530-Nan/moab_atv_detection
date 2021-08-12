const DetectionsHeader = ({detectionInfo}) => (
  <div style={{display: "flex", justifyContent: "flex-start"}}>
    <p style={{fontSize: 46, margin: '10px 0'}}>
      {detectionInfo} Events Found
    </p>
  </div>
)

export default DetectionsHeader