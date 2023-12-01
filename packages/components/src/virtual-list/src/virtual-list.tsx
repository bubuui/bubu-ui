import {
  defineComponent,
  toRefs,
  ref,
  onMounted,
  nextTick,
  computed
} from 'vue';
import { virtualListProps, type VirtualListProps } from './virtual-list-type';
export default defineComponent({
  name: 'BuVirtualList',
  props: virtualListProps,
  setup(props: VirtualListProps, { slots }) {
    const { data, itemHeight, component: Component } = toRefs(props);
    const containerRef = ref();
    const containerHeight = ref(0);
    const offsetY = ref(0);
    const startIndex = ref(0);

    const scrollEvent = (event: UIEvent) => {
      const scrollTop = (event.target as HTMLElement).scrollTop;

      startIndex.value = Math.floor(scrollTop / itemHeight.value);

      offsetY.value = scrollTop - (scrollTop % itemHeight.value);
    };

    const visibleCount = computed(() => {
      return Math.ceil(containerHeight.value / itemHeight.value);
    });

    const visibleData = computed(() => {
      return data.value.slice(
        startIndex.value,
        Math.min(startIndex.value + visibleCount.value, data.value.length)
      );
    });

    onMounted(() => {
      nextTick(() => {
        containerHeight.value = containerRef.value?.clientHeight;
        console.log('containerHeight', containerHeight.value);
      });
    });

    return () => (
      <Component.value
        class="bu-virtual-list--container"
        ref={containerRef}
        onScroll={scrollEvent}
      >
        <div
          class="bu-virtual-list--blank"
          style={{ height: `${data.value.length * itemHeight.value}px` }}
        ></div>
        <div
          class="bu-virtual-list"
          style={{ transform: `translate3d(0,${offsetY.value}px,0)` }}
        >
          {visibleData.value.map((item, index) => (
            <div style={{ height: itemHeight.value + 'px' }}>
              {slots.default?.({ item, index })}
            </div>
          ))}
        </div>
      </Component.value>
    );
  }
});
