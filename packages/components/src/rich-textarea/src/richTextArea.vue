<template>
  <div
    class="bu-rich-textarea-content"
    v-bind="$attrs"
    ref="textDom"
    contenteditable
    :disabled="disabled"
    :placeholder="placeholder"
    @keyup.stop="keyup"
  ></div>
</template>
<script lang="ts" setup>
import { onMounted, watchEffect, ref, nextTick } from 'vue';
defineOptions({
  name: 'BuRichTextArea'
});

const emit = defineEmits<{
  change: [];
  'update:modelValue': [val: string];
  imgUpload: [file: File];
  keyup: [e: KeyboardEvent];
}>();

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    placeholder?: string;
    copy?: boolean; // 是否支持图片粘贴
    modelValue: string;
    maxImgWidth?: string;
    maxImgHeight?: string;
    maxImgSize?: number;
    imgPrevie?: boolean;
  }>(),
  {
    maxImgWidth: '240px',
    maxImgHeight: '240px',
    maxImgSize: 4,
    imgPrevie: false,
    copy: false,
    disabled: false,
    placeholder: ''
  }
);

const imgPreviewContainer = ref<HTMLDivElement>();

const textDom = ref<HTMLDivElement>();
const isPin = ref(false);

onMounted(() => {
  // 监听props
  watchEffect(() => {
    if (textDom.value) {
      if (props.disabled) {
        textDom.value.setAttribute('contenteditable', 'false');
      } else {
        textDom.value.setAttribute('contenteditable', 'true');
        textDom.value.focus();
      }
    }
  });
  nextTick(() => {
    if (textDom.value) {
      textDom.value.innerHTML = props.modelValue;
      moveEnd();
      // 监听粘贴
      copyListen();
      if (props.copy && props.imgPrevie) {
        imgPrevie();
      }
      // 监听输入法
      textDom.value.addEventListener('compositionstart', () => {
        isPin.value = true;
      });
      textDom.value.addEventListener('compositionend', () => {
        isPin.value = false;
      });
    }
  });
});

function keyup(event: KeyboardEvent) {
  const fn = () => {
    console.log('1211');
    setTimeout(() => {
      emit('update:modelValue', textDom.value?.innerHTML as string);
      emit('change');
      emit('keyup', event);
    }, 10);
  };
  if (isPin.value) {
    if (event.code === 'Space') {
      // 如果是中文，需要等到文字输入再改变
      fn();
    }
  } else {
    fn();
  }
}

// 确保光标在最后
function moveEnd() {
  var selection = window.getSelection();
  var range: any = document.createRange();
  range.selectNodeContents(textDom.value);
  range.collapse(false);
  selection && selection.removeAllRanges();
  selection && selection.addRange(range);
}

function copyListen() {
  textDom.value?.addEventListener('paste', async (e) => {
    console.log('props.copy', props.copy);
    e.preventDefault();
    e.stopPropagation();
    let items = e.clipboardData?.items || [];
    for (let i = 0; i < items?.length; i++) {
      const item = items[i];
      if (item.kind === 'string' && item.type === 'text/plain') {
        item.getAsString(function (str) {
          document.execCommand('insertHTML', true, str);
        });
      } else if (
        item.kind === 'file' &&
        item.type.indexOf('image') !== -1 &&
        props.copy
      ) {
        const pasteFile = item.getAsFile();
        if (pasteFile && pasteFile.size < props.maxImgSize * 1024 * 1024) {
          const url = window.URL.createObjectURL(pasteFile);
          document.execCommand(
            'insertHTML',
            true,
            `<img src=${url} style="max-width: ${props.maxImgWidth}; max-height: ${props.maxImgHeight};vertical-align: bottom"></img>`
          );
          emit('update:modelValue', textDom.value?.innerHTML!);
          emit('imgUpload', pasteFile);
          emit('change');
        }
      }
    }
  });
}

function imgPrevie() {
  textDom.value?.addEventListener('dblclick', (event) => {
    const target = event.target as any;
    console.log('target', target);
    if (target && target.tagName === 'IMG') {
      if (imgPreviewContainer.value) {
        imgPreviewContainer.value.style.display = 'block';
        imgPreviewContainer.value.classList.add('bu-rich-img-wrapper-active');
        (imgPreviewContainer.value.children[0] as HTMLImageElement).src =
          target.currentSrc;
      } else {
        imgPreviewContainer.value = document.createElement('div');
        imgPreviewContainer.value.classList.add('bu-rich-img-wrapper-active');
        const img = document.createElement('img');
        img.src = target.currentSrc;
        img.classList.add('bu-rich-enlarged');
        imgPreviewContainer.value.appendChild(img);
        document.body.appendChild(imgPreviewContainer.value);
      }
      imgPreviewContainer.value.addEventListener('click', (e: any) => {
        if (e.target && e.target.tagName !== 'IMG') {
          imgPreviewContainer.value!.classList.remove(
            'bu-rich-img-wrapper-active'
          );
          imgPreviewContainer.value!.style.display = 'none';
        }
      });
    }
  });
}

function setText(text: string) {
  textDom.value && (textDom.value.innerText = text);
}

function getText() {
  // 这个需要处理一下，返回数组，【文本，图片，文本】
  return textDom.value && textDom.value.innerText;
}
function insertHtml(html: string) {
  document.execCommand('insertHTML', true, html);
}

defineExpose({
  setText,
  getText,
  insertHtml
});
</script>
<style lang="scss" scoped>
.bu-rich-textarea-content {
  border: 0;
  outline: 0;
  position: relative;
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  min-width: 200px;
  min-height: 60px;
  max-height: 124px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  color: var(--el-input-text-color, var(--el-text-color-regular));
  border: 1px solid #f0f0f0;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color))
    inset;
  overflow-y: auto;
  white-space: pre-wrap;
  resize: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px var(--el-input-focus-border-color) inset;
  }
  &[disabled='true'] {
    background-color: #f5f7fa;
    cursor: not-allowed;
  }
  &[disabled='false'] {
    background-color: #fff;
    cursor: default;
  }
  &:empty {
    &::before {
      content: attr(placeholder);
      color: gray;
    }
  }
}
</style>
