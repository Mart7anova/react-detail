import {ComponentMeta, Story} from '@storybook/react';
import {Clock, ClockPropsType} from './Clock';

export default {
    title: 'components/Clock',
    component: Clock,
} as ComponentMeta<typeof Clock>;


const Template: Story<ClockPropsType> = (args) => <Clock {...args}/>

export const BaseDigitalExample = Template.bind({})
BaseDigitalExample.args = {
    mode: 'digital'
}
export const BaseAnalogExample = Template.bind({})
BaseAnalogExample.args = {
    mode: 'analog'
}


// export const ModeChanging: Story<AccordionPropsType> = (args) => {
//     const [value, setValue] = useState<boolean>(true)
//     return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
// }
// ModeChanging.args = {
//     titleValue: 'Users',
//     collapsed: false,
//     item: [
//         {title: 'Dima', value: '1'},
//         {title: 'Misha', value: '2'},
//         {title: 'Ira', value: '3'},
//     ]
// }
