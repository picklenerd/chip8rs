(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./chip8.js":
/*!******************!*\
  !*** ./chip8.js ***!
  \******************/
/*! exports provided: __wbg_f_log_log_n, __wbg_f_getRandomSeed_getRandomSeed_n, __wbg_f_setPixel_setPixel_n, __wbg_f_clearScreen_clearScreen_n, Cpu, Keyboard, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbindgen_number_new, __wbindgen_number_get, __wbindgen_undefined_new, __wbindgen_null_new, __wbindgen_is_null, __wbindgen_is_undefined, __wbindgen_boolean_new, __wbindgen_boolean_get, __wbindgen_symbol_new, __wbindgen_is_symbol, __wbindgen_string_get, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_f_log_log_n\", function() { return __wbg_f_log_log_n; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_f_getRandomSeed_getRandomSeed_n\", function() { return __wbg_f_getRandomSeed_getRandomSeed_n; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_f_setPixel_setPixel_n\", function() { return __wbg_f_setPixel_setPixel_n; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_f_clearScreen_clearScreen_n\", function() { return __wbg_f_clearScreen_clearScreen_n; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cpu\", function() { return Cpu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Keyboard\", function() { return Keyboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_new\", function() { return __wbindgen_number_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_get\", function() { return __wbindgen_number_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_undefined_new\", function() { return __wbindgen_undefined_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_null_new\", function() { return __wbindgen_null_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_null\", function() { return __wbindgen_is_null; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_new\", function() { return __wbindgen_boolean_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return __wbindgen_boolean_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_symbol_new\", function() { return __wbindgen_symbol_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_symbol\", function() { return __wbindgen_is_symbol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _chip8_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chip8_bg */ \"./chip8_bg.wasm\");\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/index */ \"./js/index.js\");\n/* tslint:disable */\n\n\n\n\n\nconst __wbg_f_log_log_n_target = console.log;\n\nconst TextDecoder = typeof self === 'object' && self.TextDecoder\n    ? self.TextDecoder\n    : __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextDecoder;\n\nlet cachedDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null ||\n        cachegetUint8Memory.buffer !== _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer)\n        cachegetUint8Memory = new Uint8Array(_chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_f_log_log_n(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    __wbg_f_log_log_n_target(varg0);\n}\n\nfunction __wbg_f_getRandomSeed_getRandomSeed_n() {\n    return Object(_js_index__WEBPACK_IMPORTED_MODULE_1__[\"getRandomSeed\"])();\n}\n\nfunction __wbg_f_setPixel_setPixel_n(arg0, arg1) {\n    Object(_js_index__WEBPACK_IMPORTED_MODULE_1__[\"setPixel\"])(arg0, arg1);\n}\n\nfunction __wbg_f_clearScreen_clearScreen_n() {\n    Object(_js_index__WEBPACK_IMPORTED_MODULE_1__[\"clearScreen\"])();\n}\n\nlet cachegetUint64Memory = null;\nfunction getUint64Memory() {\n    if (cachegetUint64Memory === null ||\n        cachegetUint64Memory.buffer !== _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer)\n        cachegetUint64Memory = new BigUint64Array(_chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    return cachegetUint64Memory;\n}\n\nfunction passArray8ToWasm(arg) {\n    const ptr = _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](arg.length * 1);\n    getUint8Memory().set(arg, ptr / 1);\n    return [ptr, arg.length];\n}\n\nclass Cpu {\n\n                static __construct(ptr) {\n                    return new Cpu(ptr);\n                }\n\n                constructor(ptr) {\n                    this.ptr = ptr;\n                }\n\n            free() {\n                const ptr = this.ptr;\n                this.ptr = 0;\n                _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_cpu_free\"](ptr);\n            }\n        static new() {\n    return Cpu.__construct(_chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_new\"]());\n}\nload_from_web(arg0) {\n    const [ptr0, len0] = passArray8ToWasm(arg0);\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_load_from_web\"](this.ptr, ptr0, len0);\n}\nstart() {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_start\"](this.ptr);\n}\nstep() {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_step\"](this.ptr);\n}\nprogram_counter() {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_program_counter\"](this.ptr);\n}\nstack_pointer() {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_stack_pointer\"](this.ptr);\n}\ndelay_timer() {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_delay_timer\"](this.ptr);\n}\nsound_timer() {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_sound_timer\"](this.ptr);\n}\ni_register() {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_i_register\"](this.ptr);\n}\ndata_registers() {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_data_registers\"](this.ptr);\n}\nstack() {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_stack\"](this.ptr);\n}\nram() {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_ram\"](this.ptr);\n}\nget_keyboard_state() {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_get_keyboard_state\"](this.ptr);\n}\nset_key_down(arg0) {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_set_key_down\"](this.ptr, arg0);\n}\nset_key_up(arg0) {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_set_key_up\"](this.ptr, arg0);\n}\n}\n\nclass Keyboard {\n\n                static __construct(ptr) {\n                    return new Keyboard(ptr);\n                }\n\n                constructor(ptr) {\n                    this.ptr = ptr;\n                }\n\n            free() {\n                const ptr = this.ptr;\n                this.ptr = 0;\n                _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_keyboard_free\"](ptr);\n            }\n        static new() {\n    return Keyboard.__construct(_chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"keyboard_new\"]());\n}\nset_key_down(arg0) {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"keyboard_set_key_down\"](this.ptr, arg0);\n}\nset_key_up(arg0) {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"keyboard_set_key_up\"](this.ptr, arg0);\n}\nget_key_down(arg0) {\n    return (_chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"keyboard_get_key_down\"](this.ptr, arg0)) !== 0;\n}\nany_keys_down() {\n    return (_chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"keyboard_any_keys_down\"](this.ptr)) !== 0;\n}\nlast_key_down() {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"keyboard_last_key_down\"](this.ptr);\n}\nget_state() {\n    return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"keyboard_get_state\"](this.ptr);\n}\n}\n\nlet slab = [];\n\nlet slab_next = 0;\n\nfunction addHeapObject(obj) {\n    if (slab_next === slab.length)\n        slab.push(slab.length + 1);\n    const idx = slab_next;\n    const next = slab[idx];\n\n    slab_next = next;\n\n    slab[idx] = { obj, cnt: 1 };\n    return idx << 1;\n}\n\nlet stack = [];\n\nfunction getObject(idx) {\n    if ((idx & 1) === 1) {\n        return stack[idx >> 1];\n    } else {\n        const val = slab[idx >> 1];\n\n    return val.obj;\n\n    }\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    // If this object is on the stack promote it to the heap.\n    if ((idx & 1) === 1)\n        return addHeapObject(getObject(idx));\n\n    // Otherwise if the object is on the heap just bump the\n    // refcount and move on\n    const val = slab[idx >> 1];\n    val.cnt += 1;\n    return idx;\n}\n\nfunction dropRef(idx) {\n\n    let obj = slab[idx >> 1];\n\n    obj.cnt -= 1;\n    if (obj.cnt > 0)\n        return;\n\n    // If we hit 0 then free up our space in the slab\n    slab[idx >> 1] = slab_next;\n    slab_next = idx >> 1;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropRef(i); }\n\nfunction __wbindgen_string_new(p, l) {\n    return addHeapObject(getStringFromWasm(p, l));\n}\n\nfunction __wbindgen_number_new(i) { return addHeapObject(i); }\n\nfunction __wbindgen_number_get(n, invalid) {\n    let obj = getObject(n);\n    if (typeof(obj) === 'number')\n        return obj;\n    getUint8Memory()[invalid] = 1;\n    return 0;\n}\n\nfunction __wbindgen_undefined_new() { return addHeapObject(undefined); }\n\nfunction __wbindgen_null_new() {\n    return addHeapObject(null);\n}\n\nfunction __wbindgen_is_null(idx) {\n    return getObject(idx) === null ? 1 : 0;\n}\n\nfunction __wbindgen_is_undefined(idx) {\n    return getObject(idx) === undefined ? 1 : 0;\n}\n\nfunction __wbindgen_boolean_new(v) {\n    return addHeapObject(v === 1);\n}\n\nfunction __wbindgen_boolean_get(i) {\n    let v = getObject(i);\n    if (typeof(v) === 'boolean') {\n        return v ? 1 : 0;\n    } else {\n        return 2;\n    }\n}\n\nfunction __wbindgen_symbol_new(ptr, len) {\n    let a;\n    if (ptr === 0) {\n        a = Symbol();\n    } else {\n        a = Symbol(getStringFromWasm(ptr, len));\n    }\n    return addHeapObject(a);\n}\n\nfunction __wbindgen_is_symbol(i) {\n    return typeof(getObject(i)) === 'symbol' ? 1 : 0;\n}\n\nconst TextEncoder = typeof self === 'object' && self.TextEncoder\n    ? self.TextEncoder\n    : __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextEncoder;\n\nlet cachedEncoder = new TextEncoder('utf-8');\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedEncoder.encode(arg);\n    const ptr = _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    return [ptr, buf.length];\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null ||\n        cachegetUint32Memory.buffer !== _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer)\n        cachegetUint32Memory = new Uint32Array(_chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    return cachegetUint32Memory;\n}\n\nfunction __wbindgen_string_get(i, len_ptr) {\n    let obj = getObject(i);\n    if (typeof(obj) !== 'string')\n        return 0;\n    const [ptr, len] = passStringToWasm(obj);\n    getUint32Memory()[len_ptr / 4] = len;\n    return ptr;\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:///./chip8.js?");

