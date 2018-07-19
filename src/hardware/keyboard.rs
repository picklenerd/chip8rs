use wasm_bindgen::prelude::*;
use ::hardware::cpu::{ log };

#[wasm_bindgen]
pub struct Keyboard {
    state: u16,
    last_key_down: u8,
}

#[wasm_bindgen]
impl Keyboard {
    pub fn new() -> Self {
        Keyboard { 
            state: 0,
            last_key_down: 0,
        }
    }

    pub fn set_key_down(&mut self, key: u8) {
        let new_state = self.state | Keyboard::key_to_mask(key);
        self.state = new_state;
        self.last_key_down = key;
    }

    pub fn set_key_up(&mut self, key: u8) {
        self.state = self.state & (!Keyboard::key_to_mask(key));
    }

    pub fn get_key_down(&self, key: u8) -> bool {
        true
    }

    pub fn any_keys_down(&self) -> bool {
        self.state != 0
    }

    pub fn last_key_down(&self) -> u8 {
        self.last_key_down
    }

    pub fn get_state(&self) -> u16 {
        self.state
    }

    fn key_to_mask(key: u8) -> u16 {
        1u16 << (key as u16 & 0x0Fu16)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_key_to_mask() {
        assert_eq!(Keyboard::key_to_mask(0x0), 1);
        assert_eq!(Keyboard::key_to_mask(0x1), 2);
        assert_eq!(Keyboard::key_to_mask(0x2), 4);
        assert_eq!(Keyboard::key_to_mask(0xF), 32768);
    }

    #[test]
    fn test_key_presses() {
        let mut keyboard = Keyboard::new();
        keyboard.key_down(1);
        assert_eq!(2, keyboard.state);
        keyboard.key_down(2);
        assert_eq!(6, keyboard.state);
        keyboard.key_down(3);
        assert_eq!(14, keyboard.state);
        keyboard.key_up(1);
        assert_eq!(12, keyboard.state);
        keyboard.key_up(2);
        assert_eq!(8, keyboard.state);
        keyboard.key_up(3);
        assert_eq!(0, keyboard.state);
    }}
