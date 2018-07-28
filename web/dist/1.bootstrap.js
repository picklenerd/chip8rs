(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./chip8.js":
/*!******************!*\
  !*** ./chip8.js ***!
  \******************/
/*! exports provided: __wbg_log_78be5f70610a4c3a, __wbg_now_d79247c5b9feb298, __wbg_getRandomSeed_a48db48623d5ca77, __wbg_setPixel_ea3be18ac54580e6, __wbg_clearScreen_f6a6492b5970ed72, __wbg_isKeyDown_b88d15fe3f21a9a7, __wbg_getAnyKey_15a57617af813800, Cpu, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_78be5f70610a4c3a\", function() { return __wbg_log_78be5f70610a4c3a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_now_d79247c5b9feb298\", function() { return __wbg_now_d79247c5b9feb298; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomSeed_a48db48623d5ca77\", function() { return __wbg_getRandomSeed_a48db48623d5ca77; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setPixel_ea3be18ac54580e6\", function() { return __wbg_setPixel_ea3be18ac54580e6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_clearScreen_f6a6492b5970ed72\", function() { return __wbg_clearScreen_f6a6492b5970ed72; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_isKeyDown_b88d15fe3f21a9a7\", function() { return __wbg_isKeyDown_b88d15fe3f21a9a7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getAnyKey_15a57617af813800\", function() { return __wbg_getAnyKey_15a57617af813800; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cpu\", function() { return Cpu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _chip8_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chip8_bg */ \"./chip8_bg.wasm\");\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/index */ \"./js/index.js\");\n/* tslint:disable */\n\n\n\n\n\n\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction passArray8ToWasm(arg) {\n    const ptr = _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](arg.length * 1);\n    getUint8Memory().set(arg, ptr / 1);\n    return [ptr, arg.length];\n}\n\nconst __wbg_log_78be5f70610a4c3a_target = console.log;\n\nconst TextDecoder = typeof self === 'object' && self.TextDecoder\n    ? self.TextDecoder\n    : __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextDecoder;\n\nlet cachedDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_log_78be5f70610a4c3a(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    __wbg_log_78be5f70610a4c3a_target(varg0);\n}\n\nconst __wbg_now_d79247c5b9feb298_target = Date.now;\n\nfunction __wbg_now_d79247c5b9feb298() {\n    return __wbg_now_d79247c5b9feb298_target();\n}\n\nfunction __wbg_getRandomSeed_a48db48623d5ca77() {\n    return Object(_js_index__WEBPACK_IMPORTED_MODULE_1__[\"getRandomSeed\"])();\n}\n\nfunction __wbg_setPixel_ea3be18ac54580e6(arg0, arg1) {\n    Object(_js_index__WEBPACK_IMPORTED_MODULE_1__[\"setPixel\"])(arg0, arg1);\n}\n\nfunction __wbg_clearScreen_f6a6492b5970ed72() {\n    Object(_js_index__WEBPACK_IMPORTED_MODULE_1__[\"clearScreen\"])();\n}\n\nfunction __wbg_isKeyDown_b88d15fe3f21a9a7(arg0) {\n    return Object(_js_index__WEBPACK_IMPORTED_MODULE_1__[\"isKeyDown\"])(arg0) ? 1 : 0;\n}\n\nfunction __wbg_getAnyKey_15a57617af813800() {\n    return Object(_js_index__WEBPACK_IMPORTED_MODULE_1__[\"getAnyKey\"])();\n}\n/**\n*/\nclass Cpu {\n    \n    static __construct(ptr) {\n        return new Cpu(ptr);\n    }\n    \n    constructor(ptr) {\n        this.ptr = ptr;\n    }\n    \n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_cpu_free\"](ptr);\n    }\n    /**\n    * @returns {Cpu}\n    */\n    static new() {\n        return Cpu.__construct(_chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_new\"]());\n    }\n    /**\n    * @param {Uint8Array} arg0\n    * @returns {void}\n    */\n    load_from_web(arg0) {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        const [ptr0, len0] = passArray8ToWasm(arg0);\n        try {\n            return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_load_from_web\"](this.ptr, ptr0, len0);\n            \n        } finally {\n            _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr0, len0 * 1);\n            \n        }\n        \n    }\n    /**\n    * @returns {void}\n    */\n    start() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_start\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n    step() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_step\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    program_counter() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_program_counter\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    stack_pointer() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_stack_pointer\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    delay_timer() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_delay_timer\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    sound_timer() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_sound_timer\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    i_register() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_i_register\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    data_registers() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_data_registers\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    stack() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_stack\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    ram() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _chip8_bg__WEBPACK_IMPORTED_MODULE_0__[\"cpu_ram\"](this.ptr);\n    }\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:///./chip8.js?");

