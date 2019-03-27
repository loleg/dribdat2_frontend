import { shallowMount, createLocalVue } from '@vue/test-utils'
import ProjectPresentation from '@/views/ProjectPresentation.vue'
import Vuex from 'vuex'

describe('ProjectPresentation.vue', () => {
    it('the project presentation contains the components summaryPitch', () => {

        const localVue = createLocalVue()

        localVue.use(Vuex)

        let store = new Vuex.Store({
            state:{
                editMode: false
            },
            actions:{
                setModeDisplay: jest.fn()
            }
        })

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
            },
            store: store,
            localVue: localVue
        })

        expect(wrapper.find('.project-title h1'))
        expect(wrapper.find('.challenge-title h2'))
        expect(wrapper.find('.summary p'))
        expect(wrapper.find('.resp-container iframe'))



    })
})
