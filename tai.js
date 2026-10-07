const vendorData = [
    { id: "A00001", name: "正豐" }, { id: "A00002", name: "永順" }, { id: "A00003", name: "力泰" },
    { id: "A00004", name: "日昶" }, { id: "A00005", name: "永昌" }, { id: "A00006", name: "福久" },
    { id: "A00008", name: "長洲" }, { id: "A00009", name: "宏元" }, { id: "A00011", name: "順合" },
    { id: "A00012", name: "宏久" }, { id: "A00014", name: "東春" }, { id: "A00015", name: "中興" },
    { id: "A00018", name: "勝新" }, { id: "A00022", name: "富達" }, { id: "A00024", name: "鴻泰" },
    { id: "A00025", name: "冠陞" }, { id: "A00027", name: "中壢世豐" }, { id: "A00028", name: "信昌" },
    { id: "A00029", name: "金鼎" }, { id: "A00030", name: "壢昌" }, { id: "A00031", name: "眾南" },
    { id: "A00033", name: "良記" }, { id: "A00035", name: "順吉" }, { id: "A00036", name: "福合" },
    { id: "A00039", name: "興曜" }, { id: "A00043", name: "德霖" }, { id: "A00045", name: "協隆" },
    { id: "A00046", name: "敦揚" }, { id: "A00050", name: "慶誠" }, { id: "A00053", name: "嘉興" },
    { id: "A00054", name: "明德" }, { id: "A00057", name: "億芬" }, { id: "A00060", name: "木全號" },
    { id: "A00061", name: "廣山" }, { id: "A00062", name: "正佳" }, { id: "A00066", name: "昇旻" },
    { id: "A00067", name: "成洲" }, { id: "A00068", name: "展慶" }, { id: "A00070", name: "聖泥" },
    { id: "A00071", name: "台揚" }, { id: "A00073", name: "雅山竹" }, { id: "A00074", name: "嘉麗雅" },
    { id: "A00075", name: "新協興" }, { id: "A00076", name: "秝鋒" }, { id: "A00078", name: "宸豐" },
    { id: "A00079", name: "金品" }, { id: "A00080", name: "八德世豐" }, { id: "A00081", name: "益慶" },
    { id: "A00082", name: "羚木" }, { id: "A00083", name: "崇泰" }, { id: "A00085", name: "華泰" },
    { id: "A00087", name: "世雅" }, { id: "A00088", name: "義興" }, { id: "A00090", name: "德立" },
    { id: "A00093", name: "坤英" }, { id: "A00096", name: "東鴻" }, { id: "A00099", name: "福豐" },
    { id: "A00101", name: "康宇" }, { id: "A00102", name: "元津" }, { id: "A00103", name: "朝新" },
    { id: "A00105", name: "唐德" }, { id: "A00107", name: "永興" }, { id: "A00109", name: "銪成" },
    { id: "A00111", name: "舜菖" }, { id: "A00112", name: "廣聯" }, { id: "A00113", name: "台騰" },
    { id: "A00115", name: "華興" }, { id: "A00119", name: "佳承" }, { id: "A00122", name: "中華" },
    { id: "A00127", name: "鈺加" }, { id: "A00128", name: "祈美" }, { id: "A00129", name: "永勝" },
    { id: "A00130", name: "喬云" }, { id: "A00131", name: "立山" }, { id: "A00134", name: "昱門" },
    { id: "A00136", name: "統一" }, { id: "A00137", name: "新竹永昌" }, { id: "A00138", name: "元亨" },
    { id: "A00139", name: "竹北" }, { id: "A00144", name: "勝利" }, { id: "A00146", name: "福展" },
    { id: "A00148", name: "竹駿" }, { id: "A00160", name: "青松" }, { id: "C00006", name: "李振吉" },
    { id: "C00082", name: "宜安" }, { id: "C00084", name: "詠昕" }, { id: "C00087", name: "昕育" },
    { id: "C00090", name: "王冠傑" }, { id: "C00101", name: "橙石" }, { id: "C00110", name: "一站材料" },
    { id: "C00111", name: "謝昌德" }, { id: "C00112", name: "耀澄" }, { id: "C00113", name: "聖儒" },
    { id: "D00011", name: "晟暉" }, { id: "D00019", name: "莊謹謙" }, { id: "D00020", name: "睿翔" },
    { id: "E00001", name: "鄭書銘大帥" }, { id: "E00008", name: "喬鴻" }, { id: "E00010", name: "詹勳杞" },
    { id: "E00017", name: "黎傳圓" }, { id: "E00018", name: "希望義工團" }, { id: "E00040", name: "歐道鈐" },
    { id: "E00148", name: "鵬程" },
    { id: "E00179", name: "新生木業" }, { id: "E00189", name: "佳美" }, { id: "E00204", name: "世豐木業" }
];

// ====== 附件白名單與優先順序設定 ======
const accessoryPriority = {
    "集成": 10,
    "實木": 10,
    "永集": 10,
    "集6分": 10,
    "+岩棉": 10,
    "+料": 10,
    "左右+1支": 10,
    "四邊+1支": 10,
    "鎖+強": 10,
    "+洞": 10,
    "+保麗龍": 10,
    "+鎖洞▲": 18, 
    "+鎖洞▼": 18,
    "+鎖洞一般":18, 
    "+門擋料": 20,
    "+丁雙洞": 20,
    "+左右封邊": 20,
    "+四邊封邊": 20,
    "皮封四邊": 20,
};

