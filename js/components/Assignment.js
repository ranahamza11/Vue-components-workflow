export default {
    template: `
        <ul>
            <li>
                <label>
                    {{ assignment.title }}
                    <input type="checkbox" v-model="assignment.isComplete">
                </label>
            </li>
        </ul>
    `,
    props: {
        assignment: Object
    }

}