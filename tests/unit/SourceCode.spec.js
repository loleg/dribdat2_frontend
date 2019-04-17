import { shallowMount } from '@vue/test-utils'
import SourceCode from '@/components/InfoTeam/SourceCode.vue'

describe('SourceCode.vue', () => {
    it('the button contain the link of the source code', () => {

        const wrapper = shallowMount(SourceCode)

        expect(wrapper.contains('button')).toBe(true)

    })
})