const dropdownOptions = [
    "實木", "集成" , "永集" , "集6分" , "+料", "左右+1支", "四邊+1支" , "+岩棉", "+洞", "鎖+強" , "+鎖洞▲", "+鎖洞▼", "+鎖洞一般" , "+左右封邊", "+四邊封邊", "附左右封邊皮",  
    "+門擋料" , "+丁雙洞" , "+保麗龍" ,  "組裝五金-喇房", "組裝五金-喇廁", "組裝五金-水房", "組裝五金-水廁", "烤雕", 
    "幸福丁雙", "雷克拉丁雙" , "皮封四邊", "內左", "內右", "外左", "外右"
];

function parseAndSortRemarks(rawText) {
    if (!rawText) return { midSelects: [], midText: "", botSelects: [], botText: "" };
    
    // 1. 自動校正與極致防呆
    let standardizedText = rawText
        .replace(/\+?\s*鎖\s*洞\s*[↓下]/g, '+鎖洞▼')
        .replace(/\+?\s*鎖\s*洞\s*[↑上]/g, '+鎖洞▲')
        .replace(/(\+鎖洞[▲▼])\s+(?=\d)/g, '$1')
        .replace(/(\d)\s+(cm|公分)/gi, '$1$2')
        .replace(/(內左|內右|外左|外右)/g, ' $1 ');

    // 2. 換行轉空格
    let cleanRaw = standardizedText.replace(/[\r\n]+/g, ' ');
    
    // 3. 複合詞保護
    let protectedText = cleanRaw
        .replace(/鎖\+強/g, '鎖_PLUS_強')
        .replace(/左右\+1支/g, '左右_PLUS_1支')
        .replace(/四邊\+1支/g, '四邊_PLUS_1支')
        .replace(/四\+1支/g, '四_PLUS_1支');

    // 4. 將剩下的 '+' 前面統一補上空格
    let formattedText = protectedText.replace(/\+/g, ' +');
    let rawItems = formattedText.split(/[\s\/,]+/);
    
    // 5. 將保護的符號 '_PLUS_' 還原回 '+'
    rawItems = rawItems.map(item => item.replace(/_PLUS_/g, '+'));
    
    // 6. 智慧過濾機制
    let validItems = rawItems.filter(item => {
        let baseKey = item.replace(/[\d.]+(cm|公分)?$/i, ''); 
        if (accessoryPriority.hasOwnProperty(baseKey)) return true;
        if (dropdownOptions.includes(baseKey)) return true;
        if (/^\+?鎖洞[▲▼][\d.]+(cm|公分)?$/i.test(item)) return true;
        return false;
    });

    if (validItems.length === 0) return { midSelects: [], midText: "", botSelects: [], botText: "" };

    // 7. 依照優先順序進行數值排序
    validItems.sort((a, b) => {
        let keyA = a.replace(/[\d.]+(cm|公分)?$/i, '');
        let keyB = b.replace(/[\d.]+(cm|公分)?$/i, '');
        let valA = accessoryPriority.hasOwnProperty(keyA) ? accessoryPriority[keyA] : (/^\+?鎖洞[▲▼]/.test(a) ? 20 : 99);
        let valB = accessoryPriority.hasOwnProperty(keyB) ? accessoryPriority[keyB] : (/^\+?鎖洞[▲▼]/.test(b) ? 20 : 99);
        return valA - valB;
    });
    
    let sortedUniqueItems = [...new Set(validItems)];

    // 8. 初始分配 (以 20 為分界)
    let itemsTop = sortedUniqueItems.filter(item => {
        let key = item.replace(/[\d.]+(cm|公分)?$/i, '');
        let p = accessoryPriority.hasOwnProperty(key) ? accessoryPriority[key] : (/^\+?鎖洞[▲▼]/.test(item) ? 20 : 99);
        return p < 20;
    });
    
    let itemsBot = sortedUniqueItems.filter(item => {
        let key = item.replace(/[\d.]+(cm|公分)?$/i, '');
        let p = accessoryPriority.hasOwnProperty(key) ? accessoryPriority[key] : (/^\+?鎖洞[▲▼]/.test(item) ? 20 : 99);
        return p >= 20;
    });

    // 9. 自動平衡兩行備註
    if (itemsTop.length > 1 && itemsBot.length === 0) {
        let half = Math.ceil(itemsTop.length / 2);
        itemsBot = itemsTop.slice(half);
        itemsTop = itemsTop.slice(0, half);
    }
    else if (itemsBot.length > 1 && itemsTop.length === 0) {
        let half = Math.ceil(itemsBot.length / 2);
        itemsTop = itemsBot.slice(0, half);
        itemsBot = itemsBot.slice(half);
    }

    // 10. 下拉選單處理與字串組合
    let midSelects = [], midTextArray = [];
    itemsTop.forEach(item => {
        let baseKey = item.replace(/[\d.]+(cm|公分)?$/i, ''); 
        if (dropdownOptions.includes(baseKey)) {
            midSelects.push(item);
        } else {
            midTextArray.push(item);
        }
    });

    let botSelects = [], botTextArray = [];
    itemsBot.forEach(item => {
        let baseKey = item.replace(/[\d.]+(cm|公分)?$/i, '');
        if (dropdownOptions.includes(baseKey)) {
            botSelects.push(item); 
        } else {
            botTextArray.push(item);
        }
    });

    return { 
        midSelects: midSelects, 
        midText: midTextArray.join("."), 
        botSelects: botSelects, 
        botText: botTextArray.join(".") 
    };
}

