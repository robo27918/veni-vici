const BanList= ({attributes})=>{

    return (
        <div>
             <h2>Your Banned attributes</h2>
                <div className="attribute-container">
                    {attributes && attributes.length > 0 ?(
                    attributes.map((attrib,index)=>(
                        <li className='banned-list' key={index}>  
                        <button
                            className='banned-featues'
                        >
                            {attrib}
                        </button>
                        </li>
                    ))
                    ):(
                    <div>
                        <h3>You haven't banned any attributes yet!</h3>
                    </div>
                    )}
                </div>
        </div>
        );
}
export default BanList;
