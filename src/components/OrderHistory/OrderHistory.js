import OrderItem from "@/components/OrderItem/OrderItem.vue";

export default {
  name: "OrderHistory",
  props: {
    orders: {
      type: Array,
      required: true,
      validator(input) {
        console.log("VALIDATOR input", input, input.length);
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
