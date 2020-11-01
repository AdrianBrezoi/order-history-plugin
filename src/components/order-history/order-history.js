import OrderItem from "../order-item/order-item.vue";

export default {
  name: "OrderHistory",
  props: {
    orders: {
      type: Array,
      required: true,
      validator(input) {
        return input.length >= 2 && input.length <= 5;
      }
    },
    currency: {
      type: String,
      required: true
    }
  },
  components: {
    OrderItem
  }
};
