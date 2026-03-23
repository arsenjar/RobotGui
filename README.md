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
