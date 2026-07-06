// main.js - Constants and Global Variables
const STATION_DB = {
    "main": {
        "基隆": 0.0, "三坑": 1.5, "八堵": 3.9, "七堵": 6.2, "百福": 8.9, "五堵": 11.9,
        "汐止": 13.3, "汐科": 14.6, "南港": 19.3, "松山": 22.1, "臺北": 28.5,
        "萬華": 31.3, "板橋": 35.7, "浮洲": 38.1, "樹林": 41.1, "南樹林": 43.1,
        "山佳": 45.0, "鶯歌": 49.4, "鳳鳴": 54.4, "桃園": 57.6, "內壢": 63.5,
        "中壢": 67.5, "埔心": 73.3, "楊梅": 77.3, "富岡": 84.1, "新富": 85.8, "北湖": 87.3,
        "湖口": 89.8, "新豐": 96.0, "竹北": 100.8, "北新竹": 105.2, "新竹": 106.6,
        "三姓橋": 111.4, "香山": 114.6, "崎頂": 120.8, 
        "竹南": 125.3, "造橋": 130.7, "豐富": 136.6, "苗栗": 140.6, "南勢": 147.2,
        "銅鑼": 151.4, "三義": 158.8, "泰安": 169.7, "后里": 172.3, "豐原": 179.0,
        "栗林": 181.6, "潭子": 184.1, "頭家厝": 186.0, "松竹": 187.7, "太原": 189.5,
        "精武": 191.2, "臺中": 193.1, "五權": 195.3, "大慶": 197.4, "烏日": 200.5, "新烏日": 201.4, "成功": 203.8, 
        "彰化": 210.9, "花壇": 217.5, "大村": 222.1, "員林": 225.6, "永靖": 229.1, "社頭": 232.8, "田中": 237.1,
        "二水": 242.9, "林內": 251.0, "石榴": 255.8, "斗六": 260.6, "斗南": 268.2, "石龜": 272.1, "大林": 276.7,
        "民雄": 282.5, "嘉北": 289.2, "嘉義": 291.8, "水上": 298.4, "南靖": 301.0, "後壁": 307.0, "新營": 314.7,
        "柳營": 318.0, "林鳳營": 321.9, "隆田": 327.4, "拔林": 329.6, "善化": 334.2, "南科": 337.1, "新市": 341.8,
        "永康": 346.8, "大橋": 350.5, "臺南": 353.2, "保安": 360.8, "仁德": 362.2, "中洲": 364.7, "大湖": 367.6,
        "路竹": 370.6, "岡山": 378.4, "橋頭": 382.0, "楠梓": 386.2, "新左營": 391.3, "左營": 393.3, "內惟": 394.4,
        "美術館": 396.1, "鼓山": 397.3, "三塊厝": 399.0, "高雄": 399.9
    },
    "coast": { "竹南": 0.0, "談文": 4.5, "大山": 11.3, "後龍": 15.0, "龍港": 18.6, "白沙屯": 26.7, "新埔": 29.8, "通霄": 35.6, "苑裡": 41.7, "日南": 49.4, "大甲": 54.1, "臺中港": 59.3, "清水": 65.3, "沙鹿": 68.5, "龍井": 73.1, "大肚": 78.1, "追分": 83.1, "彰化": 90.3 },
    "east": { "八堵": 0.0, "暖暖": 1.6, "四腳亭": 3.9, "瑞芳": 8.9, "猴硐": 13.5, "三貂嶺": 16.0, "牡丹": 19.5, "雙溪": 22.9, "貢寮": 28.2, "福隆": 32.0, "石城": 37.4, "大里": 40.1, "大溪": 44.8, "龜山": 49.4, "外澳": 52.9, "頭城": 56.6, "頂埔": 58.8, "礁溪": 62.9, "四城": 67.6, "宜蘭": 71.3, "二結": 77.1, "中里": 78.3, "羅東": 80.1, "冬山": 85.1, "新馬": 89.3, "蘇澳新": 90.2, "蘇澳": 93.5, "永樂": 95.4, "東澳": 101.1, "南澳": 109.1, "武塔": 112.8, "漢本": 125.7, "和平": 130.1, "和仁": 138.0, "崇德": 148.0, "新城": 153.3, "景美": 158.6, "北埔": 165.1, "花蓮": 169.7, "吉安": 173.2, "志學": 182.0, "平和": 185.0, "壽豐": 186.8, "豐田": 189.6, "林榮新光": 195.8, "南平": 198.0, "鳳林": 202.2, "萬榮": 207.1, "光復": 212.7, "大富": 220.2, "富源": 223.4, "瑞穗": 232.5, "三民": 241.9, "玉里": 252.7, "東里": 259.5, "東竹": 265.5, "富里": 271.6, "池上": 278.4, "海端": 284.1, "關山": 290.6, "瑞和": 298.1, "瑞源": 300.8, "鹿野": 306.3, "山里": 312.4, "臺東": 320.6 },
    "south": { "高雄": 0.0, "民族": 1.3, "科工館": 2.4, "正義": 4.2, "鳳山": 5.5, "後莊": 9.4, "九曲堂": 13.6, "六塊厝": 18.6, "屏東": 20.9, "歸來": 23.5, "麟洛": 25.8, "西勢": 28.2, "竹田": 31.9, "潮州": 35.9, "崁頂": 40.8, "南州": 43.2, "鎮安": 47.0, "林邊": 50.1, "佳冬": 54.0, "東海": 57.1, "枋寮": 61.2, "加祿": 66.5, "內獅": 69.0, "枋山": 73.8, "大武": 104.0, "瀧溪": 115.7, "金崙": 124.1, "太麻里": 135.0, "知本": 146.7, "康樂": 153.8, "臺東": 159.3 },
    "pingxi": { "三貂嶺": 0.0, "大華": 3.6, "十分": 6.4, "望古": 8.1, "嶺腳": 10.2, "平溪": 11.2, "菁桐": 12.9 },
    "neiwan": { "新竹": 0.0, "北新竹": 1.4, "千甲": 3.6, "新莊": 6.6, "竹中": 7.9, "上員": 10.6, "榮華": 15.0, "竹東": 16.6, "橫山": 20.1, "九讚頭": 22.1, "合興": 24.3, "富貴": 25.7, "內灣": 27.9 },
    "jiji": { "二水": 0.0, "源泉": 3.0, "濁水": 10.8, "動泉": 15.7, "集集": 20.0, "水里": 27.4, "車埕": 29.6 },
    "chengzhui": { "成功": 0.0, "追分": 2.2 },
    "shalun": { "中洲": 0.0, "長榮大學": 2.6, "沙崙": 5.7 },
    "liujia": { "竹中": 0.0, "六家": 3.1 },
    "shenao": { "瑞芳": 0.0, "海科館": 4.3, "八斗子": 4.7 }
};