const vendorModal = document.getElementById('vendorModal');
const vendorInput = document.getElementById('vendorInput');
const vendorDropdown = document.getElementById('vendorDropdown');
const previewVendor = document.getElementById('preview-vendor');

let currentHighlightIndex = -1;
let filteredVendors = [];

function openVendorModal() {
    if (!vendorModal) return;
    vendorModal.style.display = 'flex';
    let currentName = previewVendor.innerText.trim();
    if(currentName === '廠商名稱') currentName = '';
    vendorInput.value = currentName;
    vendorDropdown.style.display = 'none';
    
    setTimeout(() => {
        vendorInput.focus();
        vendorInput.select();
    }, 100);
}

function closeVendorModal(e) {
    if (!vendorModal) return;
    if(e && e.target !== vendorModal) return; 
    vendorModal.style.display = 'none';
}

function applyVendor() {
    if (!vendorInput || !previewVendor) return;
    const val = vendorInput.value.trim();
    if(val) {
        previewVendor.innerText = val;
    } else {
        previewVendor.innerText = '廠商名稱';
    }
    autoFitLeft(previewVendor);
    if (vendorModal) vendorModal.style.display = 'none';
}

if (vendorInput && vendorDropdown) {
    vendorInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        currentHighlightIndex = -1;
        
        if (!query) {
            vendorDropdown.style.display = 'none';
            return;
        }
        
        filteredVendors = vendorData.filter(v => 
            v.id.toLowerCase().includes(query) || v.name.toLowerCase().includes(query)
        );
        
        renderDropdown();
    });

    vendorInput.addEventListener('keydown', function(e) {
        const items = vendorDropdown.querySelectorAll('li');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (vendorDropdown.style.display === 'block' && currentHighlightIndex < items.length - 1) {
                currentHighlightIndex++;
                updateHighlight();
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (vendorDropdown.style.display === 'block' && currentHighlightIndex > 0) {
                currentHighlightIndex--;
                updateHighlight();
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (vendorDropdown.style.display === 'block' && currentHighlightIndex >= 0) {
                vendorInput.value = filteredVendors[currentHighlightIndex].name;
                vendorDropdown.style.display = 'none';
                currentHighlightIndex = -1;
            } else {
                applyVendor();
            }
        }
    });
}

