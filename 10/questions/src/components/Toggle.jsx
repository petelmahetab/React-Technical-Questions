import { useState } from "react";

export const useToggle=(initial=false)=>{
      const [value, setValue] = useState(initial);
      const toggle=()=>setValue((pre)=>!pre)
      return [value,toggle];
}

// export default test;