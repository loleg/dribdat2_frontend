import {shallowMount} from '@vue/test-utils'
import ChallengePitch from '@/components/ProjectPresentation/ChallengePitch.vue'

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
