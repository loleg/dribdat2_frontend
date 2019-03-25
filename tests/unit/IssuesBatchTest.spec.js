import { shallowMount } from '@vue/test-utils'
import IssuesBadge from '@/components/DevelopementStatus/issuesBadge.vue'

describe('ProjectPresentation.vue', () => {
    it('the project presentation contains the link to a media social', () => {

        const issues = [
            {title: 'title1', labels: []},
            {title: 'title2', labels: []}
        ]
        const wrapper = shallowMount(IssuesBadge, {
            propsData: { issues }
        })

        expect(wrapper.find('ul').element.children).toHaveLength(issues.length)

    })
})