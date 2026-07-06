const GRAPH = {};
buildGraph();
addTransferEdges();

function buildGraph() {
    Object.keys(STATION_DB).forEach(line => {
        const stations = Object.keys(STATION_DB[line]);
        const sorted = stations.sort((a, b) => STATION_DB[line][a] - STATION_DB[line][b]);

        for (let i = 0; i < sorted.length - 1; i++) {
            const a = sorted[i];
            const b = sorted[i + 1];

            const dist = Math.abs(STATION_DB[line][a] - STATION_DB[line][b]);

            if (!GRAPH[a]) GRAPH[a] = [];
            if (!GRAPH[b]) GRAPH[b] = [];

            GRAPH[a].push({ to: b, dist });
            GRAPH[b].push({ to: a, dist });
        }
    });
}
//Dijkstra（核心引擎）
function dijkstra(start, end) {
    const dist = {};
    const prev = {};
    const visited = new Set();
    const pq = new Set(Object.keys(GRAPH));

    Object.keys(GRAPH).forEach(n => dist[n] = Infinity);
    dist[start] = 0;

    while (pq.size > 0) {
        let u = null;
        let min = Infinity;

        pq.forEach(node => {
            if (dist[node] < min) {
                min = dist[node];
                u = node;
            }
        });

        if (!u) break;
        pq.delete(u);
        visited.add(u);

        if (u === end) break;

        (GRAPH[u] || []).forEach(edge => {
            const v = edge.to;
            const alt = dist[u] + edge.dist;

            if (alt < dist[v]) {
                dist[v] = alt;
                prev[v] = u;
            }
        });
    }

    // 回推路徑
    const path = [];
    let cur = end;

    while (cur) {
        path.unshift(cur);
        cur = prev[cur];
    }

    return {
        dist: dist[end],
        nodes: path,
        pathText: path.join(" → ")
    };
}
//換 getSmartRoute()
function getSmartRoute(start, end) {
    if (start === end) {
        return { dist: 0, nodes: [start], path: `${start}` };
    }

    const result = dijkstra(start, end);

    if (!result.nodes || result.nodes.length === 0) {
        return { dist: 0, nodes: [start, end], path: "無路徑" };
    }

    return {
        dist: result.dist,
        nodes: result.nodes,
        path: result.pathText
    };
}
//轉乘站
function addTransferEdges() {
    const stationLines = {};

    Object.keys(STATION_DB).forEach(line => {
        Object.keys(STATION_DB[line]).forEach(station => {
            if (!stationLines[station]) stationLines[station] = [];
            stationLines[station].push(line);
        });
    });

    Object.keys(stationLines).forEach(station => {
        const lines = stationLines[station];
        if (lines.length > 1) {
            // 同站不同線 = 轉乘（距離=0）
            for (let i = 0; i < lines.length; i++) {
                for (let j = i + 1; j < lines.length; j++) {
                    if (!GRAPH[station]) GRAPH[station] = [];
                    GRAPH[station].push({ to: station, dist: 0 });
                }
            }
        }
    });
}