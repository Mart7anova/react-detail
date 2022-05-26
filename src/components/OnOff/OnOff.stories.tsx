import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OnOff from './OnOff';


export default {
    title: 'OnOff',
    component: OnOff,
}as ComponentMeta<typeof OnOff>;

export const OnMode: ComponentStory<typeof OnOff> = () => <OnOff on={true} setOn={x=>x}/>
export const OffMode: ComponentStory<typeof OnOff> = () => <OnOff on={false} setOn={x=>x}/>


/*
export const ModeChanging: ComponentStory<typeof OnOff> = () =>{
    const [OnOff, setOnOff] = useState<boolean>(true)
    return <OnOff on={OnOff} setOn={setOnOff}/>
}
*/
