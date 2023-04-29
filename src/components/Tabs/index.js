import React,{useState} from 'react'
import Tabs from "./Tabs"
import {tabLable} from "./constant";

const Tabcomponents = () => {
    const [activeTab, setactiveTab] = useState(tabLable.CANCEL_AT_ANY_TIME);

    const onClickTab= (tab) => {
        setactiveTab(tab);
    }
  return (
    <div> 
       <Tabs activeTabName={activeTab} onClickTab={onClickTab} />
    </div>
  )
}

export default Tabcomponents;