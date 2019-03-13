import {mount} from '@vue/test-utils'
import ProjectPresentation from '@/views/ProjectPresentation.vue'

describe('ProjectPresentation.vue', () => {
    it('the project presentation contains the link to a media social', () => {

        const wrapper = mount(ProjectPresentation)

        expect(wrapper.find(' .projectPresentation .contentLeft .LinkSocial .toLink').text()).toEqual('www.facebook.com');


    })
})