const STATION_GEO = {
    "基隆": [25.132, 121.740], "三坑": [25.123, 121.741], "八堵": [25.108, 121.727], "七堵": [25.097, 121.714], "百福": [25.077, 121.694], "五堵": [25.065, 121.668],
    "汐止": [25.064, 121.652], "汐科": [25.061, 121.637], "南港": [25.052, 121.607], "松山": [25.049, 121.578], "臺北": [25.047, 121.517],
    "萬華": [25.035, 121.500], "板橋": [25.013, 121.462], "浮洲": [24.998, 121.444], "樹林": [24.991, 121.425], "南樹林": [24.975, 121.407],
    "山佳": [24.971, 121.389], "鶯歌": [24.954, 121.355], "桃園": [24.989, 121.313], "內壢": [24.953, 121.258], "中壢": [24.953, 121.225], "埔心": [24.919, 121.183], 
    "楊梅": [24.914, 121.145], "湖口": [24.904, 121.044], "新豐": [24.868, 120.996], "竹北": [24.841, 121.011], "北新竹": [24.810, 120.985], "新竹": [24.801, 120.971],
    "竹中": [24.783, 121.026], "竹東": [24.739, 121.097], "內灣": [24.704, 121.182],
    "竹南": [24.686, 120.881], "苗栗": [24.570, 120.825], "豐原": [24.254, 120.722],
    "松竹": [24.179, 120.701], "臺中": [24.137, 120.685], "成功": [24.113, 120.591],
    "追分": [24.119, 120.570], "彰化": [24.081, 120.538], "二水": [23.811, 120.618],
    "集集": [23.829, 120.784], "車埕": [23.843, 120.866], "斗六": [23.712, 120.541],
    "嘉義": [23.479, 120.441], "新營": [23.310, 120.317], "臺南": [22.997, 120.212],
    "中洲": [22.906, 120.252], "沙崙": [22.923, 120.298], "新左營": [22.687, 120.307],
    "高雄": [22.639, 120.302], "鳳山": [22.628, 120.358], "屏東": [22.669, 120.486],
    "潮州": [22.551, 120.542], "枋寮": [22.366, 120.594], "大武": [22.355, 120.887],
    "太麻里": [22.616, 121.002], "臺東": [22.793, 121.123], "關山": [23.048, 121.163],
    "玉里": [23.334, 121.315], "光復": [23.651, 121.421], "花蓮": [23.993, 121.601],
    "新城": [24.127, 121.641], "蘇澳新": [24.601, 121.825], "蘇澳": [24.594, 121.843],
    "羅東": [24.677, 121.775], "宜蘭": [24.754, 121.757], "礁溪": [24.829, 121.772],
    "頭城": [24.856, 121.822], "福隆": [25.017, 121.944], "雙溪": [25.047, 121.864],
    "瑞芳": [25.108, 121.805], "三貂嶺": [25.061, 121.823], "十分": [25.042, 121.777],
    "平溪": [25.025, 121.739], "海科館": [25.134, 121.799], "八斗子": [25.135, 121.802],
    "大山": [24.646, 120.814], "清水": [24.263, 120.569], "沙鹿": [24.223, 120.559], "大肚": [24.154, 120.541],
    "暖暖": [25.102, 121.740], "四腳亭": [25.103, 121.761], "猴硐": [25.087, 121.827], "冬山": [24.636, 121.792],
    "東澳": [24.519, 121.828], "南澳": [24.464, 121.799], "和平": [24.303, 121.753], "崇德": [24.162, 121.659]
};

