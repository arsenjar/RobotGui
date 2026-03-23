# RobotGui

A lightweight browser-based control interface for a two-wheeled robot. Built with plain HTML, CSS, and JavaScript — no frameworks.

## Features

- Live video feed (MJPEG stream via Flask)
- Neon-terminal D-pad controls (FWD / BCK / LFT / RGT / STP)
- Start/Stop toggle button
- Real-time terminal log panel
- Designed for Chrome over local network (WiFi)

## Stack

| Part | Tech |
|------|------|
| Frontend | HTML + CSS + JS |
| Backend | Python / Flask |
| Video | OpenCV → MJPEG stream |
| Hardware | Raspberry Pi + PCA9685 PWM driver |

## Structure
```
RobotGui/
├── index.html   # 4-quadrant layout (video × 2, controls, terminal)
├── style.css    # grid, neon theme, terminal styles
├── script.js    # button events, log(), sendCommand()
└── server.py    # Flask server — video feed + motor API
```

## Setup
```bash
pip install flask flask-cors opencv-python
python3 server.py
```

Then open `http://<robot-ip>:8080` in Chrome.

## API Endpoints

| Method | Route | Action |
|--------|-------|--------|
| GET | `/video_feed` | MJPEG stream |
| POST | `/move/forward` | Drive forward |
| POST | `/move/backward` | Drive backward |
| POST | `/move/left` | Turn left |
| POST | `/move/right` | Turn right |
| POST | `/move/stop` | Stop motors |

## Notes

- Use Chrome — Firefox has issues with MJPEG streams
- Make sure frontend and robot are on the same WiFi network
- Change IP in `index.html` to match your robot's address
