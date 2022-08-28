import AssignmentList from "./AssignmentList.js";
export default {
    components: { AssignmentList },
    template: `
        <section class="space-y-6">
            <assignment-list title="In Progress" :assignments="filters.inProgress"></assignment-list>
            <assignment-list title="Completed" :assignments="filters.completed"></assignment-list>
        </section>
    `,
    data() {
        return {
            assignments: [
                {title: 'Finish Homework', isComplete: false, id: 1},
                {title: 'Read the lessen', isComplete: false, id: 2},
                {title: 'Do the dishes', isComplete: false, id: 3},
            ]
        }
    },
    
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => ! a.isComplete),
                completed: this.assignments.filter(a => a.isComplete)
            };
        }
    },
}