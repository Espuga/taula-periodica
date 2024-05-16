<script setup>
import { onMounted, ref } from 'vue';
import Casella from '../components/game/Casella.vue';
import DragElement from '../components/game/DragElement.vue';
import elements from '../data/elements';

const elementsRestants = ref(elements.filter(el => el.visible))
const seguentElement = ref(elementsRestants.value.filter(el => el.visible)[Math.floor(Math.random()*elementsRestants.value.length)])

const showError = ref(false)
const showCorrect = ref(false)

function dragStartEvent(e) {
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragOverEvent(e) {
  if (e.preventDefault) {
      e.preventDefault(); 
  }
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function dropEvent(e) {
  if(e.target.id==e.dataTransfer.getData('text/html').split('id="')[1].split('"')[0]){
    var dropedelement = document.createElement('span');
    dropedelement.innerHTML = e.dataTransfer.getData('text/html').replace('?', e.target.id)
    this.appendChild(dropedelement);
    // treure element de elemntsRestants
    elementsRestants.value = elementsRestants.value.filter(el => el.atomicNumber!=e.target.id)
    // seguent element
    seguentElement.value = elementsRestants.value.filter(el => el.visible)[Math.floor(Math.random()*elementsRestants.value.length)]
    showCorrect.value = true
    await delay(1500)
    showCorrect.value = false
  } else {
    showError.value = true
    await delay(1500)
    showError.value = false
  }
}

onMounted(() => {
  console.log(elementsRestants.value)
  var toDrags = document.querySelectorAll('.toDrag');
  var dropItems = document.getElementsByName('target');
  
  [].forEach.call(toDrags , function(squareItem) {
    squareItem.addEventListener('dragstart',dragStartEvent, false);
  });
  
  [].forEach.call(dropItems , function(dropItem) {
    dropItem.addEventListener('dragover', dragOverEvent, false);
    dropItem.addEventListener('drop', dropEvent, false);
  });
})

</script>


<template>
  <div class="w-full h-screen flex flex-col justify-center items-center">
    <div class="flex items-center justify-center">
      <DragElement :simbol="seguentElement.simbol" :name="seguentElement.name" :atomicNumber="seguentElement.atomicNumber"></DragElement>
    </div>
    <div class="grid grid-cols-18 border-separate gap-1">
      <Casella v-for="element in elements" :visible="element.visible" :classe="element.classe" :atomicNumber="element.atomicNumber"></Casella>
    </div>
  </div>

  <div v-if="showCorrect" class="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-opacity z-50">
      <svg class="tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class="circle" cx="26" cy="26" r="25" fill="none" />
        <path class="check" fill="none" d="M14 27l8 8 16-16"/>
      </svg>
  </div>
  <div v-if="showError" class="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-opacity z-50">
    <svg class="x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle class="circle-red" cx="26" cy="26" r="25" fill="none" />
      <path class="line" d="M16 16 36 36" />
      <path class="line" d="M36 16 16 36" />
    </svg>
  </div>

</template>

<style scoped>
/* grid cols */
.grid-cols-18 {
  grid-template-columns: repeat(18, minmax(0, 1fr));
}

/* cols span */
.col-span-16 {
  grid-column: span 16 / span 16;
}

.bg-opacity {
  background-color: rgba(128, 128, 128, 0.1);
}

/* 
  Correct animation
*/
.tick {
  width: 100px;
  height: 100px;
}
.circle {
  stroke: green;
  stroke-width: 2;
  stroke-dasharray: 157;
  stroke-dashoffset: 157;
  animation: drawCircle 0.5s ease-out forwards;
}
.check {
  stroke: green;
  stroke-width: 3;
  stroke-dasharray: 36;
  stroke-dashoffset: 36;
  animation: drawCheck 0.5s ease-out forwards;
  animation-delay: 0.5s;
}
@keyframes drawCircle {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes drawCheck {
  to {
    stroke-dashoffset: 0;
  }
}

/* 
  Incorrect animation
*/
.x-mark {
    width: 100px;
    height: 100px;
}

.circle-red {
    stroke: red;
    stroke-width: 2;
    stroke-dasharray: 157;
    stroke-dashoffset: 157;
    animation: drawCircle 0.4s ease-out forwards;
}

.line {
    stroke: red;
    stroke-width: 2;
    stroke-dasharray: 28;
    stroke-dashoffset: 28;
    animation: drawLine 0.4s ease-out forwards;
    animation-delay: 0.4s;
}

.line:nth-child(3) {
    animation-delay: 0.8s;
}

@keyframes drawCircle {
    to {
        stroke-dashoffset: 0;
    }
}

@keyframes drawLine {
    to {
        stroke-dashoffset: 0;
    }
}

</style>