const stations = Array.from(new Set(Object.keys(STATION_DB).flatMap(line => Object.keys(STATION_DB[line])))).sort();
const ROUTE_COLORS = ["#2563eb", "#ea580c", "#16a34a", "#9333ea", "#db2777", "#0d9488", "#eab308", "#4b5563"];

let mapInstance = null;
let mapLayers = {}; 
let rowCounter = 0;
let rowDataStore = {};

document.addEventListener('DOMContentLoaded', () => {
    console.log("JS 載入成功");
    mapInstance = L.map('map').setView([23.8, 121.0], 7.5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance);

    addNewRow("臺北", "高雄", 2);
    setTimeout(calculateAllRoutes, 300);
});

function importCSV(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const text = e.target.result;
        const rows = text.split('\n');
        
        rows.forEach(row => {
            if(!row.trim()) return;
            const cols = row.split(','); 
            if (cols.length >= 2) {
                const start = cols[0].trim();
                const end = cols[1].trim();
                const pass = cols[2] ? parseInt(cols[2].trim()) || 1 : 1;
                if (stations.includes(start) && stations.includes(end)) {
                    addNewRow(start, end, pass);
                }
            }
        });
        
        setTimeout(() => {
            calculateAllRoutes();
            console.log("CSV 匯入完畢，已重新計算路徑");
        }, 100); 
    };
    reader.readAsText(file, 'UTF-8');
    input.value = "";
}

function addNewRow(startDef = "臺北", endDef = "高雄", passDef = 1) {
    rowCounter++;
    const rowId = `row_${rowCounter}`;
    const tbody = document.getElementById("excelBody");
    const colorHex = ROUTE_COLORS[(rowCounter - 1) % ROUTE_COLORS.length];
    const tr = document.createElement("tr");
    tr.id = rowId;
    tr.onclick = () => highlightRow(rowId);
    
    tr.innerHTML = `
        <td style="text-align: center;">
            <span class="color-badge" style="background-color: ${colorHex};"></span>
        </td>
        <td>
            <div class="custom-select-container" id="${rowId}_startCombo">
                <div class="select-trigger" id="${rowId}_startTrigger">${startDef}</div>
                <div class="dropdown-box">
                    <input type="text" class="filter-input" placeholder="篩選..." autocomplete="off">
                    <ul class="station-list"></ul>
                </div>
            </div>
        </td>
        <td>
            <div class="custom-select-container" id="${rowId}_endCombo">
                <div class="select-trigger" id="${rowId}_endTrigger">${endDef}</div>
                <div class="dropdown-box">
                    <input type="text" class="filter-input" placeholder="篩選..." autocomplete="off">
                    <ul class="station-list"></ul>
                </div>
            </div>
        </td>
        <td>
            <input type="number" class="num-input" id="${rowId}_passengers" value="${passDef}" min="1" onchange="resetRowResults('${rowId}')">
        </td>
        <td><span id="${rowId}_distanceText">-</span></td>
        <td><span id="${rowId}_carbonText">-</span></td>
        <td><button class="btn-action btn-del" onclick="deleteRow(event, '${rowId}')">刪除</button></td>
    `;
    
    tbody.appendChild(tr);
    initTableRowSelect(`${rowId}_startCombo`, `${rowId}_startTrigger`, () => { resetRowResults(rowId); calculateAllRoutes(); });
    initTableRowSelect(`${rowId}_endCombo`, `${rowId}_endTrigger`, () => { resetRowResults(rowId); calculateAllRoutes(); });
}

