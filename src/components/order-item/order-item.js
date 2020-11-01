export default {
    name: "OrderItem",
    props: {
        order: {
            type: Object,
            required: true
        },
        currency: {
            type: String,
            required: true
        }
    }
};
