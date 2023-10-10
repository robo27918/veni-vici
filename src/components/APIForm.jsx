const APIForm = ({onSubmit})=>{
    return (
        <div>
            <form className="form-container"></form>
            <button type="submit" className="button" onClick={onSubmit}>Get random Art</button>

        </div>
    )
}
export default APIForm;