function renderDropdown() {
    if (!vendorDropdown) return;
    if (filteredVendors.length === 0) {
        vendorDropdown.style.display = 'none';
        return;
    }
    
    vendorDropdown.innerHTML = '';
    filteredVendors.forEach((v, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${v.name}</span> <span class="vendor-id">${v.id}</span>`;
        
        li.onclick = () => {
            vendorInput.value = v.name;
            applyVendor();
        };
        
        li.onmouseenter = () => {
            currentHighlightIndex = index;
            updateHighlight();
        };
        
        vendorDropdown.appendChild(li);
    });
    vendorDropdown.style.display = 'block';
}

function updateHighlight() {
    if (!vendorDropdown) return;
    const items = vendorDropdown.querySelectorAll('li');
    items.forEach((item, index) => {
        if (index === currentHighlightIndex) {
            item.classList.add('active');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.classList.remove('active');
        }
    });
}

const heightInput = document.getElementById('height');
const widthInput = document.getElementById('width');
const labelItem1 = document.getElementById('label-item-1');

const batchListContainer = document.getElementById('batchListContainer');
const batchCountTitle = document.getElementById('batch-count-title');
const batchPrintContainer = document.getElementById('batch-print-container');

let batchItems = [];
let editIndex = -1; 

function resetEditMode() {
    editIndex = -1;
    const btnAdd = document.querySelector('.btn-add');
    btnAdd.innerText = '加入批次清單';
    btnAdd.style.backgroundColor = '#ff9500';
}

const datalist = document.createElement('datalist');
datalist.id = 'shared-dropdown-options';
dropdownOptions.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt;
    datalist.appendChild(option);
});
document.body.appendChild(datalist);

function addSelect(lineNumber) {
    const container = document.getElementById(`select-container-${lineNumber}`);
    const wrapper = document.createElement('div');
    wrapper.className = 'select-wrapper';

    wrapper.draggable = true;
    wrapper.id = 'select-wrapper-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    wrapper.style.cursor = 'grab';

    const input = document.createElement('input');
    input.type = 'text';
    input.setAttribute('list', 'shared-dropdown-options');
    input.placeholder = '-- 請選擇或輸入 --';
    input.className = 'custom-select-input';

    const delBtn = document.createElement('button');
    delBtn.textContent = '取消';
    delBtn.className = 'btn-del-select';
    delBtn.onclick = function() {
        const currentContainer = this.closest('[id^="select-container-"]');
        const currentLine = currentContainer.id.split('-').pop();
        wrapper.remove();
        updateLabelFromSelects(currentLine);
    };

    input.oninput = function() {
        const currentContainer = this.closest('[id^="select-container-"]');
        const currentLine = currentContainer.id.split('-').pop();
        updateLabelFromSelects(currentLine);
    };

    wrapper.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', wrapper.id);
        e.dataTransfer.effectAllowed = 'move';
        wrapper.style.opacity = '0.5';
    });

    wrapper.addEventListener('dragend', () => {
        wrapper.style.opacity = '1';
    });

    wrapper.appendChild(input);
    wrapper.appendChild(delBtn);
    container.appendChild(wrapper);
}

// ====== 計算拖曳時滑鼠位置最靠近的子元素 (實現上下排序) ======
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.select-wrapper:not([style*="opacity: 0.5"])')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// ====== 設定容器的拖曳投放與排序邏輯 ======
function setupDragAndDropForContainer(lineNumber) {
    const container = document.getElementById(`select-container-${lineNumber}`);
    if (!container) return;

    container.style.minHeight = '42px';
    container.style.minWidth = '100px';
    container.style.padding = '4px';
    container.style.borderRadius = '4px';
    container.style.transition = 'background-color 0.2s ease';

    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        container.style.backgroundColor = 'rgba(0, 122, 255, 0.1)';
    });

    container.addEventListener('dragleave', (e) => {
        container.style.backgroundColor = '';
    });

    container.addEventListener('drop', (e) => {
        e.preventDefault();
        container.style.backgroundColor = '';
        
        const draggedId = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedId);

        if (draggedElement) {
            const sourceContainer = draggedElement.parentElement;
            const sourceLine = sourceContainer.id.split('-').pop();

            // 根據滑鼠 Y 軸位置決定要插入在落點目標的前面或後面
            const afterElement = getDragAfterElement(container, e.clientY);
            if (afterElement == null) {
                container.appendChild(draggedElement);
            } else {
                container.insertBefore(draggedElement, afterElement);
            }

            // 更新標籤內容（跨容器時更新兩邊，同容器時更新該容器）
            if (sourceContainer !== container) {
                updateLabelFromSelects(sourceLine);
            }
            updateLabelFromSelects(lineNumber);
        }
    });
}

setupDragAndDropForContainer(2);
setupDragAndDropForContainer(3);

function updateLabelFromSelects(line) {
    const container = document.getElementById(`select-container-${line}`);
    const inputs = container.querySelectorAll('input');
    
    const values = Array.from(inputs)
        .map(input => input.value.trim())
        .filter(v => v !== '');

    const tagsEl = document.getElementById(`label-tags-${line}`);
    if(tagsEl) {
        tagsEl.textContent = values.length > 0 ? (' ' + values.join('.')) : '';
    }

    autoFitRight(document.getElementById(`label-wrapper-${line}`));
}

function resetForm() {
    heightInput.value = '';
    widthInput.value = '';
    labelItem1.innerText = '';
    
    document.getElementById('label-item-2').innerText = '';
    document.getElementById('label-tags-2').innerText = '';
    document.getElementById('select-container-2').innerHTML = '';

    document.getElementById('label-item-3').innerText = '';
    document.getElementById('label-tags-3').innerText = '';
    document.getElementById('select-container-3').innerHTML = '';

    autoFitRight(labelItem1);
    autoFitRight(document.getElementById('label-wrapper-2'));
    autoFitRight(document.getElementById('label-wrapper-3'));

    resetEditMode();
    updateBatchUI();

    heightInput.focus();
}

function focusEditable(line) {
    document.getElementById(`label-item-${line}`).focus();
}

function selectAllText(el) {
    if (el.dataset.isSelected === 'true') return;
    const selection = window.getSelection();
    if (!selection) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);
    el.dataset.isSelected = 'true';
    el.addEventListener('blur', function onBlur() {
        el.dataset.isSelected = 'false';
        el.removeEventListener('blur', onBlur);
    });
}

function getCleanText(el) {
    return (el.innerText || '').replace(/\r?\n/g, '').trim();
}

function autoFit(el, defaultSize = 22) {
    if (!el) return '';
    let currentSize = defaultSize;
    el.style.fontSize = currentSize + 'px';
    while ((Math.ceil(el.scrollHeight) > Math.floor(el.clientHeight) + 1) ||
           (Math.ceil(el.scrollWidth) > Math.floor(el.clientWidth) + 1)) {
        if (currentSize <= 6) break;
        currentSize -= 0.5;
        el.style.fontSize = currentSize + 'px';
    }
    return el.style.fontSize;
}

function autoFitLeft(el) { return autoFit(el, 40); }
function autoFitRight(el) { return autoFit(el, 22); }

function updateLabelKeepText(labelEl, newDim) {
    let currentText = (labelEl.innerText || '').replace(/\r?\n/g, '');
    let regex = /^[\d.]+\s*\*\s*[\d.]+/;

    if (currentText.trim() === '') {
        labelEl.innerText = newDim;
    } else if (regex.test(currentText)) {
        labelEl.innerText = currentText.replace(regex, newDim);
    } else {
        labelEl.innerText = newDim + ' ' + currentText;
    }
}

function clearLabelDimension(labelEl) {
    let currentText = (labelEl.innerText || '').replace(/\r?\n/g, '');
    let regex = /^[\d.]+\s*\*\s*[\d.]+\s*/;
    labelEl.innerText = currentText.replace(regex, '');
}

function updateCalculations() {
    const hVal = heightInput.value;
    const wVal = widthInput.value;

    if (hVal !== '' && wVal !== '') {
        const dimStr = `${hVal}*${wVal}`;
        updateLabelKeepText(labelItem1, dimStr);
        autoFitRight(labelItem1);
    } else {
        clearLabelDimension(labelItem1);
        autoFitRight(labelItem1);
    }
}

function getSelects(line) {
    return Array.from(document.querySelectorAll(`#select-container-${line} input`))
        .map(inp => inp.value.trim())
        .filter(v => v !== '');
}

function addToBatch() {
    const vendor = getCleanText(previewVendor);
    const line1 = getCleanText(labelItem1);
    const line2 = getCleanText(document.getElementById('label-wrapper-2'));
    const line3 = getCleanText(document.getElementById('label-wrapper-3'));

    const vendorFs = autoFitLeft(previewVendor);
    const line1Fs = autoFitRight(labelItem1);
    const line2Fs = autoFitRight(document.getElementById('label-wrapper-2'));
    const line3Fs = autoFitRight(document.getElementById('label-wrapper-3'));

    const newItem = {
        vendor: vendor || '廠商名稱',
        line1: line1,
        line2: line2,
        line3: line3,
        line2Text: getCleanText(document.getElementById('label-item-2')),
        line3Text: getCleanText(document.getElementById('label-item-3')),
        line2Selects: getSelects(2),
        line3Selects: getSelects(3),
        vendorFs: vendorFs,
        line1Fs: line1Fs,
        line2Fs: line2Fs,
        line3Fs: line3Fs,
        selected: false
    };

    if (editIndex !== -1) {
        batchItems[editIndex] = newItem;
        resetEditMode();
    } else {
        batchItems.push(newItem);
    }

    updateBatchUI();
    heightInput.select();
}

function editBatchItem(index) {
    const item = batchItems[index];
    editIndex = index;

    previewVendor.innerText = item.vendor;
    labelItem1.innerText = item.line1;
    
    document.getElementById('label-item-2').innerText = item.line2Text !== undefined ? item.line2Text : (item.line2 || '');
    document.getElementById('select-container-2').innerHTML = '';
    if (item.line2Selects) {
        item.line2Selects.forEach(val => {
            addSelect(2);
            const inputs = document.querySelectorAll(`#select-container-2 input`);
            inputs[inputs.length - 1].value = val;
        });
    }
    updateLabelFromSelects(2);

    document.getElementById('label-item-3').innerText = item.line3Text !== undefined ? item.line3Text : (item.line3 || '');
    document.getElementById('select-container-3').innerHTML = '';
    if (item.line3Selects) {
        item.line3Selects.forEach(val => {
            addSelect(3);
            const inputs = document.querySelectorAll(`#select-container-3 input`);
            inputs[inputs.length - 1].value = val;
        });
    }
    updateLabelFromSelects(3);

    autoFitLeft(previewVendor);
    autoFitRight(labelItem1);
    autoFitRight(document.getElementById('label-wrapper-2'));
    autoFitRight(document.getElementById('label-wrapper-3'));

    heightInput.value = '';
    widthInput.value = '';

    const btnAdd = document.querySelector('.btn-add');
    btnAdd.innerText = '儲存修改';
    btnAdd.style.backgroundColor = '#007aff';

    updateBatchUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateBatchUI() {
    batchCountTitle.innerText = `待列印清單 (${batchItems.length} 張)`;
    const batchControls = document.getElementById('batch-controls');
    if (batchItems.length > 0) {
        batchControls.style.display = 'flex';
    } else {
        batchControls.style.display = 'none';
    }
    
    batchListContainer.innerHTML = '';

    batchItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = index === editIndex ? 'batch-item editing' : 'batch-item';

        const line2Display = item.line2 ? ` / ${item.line2}` : '';
        const line3Display = item.line3 ? ` / ${item.line3}` : '';
        const isChecked = item.selected ? 'checked' : '';

        div.innerHTML = `
            <div style="display:flex; align-items:flex-start; gap:15px; flex:1 1 auto; min-width:0; overflow:visible;">
                <input type="checkbox" class="batch-checkbox" ${isChecked} onchange="toggleItemSelection(${index}, this)">
                <span class="batch-item-text">
                    #${index + 1}
                    [${escapeHtml(item.vendor)}]
                    ${escapeHtml(item.line1)}
                    ${line2Display}
                    ${line3Display}
                </span>
            </div>
            <div class="batch-item-actions">
                <button class="btn-edit" onclick="editBatchItem(${index})" title="載入上方預覽區編輯">編輯</button>
                <button class="btn-remove" onclick="removeBatchItem(${index})" title="刪除這張">✕</button>
            </div>
        `;
        batchListContainer.appendChild(div);
    });
    updateSelectAllStatus();
}

function toggleSelectAll(checkbox) {
    batchItems.forEach(item => item.selected = checkbox.checked);
    updateBatchUI();
}

function toggleItemSelection(index, checkbox) {
    batchItems[index].selected = checkbox.checked;
    updateSelectAllStatus();
}

function updateSelectAllStatus() {
    const selectAllCb = document.getElementById('selectAllCheckbox');
    if (!selectAllCb) return;
    selectAllCb.checked = batchItems.length > 0 && batchItems.every(item => item.selected);
}

function applyToSelected() {
    const selectedItems = batchItems.filter(item => item.selected);
    if (selectedItems.length === 0) {
        alert('請先勾選清單中要修改的標籤！');
        return;
    }

    const newVendor = getCleanText(previewVendor) || '廠商名稱';
    const newVendorFs = autoFitLeft(previewVendor);
    
    const newLine2 = getCleanText(document.getElementById('label-wrapper-2'));
    const newLine2Fs = autoFitRight(document.getElementById('label-wrapper-2'));
    const newLine2Text = getCleanText(document.getElementById('label-item-2'));
    const newLine2Selects = getSelects(2);

    const newLine3 = getCleanText(document.getElementById('label-wrapper-3'));
    const newLine3Fs = autoFitRight(document.getElementById('label-wrapper-3'));
    const newLine3Text = getCleanText(document.getElementById('label-item-3'));
    const newLine3Selects = getSelects(3);

    const currentL1 = getCleanText(labelItem1);
    const taiRegex = /^[\d.]+\s*\*\s*[\d.]+\s*/;
    const attachL1 = currentL1.replace(taiRegex, '').trim();

    batchItems.forEach(item => {
        if (item.selected) {
            item.vendor = newVendor;
            item.vendorFs = newVendorFs;
            
            item.line2 = newLine2;
            item.line2Fs = newLine2Fs;
            item.line2Text = newLine2Text;
            item.line2Selects = [...newLine2Selects];

            item.line3 = newLine3;
            item.line3Fs = newLine3Fs;
            item.line3Text = newLine3Text;
            item.line3Selects = [...newLine3Selects];

            const origDimL1 = item.line1.match(taiRegex) ? item.line1.match(taiRegex)[0].trim() : '';
            item.line1 = attachL1 ? `${origDimL1} ${attachL1}`.trim() : origDimL1;
            
            item.selected = false;
        }
    });

    updateBatchUI();
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function removeBatchItem(index) {
    if (index < 0 || index >= batchItems.length) return;
    batchItems.splice(index, 1);
    
    if (editIndex === index) {
        resetEditMode();
    } else if (editIndex > index) {
        editIndex--;
    }

    updateBatchUI();
}

function clearBatch() {
    if (batchItems.length === 0) return;
    batchItems = [];
    resetEditMode();
    updateBatchUI();
}

function createPrintPage(item) {
    const pageDiv = document.createElement('div');
    pageDiv.className = 'print-page';

    const labelGrid = document.createElement('div');
    labelGrid.className = 'label-grid';

    const vendorCell = document.createElement('div');
    vendorCell.className = 'grid-cell col-left';
    const vendorText = document.createElement('div');
    vendorText.className = 'auto-fit-left';
    vendorText.style.fontSize = item.vendorFs || '16px';
    vendorText.textContent = item.vendor || '廠商名稱';
    vendorCell.appendChild(vendorText);

    const line1Cell = document.createElement('div');
    line1Cell.className = 'grid-cell';
    const line1Text = document.createElement('div');
    line1Text.className = 'auto-fit-right';
    line1Text.style.fontSize = item.line1Fs || '22px';
    line1Text.textContent = item.line1 || '';
    line1Cell.appendChild(line1Text);

    const line2Cell = document.createElement('div');
    line2Cell.className = 'grid-cell';
    const line2Text = document.createElement('div');
    line2Text.className = 'auto-fit-right';
    line2Text.style.fontSize = item.line2Fs || '22px';
    line2Text.textContent = item.line2 || '';
    line2Cell.appendChild(line2Text);

    const line3Cell = document.createElement('div');
    line3Cell.className = 'grid-cell';
    const line3Text = document.createElement('div');
    line3Text.className = 'auto-fit-right';
    line3Text.style.fontSize = item.line3Fs || '22px';
    line3Text.textContent = item.line3 || '';
    line3Cell.appendChild(line3Text);

    labelGrid.appendChild(vendorCell);
    labelGrid.appendChild(line1Cell);
    labelGrid.appendChild(line2Cell);
    labelGrid.appendChild(line3Cell);
    
    pageDiv.appendChild(labelGrid);

    return pageDiv;
}

function printSingle() {
    batchPrintContainer.innerHTML = '';
    const vendorText = getCleanText(previewVendor) || '廠商名稱';
    const item = {
        vendor: vendorText,
        line1: getCleanText(labelItem1),
        line2: getCleanText(document.getElementById('label-wrapper-2')),
        line3: getCleanText(document.getElementById('label-wrapper-3')),
        vendorFs: autoFitLeft(previewVendor),
        line1Fs: autoFitRight(labelItem1),
        line2Fs: autoFitRight(document.getElementById('label-wrapper-2')),
        line3Fs: autoFitRight(document.getElementById('label-wrapper-3'))
    };

    const pageDiv = createPrintPage(item);
    batchPrintContainer.appendChild(pageDiv);
    
    document.title = vendorText;
    window.print();
}

function printBatch() {
    if (batchItems.length === 0) {
        alert('目前清單是空的！');
        return;
    }
    batchPrintContainer.innerHTML = '';
    batchItems.forEach(item => {
        const pageDiv = createPrintPage(item);
        batchPrintContainer.appendChild(pageDiv);
    });

    const vendorSet = new Set(batchItems.map(item => item.vendor));
    let printTitle = '台尺標籤';
    if (vendorSet.size === 1) {
        printTitle = batchItems[0].vendor + '_批次標籤';
    } else {
        printTitle = '多廠商_批次標籤';
    }
    
    document.title = printTitle;
    window.print();
}

heightInput.addEventListener('input', updateCalculations);
widthInput.addEventListener('input', updateCalculations);

function updatePreviewScale() {
    const container = document.querySelector('.label-preview-container');
    const wrapper = document.querySelector('.preview-scale-wrapper');
    const printArea = document.getElementById('print-area');
    if (!container || !wrapper || !printArea) return;

    const baseWidth = printArea.offsetWidth;
    const baseHeight = printArea.offsetHeight;
    const availableWidth = Math.max(1, container.clientWidth - 8);
    const scale = Math.min(2, availableWidth / baseWidth);

    printArea.style.setProperty('--preview-scale', scale);
    wrapper.style.width = `${baseWidth * scale}px`;
    wrapper.style.height = `${baseHeight * scale}px`;
}

const resizeObserver = new ResizeObserver(() => {
    updatePreviewScale();
    autoFitLeft(previewVendor);
    autoFitRight(labelItem1);
    autoFitRight(document.getElementById('label-wrapper-2'));
    autoFitRight(document.getElementById('label-wrapper-3'));
});
resizeObserver.observe(document.getElementById('print-area'));
const previewContainer = document.querySelector('.label-preview-container');
if (previewContainer) resizeObserver.observe(previewContainer);

setTimeout(() => {
    updatePreviewScale();
    autoFitLeft(previewVendor);
    autoFitRight(labelItem1);
    autoFitRight(document.getElementById('label-wrapper-2'));
    autoFitRight(document.getElementById('label-wrapper-3'));
}, 50);

window.addEventListener('afterprint', () => {
    batchPrintContainer.innerHTML = '';
    document.title = '台尺標籤';
});

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get('data');
    
    if (dataParam) {
        try {
            const parsedData = JSON.parse(decodeURIComponent(dataParam));
            const customerCode = parsedData.customer_code;
            const items = parsedData.items;

            const previewVendor = document.getElementById('preview-vendor');
            const heightInput = document.getElementById('height');
            const widthInput = document.getElementById('width');
            const labelItem2 = document.getElementById('label-item-2');
            const labelItem3 = document.getElementById('label-item-3');

            if (customerCode && previewVendor) {
                const vendorMatch = vendorData.find(v => v.id.toUpperCase() === customerCode.toUpperCase());
                if (vendorMatch) {
                    previewVendor.innerText = vendorMatch.name;
                } else {
                    previewVendor.innerText = customerCode;
                }
                autoFitLeft(previewVendor);
            }

            if (items && items.length > 0) {
                items.forEach(item => {
                    if (item.height && item.width && heightInput && widthInput) {
                        heightInput.value = item.height;
                        widthInput.value = item.width;
                        updateCalculations();
                        
                        document.getElementById('select-container-2').innerHTML = '';
                        document.getElementById('select-container-3').innerHTML = '';
                        if (labelItem2) labelItem2.innerText = '';
                        if (labelItem3) labelItem3.innerText = '';
                        const tags2 = document.getElementById('label-tags-2');
                        if (tags2) tags2.textContent = '';
                        const tags3 = document.getElementById('label-tags-3');
                        if (tags3) tags3.textContent = '';

                        if (item.remarks) {
                            const parsed = parseAndSortRemarks(item.remarks);
                            
                            if (parsed.midSelects.length > 0) {
                                parsed.midSelects.forEach(val => {
                                    addSelect(2);
                                    const inputs = document.querySelectorAll('#select-container-2 input');
                                    inputs[inputs.length - 1].value = val;
                                });
                                updateLabelFromSelects(2);
                            }
                            if (labelItem2 && parsed.midText) {
                                labelItem2.innerText = parsed.midText;
                            }
                            if(document.getElementById('label-wrapper-2')) autoFitRight(document.getElementById('label-wrapper-2'));

                            if (parsed.botSelects.length > 0) {
                                parsed.botSelects.forEach(val => {
                                    addSelect(3);
                                    const inputs = document.querySelectorAll('#select-container-3 input');
                                    inputs[inputs.length - 1].value = val;
                                });
                                updateLabelFromSelects(3);
                            }
                            if (labelItem3 && parsed.botText) {
                                labelItem3.innerText = parsed.botText;
                            }
                            if(document.getElementById('label-wrapper-3')) autoFitRight(document.getElementById('label-wrapper-3'));
                        }

                        const qty = parseInt(item.qty) || 1;
                        for (let i = 0; i < qty; i++) {
                            addToBatch();
                        }
                    }
                });
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        } catch (error) {
            console.error("解析網址資料失敗:", error);
        }
    }
});

// ================= JSON 儲存與讀取功能 =================

// 儲存標籤檔 (匯出 JSON) - 支援選擇儲存路徑並記憶上一次資料夾
async function exportBatchToJson() {
    if (batchItems.length === 0) {
        alert('目前清單是空的，沒有可以儲存的標籤！');
        return;
    }
    
    // 將批次清單轉為 JSON 格式
    const dataStr = JSON.stringify(batchItems, null, 2);
    
    // 判斷廠商名稱 (如果全部標籤都是同一個廠商，就用該廠商名；否則用"多廠商")
    const vendorSet = new Set(batchItems.map(item => item.vendor));
    const vendorName = vendorSet.size === 1 ? batchItems[0].vendor : '多廠商';

    // 建立檔名：廠商名稱_日期_時分 (移除小數點)
    const date = new Date();
    const dateString = `${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
    const timeString = `${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}`;
    const defaultFilename = `${vendorName}_${dateString}_${timeString}.json`;

    try {
        // 嘗試呼叫現代瀏覽器的「另存新檔」視窗
        if (window.showSaveFilePicker) {
            const handle = await window.showSaveFilePicker({
                id: 'tai-label-save-dir', // 讓瀏覽器記住上次開啟的資料夾 (針對台尺版獨立記憶)
                suggestedName: defaultFilename,
                types: [{
                    description: 'JSON 標籤檔',
                    accept: { 'application/json': ['.json'] },
                }],
            });
            const writable = await handle.createWritable();
            await writable.write(dataStr);
            await writable.close();
        } else {
            // 如果瀏覽器不支援 (例如較舊的瀏覽器)，則使用傳統下載
            fallbackDownload(dataStr, defaultFilename);
        }
    } catch (err) {
        // 如果使用者在視窗按了「取消」會觸發 AbortError，我們忽略它
        if (err.name !== 'AbortError') {
            console.error('無法開啟儲存視窗，改用傳統下載:', err);
            fallbackDownload(dataStr, defaultFilename);
        }
    }
}

// 傳統下載備用方案
function fallbackDownload(dataStr, filename) {
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 讀取標籤檔 (匯入 JSON) - 按鈕用
function importBatchFromJson(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedItems = JSON.parse(e.target.result);
            
            if (Array.isArray(importedItems)) {
                // 直接清除原本的清單，替換成新讀取的標籤
                batchItems = importedItems;
                
                // 重設編輯狀態並更新畫面
                resetEditMode();
                updateBatchUI();
            } else {
                alert('檔案格式不正確，無法讀取標籤資料。');
            }
        } catch (error) {
            alert('解析檔案時發生錯誤，請確認這是否為系統匯出的標籤檔。');
            console.error(error);
        }
    };
    reader.readAsText(file);
    
    // 清空 input，確保下次選同一個檔案也能觸發 onchange 事件
    event.target.value = '';
}

// ================= 拖曳檔案直接讀取功能 =================

// 當檔案拖進網頁範圍時，給點視覺回饋 (畫面變色)
document.addEventListener('dragover', (e) => {
    e.preventDefault(); 
    document.body.style.opacity = "0.7"; 
    document.body.style.background = "#e6f2ff"; 
});

// 當檔案離開網頁範圍時，恢復原狀
document.addEventListener('dragleave', (e) => {
    e.preventDefault();
    document.body.style.opacity = "1";
    document.body.style.background = "#f0f2f5";
});

// 當檔案在網頁上「放開」時，自動讀取
document.addEventListener('drop', (e) => {
    e.preventDefault(); 
    document.body.style.opacity = "1";
    document.body.style.background = "#f0f2f5";
    
    // 取得拖曳進來的檔案
    const file = e.dataTransfer.files[0];
    if (!file) return;

    // 檢查副檔名是不是 json
    if (file.type !== "application/json" && !file.name.toLowerCase().endsWith('.json')) {
        alert('格式錯誤：請丟入正確的 JSON 標籤檔！');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedItems = JSON.parse(e.target.result);
            
            if (Array.isArray(importedItems)) {
                // 直接清除原本的清單，替換成新讀取的標籤
                batchItems = importedItems;
                
                resetEditMode();
                updateBatchUI();
            } else {
                alert('檔案格式不正確，無法讀取標籤資料。');
            }
        } catch (error) {
            alert('解析檔案時發生錯誤，請確認這是否為系統匯出的標籤檔。');
            console.error(error);
        }
    };
    reader.readAsText(file);
});