function deleteRow(e, rowId) {
    e.stopPropagation();
    const row = document.getElementById(rowId);
    if (row) {
        row.remove();
        delete rowDataStore[rowId];
        if (mapLayers[rowId]) {
            mapLayers[rowId].forEach(layer => mapInstance.removeLayer(layer));
            delete mapLayers[rowId];
        }
        calculateAllRoutes(); 
    }
}

function resetRowResults(rowId) {
    document.getElementById(`${rowId}_distanceText`).innerText = "-";
    document.getElementById(`${rowId}_carbonText`).innerText = "-";
}

function highlightRow(rowId) {
    document.querySelectorAll("#excelBody tr").forEach(tr => tr.classList.remove("active-row"));
    const targetRow = document.getElementById(rowId);
    if (targetRow) targetRow.classList.add("active-row");

    const data = rowDataStore[rowId];
    if (data && data.nodes && data.nodes.length > 0) {
        document.getElementById("pathInfoBox").style.display = "block";
        document.getElementById("activePathText").innerText = data.path;
    } else {
        document.getElementById("pathInfoBox").style.display = "none";
    }

    Object.keys(mapLayers).forEach(key => {
        const isCurrent = (key === rowId);
        mapLayers[key].forEach(layer => {
            if (layer instanceof L.Polyline) {
                if (layer.options.customType === 'back') {
                    layer.setStyle({ weight: isCurrent ? 9 : 5, opacity: isCurrent ? 1.0 : 0.4 });
                } else {
                    layer.setStyle({ weight: isCurrent ? 4 : 2, opacity: isCurrent ? 1.0 : 0.2 });
                }
                if (isCurrent) layer.bringToFront(); 
            }
            if (layer instanceof L.CircleMarker) {
                layer.setStyle({ opacity: isCurrent ? 1.0 : 0.3, fillOpacity: isCurrent ? 0.9 : 0.2 });
                if (isCurrent) layer.bringToFront();
            }
        });
    });
}

function initTableRowSelect(comboId, triggerId, onChangeCallback) {
    const container = document.getElementById(comboId);
    const trigger = document.getElementById(triggerId);
    const dropdown = container.querySelector(".dropdown-box");
    const filterInput = dropdown.querySelector(".filter-input");
    const list = dropdown.querySelector(".station-list");

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = container.classList.contains("open");
        closeAllCombos();
        if (!isOpen) {
            container.classList.add("open");
            renderList("");
            filterInput.value = "";
            setTimeout(() => filterInput.focus(), 50);
        }
    });

    function renderList(filterText = "") {
        list.innerHTML = "";
        const filtered = stations.filter(s => s.includes(filterText));
        filtered.forEach(station => {
            const li = document.createElement("li");
            li.className = "station-item" + (trigger.innerText === station ? " selected" : "");
            li.innerText = station;
            li.onclick = (ev) => {
                ev.stopPropagation();
                trigger.innerText = station;
                container.classList.remove("open");
                onChangeCallback();
            };
            list.appendChild(li);
        });
    }
    filterInput.oninput = function() { renderList(this.value.trim()); };
    dropdown.onclick = (ev) => ev.stopPropagation();
}

function closeAllCombos() {
    document.querySelectorAll(".custom-select-container").forEach(c => c.classList.remove("open"));
}
document.addEventListener("click", closeAllCombos);

