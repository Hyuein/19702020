mapboxgl.accessToken = 'pk.eyJ1IjoiaGV5aGVpbiIsImEiOiJja3poYnlxN2Q0MDhnMnVwaHc5aTRzbXY1In0.RL4OkZjIJrfoqxaIZjAlmg';
    const beforeMap = new mapboxgl.Map({
        container: 'before',
        style: 'mapbox://styles/heyhein/cl25kjgha000614t594kgjrgj',
        center: [127.426,35.927],
        zoom: 7
    });

    const afterMap = new mapboxgl.Map({
        container: 'after',
        style: 'mapbox://styles/heyhein/cl25j4kv7001n15lfi6n37b7b',
        center: [127.426,35.927],
        zoom: 7
    });

    // A selector or reference to HTML element
    const container = '#comparison-container';

    const map = new mapboxgl.Compare(beforeMap, afterMap, container, {
        // Set this to enable comparing two maps by mouse movement:
        // mousemove: true
    });