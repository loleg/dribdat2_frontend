import { shallowMount } from '@vue/test-utils'
import ButtonFeedback from '@/views/InfoTeam.vue'

describe('InfoTeam.vue', () => {
    it('the page infoteam contains the button to a feedback ', () => {
        const project = [
            {
                phase: 'test'
            }
        ];
        const wrapper = shallowMount(ButtonFeedback, {
            propsData: { project }
        });
        expect(wrapper.find('.button-copy'));
    })
})
