import React  from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UncontrolledAccordion from './UncontrolledAccordion';



export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}as ComponentMeta<typeof UncontrolledAccordion>;

export const ModeChanging: ComponentStory<typeof UncontrolledAccordion> = () =>{
    return <UncontrolledAccordion titleValue={'Menu'} />
}
