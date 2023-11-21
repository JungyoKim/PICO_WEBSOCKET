<script>
  import { onMount } from 'svelte';
  import io from 'socket.io-client';

  let dataLog = [];

  let ultrasonic = 0;
  let cam_switch = 0;
  let play_switch = 0;

  onMount(() => {
    const socket = io();

    socket.on('ultrasonicData', (data) => {
      dataLog.push({ type: 'ultrasonicData', data });
      ultrasonic = data;
      console.log(data)
    });

    socket.on('playSwitchData', (data) => {
      dataLog.push({ type: 'playSwitchData', data });
      play_switch = data;
    });

    socket.on('camSwitchData', (data) => {
      dataLog.push({ type: 'camSwitchData', data });
      cam_switch = data;
    });
  });

</script>
<div id="log" style="height: 300px; overflow-y: auto;">
  <h1>ultrasonic</h1>
    <pre>{JSON.stringify(ultrasonic.ultrasonic, null, 2)}</pre>
    <h1>cam_switch</h1>
    <pre>{JSON.stringify(cam_switch.rtc, null, 2)}</pre>
    <h1>base64</h1>
    <pre>{JSON.stringify(cam_switch.base64, null, 2)}</pre>
    <h1>play_switch</h1>
    <pre>{JSON.stringify(play_switch.rtc, null, 2)}</pre>
    <h1>level</h1>
    <pre>{JSON.stringify(play_switch.playlist, null, 2)}</pre>
</div>
