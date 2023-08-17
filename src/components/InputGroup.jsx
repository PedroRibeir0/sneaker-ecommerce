
export default function InputGroup({placeholder, type, id}) {
  return (
    <div className="input-group">
        <input type={type} id={id} required spellCheck={false}/>
        <span className="placeholder">
            {placeholder}
        </span>
    </div>
  )
}
                                                  