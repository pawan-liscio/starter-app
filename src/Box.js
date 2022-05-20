
function RenderBox (props){
    const {onClick, idx, val, won} = props
    const setBox = ()=>!val && onClick(idx)
    const classList = `box${won?' won':''}`
    return <div className={classList} key={`box_${idx}`} onClick={setBox}>{val}</div>
}


export default RenderBox;