function calculateAllRoutes() {
    Object.keys(mapLayers).forEach(key => { mapLayers[key].forEach(layer => mapInstance.removeLayer(layer)); });
    mapLayers = {};
    const rows = document.querySelectorAll("#excelBody tr");
    let totalDist = 0, totalCarbon = 0, validCount = 0, index = 0;

    rows.forEach(row => {
        const rowId = row.id;
        const startName = document.getElementById(`${rowId}_startTrigger`).innerText;
        const endName = document.getElementById(`${rowId}_endTrigger`).innerText;
        const passengers = parseInt(document.getElementById(`${rowId}_passengers`).value) || 1;
        const colorHex = ROUTE_COLORS[index % ROUTE_COLORS.length];
        index++;
        
        if (startName === endName) return; 
        
        const routeResult = getSmartRoute(startName, endName);
        if (routeResult && routeResult.dist > 0) {
            const CARBON_FACTOR = 0.048;
            const trainCarbon = routeResult.dist * CARBON_FACTOR * passengers;
            
            document.getElementById(`${rowId}_distanceText`).innerText = routeResult.dist.toFixed(1);
            document.getElementById(`${rowId}_carbonText`).innerText = trainCarbon.toFixed(3);
            
            rowDataStore[rowId] = { dist: routeResult.dist, carbon: trainCarbon, path: routeResult.path, nodes: routeResult.nodes };
            totalDist += routeResult.dist; 
            totalCarbon += trainCarbon; 
            validCount++;
            
            mapLayers[rowId] = [];
            const currentRouteLatLngs = [];
            
            routeResult.nodes.forEach((node, nIdx) => {
                const pos = getStationLatLng(node);
                currentRouteLatLngs.push(pos);
                if (nIdx === 0 || nIdx === routeResult.nodes.length - 1) {
                    const isStart = (nIdx === 0);
                    const marker = L.circleMarker(pos, { radius: isStart ? 6 : 5, fillColor: isStart ? '#ffffff' : colorHex, color: colorHex, weight: 2, fillOpacity: 1.0 }).addTo(mapInstance).bindPopup(`<b>行程 ${validCount} [${isStart?'起點':'終點'}]</b><br>車站：${node}`);
                    mapLayers[rowId].push(marker);
                }
            });

            const polylineBack = L.polyline(currentRouteLatLngs, { 
                color: colorHex, 
                weight: 5, 
                opacity: 0.7, 
                customType: 'back' 
            }).addTo(mapInstance);

            const polylineFront = L.polyline(currentRouteLatLngs, { 
                color: '#ffffff', 
                weight: 2, 
                dashArray: '5, 8', 
                opacity: 0.9, 
                customType: 'front' 
            }).addTo(mapInstance);

            mapLayers[rowId].push(polylineBack, polylineFront);
        }
    });

    // 新增：重新計算完成後，渲染總結看板
    const summaryBox = document.getElementById("summaryResult");
    if (validCount > 0) {
        summaryBox.style.display = "block";
        document.getElementById("totalCount").innerText = validCount;
        document.getElementById("totalDistance").innerText = totalDist.toFixed(1);
        document.getElementById("totalCarbon").innerText = totalCarbon.toFixed(3);
    } else {
        summaryBox.style.display = "none";
    }
}

function getStationLines(stationName) { let lines = []; Object.keys(STATION_DB).forEach(line => { if (STATION_DB[line][stationName] !== undefined) lines.push(line); }); return lines; }
function getDirectDist(line, s1, s2) { return Math.abs(STATION_DB[line][s1] - STATION_DB[line][s2]); }
function getRouteNodesList(line, s1, s2) {
    const lineStations = STATION_DB[line];
    const s1Dist = lineStations[s1], s2Dist = lineStations[s2];
    const minDist = Math.min(s1Dist, s2Dist), maxDist = Math.max(s1Dist, s2Dist);
    let inRange = Object.keys(lineStations).filter(s => lineStations[s] >= minDist && lineStations[s] <= maxDist);
    inRange.sort((a, b) => lineStations[a] - lineStations[b]);
    if (s1Dist > s2Dist) inRange.reverse();
    return inRange;
}

function getSmartRoute(start, end) {
    if (start === end) return { dist: 0, path: start, nodes: [start] };
    const sLines = getStationLines(start), eLines = getStationLines(end);
    for (let sL of sLines) {
        if (eLines.includes(sL)) { return { dist: getDirectDist(sL, start, end), path: `${start} → ${end}`, nodes: getRouteNodesList(sL, start, end) }; }
    }
    
    // 防呆兜底：如果資料庫查不到直達（如跨幹線），回傳兩站點直線，距離暫估
    return { dist: 50, path: `${start} 至 ${end} (跨線路暫估)`, nodes: [start, end] };
}

function getStationLatLng(stationName) {
    if (STATION_GEO[stationName]) return STATION_GEO[stationName];
    return null;
}