/***/ }),

/***/ "./chip8_bg.wasm":
/*!***********************!*\
  !*** ./chip8_bg.wasm ***!
  \***********************/
/*! exports provided: memory, __wbg_cpu_free, cpu_new, cpu_load_from_web, cpu_start, cpu_step, cpu_program_counter, cpu_stack_pointer, cpu_delay_timer, cpu_sound_timer, cpu_i_register, cpu_data_registers, cpu_stack, cpu_ram, cpu_get_keyboard_state, cpu_set_key_down, cpu_set_key_up, __wbg_keyboard_free, keyboard_new, keyboard_set_key_down, keyboard_set_key_up, keyboard_get_key_down, keyboard_any_keys_down, keyboard_last_key_down, keyboard_get_state, __wbindgen_malloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./chip8 */ \"./chip8.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./chip8_bg.wasm?");

/***/ }),

/***/ "./js/display.js":
/*!***********************!*\
  !*** ./js/display.js ***!
  \***********************/
/*! exports provided: Display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Display\", function() { return Display; });\nvar PIXEL_SIZE = 15;\nvar PIXEL_ON_COLOR = \"#000000\";\nvar PIXEL_OFF_COLOR = \"#FFFFFF\";\nvar Display = /** @class */ (function () {\n    function Display(width, height, canvas) {\n        this.width = width;\n        this.height = height;\n        this.pixels = [];\n        this.ctx = canvas.getContext('2d');\n        canvas.width = PIXEL_SIZE * width;\n        canvas.height = PIXEL_SIZE * height;\n        for (var i = 0, max = width * height; i < max; i++) {\n            this.pixels.push(false);\n        }\n    }\n    Display.prototype.setPixel = function (x, y) {\n        var index = this.getIndex(x, y);\n        var current = this.pixels[index];\n        if (!current) {\n            this.pixels[index] = true;\n        }\n        else {\n            this.pixels[index] = false;\n        }\n        this.drawPixel(x, y, this.pixels[index]);\n    };\n    Display.prototype.clear = function () {\n        for (var row = 0; row < this.width; row++) {\n            for (var col = 0; col < this.height; col++) {\n                var index = this.getIndex(row, col);\n                this.pixels[index] = false;\n                this.drawPixel(row, col, false);\n            }\n        }\n    };\n    Display.prototype.drawPixel = function (x, y, isOn) {\n        this.ctx.beginPath();\n        this.ctx.fillStyle = isOn\n            ? PIXEL_ON_COLOR\n            : PIXEL_OFF_COLOR;\n        this.ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);\n    };\n    Display.prototype.getIndex = function (x, y) {\n        return (y * this.width) + x;\n    };\n    return Display;\n}());\n\n\n\n//# sourceURL=webpack:///./js/display.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! exports provided: setPixel, clearScreen, getRandomSeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPixel\", function() { return setPixel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearScreen\", function() { return clearScreen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomSeed\", function() { return getRandomSeed; });\n/* harmony import */ var _chip8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chip8 */ \"./chip8.js\");\n/* harmony import */ var _chip8_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chip8_bg */ \"./chip8_bg.wasm\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./js/display.js\");\n// @ts-ignore\n\n// @ts-ignore\n\n\nvar cpu = _chip8__WEBPACK_IMPORTED_MODULE_0__[\"Cpu\"].new();\nvar canvas = document.getElementById(\"screen-canvas\");\nvar display = new _display__WEBPACK_IMPORTED_MODULE_2__[\"Display\"](64, 32, canvas);\nfunction toArray(ptr) {\n    return new Uint8Array(_chip8_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, ptr, 16);\n}\ndocument.addEventListener(\"keydown\", function (event) {\n    if (event.key == \"s\") {\n        stepCpu();\n    }\n    else {\n        cpu.set_key_down(parseInt(event.key, 16));\n    }\n});\ndocument.addEventListener(\"keyup\", function (event) {\n    cpu.set_key_up(parseInt(event.key, 16));\n});\nvar fileButton = document.getElementById(\"fileButton\");\nfileButton.onchange = function (event) {\n    var file = event.target.files[0];\n    var reader = new FileReader();\n    reader.onload = function (args) {\n        var arrayBuffer = args.target.result;\n        var fileBytes = new Uint8Array(arrayBuffer);\n        cpu.load_from_web(fileBytes);\n        console.log(\"Loaded \" + file.name);\n        display.clear();\n    };\n    reader.readAsArrayBuffer(file);\n};\nvar cpuTable = document.createElement(\"table\");\nvar cpuTableHeader = cpuTable.insertRow();\nvar cpuTableValues = cpuTable.insertRow();\nvar debugTable = {\n    table: cpuTable,\n    header: cpuTableHeader,\n    pc: cpuTableHeader.insertCell().innerHTML = \"PC\",\n    sp: cpuTableHeader.insertCell().innerHTML = \"SP\",\n    dt: cpuTableHeader.insertCell().innerHTML = \"DT\",\n    st: cpuTableHeader.insertCell().innerHTML = \"ST\",\n    kb: cpuTableHeader.insertCell().innerHTML = \"KB\",\n    values: cpuTableValues,\n    pcv: cpuTableValues.insertCell(),\n    spv: cpuTableValues.insertCell(),\n    dtv: cpuTableValues.insertCell(),\n    stv: cpuTableValues.insertCell(),\n    kbv: cpuTableValues.insertCell(),\n};\ncpuTable.cellPadding = \"5\";\ncpuTable.border = \"1px solid black\";\ndocument.body.appendChild(debugTable.table);\nvar registerTable = document.createElement(\"table\");\nvar registerNumbersRow = registerTable.insertRow();\nvar registerValuesRow = registerTable.insertRow();\nvar registerNumbers = [];\nvar registerValues = [];\nfor (var i = 0; i < 16; i++) {\n    registerNumbers[i] = registerNumbersRow.insertCell();\n    registerNumbers[i].innerHTML = \"V\" + i;\n    registerValues[i] = registerValuesRow.insertCell();\n}\nregisterTable.cellPadding = \"5\";\nregisterTable.border = \"1px solid black\";\ndocument.body.appendChild(registerTable);\nvar stackTable = document.createElement(\"table\");\nvar stackNumbersRow = stackTable.insertRow();\nvar stackValuesRow = stackTable.insertRow();\nvar stackNumbers = [];\nvar stackValues = [];\nfor (var i = 0; i < 16; i++) {\n    stackNumbers[i] = stackNumbersRow.insertCell();\n    stackNumbers[i].innerHTML = \"S\" + i;\n    stackValues[i] = stackValuesRow.insertCell();\n}\nstackTable.cellPadding = \"5\";\nstackTable.border = \"1px solid black\";\ndocument.body.appendChild(stackTable);\nvar stepButton = document.createElement(\"button\");\nstepButton.innerText = \"Step\";\nstepButton.addEventListener(\"click\", stepCpu);\ndocument.body.appendChild(stepButton);\nvar startButton = document.createElement(\"button\");\nstartButton.innerText = \"Start\";\nstartButton.addEventListener(\"click\", function () { return cpu.start(); });\nstartButton.disabled = true;\ndocument.body.appendChild(startButton);\nfunction stepCpu() {\n    cpu.step();\n}\nvar REFRESH_RATE = 100;\nfunction update() {\n    debugTable.pcv.innerHTML = cpu.program_counter().toString();\n    debugTable.spv.innerHTML = cpu.stack_pointer().toString();\n    debugTable.dtv.innerHTML = cpu.delay_timer().toString();\n    debugTable.stv.innerHTML = cpu.sound_timer().toString();\n    debugTable.kbv.innerHTML = cpu.get_keyboard_state().toString();\n    var registers = toArray(cpu.data_registers());\n    var stack = toArray(cpu.stack());\n    for (var i = 0; i < 16; i++) {\n        registerValues[i].innerHTML = registers[i].toString();\n        stackValues[i].innerHTML = stack[i].toString();\n    }\n    setTimeout(update, REFRESH_RATE);\n}\nupdate();\nfunction loop() {\n    stepCpu();\n    requestAnimationFrame(loop);\n}\n//requestAnimationFrame(loop);\nfunction setPixel(x, y) {\n    display.setPixel(x, y);\n}\nfunction clearScreen() {\n    display.clear();\n}\nvar MAX_INT = 2147483647;\nfunction getRandomSeed() {\n    return Math.floor(Math.random() * MAX_INT);\n}\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

}]);