import { shallowMount } from '@vue/test-utils'
import Timeline from '@/components/InfoTeam/Timeline.vue'

describe('Timeline.vue', () => {
    it('list of timeline is diplayed', () => {
        const activities = [
            {
                date: "Mon, 11 Mar 2019 11:02:29 GMT",
                user_name: "admin",
            },
            {
                date: "Mon, 11 Mar 2019 11:02:27 GMT",
                user_name: "admin",
            },
            {
                date: "Mon, 11 Mar 2019 11:02:27 GMT",
                user_name: "admin",
            }
        ]
        const wrapper = shallowMount(Timeline, {
            propsData: { activities }
        })
        expect(wrapper.find('ul').element.children).toHaveLength(activities.length)
    })
})
