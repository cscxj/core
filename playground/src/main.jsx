import { defineComponent, createApp, ref } from "vue";
import "./index.less";

const Comp = defineComponent({
  setup(_, { slots }) {
    return () => <div class="comp">{slots.default?.()}</div>;
  },
});

const App = defineComponent({
  setup(_, {}) {
    return () => (
      <div class="app">
        <Comp>
          <div class="slot">aaa</div>
        </Comp>
      </div>
    );
  },
});

const app = createApp(App);
app.mount("#app");
console.log(app);
