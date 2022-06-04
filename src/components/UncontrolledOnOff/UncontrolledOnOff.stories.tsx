import React  from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UncontrolledOnOff from './UncontrolledOnOff';



export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}as ComponentMeta<typeof UncontrolledOnOff>;

export const OnModeChanging: ComponentStory<typeof UncontrolledOnOff> = () =>{
    return <UncontrolledOnOff defaultValue/>
}
export const OffModeChanging: ComponentStory<typeof UncontrolledOnOff> = () =>{
    return <UncontrolledOnOff />
}