/***/ }),

/***/ "./chip8_bg.wasm":
/*!***********************!*\
  !*** ./chip8_bg.wasm ***!
  \***********************/
/*! exports provided: memory, __heap_base, __data_end, __rustc_debug_gdb_scripts_section__, __wbg_cpu_free, cpu_new, cpu_load_from_web, cpu_start, cpu_step, cpu_program_counter, cpu_stack_pointer, cpu_delay_timer, cpu_sound_timer, cpu_i_register, cpu_data_registers, cpu_stack, cpu_ram, __wbindgen_malloc, __wbindgen_free */
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
/*! exports provided: setPixel, clearScreen, isKeyDown, getAnyKey, getRandomSeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPixel\", function() { return setPixel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearScreen\", function() { return clearScreen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isKeyDown\", function() { return isKeyDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAnyKey\", function() { return getAnyKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomSeed\", function() { return getRandomSeed; });\n/* harmony import */ var _chip8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chip8 */ \"./chip8.js\");\n/* harmony import */ var _chip8_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chip8_bg */ \"./chip8_bg.wasm\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./js/display.js\");\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard */ \"./js/keyboard.js\");\n// @ts-ignore\n\n// @ts-ignore\n\n\n\nvar cpu = _chip8__WEBPACK_IMPORTED_MODULE_0__[\"Cpu\"].new();\nvar canvas = document.getElementById(\"screen-canvas\");\nvar display = new _display__WEBPACK_IMPORTED_MODULE_2__[\"Display\"](64, 32, canvas);\nvar keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"]();\nfunction toArray(ptr) {\n    return new Uint8Array(_chip8_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, ptr, 16);\n}\ndocument.addEventListener(\"keydown\", function (event) {\n    if (event.key == \"s\") {\n        stepCpu();\n    }\n});\nvar fileButton = document.getElementById(\"fileButton\");\nfileButton.onchange = function (event) {\n    var file = event.target.files[0];\n    var reader = new FileReader();\n    reader.onload = function (args) {\n        var arrayBuffer = args.target.result;\n        var fileBytes = new Uint8Array(arrayBuffer);\n        cpu.load_from_web(fileBytes);\n        console.log(\"Loaded \" + file.name);\n        display.clear();\n    };\n    reader.readAsArrayBuffer(file);\n};\nvar cpuTable = document.createElement(\"table\");\nvar cpuTableHeader = cpuTable.insertRow();\nvar cpuTableValues = cpuTable.insertRow();\nvar debugTable = {\n    table: cpuTable,\n    header: cpuTableHeader,\n    pc: cpuTableHeader.insertCell().innerHTML = \"PC\",\n    sp: cpuTableHeader.insertCell().innerHTML = \"SP\",\n    dt: cpuTableHeader.insertCell().innerHTML = \"DT\",\n    st: cpuTableHeader.insertCell().innerHTML = \"ST\",\n    values: cpuTableValues,\n    pcv: cpuTableValues.insertCell(),\n    spv: cpuTableValues.insertCell(),\n    dtv: cpuTableValues.insertCell(),\n    stv: cpuTableValues.insertCell(),\n};\ncpuTable.cellPadding = \"5\";\ncpuTable.border = \"1px solid black\";\ndocument.body.appendChild(debugTable.table);\nvar registerTable = document.createElement(\"table\");\nvar registerNumbersRow = registerTable.insertRow();\nvar registerValuesRow = registerTable.insertRow();\nvar registerNumbers = [];\nvar registerValues = [];\nfor (var i = 0; i < 16; i++) {\n    registerNumbers[i] = registerNumbersRow.insertCell();\n    registerNumbers[i].innerHTML = \"V\" + i;\n    registerValues[i] = registerValuesRow.insertCell();\n}\nregisterTable.cellPadding = \"5\";\nregisterTable.border = \"1px solid black\";\ndocument.body.appendChild(registerTable);\nvar stackTable = document.createElement(\"table\");\nvar stackNumbersRow = stackTable.insertRow();\nvar stackValuesRow = stackTable.insertRow();\nvar stackNumbers = [];\nvar stackValues = [];\nfor (var i = 0; i < 16; i++) {\n    stackNumbers[i] = stackNumbersRow.insertCell();\n    stackNumbers[i].innerHTML = \"S\" + i;\n    stackValues[i] = stackValuesRow.insertCell();\n}\nstackTable.cellPadding = \"5\";\nstackTable.border = \"1px solid black\";\ndocument.body.appendChild(stackTable);\nvar stepButton = document.createElement(\"button\");\nstepButton.innerText = \"Step\";\nstepButton.addEventListener(\"click\", stepCpu);\ndocument.body.appendChild(stepButton);\nvar startButton = document.createElement(\"button\");\nstartButton.innerText = \"Start\";\nstartButton.addEventListener(\"click\", startCpu);\ndocument.body.appendChild(startButton);\nfunction stepCpu() {\n    cpu.step();\n}\nvar REFRESH_RATE = 100;\nfunction update() {\n    debugTable.pcv.innerHTML = cpu.program_counter().toString();\n    debugTable.spv.innerHTML = cpu.stack_pointer().toString();\n    debugTable.dtv.innerHTML = cpu.delay_timer().toString();\n    debugTable.stv.innerHTML = cpu.sound_timer().toString();\n    var registers = toArray(cpu.data_registers());\n    var stack = toArray(cpu.stack());\n    for (var i = 0; i < 16; i++) {\n        registerValues[i].innerHTML = registers[i].toString();\n        stackValues[i].innerHTML = stack[i].toString();\n    }\n}\nconsole.log(\"asdlkhj\");\nfunction startCpu() {\n    console.log(\"oaksd\");\n    cpu.start();\n}\nfunction loop() {\n    stepCpu();\n    update();\n    requestAnimationFrame(loop);\n}\n/*\n *  Export to Rust\n */\nfunction setPixel(x, y) {\n    display.setPixel(x, y);\n}\nfunction clearScreen() {\n    display.clear();\n}\nfunction isKeyDown(key) {\n    return keyboard.isKeyDown(key);\n}\nfunction getAnyKey() {\n    return keyboard.getAnyKey();\n}\nvar MAX_INT = 2147483647;\nfunction getRandomSeed() {\n    return Math.floor(Math.random() * MAX_INT);\n}\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/keyboard.js":
/*!************************!*\
  !*** ./js/keyboard.js ***!
  \************************/
/*! exports provided: Keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Keyboard\", function() { return Keyboard; });\nvar Keyboard = /** @class */ (function () {\n    function Keyboard() {\n        this.keyStates = [];\n        for (var i = 0; i < 16; i++) {\n            this.keyStates[i] = false;\n        }\n        document.addEventListener(\"keydown\", this.onKeyDown.bind(this));\n        document.addEventListener(\"keyup\", this.onKeyUp.bind(this));\n    }\n    Keyboard.prototype.isKeyDown = function (key) {\n        if (key < 0 || key >= 16) {\n            return false;\n        }\n        return this.keyStates[key];\n    };\n    Keyboard.prototype.getAnyKey = function () {\n        for (var i = 0; i < this.keyStates.length; i++) {\n            if (this.keyStates[i]) {\n                return i;\n            }\n        }\n        return -1;\n    };\n    Keyboard.prototype.onKeyDown = function (event) {\n        this.setKeyState(parseInt(event.key), true);\n    };\n    Keyboard.prototype.onKeyUp = function (event) {\n        this.setKeyState(parseInt(event.key), false);\n    };\n    Keyboard.prototype.setKeyState = function (key, isDown) {\n        if (key < 16 && key >= 0) {\n            this.keyStates[key] = true;\n        }\n    };\n    return Keyboard;\n}());\n\n\n\n//# sourceURL=webpack:///./js/keyboard.js?");

/***/ })

}]);