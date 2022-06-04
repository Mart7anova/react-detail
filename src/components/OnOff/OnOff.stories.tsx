import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OnOff from './OnOff';
import {action} from '@storybook/addon-actions';


export default {
    title: 'OnOff',
    component: OnOff,
}as ComponentMeta<typeof OnOff>;

const callBack = action('clicked')

export const OnMode: ComponentStory<typeof OnOff> = () => <OnOff on={true} setOn={callBack}/>
export const OffMode: ComponentStory<typeof OnOff> = () => <OnOff on={false} setOn={callBack}/>

export const ModeChanging: ComponentStory<typeof OnOff> = () =>{
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} setOn={setValue}/>
}
