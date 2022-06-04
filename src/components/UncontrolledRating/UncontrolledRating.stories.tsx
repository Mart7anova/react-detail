import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledRating} from './UncontrolledRating';


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
}as ComponentMeta<typeof UncontrolledRating>;

export const ModeChanging: ComponentStory<typeof UncontrolledRating> = () =>{
    return <UncontrolledRating/>
}
