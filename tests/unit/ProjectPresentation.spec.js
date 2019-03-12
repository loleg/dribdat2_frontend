import {mount} from '@vue/test-utils'
import ProjectPresentation from '@/views/ProjectPresentation.vue'

describe('ProjectPresentation.vue', () => {
    it('the project presentation contains the components summaryPitch', () => {

        const wrapper = mount(ProjectPresentation)

        expect(wrapper.find('.projectPresentation .textSummary p').html()).toEqual('<p>Nihil est enim virtute amabilius</p>');


    })
})
