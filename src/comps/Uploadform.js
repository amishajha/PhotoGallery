import React,{useState} from 'react';
import ProgressBar from './ProgressBar';
const Uploadform=()=>{
    const [file, setFile]= useState(null);
    const [error,setError]=useState(null);
    const types=['image/png','image/jpeg'];
    const changeHandler=(e)=>{
      
        let selected=e.target.files[0];
       if(selected&&types.includes(selected.type)){
           setFile(selected);
           setError('');
       }else{
           setFile(null);
           setError('please select correct image');
       }
    }
return (
    <form>
        <input type="file"onChange={changeHandler}/>
        <div className="output">
            {error && <div className="error">{error }</div>}
               { file && <div>{ file.name }</div> }
               { file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
    </form>
)
}

export default Uploadform;