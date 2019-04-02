import { shallowMount, createLocalVue } from '@vue/test-utils'
import ChallengePitch from '@/components/ProjectPresentation/ChallengePitch.vue'
import Vuex from 'vuex'

describe('ChallengePitch.vue youtube', () => {
    it('iframe loaded', () => {
        const pitch = 'https://www.youtube.com/watch?v=zihJTimjdls'
        const wrapper = shallowMount(ChallengePitch, {
            propsData: {
                pitch
            }
        })
        expect(wrapper.isVisible())

    })
})

describe('ChallengePitch.vue daylimotion', () => {
    it('iframe loaded', () => {
        const pitch = 'https://www.dailymotion.com/video/xkq3cr'
        const wrapper = shallowMount(ChallengePitch, {
            propsData: {
                pitch
            }
        })
        expect(wrapper.isVisible())

    })
})

describe('ChallengePitch.vue other', () => {
    it('iframe loaded', () => {
        const pitch = 'https://example.com'
        const wrapper = shallowMount(ChallengePitch, {
            propsData: {
                pitch
            }
        })
        expect(wrapper.isVisible())

    })
})

describe('ChallengePitch shows input file in edit mode', () => {
    it('input visible', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)

        let store = new Vuex.Store({
            state: {
                editMode: true
            },
            actions: {
                setModeEdit: jest.fn()
            }
        })
        const pitch = 'https://example.com'
        const wrapper = shallowMount(ChallengePitch, {
            propsData: {
                pitch
            },
            store: store,
            localVue: localVue
        })

        expect(wrapper.find('input-pitch input'))
    })
})
