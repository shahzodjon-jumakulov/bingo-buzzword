<script setup>
const winningPatterns = useWinningPatterns();
const words = useWords();
const data = ref([]);

for (let i = words.value.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [words.value[i], words.value[j]] = [words.value[j], words.value[i]];
}

words.value.map((word, index) => {
  data.value.push({
    id: index,
    word: word,
  });
});

const selected = ref([]);

const checkWin = () => {
  return winningPatterns.value.some((pattern) => {
    return pattern.every((tile) => selected.value.includes(tile));
  });
};

const toast = useToast();
watch(
  selected,
  () => {
    if (checkWin()) {
      toast.add({
        title: "Bingo!",
        description: "You have won the game!",
      });

      useConfetti();
    }
  },
  { deep: true }
);

const { vibrate, isSupported } = useVibrate({ pattern: [300] });
const toggleTile = (tile) => {
  if (isSupported.value) vibrate();
  const index = selected.value.indexOf(tile);
  if (index === -1) {
    selected.value.push(tile);
  } else {
    selected.value.splice(index, 1);
  }
  selected.value.sort((a, b) => a - b);
};

const isSelected = (tile) => {
  return selected.value.includes(tile);
};
</script>

<template>
  <UContainer class="my-8 max-w-[48rem]">
    <div class="grid grid-cols-5 grid-rows-5 gap-2">
      <div
        class="text-text py-2 font-black text-[2vw] md:text-sm p-1 aspect-square flex items-center justify-center text-center break-words border border-cardBorder bg-white rounded-lg shadow-lg transition-all duration-300 cursor-pointer"
        v-for="item in data"
        :key="item.id"
        @click="toggleTile(item.id)"
        :class="{
          '!bg-marked !text-white !border-marked': isSelected(item.id),
        }"
      >
        {{ item.word }}
      </div>
    </div>
  </UContainer>
</template>
