console.log("🚆 Rail Graph Ready");

/* =========================
   1. 台鐵資料（簡化版 graph seed）
========================= */
const STATION_DB = {
    main: {
        "臺北": 0, "板橋": 10, "桃園": 40, "新竹": 70,
        "臺中": 150, "嘉義": 250, "臺南": 300, "高雄": 350
    }
};

/* =========================
   2. Graph 建立
========================= */
let GRAPH = {};

function buildGraph() {
    GRAPH = {};

    Object.keys(STATION_DB).forEach(line => {
        const stations = Object.keys(STATION_DB[line])
            .sort((a, b) => STATION_DB[line][a] - STATION_DB[line][b]);

        for (let i = 0; i < stations.length - 1; i++) {
            const a = stations[i];
            const b = stations[i + 1];

            const dist = Math.abs(STATION_DB[line][a] - STATION_DB[line][b]);

            if (!GRAPH[a]) GRAPH[a] = [];
            if (!GRAPH[b]) GRAPH[b] = [];

            GRAPH[a].push({ to: b, dist });
            GRAPH[b].push({ to: a, dist });
        }
    });
}

/* =========================
   3. Dijkstra
========================= */
function getSmartRoute(start, end) {
    if (start === end) return { dist: 0, nodes: [start] };

    const dist = {};
    const prev = {};
    const visited = new Set();

    Object.keys(GRAPH).forEach(n => dist[n] = Infinity);
    dist[start] = 0;

    while (true) {
        let curr = null;
        let min = Infinity;

        for (const n in dist) {
            if (!visited.has(n) && dist[n] < min) {
                min = dist[n];
                curr = n;
            }
        }

        if (!curr) break;
        if (curr === end) break;

        visited.add(curr);

        for (const e of GRAPH[curr] || []) {
            const nd = dist[curr] + e.dist;
            if (nd < dist[e.to]) {
                dist[e.to] = nd;
                prev[e.to] = curr;
            }
        }
    }

    if (dist[end] === Infinity) {
        return { dist: 0, nodes: [start, end] };
    }

    const path = [];
    let cur = end;

    while (cur) {
        path.unshift(cur);
        cur = prev[cur];
    }

    return { dist: dist[end], nodes: path };
}

/* =========================
   4. Map
========================= */
let map;
let layers = {};
let rowId = 0;

window.onload = () => {
    map = L.map("map").setView([23.8, 121.0], 7);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap"
    }).addTo(map);

    buildGraph();

    addRow("臺北", "高雄", 1);
};

/* =========================
   5. UI
========================= */
function addRow(start = "臺北", end = "高雄", people = 1) {
    rowId++;

    const tr = document.createElement("tr");
    tr.id = "r_" + rowId;

    tr.innerHTML = `
        <td><input id="s_${rowId}" value="${start}"></td>
        <td><input id="e_${rowId}" value="${end}"></td>
        <td><input id="p_${rowId}" type="number" value="${people}" min="1"></td>
        <td><button onclick="calculateAll()">算</button></td>
        <td id="d_${rowId}">-</td>
        <td id="c_${rowId}">-</td>
    `;

    document.getElementById("excelBody").appendChild(tr);
}

/* =========================
   6. 計算 + 畫圖
========================= */
function calculateAll() {
    Object.values(layers).forEach(ls => ls.forEach(l => map.removeLayer(l)));
    layers = {};

    let totalDist = 0;
    let totalCarbon = 0;
    let count = 0;

    for (let i = 1; i <= rowId; i++) {
        const s = document.getElementById("s_" + i);
        const e = document.getElementById("e_" + i);
        const p = document.getElementById("p_" + i);

        if (!s || !e) continue;

        const start = s.value;
        const end = e.value;
        const people = parseInt(p.value) || 1;

        const res = getSmartRoute(start, end);
        if (res.dist === 0) continue;

        const carbon = res.dist * 0.05 * people;

        document.getElementById("d_" + i).innerText = res.dist.toFixed(1);
        document.getElementById("c_" + i).innerText = carbon.toFixed(2);

        totalDist += res.dist;
        totalCarbon += carbon;
        count++;

        drawRoute(i, res.nodes);
    }

    document.getElementById("totalCount").innerText = count;
    document.getElementById("totalDistance").innerText = totalDist.toFixed(1);
    document.getElementById("totalCarbon").innerText = totalCarbon.toFixed(2);
}

/* =========================
   7. 畫路線
========================= */
const COLORS = ["red", "blue", "green", "orange"];

function drawRoute(id, nodes) {
    const latlngs = nodes.map(n => getLatLng(n));

    const poly = L.polyline(latlngs, {
        color: COLORS[id % COLORS.length],
        weight: 4
    }).addTo(map);

    layers[id] = [poly];

    latlngs.forEach((p, i) => {
        L.circleMarker(p, {
            radius: i === 0 || i === latlngs.length - 1 ? 6 : 3
        }).addTo(map);
    });
}

/* =========================
   8. 座標
========================= */
function getLatLng(name) {
    const geo = {
        "臺北": [25.047, 121.517],
        "板橋": [25.013, 121.462],
        "桃園": [24.989, 121.313],
        "新竹": [24.801, 120.971],
        "臺中": [24.137, 120.685],
        "嘉義": [23.479, 120.441],
        "臺南": [22.997, 120.212],
        "高雄": [22.639, 120.302]
    };

    return geo[name] || [23.8, 121.0];
}