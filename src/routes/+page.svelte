<script>
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  import { fade, slide } from 'svelte/transition'
  import io from 'socket.io-client';

  let imageSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAC+CAYAAACLdLWdAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAo0lEQVR4nO3BMQEAAADCoPVPbQsvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAngY07AABPEnEPQAAAABJRU5ErkJggg==';
  let prevImageSrc = '';
  let ultrasonic = '';
  let colorClass = '';
  let key = 0;
  let colorClasses = ['bg-red-500','bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500','bg-violet-800'];
  let ultrasonicWidth = spring(0);
  let playlist = 0;
  let rtc = 0;
  let prevRtc = 0;
  let audio;
  let isAudioInit = false;
  let sounds = ['/piano/FX_piano01.mp3', '/piano/FX_piano03.mp3', '/piano/FX_piano05.mp3', '/piano/FX_piano06.mp3', '/piano/FX_piano08.mp3', '/piano/FX_piano10.mp3', '/piano/FX_piano12.mp3','/piano/FX_piano13.mp3'];

  let isModalOpen = true;

  function closeModal() {
    isModalOpen = false;
  }

  function initAudio() {
    if (typeof window !== 'undefined' && !isAudioInit) {
      audio = new Audio();
      audio.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
      isAudioInit = true;
    }
  }

  onMount(() => {
    const socket = io();

    socket.on('ultrasonicData', (data) => {
      ultrasonic = data.ultrasonic;
      let displayUltrasonic = ultrasonic > 50 ? 50 : ultrasonic;
      const colorIndex = Math.floor(displayUltrasonic / (50 / colorClasses.length));
      colorClass = colorClasses[colorIndex] || 'bg-violet-800';

      ultrasonicWidth.set((displayUltrasonic / 50) * 100);
    });

    socket.on('playSwitchData', (data) => {
      playlist = data;
      rtc = data.rtc;

      if (rtc !== prevRtc && typeof window !== 'undefined') {
        let soundIndex = Math.floor(ultrasonic / (50 / 8));
        soundIndex = ultrasonic > 50 ? 7 : soundIndex;
        audio.src = sounds[soundIndex];
        audio.play().catch((error) => {
          console.error("Audio play failed:", error);
        });
      }

      prevRtc = rtc;
    });

    socket.on('camSwitchData', (data) => {
      let newImageSrc = 'data:image/png;base64,' + data.base64;
      if (newImageSrc !== imageSrc) {
        prevImageSrc = imageSrc;
        const img = new Image();
        img.src = newImageSrc;
        img.onload = () => {
          imageSrc = newImageSrc;
          key++;
        };
      }
    });
  });
</script>

<style>
  .sensor-container {
    position: absolute;
    top: 0;
    z-index: 10;
    width: 100%;
  }

  .image-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

{#if ultrasonic}
<div transition:slide class="sensor-container text-white max-w-screen mx-auto px-4 sm:px-6 md:px-8">
  <div class="p-4 rounded-xl w-full">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-bold">Ultrasonic Sensor</h2>
      <span class="font-bold">{ultrasonic}cm</span>
    </div>
    <div id="output" class="h-5 w-full rounded-lg {colorClass}" style="width: {$ultrasonicWidth}%; max-width: 100%;"></div>
  </div>
</div>
{/if}

<div transition:slide class="image-container">
  <img key={key} src={imageSrc} alt="" />
</div>

{#if isModalOpen}
<div class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="bg-gray-500" aria-hidden="true"></div>
  <div class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
            1조 정보 수행
          </h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              소리 API 허용 후 시작
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm" on:click={()=>{initAudio();closeModal();}}>
        시작
      </button>
    </div>
  </div>
</div>
{/if}