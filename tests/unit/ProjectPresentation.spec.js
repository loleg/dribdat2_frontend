import { shallowMount } from '@vue/test-utils'
import ProjectPresentation from '@/views/ProjectPresentation.vue'

describe('ProjectPresentation.vue', () => {
    it('the project presentation contains the components summaryPitch', () => {

        const project = {
            name: 'name',
            summary: 'summary',
            challenge: {
                name: 'challengeName'
            },
            pitch: 'http://example.com'
        }
        const wrapper = shallowMount(ProjectPresentation,{
            propsData: {
                project
            }
        })

        expect(wrapper.find('.project-title h1'))
        expect(wrapper.find('.challenge-title h2'))
        expect(wrapper.find('.summary p'))
        expect(wrapper.find('.resp-container iframe'))



    })
})
