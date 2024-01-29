import { useState } from "react";
const Comment = ({ comments }) => {
    const [visible, setVisible] = useState(true)
    return (
        <>

            <div style={{ flex: 1, flexDirection: 'column' }}>
                <img src={comments.author.avatar} style={{ width: '100px', height: '100px' }}></img>
                <h3>{comments.author.name}</h3>
            </div>
            <div style={{visible:'hidden'}}>
                <p>{comments.text}</p>
            </div>
            <div style={{ paddingLeft: '20px' }}>
                {comments.replies?.map((e) => { return <Comment comments={e} /> }
                )}
            </div>
        </>

    )
}
export default Comment;