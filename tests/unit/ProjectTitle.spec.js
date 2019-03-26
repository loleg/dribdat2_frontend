import { shallowMount } from '@vue/test-utils'
import ProjectTitle from "../../src/components/ProjectPresentation/ProjectTitle";

describe('ProjectTitle.vue', () => {
    it('Title project passed', () => {

        const title = '1'
        const wrapper = shallowMount(ProjectTitle, {
            propsData: {title}
        })
        expect(wrapper.find('.project-title h1').text()).toMatch(title)
    })
})
